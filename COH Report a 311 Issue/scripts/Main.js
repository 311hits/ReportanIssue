        function showMap() {
            
                   navigator.geolocation.getCurrentPosition(
                   onSuccessShowMap,
                   onErrorShowMap
                             );
                           }
//////////////////////////////////////////////////////////////////////////////////////////////// 
       function onSuccessShowMap(position) {

       latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
           //alert("latlng1: "+latlng);
 
       var mapOptions = {
				sensor: true,
				center: latlng,
				panControl: false,
				zoomControl: true,
				zoom: 18,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				streetViewControl: true,
				mapTypeControl: true,
 			    draggable: true
							};
            
			    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);  

                marker = new google.maps.Marker({
                             position: latlng,
                             map: map,
                             clickable: true
                });
           
                google.maps.event.addListener(map, 'click', function( event ){
                    //alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
                    latitude = event.latLng.lat();
					longitude = event.latLng.lng();
                    latlng = (event.latLng);
                    //alert("latlng2: "+latlng);
                    marker.setMap(null);  
                    marker = new google.maps.Marker({
                                 position: latlng,
                                 map: map,
                                 clickable: true
                    });
                    map.setCenter(marker.getPosition());
                    
                    
                        geocoder = new google.maps.Geocoder;
                        infowindow = new google.maps.InfoWindow({
                                            maxWidth: 150
                                            });
                        //alert("latlng3: "+latlng);
                        geocoder.geocode({'location': latlng}, function(results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                          if (results[0]) {
                              map.setZoom(18);
                              marker.setMap(null);
                              marker = new google.maps.Marker({
                              position: latlng,
                              map: map,
                              clickable: true
                            });
                            infowindow.setContent(results[0].formatted_address);
                            infowindow.open(map, marker);
                            haddress = results[0].formatted_address
                            //alert("new haddress: "+haddress);
                          } else {
                            window.alert('No results found');
                          }
                        } else {
                          window.alert('Geocoder failed due to: ' + status);
                        }
                      });
                    
                });

					console.log(marker);
					console.log("map rendering");
           
				}
////////////////////////////////////////////////////////////////////////////////////////////////
        function onErrorShowMap(error) {
 
				       alert("error");
						     		   }
////////////////////////////////////////////////////////////////////////////////////////////////
//google.maps.event.addListener(map, 'click', function( event ){
  //alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
//});
////////////////////////////////////////////////////////////////////////////////////////////////
 function closeInfoWindow() {
        if (infowindow !== null) {
            google.maps.event.clearInstanceListeners(infowindow);  // just in case handlers continue to stick around
            infowindow.close();
            infowindow = null;
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////

    