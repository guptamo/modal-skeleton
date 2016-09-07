$(function(){
    $('a.modal-launch').click(function(){
        $('.modal-overlay').addClass('shown')
    })

    $('button.modal-close').click(function(){
        $('.modal-overlay').removeClass('shown')
    })
})
