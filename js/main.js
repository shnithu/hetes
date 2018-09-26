angular.module('hetesApp', [])
.controller('mainController', function($scope) {
	$scope.cnt = 0;
	$scope.hay = false;
function generate(ga,gr,gn) {
	
	$scope.table = [];
	var my_array  = [];
	var my_arr1  = [];
	
	for (i = 0; i < ga; i++) { 
		my_array[i] = i + 1; 
	}
	for (k = 0; k < gr; k++) { 	
		for (j = 0; j < gn; j++) {
			var a;
			a = 1 + Math.floor(Math.random() * my_array.length - 1);
			my_arr1[j] = my_array.splice(a,1);
		}
		my_arr1.sort(function(x, y){return x-y});
		
		$scope.table.push({
			"osz0":parseInt(my_arr1[0]),
			"osz1":parseInt(my_arr1[1]),
			"osz2":parseInt(my_arr1[2]),
			"osz3":parseInt(my_arr1[3]),
			"osz4":parseInt(my_arr1[4]),
			"osz5":parseInt(my_arr1[5]),
			"osz6":parseInt(my_arr1[6])
		});	
		if ( (parseInt(my_arr1[0]) == 4 && parseInt(my_arr1[1]) == 7 && parseInt(my_arr1[2]) == 11 && parseInt(my_arr1[3]) == 16 && parseInt(my_arr1[4]) == 18 && parseInt(my_arr1[5]) == 25 && parseInt(my_arr1[6]) == 28) || (parseInt(my_arr1[0]) == 6 && parseInt(my_arr1[1]) == 7 && parseInt(my_arr1[2]) == 8 && parseInt(my_arr1[3]) == 24 && parseInt(my_arr1[4]) == 26 && parseInt(my_arr1[5]) == 29 && parseInt(my_arr1[6]) == 34) ) {
			$scope.hay = true;
		}
	}
	if ($scope.hay == false) {
		$scope.cnt++;
	}

}

while ($scope.cnt < 10000000) {
    generate(45,5,7);
	if ($scope.hay == true) { break; }
    //i++;
}
//generate(14,5,7);

});





