$(function(){
    $('button.modal-launch').click(function(){
        $('.modal-overlay').addClass('shown')
    })

    $('button.modal-close, .modal-overlay').click(function(){
        $('.modal-overlay').removeClass('shown')
    })
})
