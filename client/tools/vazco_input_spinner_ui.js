/*

    simple jQuery plugin that imitates number field (because number input is ugly and looks diferent in browsers)
    usage:

    {{> vazcoSpinnerInput step="1" timelogId=this._id name="" value=time class="timelog-time-input"}}


*/

Template.vazcoSpinnerInput.events({
    'focus .vazco-input-spinner-value': function (e, tmpl) {
        e.preventDefault();
        $(e.target).addClass('focused');
        $('html').on('click', function () {
            tmpl.$('.vazco-input-spinner').find('input').removeClass('focused');
        });
    },
    'keydown .vazco-input-spinner-value': function (e, tmpl) {
        if (e.keyCode === 38) {
            e.preventDefault();
            tmpl.$('.vazco-input-spinner').find('.up-arrow').trigger('click');
            $(e.target).focus();
        }
        else if (e.keyCode === 40) {
            e.preventDefault();
            $(e.target).closest('.vazco-input-spinner').find('.down-arrow').trigger('click');
            $(e.target).focus();
        }
        else if (e.keyCode === 13) {
            e.preventDefault();
            var input = tmpl.$('.vazco-input-spinner').find('input');
            input.removeClass('focused');
            input.trigger('blur');
        }
    },
    'click .up-arrow': function (e, tmpl) {
        var input = tmpl.$('.vazco-input-spinner').find('input');
        var step = tmpl.$('.vazco-input-spinner').data('step') || 0.25;
        input.val(parseFloat(input.val()) + step);
        input.trigger('blur');
    },
    'click .down-arrow': function (e, tmpl) {
        var input = tmpl.$('.vazco-input-spinner').find('input');
        var step = tmpl.$('.vazco-input-spinner').data('step') || 0.25,
            positive = tmpl.$('.vazco-input-spinner').data('step') || true;
        if (!positive) {
            input.val(parseFloat(input.val()) - step);
        } else if ((input.val() - step) >= 0) {
            input.val(parseFloat(input.val()) - step);
        }
        input.trigger('blur');
    },
    'click .vazco-input-spinner': function (e) {
        e.stopPropagation();
    }
});