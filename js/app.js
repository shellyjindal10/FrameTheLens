

var app = angular.module('Flickr', []);

app.controller('MainController', function($scope, $http) {
  $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2d0dca73fa32eb6ab7c1a5f251d8e3cd&per_page=30&format=json&jsoncallback=JSON_CALLBACK&user_id=35003907@N06")
  .success(function(data){
    $scope.data = data.photos.photo;
  });
  $scope.click=function($tag){
    //alert($tag);
    $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2d0dca73fa32eb6ab7c1a5f251d8e3cd&per_page=30&format=json&jsoncallback=JSON_CALLBACK&user_id=35003907@N06&tags="+$tag)
    .success(function(data){
      $scope.data = data.photos.photo;
      console.log(data);
    });
  }
});

$(window).load(function(){
	jQuery(document).ready(function() {
		  jQuery(".ImageGallery").justifiedGallery({
		    lastRow : 'nojustify',
		    rowHeight : 300,
		    fixedHeight : true,
		    captions : false,
		    margins : 3,
		    sizeRangeSuffixes: {
		      'lt100':'_t',
		      'lt240':'_m',
		      'lt320':'_n',
		      'lt500':'',
		      'lt640':'_z',
		      'lt1024':'_b'
		    }
		  }).on('jg.complete', function () {
			   $('.ImageGallery a').swipebox();
        });
    });
})


$(function(){
	// building select menu
	$('<select />').appendTo('nav');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Choose Page...'
	}).appendTo('nav select');

	$('nav ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('nav select');

	});

	// on clicking on link
	$('nav select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
});

// show and hide sub menu
$(function(){
	$('nav ul li').hover(
		function () {
			//show its submenu
			$('ul', this).slideDown(150);
		},
		function () {
			//hide its submenu
			$('ul', this).slideUp(150);
		}
	);
});
