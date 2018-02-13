'use strict';

if(!UniUsers.defaultPermissionField){
    /* Register Template as default */
    UniUsers.defaultPermissionField = 'UniUsers_defaultPermissionField';
}
var i18n = _i18n.createReactiveTranslator();
Template.UniUsers_defaultPermissionField.helpers({
    getPermissionLabel: function(){
        return i18n('user.permission.'+this.name);
    }
});