	var app=angular.module('app',[]);
	app.controller('main',function($scope,$http){
		
		//default value
		$scope.hor=0;
		$scope.ver=5;
		$scope.color="#0f4357";
		$scope.blur=4;
		$scope.current=0;
		$scope.sty_text="";
		$scope.opacity=1;

		//Setting default background
		$scope.bg_color="#0e8dbc";
		$scope.txt_color="#ffffff";
		$scope.text="Lorem ipsum proin.."
		$scope.shadow_array=[{
			h: $scope.hor,
			v: $scope.ver,
			b: $scope.blur,
			c: $scope.color,
			o: $scope.opacity
		}];

		$scope.c_clr=function  () {
			console.log($scope.color);
			 $scope.color=$(".color").val();	
		}

		$scope.add=function (){	
		 $scope.shadow_array.push({
			h: $scope.hor,
			v: $scope.ver,
			b: $scope.blur,
			c: $scope.color,
			o: $scope.opacity
		}); 
			 $scope.current++;
		}
		$scope.delete=function(index){
			console.log($scope.current+" index"+index);
			$scope.shadow_array.splice(index, 1);
			console.log($scope.current);
			if (index <= $scope.current) {$scope.current=$scope.current-1;};
		}
		$scope.edit_gradient=function(index){
		 $scope.current=index;
		/*$scope.gen_sty();*/
		
		}
		$scope.$watch("shadow_array",function(newNames, oldNames){
				$scope.sty_text="";
			for (var i = 0; i < $scope.shadow_array.length; i++) {
				$scope.sty_text=$scope.sty_text+$scope.shadow_array[i].h+"px "+$scope.shadow_array[i].v+"px "+$scope.shadow_array[i].b+"px rgba("+parseInt($scope.shadow_array[i].c.substring(1,3),16)+","+parseInt($scope.shadow_array[i].c.substring(3,5),16)+","+parseInt($scope.shadow_array[i].c.substring(5,7),16)+","+$scope.shadow_array[i].o+"),";
			}
			$scope.sty_text=$scope.sty_text.substr(0,$scope.sty_text.length-1);
		},true);
		$scope.onKeyDown = function ($event) {
	      if ($event.shiftKey) {
		      if ($event.which==38) {
		      	$scope.shadow_array[$scope.current].v++;
		      }
		      if ($event.which==40) {
		      	$scope.shadow_array[$scope.current].v--;
		      }
		       if ($event.which==39) {
		      	$scope.shadow_array[$scope.current].h++;
		      }
		       if ($event.which==37) {
		      	$scope.shadow_array[$scope.current].h--;
		      }
	      }
	    };
	});
	app.filter("makeformat",function(){
		return function(obj) {return obj.h+"px "+obj.v+"px "+obj.b+"px ";}
	});