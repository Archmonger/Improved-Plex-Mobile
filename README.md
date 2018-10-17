# Improved Plex Mobile CSS
PLEX Web CSS changes for mobile devices to create a functional mobile WebUI and video player for Android. For those looking for better OrganizrV2 integration, please see [Blackberry Flat](https://github.com/Archmonger/Blackberry-Flat).
Last tested with PLEX v1.13.4.5271.

**Requirements**<br/> 
Nginx (with http_sub_module, otherwise known as subfilter)

**Installation**<br/>
You can edit your Nginx configuration to inject CSS. One method is to download the CSS to your root directory or css subfolder and href it. This can be accomplished with sub_filter (http_sub_module). 
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://mydomain.com/css/PlexMobile.css"> </head>';
sub_filter_once on;
```

**Screenshots**<br/>
![Plex Mobile CSS](https://github.com/Archmonger/Blackberry-OG-Themes/blob/master/Screenshots/bbog_plex_2.PNG?raw=true "Plex Mobile CSS")
![Plex Mobile CSS 2](https://github.com/Archmonger/Blackberry-OG-Themes/blob/master/Screenshots/bbog_plex_3.PNG?raw=true "Plex Mobile CSS 2")
