var myApp = angular.module('myApp', []);
myApp
  .controller('myController', function($scope) {
  $scope.getValue = function(a, b) {
    $scope.min = a;
    $scope.max = b;
  }
  $scope.min = 0;
  $scope.max = 100;
})
.directive('filterSlider', ['$filter', '$rootScope', '$timeout', '$q',function($filter, $rootScope, $timeout, $q) {
  return {
    template: '<div class="slider-bar"><div class="selected"></div><span class="slider-bar-selector min" id="priceMin"></span><span class="slider-bar-selector max" id="priceMax"></span><div ng-transclude></div></div>',
    scope: {
      min: '=',
      max: '=',
      unit: '=?',
      getValues: '&'
    },
    restrict: 'E',
    replace: true,
    transclude: true,
    controller: ['$scope', '$element',
                 function($scope, $element) {
                   var min = $element.find('span')[0],
                       max = $element.find('span')[1],
                       dragPos = {},
                       leftOrRight,
                       activeElem,
                       minDragPos, limitXMin, limitXMax,
                       minVal, maxVal, diffVal,
                       minDefer = $q.defer(),
                       maxDefer = $q.defer(),
                       promises = [minDefer.promise, maxDefer.promise];

                   function setInitValsFn(e) {
                     $scope.$$postDigest(function() {
                       minDragPos = min.getBoundingClientRect().left;
                       limitXMin = min.offsetLeft;
                       limitXMax = max.offsetLeft;
                     });
                   }

                   function onMinDragStartFn(e) {
                     leftOrRight = "left";
                     activeElem = min;
                   }

                   function onMaxDragStartFn(e) {
                     leftOrRight = "right";
                     activeElem = max;
                   }

                   function onDragFn(e, clientX) {
                     if (activeElem) {
                       e.preventDefault();
                       dragPos.left = max.offsetLeft - 15 > clientX - minDragPos ? clientX - minDragPos : max.offsetLeft - 15;
                       dragPos.right = min.offsetLeft + 30 < clientX - minDragPos ? minDragPos + $element[0].scrollWidth - clientX : limitXMax - min.offsetLeft - 15;
                       dragPos[leftOrRight] = dragPos[leftOrRight] > 0 ? dragPos[leftOrRight] : 0;
                       activeElem.style[leftOrRight] = dragPos[leftOrRight] + "px";
                       $element.find('div')[0].style[leftOrRight] = activeElem.style[leftOrRight];
                       if ($scope.unit && Array.isArray($scope.unit)) {
                         getUnitArrValFn(dragPos.left, dragPos.right);
                       } else if ($scope.unit && !Array.isArray($scope.unit)) {
                         getUnitValFn(dragPos.left, dragPos.right);
                       } else {
                         getValFn(dragPos.left, dragPos.right);
                       }
                       $scope.getValues({ 'min': $scope.minValue, 'max': $scope.maxValue });
                     }
                   }

                   function getValFn(left, right) {
                     if (activeElem == min) {
                       $scope.minValue = Math.round(minVal + (diffVal * left / $element[0].scrollWidth), 2);
                     } else if (activeElem == max) {
                       $scope.maxValue = Math.round(maxVal - (diffVal * right / $element[0].scrollWidth), 2);
                     }
                     $scope.$digest();
                   }

                   function getUnitValFn(left, right) {
                     var temp, x, y = minVal,
                         unit = Math.floor(diffVal / $scope.unit, 1),
                         unitArr = [];
                     for (var i = 0; i < $scope.unit + 1; i++) {
                       unitArr.push(y);
                       y += unit;
                     }
                     unitArr[0] = minVal;
                     unitArr[$scope.unit] = maxVal;
                     if (left >= 0 && activeElem == min) {
                       x = 0;
                       temp = Math.round(minVal + (diffVal * left / $element[0].scrollWidth), 1);
                       while (temp > unitArr[x]) {
                         $scope.minValue = unitArr[x];
                         x++;
                       }
                     } else if (right >= 0 && activeElem == max) {
                       x = $scope.unit;
                       temp = Math.round(maxVal - (diffVal * right / $element[0].scrollWidth), 1);
                       while (temp < unitArr[x]) {
                         $scope.maxValue = unitArr[x];
                         x--;
                       }
                     }
                     $scope.$digest();
                   }

                   function getUnitArrValFn(left, right) {
                     var temp, x, y = minVal,
                         unit = Math.floor(diffVal / ($scope.unit.length + 2), 1),
                         unitArr = [minVal];
                     for (var i = 0; i < $scope.unit.length; i++) {
                       unitArr.push($scope.unit[i]);
                     }
                     unitArr.push(maxVal);
                     if (left >= 0 && activeElem == min) {
                       x = 0;
                       temp = Math.round(minVal + (diffVal * left / $element[0].scrollWidth), 1);
                       while (temp > unitArr[x]) {
                         $scope.minValue = unitArr[x];
                         x++;
                       }
                     } else if (right >= 0 && activeElem == max) {
                       x = unitArr.length - 1;
                       temp = Math.round(maxVal - (diffVal * right / $element[0].scrollWidth), 1);
                       while (temp < unitArr[x]) {
                         $scope.maxValue = unitArr[x];
                         x--;
                       }
                     }
                     $scope.$digest();
                   }

                   function onDragEndFn() {
                     dragPos[leftOrRight] = undefined;
                     leftOrRight = undefined;
                     activeElem = undefined;
                   }

                   function initFn() {
                     $scope.minValue = $scope.min;
                     $scope.maxValue = $scope.max;
                     minVal = $scope.min;
                     maxVal = $scope.max;
                     diffVal = maxVal - minVal;
                     $scope.getValues({ 'min': $scope.minValue, 'max': $scope.maxValue });
                   }
                   $scope.unit = Array.isArray($scope.unit) || !isNaN($scope.unit) ? $scope.unit : false;


                   function attachEventsFn() {
                     min.addEventListener('mousedown', onMinDragStartFn);
                     max.addEventListener('mousedown', onMaxDragStartFn);
                     min.addEventListener('touchstart', onMinDragStartFn);
                     max.addEventListener('touchstart', onMaxDragStartFn);

                     document.addEventListener('mousemove', function(e) {
                       onDragFn(e, e.clientX);
                     });
                     document.addEventListener('touchmove', function(e) {
                       onDragFn(e, e.touches[0].clientX);
                     });

                     document.addEventListener('mouseup', function(e) {
                       $timeout(function() {
                         onDragEndFn();
                       });
                     });
                     document.addEventListener('touchend', function(e) {
                       $timeout(function() {
                         onDragEndFn();
                       });
                     });
                     document.addEventListener('mouseout', function(evt) {
                       if (evt.toElement == null && evt.relatedTarget == null) {
                         onDragEndFn(evt);
                       }
                     });
                   }

                   $scope.$watch('min', function(min) {
                     if (min !== undefined) {
                       minDefer.resolve();
                     }
                   });

                   $scope.$watch('max', function(max) {
                     if (max !== undefined) {
                       maxDefer.resolve();
                     }
                   });

                   $q.all(promises).then(function() {
                     attachEventsFn();
                     setInitValsFn();
                     initFn();
                   });
                   window.addEventListener('resize', setInitValsFn);
                 }
                ],
    link: function postLink(scope, element, attrs) {}
  };
}]);