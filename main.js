$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#CPF').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#CEP').mask('00000-000', {
        placeholder: '_____-___'
    })

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
            CPF: {
                required: true
            },
            endereço: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu número de telefone',
            CPF: 'Por favor, insira um CPF válido',
            endereço: 'Por favor, insira um endereço',
            CEP: 'Por favor, insira um CEP válido'
        }
    })
})