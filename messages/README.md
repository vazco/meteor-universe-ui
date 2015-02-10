Include templates

```
{{> toolsError place="header"}}
{{> toolsSuccess place="header"}}
{{> toolsNotif place="header"}}
```

To show error `UniUtils.setErrorMessage(placeName, text)`
To show success `UniUtils.setSuccessMessage(placeName, text)`
To show info `UniUtils.setNotifMessage(placeName, text)`
, where params are:

 - placeName - the place where message should be shown (in this example `header`)
 - text - text to show in notificatione.

