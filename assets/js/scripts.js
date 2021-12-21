$(function () {
    console.log('je passe la partie javascript')
    let input_select2 = $('.js-select2');
    input_select2.select2({
        allowClear: true,
        placeholder: input_select2.attr('placeholder'),
    });

    $('.js-button-upload-file, .js-submit-with-confirmation').on('click', function (e) {
        let form = $(this).closest('form');

        let data = $(this).data('type');

        e.preventDefault();
        Swal.fire({
            title: 'Voulez-vous bien continuer ?',
            icon: 'question',
            iconHtml: '?',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non',
            showCancelButton: true,
            showCloseButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                if (data) {
                    $('.js-' + data).trigger('click');
                } else {
                    form.trigger('submit');
                }
            }
        })
    });

    $('form.js-form').submit(function (e) {
        let formContext = $(this);
        let data = formContext.serializeArray();
        e.preventDefault();

        Swal.fire({
            title: 'vous voulez bien continuer ?',
            icon: 'question',
            iconHtml: '?',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non',
            showCancelButton: true,
            showCloseButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                if (data && data[0] && data[0].value) {
                    if (data && data[0] && data[0].name) {
                        if (data[0].name === 'unlimited') {
                            generateUrl(formContext, data, '.js-spinner')
                        }
                        if (data[0].name === 'paid') {
                            generateUrl(formContext, data, '.js-spinner')
                        }
                        if (data[0].name === 'reinitialiser') {
                            reinitialiser(formContext, data[0], '.js-spinner')
                        }
                    }
                } else if (data && data[0] && !data[0].value) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Vous devez renseignez un nombre'
                    })
                }
            }
        })

    });

    function generateUrl(context, datas, className) {
        let element = context.find(className);
        let form = context;

        const data = datas[0];
        let type = data.name;
        let value = data.value;

        const category = datas[1] ? datas[1].value : null;


        element.html(`
         <div class="spinner-border text-primary" role="status">
         </div>
    `);

        $.ajax({
            url: Routing.generate('generate_url', {'limit': value, 'type': type, 'category': category}),
            type: 'POST',
            success: function (data) {
                if (data.error === false) {
                    element.replaceWith(
                        `
                    <div class="alert alert-info js-spinner" role="alert">
                      <i class="far fa-check-circle text-success"></i>
                        ${value} Génèrer avec success
                    </div>
                  `
                    );
                } else {
                    element.replaceWith(
                        `
                    <div class="alert alert-danger js-spinner" role="alert">
                      <i class="far fa-check-circle text-danger"></i>
                        Une erreur est survenue !
                    </div>
                  `
                    );
                }
                form.trigger("reset");
            },
            error: function () {
                element.replaceWith(
                    `
                    <div class="alert alert-danger js-spinner" role="alert">
                      <i class="far fa-check-circle text-danger"></i>
                        Une erreur est survenue !
                    </div>
                  `
                );
            }
        });
    }

    function reinitialiser(context, data, className) {
        let element = context.find(className);
        let form = context;
        let type = data.name;
        let value = data.value.split(' ');



        element.html(`
         <div class="spinner-border text-primary" role="status">
         </div>
    `);

        $.ajax({
            url: Routing.generate('reset_url', {'id': value}),
            type: 'POST',
            success: function (data) {
                if (data.error === 1) {
                    element.replaceWith(
                        `
                    <div class="alert alert-info js-spinner" role="alert">
                      <i class="far fa-check-circle text-success"></i>
                        ${value} supprimés avec succés !
                    </div>
                  `
                    );
                } else {
                    element.replaceWith(
                        `
                    <div class="alert alert-danger js-spinner" role="alert">
                      <i class="far fa-check-circle text-danger"></i>
                        Une erreur est survenue !
                    </div>
                  `
                    );
                }
                form.trigger("reset");
            },
            error: function () {
                element.replaceWith(
                    `
                    <div class="alert alert-danger js-spinner" role="alert">
                      <i class="far fa-check-circle text-danger"></i>
                        Une erreur est survenue !
                    </div>
                  `
                );
            }
        });
    }

    function makeTimer(timer) {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
        var endTime = new Date(timer, );
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        if (timeLeft <= 0) {
            location.reload();
        }

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        // $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span> Heures</span>");
        $("#minutes").html(minutes + "<span> min</span>");
        $("#seconds").html(seconds + "<span> Sec</span>");

    }

    if ($('.js-timer').length) {
        let timer = $('.js-timer').data('timer');
        setInterval(function() { makeTimer(timer); }, 1000);
    }

    $('#js-change-prereglage').on('change', function (e) {
        let id = e.target.value;

        let url = $(e.target).data('url');

        if (id && url) {
            window.location.href = url + '?id=' + id;
        } else {
            window.location.href = url;
        }
    });
});
