/// <reference path="../angular.js" />

angular.module("usitrip")
    .controller("tripItemListCtrl", function ($scope, $filter) {

        var selectedCategory = "北美旅游";

        $scope.selectCategory = function (newCategory) {
            $scope.test = newCategory;
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function (item) {
            return selectedCategory == null ||
                item.category == selectedCategory;
        }
})
   .controller("selfListCtrl", function ($scope, $filter) {

        var selectedCategory = "国内自驾";
        

        $scope.selectCategory = function (newCategory) {
            $scope.test = newCategory;
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function (item) {
            return selectedCategory == null ||
                item.category == selectedCategory;
        }

        $scope.select = function (itemTitle){
           $scope.index = itemTitle;
        }

        $scope.release = function (){
            $scope.index = null;
        }
})
   .controller("ItemListCtrl", function ($scope, $filter) {

        var selectedCategory = "北美洲";
        
        $scope.selector = null;
        $scope.selectCategory = function (newCategory) {
            $scope.test = newCategory;
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function (item) {
            return selectedCategory == null ||
                item.category == selectedCategory;
        }


        $scope.selectHover = function (number){
            $scope.selector = number;
        }

        $scope.release = function (){
            $scope.selector = null;
        }
});


