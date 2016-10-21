(function() {
    document.addEventListener("deviceready", function () {
     var app = new kendo.mobile.Application(document.body, { skin: "nova" });
        
    });
}());

var apiKey = "4ud6ctll0abs5kd5";
      win.app.el = new Everlive({
          apiKey: apiKey,
          url: '//api.everlive.com/v2/',
          scheme: 'https'
       });


