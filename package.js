'use strict';

Package.describe({
    name: 'vazco:tools-messages',
    summary: 'Universe UI, Errors & notifications & dialogs',
    version: '0.1.8'
});

Package.on_use(function (api) {

    api.use(['underscore'], ['client', 'server']);
    api.use(['templating', 'ui', 'reactive-var'], 'client');

    api.versionsFrom(['METEOR@0.9.4', 'METEOR@1.0']);
    api.use(
    ['vazco:universe-core@1.1.0', 'anti:i18n@0.4.3'], ['client', 'server']);

    api.add_files([
            'ProvidingGlobals.js'
        ],
        'client');

    api.add_files([
        'messages/lib/localization.js',
        'messages/views/_toolsErrorView.html',
        'messages/views/toolsError.html',
        'messages/views/_toolsNotifView.html',
        'messages/views/toolsNotif.html',
        'messages/views/_toolsSuccessView.html',
        'messages/views/toolsSuccess.html',
        'messages/messages.js',
        'dynamicModal/dynamicModal.html',
        'dynamicModal/dynamicModal.js'
    ],
        'client');


    api.add_files([
            'tools/stylesheets/tools.css',
            'tools/stylesheets/css-tooltip.css',
            'tools/stylesheets/autoform.css',
            'tools/vazco_confirm_action_ui.js',
            'tools/vazco_dialog_ui.js',
            'tools/stylesheets/vazco_input_spinner_ui.css',
            'tools/vazco_input_spinner_ui.html',
            'tools/vazco_input_spinner_ui.js',
            'tools/events_on_body.js'
        ],
        'client');

    api.export([
        'UniUI'
    ],  ['client']);

});
