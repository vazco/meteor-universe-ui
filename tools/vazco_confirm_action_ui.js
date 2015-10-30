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
        if(_.isObject(elem) && elem instanceof jQuery){
            elem = elem.get(0);
        }
        var btnYesLabel = $(elem).data('yes') || 'Yes',
            btnNoLabel = $(elem).data('no') || 'No',
            contentHTML = '<div class="clearfix">' +
            '<button type="button" class="btn btn-xs btn-default ays-yes pull-left">' + btnYesLabel + '</button>' +
            '<button type="button" class="btn btn-xs btn-default ays-no pull-right">' + btnNoLabel + '</button>' +
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

        if(popover_options.outsideClickIsClosingPopover){
            var _pId = _.uniqueId('_');
            $(elem).on('shown.bs.popover', function(){
                $('body').off('click.outsideClickIsClosingPopover'+_pId);
                $('body').on('click.outsideClickIsClosingPopover'+_pId, function(e){
                    var $this = $(e.target).closest('.popover');
                    if(!$this.length){
                        $(elem).popover('destroy');
                    }
                });
            });
            $(elem).on('hide.bs.popover', function(){
                $('body').off('click.outsideClickIsClosingPopover'+_pId);
            });

        }

        $(elem).popover('show');

        $('.ays-yes').on('click', function(e, tmpl) {
            onSuccess(e, tmpl);
            $(elem).popover('destroy');
        });
        $('.ays-no').on('click', function(e, tmpl) {
            onCancel(e, tmpl);
            $(elem).popover('destroy');
        });

        $(elem).on('hidden.bs.popover', function(){
            $(elem).popover('destroy');
        });
    } else {
        throw new Error('Vazco.areYouSure requires Bootstrap popover.js and two atributes');
    }

};

UniUI.areYouSure = function(elem, callbacks, popover_options){
    console.warn('Vazco.areYouSure is deprecated!, please use UniUI.areYouSure instead.');
    UniUI.areYouSure(elem, callbacks, popover_options);
};
