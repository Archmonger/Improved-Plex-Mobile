# Improved Plex Mobile
Provides changes to Plex web to create a better mobile devices experience.

If anything doesn't work or look quite right, report it via [Github Issues](https://github.com/Archmonger/Improved-Plex-Mobile/issues).





## Requirements<br/>
- Plex Media Server
- Nginx





## Screenshots
| Classic | Improved Plex Mobile |
|:---:|:---:|
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_1.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_1.png) |
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_2.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_2.png) |
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_3.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_3.png) |





## Installation<br/>
Run Plex behind a reverse proxy and utilize Nginx configuration to inject CSS and JS. This can be accomplished with sub_filter (http_sub_module).

<br/>

#### Example: The four lines you'll need to add to your Nginx server block
```nginx
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.css"> </head>';
sub_filter '</body>' '<script language="javascript" src="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.js"></script> </body>';
sub_filter_once on;
```


<br/>

#### Example: Simple SSL configured server block containing Improved Plex Mobile.
#### _To see the contents of the `include` files, [view the Wiki](https://github.com/Archmonger/Improved-Plex-Mobile/wiki/Additional-Configuration-Files)._
```nginx
server {
  listen 443 ssl http2;
  include ssl.conf;
  server_name plex.myserver.com;
  
  location / {
    include websockets.conf;
    include reverse_proxy.conf;
    include plex_headers.conf;
    
    # Fixes a bug where you get permission issues when accessing the web dashboard
    if ($http_x_plex_device_name = '') {
      rewrite ^/$ https://$http_host/web/index.html;
    }
    
    proxy_set_header Accept-Encoding "";
    sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.css"> </head>';
    sub_filter '</body>' '<script language="javascript" src="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.js"></script> </body>';
    sub_filter_once on;
    
    proxy_pass https://192.168.86.20:32400/;
  }
  
}
```
