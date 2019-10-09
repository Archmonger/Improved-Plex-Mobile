# Improved Plex Mobile CSS
PLEX Web CSS changes for mobile devices to create a functional mobile web interface and video player. This CSS file is essentially Blackberry Flat Plex minus any theme changes, only keeping the bits that relate to creating a functional mobile site. For those looking for OrganizrV2 integration, please see [Blackberry Themes](https://github.com/Archmonger/Blackberry-Themes).

**Requirements**<br/>
Have Plex running behind an Nginx reverse proxy (with http_sub_module, otherwise known as sub_filter)

**Installation**<br/>
Utilize Nginx configuration to inject CSS and JS. This can be accomplished with sub_filter (http_sub_module).
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile-CSS/plex_mobile.css"> </head>';
sub_filter '</body>' '<script language="javascript" src="https://archmonger.github.io/Improved-Plex-Mobile-CSS/plex_mobile.js"></script></body>';
sub_filter_once on;
```

## Screenshots
| Classic | Improved Mobile CSS |
|:---:|:---:|
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile-CSS/screenshots/classic_2.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile-CSS/screenshots/new_2.png) |
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile-CSS/screenshots/classic_1.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile-CSS/screenshots/new_1.png) |
