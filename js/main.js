angular.module('hetesApp', [])
.controller('mainController', function($scope) {
function generate(ga,gr,gn) {
	$scope.table = [];
	var my_array  = [];
	var my_arr1  = [];
	var smsto = 'LS';
	for (i = 0; i < ga; i++) { 
		my_array[i] = i + 1; 
	}
	for (k = 0; k < gr; k++) { 	
		for (j = 0; j < gn; j++) {
			var a;
			a = 1 + Math.floor(Math.random() * my_array.length - 1);
			my_arr1[j] = my_array.splice(a,1);
		}
		my_arr1.sort(function(a, b){return a-b});
		$scope.table.push({
			"osz0":parseInt(my_arr1[0]),
			"osz1":parseInt(my_arr1[1]),
			"osz2":parseInt(my_arr1[2]),
			"osz3":parseInt(my_arr1[3]),
			"osz4":parseInt(my_arr1[4]),
			"osz5":parseInt(my_arr1[5]),
			"osz6":parseInt(my_arr1[6])
		});	
		smsto += '$'+parseInt(my_arr1[0]);
		smsto += '$'+parseInt(my_arr1[1]);
		smsto += '$'+parseInt(my_arr1[2]);
		smsto += '$'+parseInt(my_arr1[3]);
		smsto += '$'+parseInt(my_arr1[4]);
		smsto += '$'+parseInt(my_arr1[5]);
		smsto += '$'+parseInt(my_arr1[6]);
		if (k != gr-1) {
			smsto += '$';
		}
	}
	//console.log (smsto);
	$scope.sms_to = {text: smsto};
}
$scope.hetes = function() {
	generate(35,5,7);
}
$scope.sendSms = function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        //alert(number);
        //alert(message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

        var success = function () { /* alert('Message sent successfully');*/ };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);

    }
$scope.exitApp = function() {
	navigator.app.exitApp();
}
generate(35,5,7);
});





