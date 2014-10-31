'use strict';
/** applicationWithServerList: Configure your server */

var bot =  {
				name: 'BOT',
				servers: [
					{url: "http://best-offer-tool-advisor-next.apps.tln-dev.cegeka.be/bestoffer/status/"},	
					{url: "http://best-offer-tool-advisor.apps.tln-dev.cegeka.be/bestoffer/status/"},	
					{url: "http://apps.servicessup.telenet.be/bestoffer/status/"},	
					{url: "http://apps.servicesint.telenet.be/bestoffer/status/"},	
					{url: "http://apps.servicesuat.telenet.be/bestoffer/status/"},	
					{url: "http://apps.servicestrg.telenet.be/bestoffer/status/"},	
				]			
			}

var mijntelenet= {
				name: 'Mijn Telenet',
				servers: [
					{url: "http://mijn.sup.telenet.be/mijntelenet/rest/status/"},
					{url: "http://mijn.int.telenet.be/mijntelenet/rest/status/"},
					{url: "http://mijn.uat.telenet.be/mijntelenet/rest/status/"},
					{url: "http://mijn.trg.telenet.be/mijntelenet/rest/status/"}
				]   
			}

var applicationWithServerList = {
			BOT : bot			 
		};