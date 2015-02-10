Include templates

```
{{> toolsError place="header"}}
{{> toolsSuccess place="header"}}
{{> toolsNotif place="header"}}
```

To show error `UniUI.setErrorMessage(placeName, text)`
To show success `UniUI.setSuccessMessage(placeName, text)`
To show info `UniUI.setNotifMessage(placeName, text)`
, where params are:

 - placeName - the place where message should be shown (in this example `header`)
 - text - text to show in notificatione.

