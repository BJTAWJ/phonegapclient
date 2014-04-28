  var Appli = {
	  accelerometer			: null
	, watchIdAccelerometer	: null
	, init	: function(options) {
		 this.startWatchAccelerometer( { frequency: 100 } );
		}
	, startWatchAccelerometer	: function(options) {
		 var self = this;
         this.watchID = navigator.accelerometer.watchAcceleration(
			  function(acc) {self.onSuccessAccelerometer(acc);}
			, function(err) {self.onErrorAccelerometer(err);}
			, options);
		}
	, stopWatchAccelerometer	: function() {
         if (this.watchID) {
             navigator.accelerometer.clearWatch(this.watchID);
             this.watchID = null;
			}
		}
	, onSuccessAccelerometer	: function(acc) {
		 this.accelerometer = acc;
			var acceleration = acc;
			var X = document.getElementById("valeurX");
			var Y = document.getElementById("valeurY");
			var Z = document.getElementById("valeurZ");

			X.innerHTML ='valeur de X : ' + acceleration.x;
			Y.innerHTML ='valeur de Y : ' + acceleration.y;	   
			Z.innerHTML ='valeur de Z : ' + acceleration.z;
		}
	, onErrorAccelerometer		: function(err) {
		 alert('error in accelerometer initialization :', err);
		}
}; 
  
  document.addEventListener("deviceready", function() {Appli.init();}, false);
  document.addEventListener("deviceready", onDeviceReady, false);

    var watchID = null;

    // PhoneGap est prêt
    //
    function onDeviceReady() {
        // Interrogation toutes les 3 secondes
        var options = { frequency: 3000 };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    // Fonction de callback onSuccess
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude : '  + position.coords.latitude      + '<br />' +
                            'Longitude : ' + position.coords.longitude     + '<br />' ;
    }

    // Fonction de callback onError, reçoit un objet PositionError
    //
    function onError(error) {
      alert('code : '    + error.code    + '\n' +
            'message : ' + error.message + '\n');
    }










/*
var Appli = {
	 Geolocation = null
	,watchIdGeolocation  = null
	,init : function(options) {
		 this.startWatchGeolocation( { frequency: 3000 } );
		}
	,startWatchGeolocation  :   function (options) {
		var self = this;
	         this.watchID = navigator.geolocation.watchPosition(
			  function(pos) {self.onSuccessGeolocation(pos);}
			, function(err) {self.onErrorGeolocation(err);}
			, options);
	}	
	
	,stopWatchPosition	: function() {
	 if (this.watchID != null) {
		 navigator.Geolocation.clearWatch(this.watchID);
		 this.watchID = null;
		}
	}
	,onSuccessGeolocation	: function(pos) {
	 this.geolocation = pos;
		var position = pos;
		var Latitude = document.getElementById("Latitude");
		var Longitude = document.getElementById("Longitude");

		X.innerHTML ='valeur de X : ' + position.coords.latitude;
		Y.innerHTML ='valeur de Y : ' + position.coords.longitude;	   

	}
, onErrorGeolocation		: function(err) {
	 alert('error in geolocation initialization :', err);
	}
}; 
	
	document.addEventListener("deviceready", function() {Appli.init();}, false);
*/
 
