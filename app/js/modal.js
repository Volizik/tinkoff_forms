$(function () {

    var modal = $('.modal-delete');

    $(document).on('click', '.modal__header>.t-delete', function () {
        modal.hide()
    });
    $(document).on('click', '.modal__footer>.cancel', function () {
        modal.hide();
    });
    $(document).on('click', '.modal__footer>.delete-btn', function () {
        modal.hide();
    });




});
