'use strict';

// needs bootstrap popover

// usage:
// UniUI.AreYouSure package options: [elem, function] element for bootstrap popup and delete function..
// element with standard bootstrap popover data atributes like data-title, data-placement etc.
// but no data-content - this one is configured in Vazco.AreYouSure function..
// you can also specify data-yes and data-no attributes for confirm buttons labels

// example:
// Template.TimelogListingItemDeleteBtn.events({
//     'click .delete-timelog': function(e, tmpl) {
//         e.preventDefault();

//         var elem = tmpl.find('.delete-timelog'),
//             timelogId = this._id;

//         UniUI.areYouSure(elem, function(){
//             Meteor.call('deleteTimelog', timelogId);
//         });
//     }
// });

UniUI.areYouSure = function(elem, callbacks, popover_options) {

    if(elem && $.isFunction($.fn.popover)) {
        var btnYesLabel = $(elem).data('yes') || 'Yes',
            btnNoLabel = $(elem).data('no') || 'No',
            contentHTML = '<div class="clearfix">' +
            '<button class="btn btn-xs btn-default ays-yes pull-left">' + btnYesLabel + '</button>' +
            '<button class="btn btn-xs btn-default ays-no pull-right">' + btnNoLabel + '</button>' +
            '</div>',
            onSuccess = function() {},
            onCancel = function() {};

        if (_.isFunction(callbacks)) {
            onSuccess = callbacks;
        } else if (_.isObject(callbacks)) {
            onSuccess = callbacks.onSuccess || onSuccess;
            onCancel = callbacks.onCancel || onCancel;
        }

        popover_options = _.extend({
            html : true,
            content: contentHTML
        }, popover_options);

        $(elem).popover(popover_options);

        $(elem).popover('show');

        $('.ays-yes').on('click', function() {
            onSuccess();
            $(elem).popover('destroy');
        });
        $('.ays-no').on('click', function() {
            onCancel();
            $(elem).popover('destroy');
        });

        $(elem).on('hidden.bs.popover', function(){
            $(elem).popover('destroy');
        });
    } else {
        throw new Error('Vazco.areYouSure requires Bootstrap popover.js and two atributes');
    }

};

Vazco.areYouSure = function(elem, callbacks, popover_options){
    console.warn('Vazco.areYouSure is deprecated!, please use UniUI.areYouSure instead.');
    UniUI.areYouSure(elem, callbacks, popover_options);
};
