# Improved Plex Mobile
Provides changes to Plex web to create a better mobile devices experience.

If anything doesn't work or look quite right, report it via [Github Issues](https://github.com/Archmonger/Improved-Plex-Mobile/issues).

If you need installation help, join our Discord!

[![Discord](https://img.shields.io/badge/discord-join-orange.svg?style=for-the-badge&logo=discord)](https://discord.gg/sfjkDaM)<br/>




## Requirements<br/>
- Plex Media Server _(free)_
- Nginx _(free)_
- Web Domain _(free or paid)_





## Screenshots
| Classic | Improved Plex Mobile |
|:---:|:---:|
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_1.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_1.png) |
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_2.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_2.png) |
| ![Classic](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/classic_3.png)  | ![New](https://archmonger.github.io/Improved-Plex-Mobile/screenshots/new_3.png) |





## Installation<br/>
1) **Install Plex Media Server** on your local server.
2) **Install Nginx** on your local server.
3) **Obtain a web domain** (ex. mydomain.com) from a web registrar. Can be obtained for free from [Freenom](https://www.freenom.com/en/index.html?lang=en).
4) **Edit your web registrar's DNS records** to point to your server's [public IP address](https://www.google.com/search?q=what+is+my+ip&sourceid=opera&ie=UTF-8&oe=UTF-8).
   - This is done through your web registrar's management portal (ex. [Manage Domain](https://my.freenom.com/clientarea.php?action=domains) on Freenom)
   - Optionally, you can configure your web domain to use [Cloudflare](cloudflare.com). This will hide your IP from the public, provide encryption, and various other forms of protection for free.
5) **Configure Nginx to reverse proxy Plex** to your web domain.
   - A sample configuration file is provided [in our wiki](https://github.com/Archmonger/Improved-Plex-Mobile/wiki/Nginx-Configuration).
   - This sample configuration requires encryption (SSL). You will either use Cloudflare (on step 4) and download SSL certificates from their website, or configure [certbot](https://certbot.eff.org/) to generate SSL certificates.
6) **Port forward Nginx** by editing your router's configuration.
   - If using the sample Nginx configuration, your forwarding rules will look something like _80_ -> _80_ and _443_ -> _443_ (_internal_ -> _external_).
7) **Done!**

#### Example: The four lines you'll need to add to your Nginx server block
```nginx
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.css"> </head>';
sub_filter '</body>' '<script language="javascript" src="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.js"></script> </body>';
sub_filter_once on;
```

<br/>

#### Example: Simple SSL configured server block containing Improved Plex Mobile.
#### _For a detailed configuration file, [view the Wiki](https://github.com/Archmonger/Improved-Plex-Mobile/wiki/Nginx-Configuration)._
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
