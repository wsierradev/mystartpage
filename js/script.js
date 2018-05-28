$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
  loadWeather(position.coords.latitude+','+position.coords.longitude)
  });
  
  dateDisplay();
});

function dateDisplay(){
  date = new Date();
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]

  $(".date").text(days[date.getDay()] + " " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
};

$(function(){
  $('.circle').click(function(){
    $('.overlay').addClass('open');
  });
	$('.circleOne').click(function(){
		$('.develop').addClass('open');
	});
	$('.circleTwo').click(function(){
		$('.social').addClass('open');
	});
	$('.circleThree').click(function(){
		$('.shop').addClass('open');
	});
	$('.circleFour').click(function(){
		$('.learn').addClass('open');
	});
	$('.circleFive').click(function(){
		$('.finance').addClass('open');
	});

  $('a').click(function(){
    $('.overlay').removeClass('open');
    $('.modal').removeClass('open');
  });
  $('.overlay').click(function(){
    $(this).removeClass('open');
    $('.modal').removeClass('open');
  });
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<p>'+weather.city+', '+weather.region+'</p>';
      html += '<p class="currently">'+weather.currently+'</p>';
      html += '<p>'+weather.alt.temp+'&deg;C</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
