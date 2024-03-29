
$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

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
            endereço: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        mensagem: {
            required: true
        },
        veiculoDeInteresse: {
            required: false
        },
        messages: {
            nome: 'Por favor, insira seu nome.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHanler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert('Existem ${camposIncorretos} campos incorretos')
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoDeInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
