/**
 * Logica di gestione menu azioni form Portale Fornitori Gi Group
 */
/* Gestione apertura-chiusura menu */
var timer = null;
$("#actions_button").click(function() {	
    if($("#actions_button").hasClass("actions-closed")) {
    	clearTimeout(timer);
    	$("#actions_list").fadeIn(500);
        $("#actions_button").removeClass("actions-closed").addClass("actions-open");
        $("#actions_list").css('visibility','visible').addClass("list_open");
        $(".actions_tooltip").css('visibility','visible').addClass("tooltip_visible");
    }
    else {
        if($("#actions_button").hasClass("actions-open")) {
            $("#actions_button").removeClass("actions-open").addClass("actions-closed");
            $("#actions_list").css('visibility','hidden').removeClass("list_open");
            $(".actions_tooltip").css('visibility','hidden').removeClass("tooltip_visible");
            timer = setTimeout(function() {
    		   $("#actions_list").hide();
    		}, 500);
        }
    }
    $("#actions_button, .form_menu_button").blur();
});
/*Rimozione focus per effetto hover*/
$(".form_menu_button").click(function() {
	 $(".form_menu_button").blur();
});
/* Gestione bottone back-to-top */
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if(y > 130) {
		$("#back_to_top").css('visibility', 'visible');
		$("#back_to_top").addClass("show_back_to_top");
	}
	else {
		$("#back_to_top").css('visibility', 'hidden');
		$("#back_to_top").removeClass("show_back_to_top");
	}
});
$("#back_to_top").click(function() {
	$("html, body").animate({ scrollTop: 0 });
});

//Tooltip highlight
$(".has_tooltip").hover(function(event) {
	$("#" + event.currentTarget.id + "_tooltip").addClass("tooltip_highlight");
});
	
$(".has_tooltip").focusin(function(event) {
	$("#" + event.currentTarget.id + "_tooltip").addClass("tooltip_highlight");
});

$(".has_tooltip").mouseleave(function(event) {
	$("#" + event.currentTarget.id + "_tooltip").removeClass("tooltip_highlight");
});
	
$(".has_tooltip").focusout(function(event) {
	$("#" + event.currentTarget.id + "_tooltip").removeClass("tooltip_highlight");
});

