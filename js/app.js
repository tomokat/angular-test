var EXTRA_SMALL = 0;
var SMALL = 1;
var MEDIUM = 2;
var LARGE = 3;
var EXTRA_LARGE = 4;

var mainCtrl = function($scope) {
  $scope.orderItems = [
    {"id":7, "size":MEDIUM, "label":"Black"},
    {"id":1, "size":MEDIUM, "label":"Coffee w 2 milk"},
    {"id":2, "size":MEDIUM, "label":"Double Double"},
    {"id":3, "size":MEDIUM, "label":"Regular"},
    {"id":4, "size":MEDIUM, "label":"Steep tea w 2 milk"},
    {"id":5, "size":SMALL, "label":"Green Tea"},
    {"id":6, "size":SMALL, "label":"Regular"}
  ];

  $scope.users = [
    {"name":"Aaron", size:"M", orderItem:"Double Double", active:true},
    {"name":"Ahmed", size:"M", orderItem:"Coffee w 2 milk", active:true},
    {"name":"Arthur", size:"M", orderItem:"Regular", active:true},
    {"name":"Bryan", size:"M", orderItem:"Double Double", active:true},
    {"name":"Derek", size:"S", orderItem:"Green Tea", active:false},
    {"name":"Emil", size:"M", orderItem:"Double Double", active:true},
    {"name":"Krish", size:"M", orderItem:"Black", active:true},
    {"name":"Tomo", size:"M", orderItem:"Regular", active:true}
  ];
  $scope.today = new Date();

  $scope.toggleActive = function() {
    console.log ("toggle active is called! " + $scope.user.active);
    //$scope.user.active = !$scope.user.active;
  }
}

var userCtrl = function($scope) {
  $scope.toggleActive = function() {
    $scope.user.active = !$scope.user.active;
    $("ul").listview("refresh");
  }
}