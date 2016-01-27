'use strict';

UniUI.dialog = function(elem, options, popover_options) {

    if (!elem || !$.isFunction($.fn.popover)) {
        throw new Error('Vazco.dialog requires Bootstrap popover.js and two atributes');
    }

    var contentHTML = '<div class="clearfix">';
    for (var action in options.actions) {
        contentHTML += '<button class="btn btn-xs btn-default ays-' + action + ' pull-left">' + options.actions[action].title + '</button>';
    }
    contentHTML += '</div>';

    popover_options = _.extend({
        html : true,
        content: contentHTML
    }, popover_options);

    $(elem).popover(popover_options);

    $(elem).popover('show');

    _.each(options.actions, function(action, key) {
        $('.ays-' + key).on('click', function() {
            $(elem).popover('destroy');
            action.callback();
        });
    });

    $(elem).on('hidden.bs.popover', function(){
        $(elem).popover('destroy');
    });
};

// UniUI.dialog = function(elem, options, popover_options){
//     console.warn('Vazco.dialog is deprecated!, please use UniUI.dialog instead.');
//     UniUI.dialog(elem, options, popover_options);
// };
