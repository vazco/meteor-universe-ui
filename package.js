'use strict';

Package.describe({
    name: 'vazco:tools-messages',
    summary: 'Vazco Tools Messages, Errors & notifications'
});

Package.on_use(function (api) {

    api.use(['underscore'], ['client', 'server']);
    api.use(['templating', 'ui'], 'client');

    if (api.versionsFrom) {
        api.versionsFrom('METEOR@0.9.0');
        api.use(
        ['vazco:tools-common', 'anti:i18n@0.4.3'], ['client', 'server']);
    } else {
        api.use(
        ['vazco-tools-common', 'just-i18n'], ['client', 'server']);
    }

    api.add_files([
        'client/lib/localization.js',
        'client/views/_toolsErrorView.html',
        'client/views/toolsError.html',
        'client/views/_toolsNotifView.html',
        'client/views/toolsNotif.html',
        'client/views/_toolsSuccessView.html',
        'client/views/toolsSuccess.html',
        'client/messages.js'
    ],
        'client');

});