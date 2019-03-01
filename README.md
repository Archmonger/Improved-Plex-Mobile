# Improved Plex Mobile CSS
PLEX Web CSS changes for mobile devices to create a functional mobile web interface and video player. This CSS file is essentially Blackberry Flat Plex minus any theme changes, only keeping the bits that relate to creating a functional mobile site. For those looking for OrganizrV2 integration, please see [Blackberry Flat](https://github.com/Archmonger/Blackberry-Themes). 

**Requirements**<br/> 
Nginx (with http_sub_module, otherwise known as subfilter)

**Installation**<br/>
You can edit your Nginx configuration to inject CSS. This can be accomplished with sub_filter (http_sub_module). 
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile-CSS/plex_mobile.css"> </head>';
sub_filter_once on;
```

**Screenshots of [Blackberry Flat Plex](https://github.com/Archmonger/Blackberry-Flat) [In Organizr](https://github.com/causefx/Organizr)**<br/>
Please note, the secondary top navbar will not exist if Improved Plex Mobile CSS is used outside of Organizr.<br/>

![Plex Mobile CSS](https://github.com/Archmonger/Blackberry-Flat/blob/master/Screenshots/bbf_plex_in_organizr_mobile.jpg?raw=truee "Plex Mobile CSS")
