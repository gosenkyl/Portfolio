var initMap = function(){
    var dublin = {lat: 40.099539, lng: -83.113797};
    var saginaw = {lat: 43.480049, lng: -83.975447};
    var eastLansing = {lat: 42.725733, lng: -84.484837};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: dublin
    });

    var icons = {
      home: "public/images/home.svg",
      currentPlace: "public/images/place.svg",
      education: "public/images/education.svg"
    };

    var marker = new google.maps.Marker({position: dublin, icon: icons.currentPlace, map: map});
    var marker2 = new google.maps.Marker({position: saginaw, icon: icons.home, map: map});
    var marker3 = new google.maps.Marker({position: eastLansing, icon: icons.education, map: map});

};