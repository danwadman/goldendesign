//function to load in header and nav
$(document).ready(function(){
    $('#header').load('./header.html');
    $('#nav').load('./nav.html');
});







//function to add folderdesk images + add small class
var folderdesk = "images/officedesk/";

$.ajax({
    url : folderdesk,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".gallery_officedesk").append( "<img src='"+ folderdesk + val +"'>" );        
            } 
        });
        
        $(document).ready(function(){
    setTimeout(function(){
        $('img:not("#header_logo"):not("#ignore")').addClass("small");
    });
}, 50);
    }
});









//function to add device images + add small class
var folderdevices = "images/devices/";

$.ajax({
    url : folderdevices,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".gallery_devices").append( "<img src='"+ folderdevices + val +"'>" );        
            } 
        });
        
        $(document).ready(function(){
    setTimeout(function(){
        $('img:not("#header_logo"):not("#ignore")').addClass("small");
    });
}, 50);
    }
});









//function to add orangetheme images + add small class
var folderorangetheme = "images/orangetheme/";

$.ajax({
    url : folderorangetheme,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".gallery_orangetheme").append( "<img src='"+ folderorangetheme + val +"'>" );        
            } 
        });
        
        $(document).ready(function(){
    setTimeout(function(){
        $('img:not("#header_logo"):not("#ignore")').addClass("small");
    });
}, 50);
    }
});








//function to add youngteamwork images + add small class
var folderyoungteamwork = "images/youngteamwork/";

$.ajax({
    url : folderyoungteamwork,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".gallery_youngteamwork").append( "<img src='"+ folderyoungteamwork + val +"'>" );        
            } 
        });
        
        $(document).ready(function(){
    setTimeout(function(){
        $('img:not("#header_logo"):not("#ignore")').addClass("small");
    });
}, 50);
    }
});










//function to add general images + add small class
var foldergeneral = "images/";

$.ajax({
    url : foldergeneral,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".gallery_general").append( "<img src='"+ foldergeneral + val +"'>" );        
            } 
        });
        
      $(document).ready(function(){
    setTimeout(function(){
        $('img:not("#header_logo"):not("#ignore")').addClass("small"); 
    });
}, 50);  
    }
});









//function to add links around images
setTimeout(function(){
    $(document).ready(function() {

        $('img:not("#header_logo")').each(function ()
                      {
            var currentImage = $(this);
            currentImage.wrap("<a href='" + currentImage.attr("src") + "' target='blank' </a>");
        });
    });
}, 1000);







//Back to top button
//Get the button
var mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backtotop").style.display = "block";
  } else {
    document.getElementById("backtotop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {    
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


