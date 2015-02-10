'use strict';

Package.describe({
    name: 'vazco:tools-messages',
    summary: 'Vazco Tools Messages, Errors & notifications & dialogs',
    version: '0.1.6'
});

Package.on_use(function (api) {

    api.use(['underscore'], ['client', 'server']);
    api.use(['templating', 'ui'], 'client');

        api.versionsFrom(['METEOR@0.9.4', 'METEOR@1.0']);
        api.use(
        ['vazco:universe-core@1.1.0', 'anti:i18n@0.4.3'], ['client', 'server']);

    api.add_files([
        'client/lib/localization.js',
        'client/views/_toolsErrorView.html',
        'client/views/toolsError.html',
        'client/views/_toolsNotifView.html',
        'client/views/toolsNotif.html',
        'client/views/_toolsSuccessView.html',
        'client/views/toolsSuccess.html',
        'client/messages.js',
        'client/dynamicModal/dynamicModal.html',
        'client/dynamicModal/dynamicModal.js'
    ],
        'client');


    api.add_files([
            'client/stylesheets/tools.css',
            'client/stylesheets/css-tooltip.css',
            'client/stylesheets/autoform.css',
            'client/tools/vazco_confirm_action_ui.js',
            'client/tools/vazco_dialog_ui.js',
            'client/stylesheets/vazco_input_spinner_ui.css',
            'client/tools/vazco_input_spinner_ui.html',
            'client/tools/vazco_input_spinner_ui.js'
        ],
        'client');

});
