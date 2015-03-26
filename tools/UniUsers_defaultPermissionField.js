'use strict';

if(!UniUsers.defaultPermissionField){
    /* Register Template as default */
    UniUsers.defaultPermissionField = 'UniUsers_defaultPermissionField';
}

Template.UniUsers_defaultPermissionField.helpers({
    getPermissionLabel: function(){
        return i18n('user.permission.'+this.name);
    }
});