$('.collapse-coment-avalia').collapse({
    toggle: false
})

// inicia os tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


// popovers
$(function () {
    $('[data-toggle="popover"]').popover()
});





$('.modal').on('shown', function () {
    $("body").css("overflow", "hidden");
});

$('.modal').on('hidden', function () {
    $("body").css("overflow", "visible");
});

$('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});

// Faz o back do browser fechar o modal
$(".modal").on("shown.bs.modal", function () { // any time a modal is shown
    var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
    history.pushState(null, null, urlReplace); // push state that hash into the url
});

// If a pushstate has previously happened and the back button is clicked, hide any modals.
$(window).on('popstate', function () {
    $(".modal").modal('hide');
});

