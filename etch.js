$(document).ready(function(){
	var grid = function(heightWidth){
	for(var i=1;i<=heightWidth;i++){
		$('#container').append('<div class="row"></div>');};
	for(var j=1;j<=heightWidth;j++){
		$('.row').append('<div class="tableData"></div>')
		};
	};
	grid(16);
	$('button').click(function(){
		$('#container').empty();
		grid(prompt("What would you like for the height and width to be?"));
		colorize();
	});
	var colorize = function(){
		$('.tableData').on('mouseenter', function(){
			$(this).css('background', 'blue');
		});
	};
	colorize();
});

