//Funcoes dos botoes para alternar a visibilidade do Menu no mobile
$("#btn_open").click(()=>{
    $("#menu_list").toggleClass("active")
})

$("#close_menu").click(()=>{
    $("#menu_list").removeClass("active")
})

//Funcoes para alternar as paginas do site
$(".nav_item").click(function(){
    $(".nav_item").removeClass("active")
    $(this).toggleClass("active")
})