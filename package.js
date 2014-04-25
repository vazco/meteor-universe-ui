'use strict';

Package.describe({
    summary: 'Vazco Tools Messages, Errors & notifications'
});

Package.on_use(function (api) {
    api.use(['underscore', 'just-i18n', 'vazco-tools-common'], ['client', 'server']);
    api.use(['templating', 'ui'], 'client');

    api.add_files([
        'client/lib/localization.js',
        'client/views/_toolsErrorView.html',
        'client/views/toolsError.html',
        'client/views/_toolsNotifView.html',
        'client/views/toolsNotif.html',
        'client/messages.js'
    ],
        'client');

});