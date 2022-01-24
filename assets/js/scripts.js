$(function () {
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
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

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

    $('.js-submit-banned').on('click', function () {
        const messageId = $(this).data('messageId');
        $(`.${ messageId }.js-submit-form-banned`).toggleClass('d-none');
        $(`.${ messageId }.js-submit-banned`).toggleClass('d-none');
    });
    $('.js-cancel-banned').on('click', function (e){
        e.preventDefault();
        const messageId = $(this).data('messageId');
        $(`.${ messageId }.js-submit-form-banned`).toggleClass('d-none');
        $(`.${ messageId }.js-submit-banned`).toggleClass('d-none');
    });

    $('.js-validate-report').on('click', function (e){
        e.preventDefault();

        let reportId = $(this).data('reportId');

        $.ajax({
            url: Routing.generate('valid', {reportId}),
            type: 'POST',
            success: function (data) {
                if (!data.error) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    let element = $(`.js-report-${ reportId }`);
                    element.fadeOut( 1000, function() {
                        element.remove();
                    });

                }
            },
            error: function () {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Une erreur est survenue !',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });

    });

    $('.js-submit-form-banned').on('submit', function (e) {
        e.preventDefault();
        let formContext = $(this);
        const messageId = formContext.data('messageId');

        let data = {};
        data.messageId = messageId;

        if (
            formContext.find(`.email.${messageId}`)
            && formContext.find(`.email.${messageId}`).val()
            && formContext.find(`.email.${messageId}`).is(':checked')
        ) {
            data.email = formContext.find(`.email.${messageId}`).val();
        }
        if (
            formContext.find(`.snap.${messageId}`)
            && formContext.find(`.snap.${messageId}`).val()
            && formContext.find(`.snap.${messageId}`).is(':checked')
        ) {
            data.snap = formContext.find(`.snap.${messageId}`).val();
        }
        if (
            formContext.find(`.messenger.${messageId}`)
            && formContext.find(`.messenger.${messageId}`).val()
            && formContext.find(`.messenger.${messageId}`).is(':checked')
        ) {
            data.messenger = formContext.find(`.messenger.${messageId}`).val();
        }
        if (
            formContext.find(`.insta.${messageId}`)
            && formContext.find(`.insta.${messageId}`).val()
            && formContext.find(`.insta.${messageId}`).is(':checked')
        ) {
            data.insta = formContext.find(`.insta.${messageId}`).val();
        }

        if (
            formContext.find(`.comment.${messageId}`)
            && formContext.find(`.comment.${messageId}`).val()
        ) {
            data.comment = formContext.find(`.comment.${messageId}`).val();
        }

        if (
            formContext.find(`.reportId.${messageId}`)
            && formContext.find(`.reportId.${messageId}`).val()
        ) {
            data.reportId = parseInt(formContext.find(`.reportId.${messageId}`).val());
        }

        $.ajax({
            url: Routing.generate('banned', data),
            type: 'POST',
            success: function (data) {
                if (!data.error) {
                    $(`.${ messageId }.js-submit-form-banned`).toggleClass('d-none');
                    $(`.${ messageId }.js-submit-banned`).toggleClass('d-none');

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            },
            error: function () {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Une erreur est survenue !',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    });
});
