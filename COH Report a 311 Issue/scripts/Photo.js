
function addImage(){
            var everliveApiKey = "4ud6CtLL0aBS5KD5";
            var everliveScheme = 'https';

            var everlive = new Everlive({
                apiKey: everliveApiKey,
                scheme: everliveScheme
            });

             function onPictureSuccess(imageData) {
                var file = {
                    Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
                    ContentType: "image/jpeg",
                    base64: imageData,
                };

                everlive.Files.create(file, function(response) {
                    fileUri = response.result.Uri;
				
                   // var imgEl = document.createElement("img");
                   // imgEl.setAttribute('src', fileUri);
                   // imgEl.style.position = "absolute";
                    //document.body.appendChild(imgEl);
                }, function(err) {
                    navigator.notification.alert("Unfortunately the upload failed: " + err.message);
                });
            };
          function onPictureError() {
                navigator.notification.alert("Camera closed- you did not attach a photo.");
            };
            var cameraConfig = {
                destinationType: Camera.DestinationType.DATA_URL,
                targetWidth: 400,
                targetHeight: 300,
                correctOrientation: true
            };
           navigator.camera.getPicture(onPictureSuccess, onPictureError, cameraConfig);
};
  
