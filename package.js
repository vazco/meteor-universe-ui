'use strict';

Package.describe({
    name: 'vazco:universe-ui',
    summary: 'Universe UI, Errors & notifications & dialogs',
    version: '0.6.6',
    git: 'https://github.com/vazco/meteor-universe-ui'
});

Package.on_use(function (api) {

    api.use(['underscore']);
    api.use(['templating', 'ui', 'reactive-var'], 'client');

    api.versionsFrom(['METEOR@1.0.4']);
    api.use([
        'universe:utilities@2.1.0',
        'universe:collection@2.0.4',
        'universe:i18n@1.2.0'
    ]);

    api.addFiles([
            'ProvidingGlobals.js'
    ],
        'client');

    api.addFiles([
        'messages/lib/en.i18n.yml',
        'messages/views/_toolsErrorView.html',
        'messages/views/toolsError.html',
        'messages/views/_toolsNotifView.html',
        'messages/views/toolsNotif.html',
        'messages/views/_toolsSuccessView.html',
        'messages/views/toolsSuccess.html',
        'messages/messages.js'
    ],
        'client');


    api.addFiles([
            'tools/stylesheets/tools.css',
            'tools/stylesheets/css-tooltip.css',
            'tools/stylesheets/autoform.css',
            'tools/vazco_confirm_action_ui.js',
            'tools/vazco_dialog_ui.js',
            'tools/stylesheets/vazco_input_spinner_ui.css',
            'tools/vazco_input_spinner_ui.html',
            'tools/vazco_input_spinner_ui.js',
            'tools/events_on_body.js',
            'tools/UniUsers_defaultPermissionField.html',
            'tools/UniUsers_defaultPermissionField.js',
            'dynamicModal/dynamicModal.html',
            'dynamicModal/dynamicModal.js'
        ],
        'client');

    api.export([
        'UniUI'
    ],  ['client']);

});
