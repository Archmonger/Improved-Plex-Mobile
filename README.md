# Improved Plex Mobile CSS
PLEX Web CSS changes for mobile devices to create a functional mobile WebUI and video player for Android.
Last tested with PLEX v1.13.4.5271.

**Requirements:** Nginx (with http_sub_module, otherwise known as subfilter)

**Installation:**
Edit your Nginx config to add in the CSS. One method is to download the CSS to your root directory and href it.
```
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://mydomain.com/css/PlexMobile.css"> </head>';
sub_filter_once on;
```
