//Check off specific todos by clicking on them Raw Js
// var lis = document.querySelectorAll("li");
// var spans = document.querySelectorAll("span");

// for(var i = 0; i < lis.length; i++){
// 	lis[i].addEventListener("click", function(){
// 		this.classList.toggle("strike");
// 	});
// }

var lis = $('li');
var spans = $('span');
var input = $('input');
var addButton = $(".fa-plus");

//Check off specific todos by clicking them using jQuery
$('ul').on("click", "li", function(){
	$(this).toggleClass("strike");
});

// toggle trashcan span when mouse is over li
spans.parent().on("mouseenter", function(){
	spans.toggleClass("hideSpan");
})
spans.parent().on("mouseleave", function(){
	spans.toggleClass("hideSpan");
})

//fade out the parent li when the trashcan span is clicked
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

input.on("keypress", function(event){
	//add input to ul
	if (event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
	}
});

addButton.on("click", function(){
	input.fadeToggle();
});


