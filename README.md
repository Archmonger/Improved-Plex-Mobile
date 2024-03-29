# Improved Plex Mobile
Provides changes to Plex web to create a better mobile devices experience. 

### Features
- Easily edit your Plex server configuration from your mobile device
   - Library, network, agent settings, and more!
- Let Plex users watch through a web browser with no restrictions
- Designed for use with [Organizr](https://github.com/causefx/Organizr).

<br/>

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
1) **Install Plex Media Server** on your server.
2) **Install Nginx** on your server.
3) **Obtain a web domain** (ex. mydomain.com) from a web registrar. Can be obtained for free from [Freenom](https://www.freenom.com/en/index.html?lang=en).
4) **Edit your web registrar's DNS records** to point to your server's [public IP address](https://www.google.com/search?q=what+is+my+ip&ie=UTF-8&oe=UTF-8).
   - This is done through your web registrar's management portal (ex. [Manage Domain](https://my.freenom.com/clientarea.php?action=domains) on Freenom)
   - **ALTERNATIVE:** You can [configure your web domain to use Cloudflare](https://dev.to/hieplpvip/get-a-free-domain-with-freenom-and-cloudflare-k1j). This will hide your IP from the public, provide encryption, DDoS prevention, and various other forms of protection/optimizations for free.
5) **Configure Nginx to reverse proxy Plex** to your web domain.
   - A sample configuration file is provided [in our wiki](https://github.com/Archmonger/Improved-Plex-Mobile/wiki/Nginx-Configuration).
   - The sample configuration includes step 8
   - The sample configuration uses encryption (SSL). You will either use Cloudflare (on step 4) and download SSL certificates from their website, or configure [certbot](https://certbot.eff.org/) to generate SSL certificates. 
6) **Port forward Nginx** by editing your router's configuration.
   - If using the sample Nginx configuration, your forwarding rules will look something like _80_ -> _80_ and _443_ -> _443_ (_internal_ -> _external_).
7) **Edit your Nginx configuration** to use Improved Plex Mobile.
   - See below for more details

#### The three lines you'll need to add to your Nginx server block
```nginx
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<meta name="viewport" content="width=device-width, initial-scale=1"></meta> <link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.css"> </head>';
sub_filter_once on;
```

<br/>

#### The previous example with more context
_For a detailed configuration file, [view the Wiki](https://github.com/Archmonger/Improved-Plex-Mobile/wiki/Nginx-Configuration)._
```nginx
server {
	# Use SSL traffic.
	listen 443 ssl http2;
	include ssl.conf;

	#      <<<<<< Edit this line to contain your domain name >>>>>>
	server_name myserver.com;

	location / {
		include websockets.conf;
		include reverse_proxy.conf;

		# Add Improved Plex Mobile to all web requests
		proxy_set_header Accept-Encoding "";
		sub_filter '</head>' '<meta name="viewport" content="width=device-width, initial-scale=1"></meta> <link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Improved-Plex-Mobile/plex_mobile.css"> </head>';
		sub_filter_once on;

		# Reverse proxy your Plex server's internal IP address
		#          <<<<<< Edit this line to have your Plex server's LAN address >>>>>>
		proxy_pass https://192.168.1.200:32400/;
}
```
