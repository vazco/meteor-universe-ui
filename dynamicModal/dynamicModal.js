'use strict';

function modalId(name) {
    return 'dynamicModal_' + name;
}

Template.dynamicModal.helpers({
    id: function() {
        return modalId(this.name);
    },
    template: function() {
        var modal = modalInstances[this.name];
        return modal && modal.currentTemplate.get();
    },
    data: function() {
        var modal = modalInstances[this.name];
        return modal && modal.currentData.get();
    },
    options: function() {
        var modal = modalInstances[this.name];
        return modal && modal.currentOptions.get();
    }
});

var modalInstances = {};
Template.dynamicModal.created = function() {
    modalInstances[this.data.name] = this;
    this.currentTemplate = new ReactiveVar(null);
    this.currentData = new ReactiveVar(null);
    this.currentOptions = new ReactiveVar(null);
};

Template.dynamicModal.rendered = function() {
    var tmpl = this;
    tmpl.$modal = tmpl.$('#' + modalId(tmpl.data.name));

    // modal -> session
    tmpl.$modal.on('hidden.bs.modal', function(e) {
        // don't close dynamic modal when nested modal is being closed
        if (e.target !== e.currentTarget) {
            return;
        }

        // don't close dynamic modal if another dynamic modal apeared in the meantime
        // (and closing by UniUI.closeModal)
        if (tmpl.closing && tmpl.closing !== tmpl.opened) {
            return;
        }

        clean(tmpl);
        tmpl.closing = null;
    });
};

Template.dynamicModal.destroyed = function() {
    modalInstances[this.data.name] = null;
};

UniUI.openModal = function(template, data, name, options) {
    var modalName = name || 'default';
    var modalTmpl = modalInstances[modalName];

    if (!modalTmpl) {
        return;
    }

    modalTmpl.currentTemplate.set(template);
    modalTmpl.currentData.set(data || {});
    modalTmpl.currentOptions.set(options || {});
    modalTmpl.opened = _.uniqueId();
    delete modalTmpl.closing;

    // modalTmpl.$modal.modal('show');
    $(modalTmpl.find('#' + modalId(modalName))).modal('show');
};

UniUI.closeModal = function(modalName) {
    var modalTmpl = modalInstances[modalName || 'default'];
    if (!modalTmpl || !modalTmpl.$modal) {
        return;
    }
    modalTmpl.closing = modalTmpl.opened;
    modalTmpl.$modal.modal('hide');
    clean(modalTmpl);
};

function clean(tmpl) {
    tmpl.currentTemplate.set(null);
    tmpl.currentData.set(null);
    tmpl.currentOptions.set(null);
    $('.modal-backdrop').remove();
}
