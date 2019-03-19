# Pushwoosh Geozones React Native Module #

Provides [Pushwoosh Geozones](https://www.pushwoosh.com/docs/geozones) module for React Native (iOS and Android).

Example:

```js
import PushwooshGeozones from 'pushwoosh-geozones-react-native-plugin';
PushwooshGeozones.startLocationTracking();
```

<br>
<h3>Summary</h3>
<hr />
<table width=100% style='background-color:#0EA7ED;'>
<tbody>
<tr>
<th align="left" colspan="2"><strong>Functions</strong></th>
</tr>
<tr class="even"><td><a href="#startLocationTracking">startLocationTracking()</a></td></tr>
<tr class="odd"><td><a href="#stopLocationTracking">stopLocationTracking()</a></td></tr>
</tbody>
</table>
<hr />


### startLocationTracking

```js
startLocationTracking()
```

**[android, ios]**  
Starts geolocation-based push notifications. Geozones are configured in Pushwoosh Control panel.

### stopLocationTracking

```js
stopLocationTracking()
```
**[android, ios]**  
Stops geolocation-based push notifications.
