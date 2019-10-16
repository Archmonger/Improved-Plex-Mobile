# Improved Plex Mobile
Plex web changes to create a functional site  for mobile devices. For those looking for Organizr V2 integration, please see [Blackberry Themes](https://github.com/Archmonger/Blackberry-Themes).

If anything doesn't look quite right, report it via [Github Issues](https://github.com/Archmonger/Improved-Plex-Mobile/issues).

**Requirements**<br/>
Have Plex running behind an Nginx reverse proxy (with http_sub_module, otherwise known as sub_filter)

**Installation**<br/>
Run Plex behind a reverse proxy and utilize Nginx configuration to inject CSS and JS. This can be accomplished with sub_filter (http_sub_module).
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.css"> </head>';
sub_filter '</body>' '<script language="javascript" src="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.js"></script> </body>';
sub_filter_once on;
```

## Screenshots
| Classic | Improved Plex Mobile |
|:---:|:---:|
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_1.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_1.png) |
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_2.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_2.png) |
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_3.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_3.png) |
