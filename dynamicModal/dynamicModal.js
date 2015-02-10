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
    }
});

var modalInstances = {};
Template.dynamicModal.created = function() {
    modalInstances[this.data.name] = this;
    this.currentTemplate = new ReactiveVar(null);
    this.currentData = new ReactiveVar(null);
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
        UniUI.closeModal(tmpl.data.name);
    });

    // session -> modal
    Tracker.autorun(function(c) {
        var template = tmpl.currentTemplate.get();
        tmpl.$modal.modal(template ? 'show' : 'hide');
        tmpl.sessionObserver = c;
    });
};

Template.dynamicModal.destroyed = function() {
    this.sessionObserver.stop();
    modalInstances[this.data.name] = this;
};

UniUI.openModal = function(template, data, modalName) {
    var modalTmpl = modalInstances[modalName || 'default'];
    if (modalTmpl) {
        modalTmpl.currentTemplate.set(template);
        modalTmpl.currentData.set(data || {});
    }
};

UniUI.closeModal = function(modalName) {
    var modalTmpl = modalInstances[modalName || 'default'];
    if (modalTmpl) {
        modalTmpl.currentTemplate.set(null);
        modalTmpl.currentData.set(null);
    }
    $('.modal-backdrop').remove();
};
