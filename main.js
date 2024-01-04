$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('linha-atravessada');
    });
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<p>${tarefaNova}<p/>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa-nova').val('');
    })
})