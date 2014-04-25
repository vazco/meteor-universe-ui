// --------- Error&Notif Message --------------
var _messageGetter = function(placeName, speed, type){
    if (_.isUndefined(speed)) {
        speed = 5000;
    }
    if(speed > 0 ){
        Meteor.setTimeout(function () {
            Session.set(placeName + type, '');
        }, speed);
    }

    return Session.get(placeName + type);
}
Template.toolsError.getError = function (placeName, speed) {
    return _messageGetter(placeName, speed, 'Error');
};

Template.toolsNotif.getNotif = function (placeName, speed) {
    return _messageGetter(placeName, speed, 'Notif');
};
/**
 * Show error in place from placeName param
 * In your template add ex.: {{> toolsError place="action_box"}}
 * @param placeName
 * @param text
 */
Vazco.setErrorMessage = function(placeName, text){
    Session.set(placeName+'Error', text);
};
/**
 * Show notification message in place from placeName
 * In your template add ex.: {{> toolsNotif place="action_box"}}
 * @param placeName name of place where you placed view.
 * @param text text to show in notification
 */
Vazco.setNotifMessage = function(placeName, text){
    Session.set(placeName+'Notif', text);
};
