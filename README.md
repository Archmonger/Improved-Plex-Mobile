# Improved Plex Mobile CSS
PLEX Web CSS changes for mobile devices to create a functional mobile WebUI and video player for Android. For those looking for better OrganizrV2 integration, please see [Blackberry OG Themes](https://github.com/Archmonger/Blackberry-OG-Themes).
Last tested with PLEX v1.13.4.5271.

**Requirements:** Nginx (with http_sub_module, otherwise known as subfilter)

**Installation:**
Edit your Nginx config to add in the CSS. One method is to download the CSS to your root directory and href it.
```
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://mydomain.com/css/PlexMobile.css"> </head>';
sub_filter_once on;
```
![Plex Mobile CSS](https://github.com/Archmonger/Blackberry-OG-Themes/blob/master/Screenshots/bbog_plex_2.PNG?raw=true "Plex Mobile CSS")
![Plex Mobile CSS 2](https://github.com/Archmonger/Blackberry-OG-Themes/blob/master/Screenshots/bbog_plex_3.PNG?raw=true "Plex Mobile CSS 2")
