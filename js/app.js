

var app = angular.module('Flickr', []);

app.controller('MainController', function($scope, $http) {
  $scope.tag = window.location.hash.substr(1)||'';
  if ( $scope.tag === '') {
  $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=aae18bcf64dcd5a3795f9a2fc768b2c0&per_page=30&format=json&jsoncallback=JSON_CALLBACK&user_id=132753382@N04")
  .success(function(data){
    $scope.data = data.photos.photo;
  });
   }
   else {
     $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=aae18bcf64dcd5a3795f9a2fc768b2c0&per_page=30&format=json&jsoncallback=JSON_CALLBACK&user_id=132753382@N04&tags="+$scope.tag)
     .success(function(data){
       $scope.data = data.photos.photo;
     });
   }
  $scope.click=function($tag){
    $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=aae18bcf64dcd5a3795f9a2fc768b2c0&per_page=30&format=json&jsoncallback=JSON_CALLBACK&user_id=132753382@N04&tags="+$tag)
    .success(function(data){
      $scope.data = data.photos.photo;
    });
  };
  $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
  update_justified_gallery();
  });
});

app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});


  function update_justified_gallery(){
		  jQuery(".ImageGallery").justifiedGallery({
		    lastRow : 'justify',
		    rowHeight : 300,
		    fixedHeight : false,
		    captions : false,
		    margins : 3,
        randomize: true,
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
  }


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
