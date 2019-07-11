$(document).ready(function(){


	//Slider
	if(window.location.href.indexOf('index')>-1){
	  $('.bxslider').bxSlider(
	{
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive:true
  });
	}
//Posts
	if(window.location.href.indexOf('index')>-1){
	var posts=[
	{
	tittle:'Prueba de titulo 1',
	date:'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis vitae justo in tempor. Duis eu sem rutrum, ullamcorper dui in, sodales libero. Aenean ex orci, gravida vitae convallis id, finibus a dui. Duis ut fermentum enim. Suspendisse potenti. Quisque a consequat lectus. Quisque cursus gravida leo sit amet fringilla. Morbi consequat imperdiet eros nec volutpat. In volutpat elit ut odio hendrerit molestie. Donec varius ligula in egestas vestibulum. Praesent velit eros, vulputate non eros pharetra, scelerisque aliquet orci. Proin ut luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
	},
	{
	tittle:'Prueba de titulo 2',
	date:'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis vitae justo in tempor. Duis eu sem rutrum, ullamcorper dui in, sodales libero. Aenean ex orci, gravida vitae convallis id, finibus a dui. Duis ut fermentum enim. Suspendisse potenti. Quisque a consequat lectus. Quisque cursus gravida leo sit amet fringilla. Morbi consequat imperdiet eros nec volutpat. In volutpat elit ut odio hendrerit molestie. Donec varius ligula in egestas vestibulum. Praesent velit eros, vulputate non eros pharetra, scelerisque aliquet orci. Proin ut luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
	},
	{
	tittle:'Prueba de titulo 3',
	date:'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis vitae justo in tempor. Duis eu sem rutrum, ullamcorper dui in, sodales libero. Aenean ex orci, gravida vitae convallis id, finibus a dui. Duis ut fermentum enim. Suspendisse potenti. Quisque a consequat lectus. Quisque cursus gravida leo sit amet fringilla. Morbi consequat imperdiet eros nec volutpat. In volutpat elit ut odio hendrerit molestie. Donec varius ligula in egestas vestibulum. Praesent velit eros, vulputate non eros pharetra, scelerisque aliquet orci. Proin ut luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
	},
	{
	tittle:'Prueba de titulo 4',
	date:'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis vitae justo in tempor. Duis eu sem rutrum, ullamcorper dui in, sodales libero. Aenean ex orci, gravida vitae convallis id, finibus a dui. Duis ut fermentum enim. Suspendisse potenti. Quisque a consequat lectus. Quisque cursus gravida leo sit amet fringilla. Morbi consequat imperdiet eros nec volutpat. In volutpat elit ut odio hendrerit molestie. Donec varius ligula in egestas vestibulum. Praesent velit eros, vulputate non eros pharetra, scelerisque aliquet orci. Proin ut luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
	},
	{
	tittle:'Prueba de titulo 5',
	date:'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis vitae justo in tempor. Duis eu sem rutrum, ullamcorper dui in, sodales libero. Aenean ex orci, gravida vitae convallis id, finibus a dui. Duis ut fermentum enim. Suspendisse potenti. Quisque a consequat lectus. Quisque cursus gravida leo sit amet fringilla. Morbi consequat imperdiet eros nec volutpat. In volutpat elit ut odio hendrerit molestie. Donec varius ligula in egestas vestibulum. Praesent velit eros, vulputate non eros pharetra, scelerisque aliquet orci. Proin ut luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
	},
	];

	posts.forEach((item,index)=>{
		var post=`
		<article class="post">
				<h2>${item.tittle}</h2>
				<span class="date">${item.date}</span>
				<p>
				${item.content}
				</p>
				<a href="#" class="button-more">Leer mas</a>
			</article>
		`;
		$("#posts").append(post);
	})}


//Selector de temas
var theme= $("#theme")
$("#to-green").click(function(){
	theme.attr("href","css/green.css")
})

$("#to-red").click(function(){
	theme.attr("href","css/red.css")
})

$("#to-blue").click(function(){
	theme.attr("href","css/blue.css")
})

//scroll suave
$(".subir").click(function(e){
	e.preventDefault()
	$("html,body").animate({
		scrollTop:0
	},1000)
})

//Login falso
$("#login form").submit(function(){
	var form_name= $("#form_name").val()
	localStorage.setItem("form_name",form_name)
})

var form_name= localStorage.getItem("form_name")
if(form_name== null){
	$("#login").show()
}else{
	var about_parrafo= $("#about p")	
	var bienvenida=about_parrafo.html("Bienvenido, "+form_name)
	$("#login").hide()
	about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>")

	$("#logout").click(function(){
		localStorage.clear()
		location.reload()
	})


}

if(window.location.href.indexOf('about')> -1){
	$("#acordeon").accordion()
}

if(window.location.href.indexOf('reloj')> -1){

	setInterval(function(){
	var reloj= moment().format("h:mm:ss")
	$("#reloj").html(reloj)
	},1000)
}

//Validacion
if(window.location.href.indexOf('contact')> -1){
	$.validate({
    lang: 'es'
  });
}	




})