
(function($){
	function inputImg(inputClass,imgClass){
		var imgUrl = window.URL || window.webkitURL;
		console.log('2333');
		$('.'+inputClass).change(function(e){
			var file = window.document.files[0];
			if (file) {
				var img = new Image();
				img.onload = function(){
					$('.'+imgClass).attr("src",this.src);
				};
				img.src = imgUrl.createObjectURL(file);
			}
		})
	}
})(jQuery);
