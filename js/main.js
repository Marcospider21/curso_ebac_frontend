$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12) 91234-1234'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.123.123-12'
    });
    $('#cep').mask('00000-000', {
        placeholder: '12345-123'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu cpf',
            endereco: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
            alert('Informações de cadastros enviadas.')
            $('#nome').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#cpf').val('');
            $('#endereco').val('');
            $('#cep').val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos. Cadastro não enviado.`)
            }
        }
    })
})