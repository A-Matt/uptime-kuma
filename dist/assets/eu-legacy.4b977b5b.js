System.register([],(function(e,a){"use strict";return{execute:function(){var a=e("languageName","Euskara"),t=e("checkEverySecond","Egiaztatu {0} segunduro"),o=e("retryCheckEverySecond","Errepikatu {0} segunduro"),i=e("retriesDescription","Zerbitzua erorita markatu eta jakinarazpena bidali aurretik egindako saiakera kopuru maximoa"),r=e("ignoreTLSError","Ezikusiarena egin TLS/SSL erroreei HTTPS webguneetan"),n=e("upsideDownModeDescription","Alderantzizkatu erortze egoera. Zerbitzua martxan badago, ERORITA markatuko du."),s=e("maxRedirectDescription","Jarraitu beharreko berbideratze kopuru maximoa. Jarri 0 berbideratzeak desgaitzeko."),u=e("acceptedStatusCodesDescription","Hautatu erantzun ona kontsideratzen diren egoera kodeak."),l=e("passwordNotMatchMsg","Errepikatutako pasahitza ez dator bat."),d=e("notificationDescription","Jakinarazpenak monitorizazio funtzio bati asignatu behar zaizkio."),c=e("keywordDescription","Bilatu gako-hitza HTML edo JSON erantzunean. Bilaketan maiuskulak kontuan hartzen dira."),p=e("pauseDashboardHome","Gelditu"),m=e("deleteMonitorMsg","Ziur zaude monitorizazio hau ezabatu nahi duzula?"),h=e("deleteNotificationMsg","Ziur zaude jakinarazpen hau monitorizazio guztientzat ezabatu nahi duzula?"),k=e("dnsPortDescription","DNS zerbitzari portua. Defektuz 53. Nahi duzunean aldatu dezakezu portua."),g=e("resolverserverDescription","Cloudflare zerbitzari lehenetsia da. Edozein unetan alda dezakezu ebazteko zerbitzaria."),z=e("rrtypeDescription","Hautatu kontrolatu nahi duzun RR mota"),b=e("enableDefaultNotificationDescription","Jakinarazpen hau monitore berrientzat gaituko da defektuz. Baina monitorizazio bakoitzarentzat jakinarazpena desgaitu dezakezu."),y=e("pauseMonitorMsg","Ziur zaude gelditu egin nahi duzula?"),S=e("clearEventsMsg","Ziur zaude monitorizazio honen gertaera guztiak ezabatu nahi dituzula?"),P=e("clearHeartbeatsMsg","Ziur zaude monitorizazio honen pultsu guztiak ezabatu nahi dituzula?"),D=e("confirmClearStatisticsMsg","Ziur zaude estatistika GUZTIAK ezabatu nahi dituzula?"),T=e("importHandleDescription","Aukeratu 'existitzen bada', izen bereko monitore edo jakinarazpen bakoitza saltatu nahi baduzu. Lehendik dauden kontrol eta jakinarazpen guztiak ezabatuko ditu 'Gainidatzi' aukerak."),f=e("confirmImportMsg","Ziur zaude segurtasun-kopia inportatu nahi duzula? Egiaztatu inportatzeko aukera zuzena hautatu duzula."),A=e("twoFAVerifyLabel","Sartu zure tokena 2FA egiaztatzeko:"),v=e("tokenValidSettingsMsg","Tokenak balio du! Orain 2FA konfigurazioa gorde dezakezu."),w=e("confirmEnableTwoFAMsg","Ziur zaude 2FA gaitu nahi duzula?"),I=e("confirmDisableTwoFAMsg","Ziur zaude 2FA desgaitu nahi duzula?"),E=e("Settings","Ezarpenak"),M=e("Dashboard","Arbela"),C=e("Language","Hizkuntza"),L=e("Appearance","Itxura"),N=e("Theme","Gaia"),R=e("General","Orokorra"),U=e("Version","Bertsioa"),x=e("List","Zerrenda"),G=e("Add","Gehitu"),H=e("Up","Erabilgarri"),B=e("Down","Erorita"),O=e("Pending","Zain"),F=e("Unknown","Ezezaguna"),K=e("Pause","Gelditu"),W=e("Name","Izena"),Z=e("Status","Egoera"),j=e("DateTime","Data eta ordua"),Y=e("Message","Mezua"),J=e("Resume","Jarraitu"),V=e("Edit","Editatu"),q=e("Delete","Ezabatu"),Q=e("Current","Unekoa"),_=e("Uptime","Martxan"),X=e("day","egun | egun"),$=e("hour","ordua"),ee=e("Response","Erantzuna"),ae=e("Ping","Ping"),te=e("Keyword","Gakohitza"),oe=e("URL","URLa"),ie=e("Hostname","Ostalari izena"),re=e("Port","Portua"),ne=e("Retries","Errepikapenak"),se=e("Advanced","Aurreratua"),ue=e("needPushEvery","URL hau {0} segunduro deitu beharko zenuke."),le=e("pushOptionalParams","Hautazko parametroak: {0}"),de=e("Save","Gorde"),ce=e("Notifications","Jakinarazpenak"),pe=e("Light","Argia"),me=e("Dark","Iluna"),he=e("Auto","Auto"),ke=e("Normal","Normala"),ge=e("Bottom","Behean"),ze=e("None","Bat ere ez"),be=e("Timezone","Timezone"),ye=e("Logout","Saioa amaitu"),Se=e("Leave","Utzi"),Pe=e("Confirm","Baieztatu"),De=e("Yes","Bai"),Te=e("No","Ez"),fe=e("Username","Erabiltzailea"),Ae=e("Password","Pasahitza"),ve=e("Login","Saioa hasi"),we=e("Email","Emaila"),Ie=e("Test","Testa"),Ee=e("Export","Esportatu"),Me=e("Import","Inportatu"),Ce=e("respTime","Erantz. denbora (ms)"),Le=e("notAvailableShort","N/A"),Ne=e("Create","Sortu"),Re=e("Events","Gertaerak"),Ue=e("Heartbeats","Pultsuak"),xe=e("backupDescription","Monitore eta jakinarazpen guztien segurtasun-kopiak egin ditzakezu JSON fitxategi batean."),Ge=e("backupDescription2","Oharra: ez dira historia eta gertaeren datuak sartzen."),He=e("backupDescription3","Datu sentikorrak, hala nola jakinarazpen tokenak, esportazio-fitxategian sartzen dira; mesedez, gorde esportazioa modu seguruan."),Be=e("alertNoFile","Mesedez hautatu inportatzeko fitxategia."),Oe=e("alertWrongFileType","Mesedez hautatu JSON fitxategia."),Fe=e("Overwrite","Gainidatzi"),Ke=e("Options","Aukerak"),We=e("Active","Aktibo"),Ze=e("Inactive","Inaktibo"),je=e("Token","Tokena"),Ye=e("Tags","Etiketak"),Je=e("color","kolorea"),Ve=e("Gray","Grisa"),qe=e("Red","Gorria"),Qe=e("Orange","Naranja"),_e=e("Green","Berdea"),Xe=e("Blue","Urdina"),$e=e("Indigo","Indigo"),ea=e("Purple","Morea"),aa=e("Pink","Arrosa"),ta=e("statusPageNothing","Ezer ere ez hemen, mesedez gehitu taldea edo monitorizazioa."),oa=e("defaultNotificationName","Nire {notification} Alerta ({number})"),ia=e("here","Hemen"),ra=e("Required","Beharrezkoa"),na=e("telegram","Telegram"),sa=e("ZohoCliq","ZohoCliq"),ua=e("wayToGetTelegramToken","You can get a token from {0}."),la=e("supportTelegramChatID","Support Direct Chat / Group / Channel's Chat ID"),da=e("wayToGetTelegramChatID","You can get your chat ID by sending a message to the bot and going to this URL to view the chat_id:"),ca=e("chatIDNotFound","Chat ID is not found; please send a message to this bot first"),pa=e("webhook","Webhook"),ma=e("webhookJsonDesc","{0} is good for any modern HTTP servers such as Express.js"),ha=e("webhookFormDataDesc","{multipart} is good for PHP. The JSON will need to be parsed with {decodeFunction}"),ka=e("smtp","Emaila (SMTP)"),ga=e("secureOptionNone","Bat ere ez / STARTTLS (25, 587)"),za=e("secureOptionTLS","TLS (465)"),ba=e("emailCustomSubject","Pertsonalizatutako gaia"),ya=e("smtpCC","CC"),Sa=e("smtpBCC","BCC"),Pa=e("discord","Discord"),Da=e("wayToGetDiscordURL","You can get this by going to Server Settings -> Integrations -> Create Webhook"),Ta=e("teams","Microsoft Teams"),fa=e("wayToGetTeamsURL","You can learn how to create a webhook URL {0}."),Aa=e("wayToGetZohoCliqURL","You can learn how to create a webhook URL {0}."),va=e("signal","Signal"),wa=e("Recipients","Recipients"),Ia=e("needSignalAPI","You need to have a signal client with REST API."),Ea=e("wayToCheckSignalURL","You can check this URL to view how to set one up:"),Ma=e("signalImportant","IMPORTANT: You cannot mix groups and numbers in recipients!"),Ca=e("gotify","Gotify"),La=e("Priority","Lehentasuna"),Na=e("slack","Slack"),Ra=e("aboutWebhooks","More info about Webhooks on: {0}"),Ua=e("aboutChannelName","Enter the channel name on {0} Channel Name field if you want to bypass the Webhook channel. Ex: #other-channel"),xa=e("aboutKumaURL","If you leave the Uptime Kuma URL field blank, it will default to the Project GitHub page."),Ga=e("emojiCheatSheet","Emoji cheat sheet: {0}"),Ha=e("pushover","Pushover"),Ba=e("pushy","Pushy"),Oa=e("PushByTechulus","Push by Techulus"),Fa=e("octopush","Octopush"),Ka=e("promosms","PromoSMS"),Wa=e("clicksendsms","ClickSend SMS"),Za=e("lunasea","LunaSea"),ja=e("apprise","Apprise (Support 50+ Notification services)"),Ya=e("GoogleChat","Google Chat (Google Workspace only)"),Ja=e("pushbullet","Pushbullet"),Va=e("line","Line Messenger"),qa=e("mattermost","Mattermost"),Qa=e("Device","Gailua"),_a=e("pushoverDesc1","Emergency priority (2) has default 30 second timeout between retries and will expire after 1 hour."),Xa=e("pushoverDesc2","If you want to send notifications to different devices, fill out Device field."),$a=e("octopushTypePremium","Premium (Fast - recommended for alerting)"),et=e("octopushTypeLowCost","Low Cost (Slow - sometimes blocked by operator)"),at=e("checkPrice","Check {0} prices:"),tt=e("apiCredentials","API credentials"),ot=e("octopushLegacyHint","Do you use the legacy version of Octopush (2011-2020) or the new version?"),it=e("octopushPhoneNumber","Phone number (intl format, eg : +33612345678) "),rt=e("octopushSMSSender","SMS Sender Name : 3-11 alphanumeric characters and space (a-zA-Z0-9)"),nt=e("appriseInstalled","Apprise instalatuta."),st=e("appriseNotInstalled","Apprise ez dago instalatuta. {0}"),ut=e("lineDevConsoleTo","Line Developers Console - {0}"),lt=e("wayToGetLineChannelToken","First access the {0}, create a provider and channel (Messaging API), then you can get the channel access token and user ID from the above mentioned menu items."),dt=e("aboutIconURL",'You can provide a link to a picture in "Icon URL" to override the default profile picture. Will not be used if Icon Emoji is set.'),ct=e("aboutMattermostChannelName",'You can override the default channel that the Webhook posts to by entering the channel name into "Channel Name" field. This needs to be enabled in the Mattermost Webhook settings. Ex: #other-channel'),pt=e("matrix","Matrix"),mt=e("promosmsTypeEco","SMS ECO - cheap but slow and often overloaded. Limited only to Polish recipients."),ht=e("promosmsTypeFlash","SMS FLASH - Message will automatically show on recipient device. Limited only to Polish recipients."),kt=e("promosmsTypeFull","SMS FULL - Premium tier of SMS, You can use your Sender Name (You need to register name first). Reliable for alerts."),gt=e("promosmsTypeSpeed","SMS SPEED - Highest priority in system. Very quick and reliable but costly (about twice of SMS FULL price)."),zt=e("promosmsPhoneNumber","Phone number (for Polish recipient You can skip area codes)"),bt=e("promosmsSMSSender","SMS Sender Name : Pre-registred name or one of defaults: InfoSMS, SMS Info, MaxSMS, INFO, SMS"),yt=e("matrixHomeserverURL","Hasiera zerbitzari URL (with http(s):// and optionally port)"),St=e("matrixDesc1","You can find the internal room ID by looking in the advanced section of the room settings in your Matrix client. It should look like !QMdRCpUIfLwsfjxye6:home.server."),Pt=e("matrixDesc2","It is highly recommended you create a new user and do not use your own Matrix user's access token as it will allow full access to your account and all the rooms you joined. Instead, create a new user and only invite it to the room that you want to receive the notification in. You can get the access token by running {0}"),Dt=e("Method","Metodoa"),Tt=e("Body","Gorputza"),ft=e("Headers","Goiburuak"),At=e("PushUrl","Push URL"),vt=e("HeadersInvalidFormat","The request headers are not valid JSON: "),wt=e("BodyInvalidFormat","The request body is not valid JSON: "),It=e("clearDataOlderThan","Keep monitor history data for {0} days."),Et=e("PasswordsDoNotMatch","Pasahitzak ez datoz bat."),Mt=e("records","records"),Ct=e("steamApiKeyDescription","For monitoring a Steam Game Server you need a Steam Web-API key. You can register your API key here: "),Lt=e("topic","Topic"),Nt=e("topicExplanation","MQTT topic to monitor"),Rt=e("successMessage","Arrakasta mezua"),Ut=e("successMessageExplanation","MQTT message that will be considered as success"),xt=e("recent","Duela gutxikoa"),Gt=e("Done","Egina"),Ht=e("Info","Info"),Bt=e("Security","Segurtasuna"),Ot=e("Default","Lehenetsia"),Ft=e("Title","Titulua"),Kt=e("Content","Edukia"),Wt=e("Style","Estiloa"),Zt=e("info","info"),jt=e("warning","kontuz"),Yt=e("danger","arriskua"),Jt=e("error","errorea"),Vt=e("critical","kritikoa"),qt=e("primary","oinarrizkoa"),Qt=e("light","argia"),_t=e("dark","iluna"),Xt=e("Post","Post"),$t=e("Created","Sortuta"),eo=e("Unpin","Unpin"),ao=e("Description","Deskribapena"),to=e("Services","Zerbitzuak"),oo=e("Discard","Baztertu"),io=e("Cancel","Ezeztatu"),ro=e("shrinkDatabaseDescription","Trigger database VACUUM for SQLite. If your database is created after 1.10.0, AUTO_VACUUM is already enabled and this action is not needed."),no=e("serwersms","SerwerSMS.pl"),so=e("serwersmsAPIUser","API erabiltzailea (webapi_ aurre-hizkia barne)"),uo=e("serwersmsAPIPassword","API pasahitza"),lo=e("serwersmsPhoneNumber","Telefono zenbakia"),co=e("serwersmsSenderName","SMS bidaltzaile izena (registered via customer portal)"),po=e("stackfield","Stackfield"),mo=e("Customize","Pertsonalizatu"),ho=e("smtpDkimSettings","DKIM ezarpenak"),ko=e("smtpDkimDesc","Please refer to the Nodemailer DKIM {0} for usage."),go=e("documentation","dokumentazioa"),zo=e("smtpDkimDomain","Domeinu izena"),bo=e("smtpDkimKeySelector","Gako hautatzailea"),yo=e("smtpDkimPrivateKey","Gako pribatua"),So=e("smtpDkimHashAlgo","Hash algoritmoa (hautazkoa)"),Po=e("smtpDkimheaderFieldNames","Header Keys to sign (Optional)"),Do=e("smtpDkimskipFields","Header Keys not to sign (Optional)"),To=e("wayToGetPagerDutyKey",'You can get this by going to Service -> Service Directory -> (Select a service) -> Integrations -> Add integration. Here you can search for "Events API V2". More info {0}'),fo=e("gorush","Gorush"),Ao=e("alerta","Alerta"),vo=e("alertaApiEndpoint","API Endpoint"),wo=e("alertaEnvironment","Ingurunea"),Io=e("alertaApiKey","API Key"),Eo=e("alertaAlertState","Alerta egoera"),Mo=e("alertaRecoverState","Berreskuratze egoera"),Co=e("deleteStatusPageMsg","Ziur zaude egoera orri hau ezabatu nahi duzula?"),Lo=e("Proxies","Proxiak"),No=e("enabled","Gaituta"),Ro=e("setAsDefault","Ezarri lehenetsitzat"),Uo=e("deleteProxyMsg","Are you sure want to delete this proxy for all monitors?"),xo=e("proxyDescription","Proxies must be assigned to a monitor to function."),Go=e("enableProxyDescription","This proxy will not effect on monitor requests until it is activated. You can control temporarily disable the proxy from all monitors by activation status."),Ho=e("setAsDefaultProxyDescription","This proxy will be enabled by default for new monitors. You can still disable the proxy separately for each monitor."),Bo=e("Valid","Baliozkoa"),Oo=e("Invalid","Baliogabea"),Fo=e("AccessKeyId","AccessKey ID"),Ko=e("SecretAccessKey","AccessKey Secret"),Wo=e("PhoneNumbers","TelefonoZenbakiak"),Zo=e("TemplateCode","TemplateCode"),jo=e("SignName","SignName"),Yo=e("WebHookUrl","WebHookUrl"),Jo=e("SecretKey","SecretKey"),Vo=e("Platform","Plataforma"),qo=e("iOS","iOS"),Qo=e("Android","Android"),_o=e("Huawei","Huawei"),Xo=e("High","Altua"),$o=e("Retry","Errepikatu"),ei=e("Topic","Gaia"),ai=e("User","Erabiltzailea"),ti=e("Installed","Instalatuta"),oi=e("Running","Martxan"),ii=e("Start","Hasi"),ri=e("Stop","Gelditu"),ni=e("Slug","Sluga"),si=e("startOrEndWithOnly","Start or end with {0} only"),ui=e("Next","Hurrengoa"),li=e("Authentication","Authentication"),di=e("Backup","Backup"),ci=e("About","Honi buruz"),pi=e("wayToGetCloudflaredURL","(Download cloudflared from {0})"),mi=e("cloudflareWebsite","Cloudflare webgunea"),hi=e("onebotHttpAddress","OneBot HTTP helbidea"),ki=e("onebotMessageType","OneBot mezu mota"),gi=e("onebotGroupMessage","Taldea"),zi=e("onebotPrivateMessage","Pribatua"),bi=e("onebotUserOrGroupId","Talde/Erabiltzaile IDa"),yi=e("onebotSafetyTips","For safety, must set access token"),Si=e("signedInDisp","Signed in as {0}"),Pi=e("signedInDispDisabled","Auth desgaituta."),Di=e("endpoint","endpoint"),Ti=e("octopushAPIKey",'"API key" from HTTP API credentials in control panel'),fi=e("octopushLogin",'"Login" from HTTP API credentials in control panel'),Ai=e("promosmsLogin","API Saio haste izena"),vi=e("promosmsPassword","API Pasahitza"),wi=e("pushyAPIKey","Secret API giltza"),Ii=e("pushyToken","Gailu tokena"),Ei=e("wayToGetClickSendSMSToken","API erabiltzailea and API giltza hemendik lortu ditzakezu: {0} ."),Mi=e("Query","Kontsulta"),Ci=e("settingsCertificateExpiry","TLS irungitze zertifikatua"),Li=e("certificationExpiryDescription","HTTPS Monitorizazio jakinarazpena martxan jarri TLS zertifikatua iraungitzeko hau falta denean:"),Ni=e("Domain","Domeinua"),Ri=e("Workstation","Lan gunea"),Ui=e("disableCloudflaredNoAuthMsg","Ez Auth moduan zaude, pasahitza ez da beharrezkoa.");e("default",{languageName:a,checkEverySecond:t,retryCheckEverySecond:o,retriesDescription:i,ignoreTLSError:r,upsideDownModeDescription:n,maxRedirectDescription:s,acceptedStatusCodesDescription:u,passwordNotMatchMsg:l,notificationDescription:d,keywordDescription:c,pauseDashboardHome:p,deleteMonitorMsg:m,deleteNotificationMsg:h,dnsPortDescription:k,resolverserverDescription:g,rrtypeDescription:z,enableDefaultNotificationDescription:b,pauseMonitorMsg:y,clearEventsMsg:S,clearHeartbeatsMsg:P,confirmClearStatisticsMsg:D,importHandleDescription:T,confirmImportMsg:f,twoFAVerifyLabel:A,tokenValidSettingsMsg:v,confirmEnableTwoFAMsg:w,confirmDisableTwoFAMsg:I,Settings:E,Dashboard:M,"New Update":"Eguneraketa berria",Language:C,Appearance:L,Theme:N,General:R,"Primary Base URL":"Oinarrizkoa URL",Version:U,"Check Update On GitHub":"Egiaztatu eguneraketa GitHuben",List:x,Add:G,"Add New Monitor":"Gehitu monitorizazio berria","Quick Stats":"Estatistika azkarrak",Up:H,Down:B,Pending:O,Unknown:F,Pause:K,Name:W,Status:Z,DateTime:j,Message:Y,"No important events":"Gertaera garrantzitsurik ez",Resume:J,Edit:V,Delete:q,Current:Q,Uptime:_,"Cert Exp.":"Ziurtagiri iraun.",day:X,"-day":"-egun",hour:$,"-hour":"-ordu",Response:ee,Ping:ae,"Monitor Type":"Monitorizazio mota",Keyword:te,"Friendly Name":"Izen xumea",URL:oe,Hostname:ie,Port:re,"Heartbeat Interval":"Pultsu interbaloak",Retries:ne,"Heartbeat Retry Interval":"Pultsu errepikatze interbaloak",Advanced:se,"Upside Down Mode":"Alderantzizkako modua","Max. Redirects":"Berbideratze max.","Accepted Status Codes":"Onartutako egoera kodeak","Push URL":"Push URLa",needPushEvery:ue,pushOptionalParams:le,Save:de,Notifications:ce,"Not available, please setup.":"Ez dago eskuragarri, ezarri mesedez.","Setup Notification":"Ezarri jakinarazpenak",Light:pe,Dark:me,Auto:he,"Theme - Heartbeat Bar":"Gaia - Pultsu barra",Normal:ke,Bottom:ge,None:ze,Timezone:be,"Search Engine Visibility":"Bilatzaile ikurgarritasuna","Allow indexing":"Onartu indexatzea","Discourage search engines from indexing site":"Discourage search engines from indexing site","Change Password":"Aldatu pasahitza","Current Password":"Uneko pasahitza","New Password":"Pasahitz berria","Repeat New Password":"Errepikatu pasahitz berria","Update Password":"Eguneratu pasahitza","Disable Auth":"Desgaitu Auth","Enable Auth":"Gaitu Auth","disableauth.message1":"Ziur zaude <strong>autentifikazioa desgaitu</strong> nahi duzula?","disableauth.message2":"Egoera jakin batzuetarako diseinatuta dago, Uptime Kumaren <strong>aurrean hirugarrengo autentifikazio batzuek jartzeko</strong> (Cloudflare Access, Authelia edo beste autentifikazio-mekanismo batzuk).","Please use this option carefully!":"Mesedez, kontuz erabili aukera hau!",Logout:ye,Leave:Se,"I understand, please disable":"Ulertzen dut, mesedez desgaitu",Confirm:Pe,Yes:De,No:Te,Username:fe,Password:Ae,"Remember me":"Gogora nazazu",Login:ve,"No Monitors, please":"Monitorizaziorik ez, mesedez","add one":"gehitu bat","Notification Type":"Jakinarazpen mota",Email:we,Test:Ie,"Certificate Info":"Ziurtagiri informazioa","Resolver Server":"Ebazpen-zerbitzaria","Resource Record Type":"Baliabideen erregistro mota","Last Result":"Azken emaitza","Create your admin account":"Sortu zure admin kontua","Repeat Password":"Errepikatu pasahitza","Import Backup":"segurtasun-kopia inportatu","Export Backup":"segurtasun-kopia esportatu",Export:Ee,Import:Me,respTime:Ce,notAvailableShort:Le,"Default enabled":"Lehenetsia gaituta","Apply on all existing monitors":"Aplikatu existitzen diren monitorizazio guztietan",Create:Ne,"Clear Data":"Garbitu datuak",Events:Re,Heartbeats:Ue,"Auto Get":"Auto Get",backupDescription:xe,backupDescription2:Ge,backupDescription3:He,alertNoFile:Be,alertWrongFileType:Oe,"Clear all statistics":"Garbitu estatistika guztiak","Skip existing":"Saltatu existitzen bada",Overwrite:Fe,Options:Ke,"Keep both":"Biak mantendu","Verify Token":"Egiaztatu Tokena","Setup 2FA":"Ezarri 2FA","Enable 2FA":"Gaitu 2FA","Disable 2FA":"Desgaitu 2FA","2FA Settings":"2FA ezarpenak","Two Factor Authentication":"Bi aldetako autentifikazioa (2FA)",Active:We,Inactive:Ze,Token:je,"Show URI":"Erakutsi URIa",Tags:Ye,"Add New below or Select...":"Gehitu beste bat behean edo hautatu...","Tag with this name already exist.":"Izen hau duen etiketa dagoeneko badago.","Tag with this value already exist.":"Balio hau duen etiketa dagoeneko badago.",color:Je,"value (optional)":"balioa (hautazkoa)",Gray:Ve,Red:qe,Orange:Qe,Green:_e,Blue:Xe,Indigo:$e,Purple:ea,Pink:aa,"Search...":"Bilatu...","Avg. Ping":"Batazbesteko Pinga","Avg. Response":"Batazbesteko erantzuna","Entry Page":"Sarrera orria",statusPageNothing:ta,"No Services":"Zerbitzurik ez","All Systems Operational":"Sistema guztiak martxan","Partially Degraded Service":"Zerbitzu partzialki degradatua","Degraded Service":"Zerbitzu degradatua","Add Group":"Gehitu taldea","Add a monitor":"Gehitu monitorizazioa","Edit Status Page":"Editatu egoera orria","Go to Dashboard":"Joan arbelera","Status Page":"Egoera orria","Status Pages":"Egoera orriak",defaultNotificationName:oa,here:ia,Required:ra,telegram:na,ZohoCliq:sa,"Bot Token":"Bot Tokena",wayToGetTelegramToken:ua,"Chat ID":"Txat IDa",supportTelegramChatID:la,wayToGetTelegramChatID:da,"YOUR BOT TOKEN HERE":"YOUR BOT TOKEN HERE",chatIDNotFound:ca,webhook:pa,"Post URL":"Bidalketa URLa","Content Type":"Eduki mota",webhookJsonDesc:ma,webhookFormDataDesc:ha,smtp:ka,secureOptionNone:ga,secureOptionTLS:za,"Ignore TLS Error":"Ignore TLS Error","From Email":"Email honetatik",emailCustomSubject:ba,"To Email":"Email honetara",smtpCC:ya,smtpBCC:Sa,discord:Pa,"Discord Webhook URL":"Discord Webhook URL",wayToGetDiscordURL:Da,"Bot Display Name":"Bot Display Name","Prefix Custom Message":"Prefix Custom Message","Hello @everyone is...":"Hello {'@'}everyone is...",teams:Ta,"Webhook URL":"Webhook URL",wayToGetTeamsURL:fa,wayToGetZohoCliqURL:Aa,signal:va,Number:"Zenbakia",Recipients:wa,needSignalAPI:Ia,wayToCheckSignalURL:Ea,signalImportant:Ma,gotify:Ca,"Application Token":"Aplikazio tokena","Server URL":"Zerbitzari URLa",Priority:La,slack:Na,"Icon Emoji":"Emoji ikonoa","Channel Name":"Kanalaren izena","Uptime Kuma URL":"Uptime Kuma URL",aboutWebhooks:Ra,aboutChannelName:Ua,aboutKumaURL:xa,emojiCheatSheet:Ga,"rocket.chat":"Rocket.Chat",pushover:Ha,pushy:Ba,PushByTechulus:Oa,octopush:Fa,promosms:Ka,clicksendsms:Wa,lunasea:Za,apprise:ja,GoogleChat:Ya,pushbullet:Ja,line:Va,mattermost:qa,"User Key":"Erabiltzaile gakoa",Device:Qa,"Message Title":"Mezuaren izenburua","Notification Sound":"Jakinarazpen soinua","More info on:":"More info on: {0}",pushoverDesc1:_a,pushoverDesc2:Xa,"SMS Type":"SMS mota",octopushTypePremium:$a,octopushTypeLowCost:et,checkPrice:at,apiCredentials:tt,octopushLegacyHint:ot,"Check octopush prices":"Check octopush prices {0}.",octopushPhoneNumber:it,octopushSMSSender:rt,"LunaSea Device ID":"LunaSea Device ID","Apprise URL":"Apprise URL","Example:":"Adibidez: {0}","Read more:":"Irakurri gehiago: {0}","Status:":"Egoera: {0}","Read more":"Irakurri gehiago",appriseInstalled:nt,appriseNotInstalled:st,"Access Token":"Access Token","Channel access token":"Channel access token","Line Developers Console":"Line Developers Console",lineDevConsoleTo:ut,"Basic Settings":"Oinarrizko ezarpenak","User ID":"Erabiltzaile ID","Messaging API":"Messaging API",wayToGetLineChannelToken:lt,"Icon URL":"Ikono URL",aboutIconURL:dt,aboutMattermostChannelName:ct,matrix:pt,promosmsTypeEco:mt,promosmsTypeFlash:ht,promosmsTypeFull:kt,promosmsTypeSpeed:gt,promosmsPhoneNumber:zt,promosmsSMSSender:bt,"Feishu WebHookUrl":"Feishu WebHookURL",matrixHomeserverURL:yt,"Internal Room Id":"Internal Room ID",matrixDesc1:St,matrixDesc2:Pt,Method:Dt,Body:Tt,Headers:ft,PushUrl:At,HeadersInvalidFormat:vt,BodyInvalidFormat:wt,"Monitor History":"Monitorizazio Historia",clearDataOlderThan:It,PasswordsDoNotMatch:Et,records:Mt,"One record":"One record",steamApiKeyDescription:Ct,"Current User":"Uneko erabiltzailea",topic:Lt,topicExplanation:Nt,successMessage:Rt,successMessageExplanation:Ut,recent:xt,Done:Gt,Info:Ht,Security:Bt,"Steam API Key":"Steam API Giltza","Shrink Database":"Shrink Datubasea","Pick a RR-Type...":"Pick a RR-Type...","Pick Accepted Status Codes...":"Hautatu onartutako egoera kodeak...",Default:Ot,"HTTP Options":"HTTP Aukerak","Create Incident":"Sortu inzidentzia",Title:Ft,Content:Kt,Style:Wt,info:Zt,warning:jt,danger:Yt,error:Jt,critical:Vt,primary:qt,light:Qt,dark:_t,Post:Xt,"Please input title and content":"Mesedez sartu titulua eta edukia",Created:$t,"Last Updated":"Azken eguneratzea",Unpin:eo,"Switch to Light Theme":"Aldatu gai argira","Switch to Dark Theme":"Aldatu gai ilunera","Show Tags":"Erakutsi etiketak","Hide Tags":"Ezkutatu etiketak",Description:ao,"No monitors available.":"Monitorizaziorik eskuragarri ez.","Add one":"Gehitu bat","No Monitors":"Monitorizaziorik ez","Untitled Group":"Titulurik gabeko taldea",Services:to,Discard:oo,Cancel:io,"Powered by":"Honekin egina:",shrinkDatabaseDescription:ro,serwersms:no,serwersmsAPIUser:so,serwersmsAPIPassword:uo,serwersmsPhoneNumber:lo,serwersmsSenderName:co,stackfield:po,Customize:mo,"Custom Footer":"Oin pertsonalizatua","Custom CSS":"CSS pertsonalizatua",smtpDkimSettings:ho,smtpDkimDesc:ko,documentation:go,smtpDkimDomain:zo,smtpDkimKeySelector:bo,smtpDkimPrivateKey:yo,smtpDkimHashAlgo:So,smtpDkimheaderFieldNames:Po,smtpDkimskipFields:Do,wayToGetPagerDutyKey:To,"Integration Key":"Integration Key","Integration URL":"Integrazio URLa","Auto resolve or acknowledged":"Auto resolve or acknowledged","do nothing":"ez egin ezer","auto acknowledged":"auto acknowledged","auto resolve":"auto resolve",gorush:fo,alerta:Ao,alertaApiEndpoint:vo,alertaEnvironment:wo,alertaApiKey:Io,alertaAlertState:Eo,alertaRecoverState:Mo,deleteStatusPageMsg:Co,Proxies:Lo,default:"Lehenetsia",enabled:No,setAsDefault:Ro,deleteProxyMsg:Uo,proxyDescription:xo,enableProxyDescription:Go,setAsDefaultProxyDescription:Ho,"Certificate Chain":"Certificate Chain",Valid:Bo,Invalid:Oo,AccessKeyId:Fo,SecretAccessKey:Ko,PhoneNumbers:Wo,TemplateCode:Zo,SignName:jo,"Sms template must contain parameters: ":"Sms txantiloiak parametroak eduki behar ditu: ","Bark Endpoint":"Bark Endpoint",WebHookUrl:Yo,SecretKey:Jo,"For safety, must use secret key":"For safety, must use secret key","Device Token":"Gailu tokena",Platform:Vo,iOS:qo,Android:Qo,Huawei:_o,High:Xo,Retry:$o,Topic:ei,"WeCom Bot Key":"WeCom Bot Key","Setup Proxy":"Ezarri Proxya","Proxy Protocol":"Proxy protokoloa","Proxy Server":"Proxy zerbitzaria","Proxy server has authentication":"Proxy zerbitzariak autentifikazioa dauka",User:ai,Installed:ti,"Not installed":"Instalatu gabe",Running:oi,"Not running":"Ez martxan","Remove Token":"Ezabatu Tokena",Start:ii,Stop:ri,"Uptime Kuma":"Uptime Kuma","Add New Status Page":"Gehitu egoera orri berria",Slug:ni,"Accept characters:":"Onartu karaktereak:",startOrEndWithOnly:si,"No consecutive dashes":"No consecutive dashes",Next:ui,"The slug is already taken. Please choose another slug.":"Sluga dagoeneko hartuta dago. Mesedez beste bat hautatu.","No Proxy":"Proxyrik ez",Authentication:li,"HTTP Basic Auth":"HTTP oinarrizko Auth","New Status Page":"Egoera orri berria","Page Not Found":"Orria ez da aurkitu","Reverse Proxy":"Alderantzizkako Proxya",Backup:di,About:ci,wayToGetCloudflaredURL:pi,cloudflareWebsite:mi,"Message:":"Mezua:","Don't know how to get the token? Please read the guide:":"Don't know how to get the token? Please read the guide:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.","Other Software":"Beste softwarea","For example: nginx, Apache and Traefik.":"Adibidez: nginx, Apache and Traefik.","Please read":"Mesedez irakurri","Subject:":"Gaia:","Valid To:":"Balio-epea:","Days Remaining:":"Egun faltan:","Issuer:":"Issuer:","Fingerprint:":"Hatzmarka:","No status pages":"Egoera orririk ez","Domain Name Expiry Notification":"Domeinu izen iraungitze jakinarazpena",Proxy:"Proxya","Date Created":"Data sortuta",onebotHttpAddress:hi,onebotMessageType:ki,onebotGroupMessage:gi,onebotPrivateMessage:zi,onebotUserOrGroupId:bi,onebotSafetyTips:yi,"PushDeer Key":"PushDeer Key","Footer Text":"Oineko testua","Show Powered By":"Erakutsi Honekin egina:","Domain Names":"Domeinu izenak",signedInDisp:Si,signedInDispDisabled:Pi,"Certificate Expiry Notification":"Zertifikatu iraungitze jakinarazpena","API Username":"API Erabiltzailea","API Key":"API Gakoa","Recipient Number":"Recipient Number","From Name/Number":"From Name/Number","Leave blank to use a shared sender number.":"Leave blank to use a shared sender number.","Octopush API Version":"Octopush API Version","Legacy Octopush-DM":"Legacy Octopush-DM",endpoint:Di,octopushAPIKey:Ti,octopushLogin:fi,promosmsLogin:Ai,promosmsPassword:vi,"pushoversounds pushover":"Pushover (defektuz)","pushoversounds bike":"Bizikleta","pushoversounds bugle":"Bugle","pushoversounds cashregister":"Cash Register","pushoversounds classical":"Klasikoa","pushoversounds cosmic":"Kosmikoa","pushoversounds falling":"Erortzen","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"Incoming","pushoversounds intermission":"Intermission","pushoversounds magic":"Magia","pushoversounds mechanical":"Mekanikoa","pushoversounds pianobar":"Piano Bar","pushoversounds siren":"Sirena","pushoversounds spacealarm":"Espazio Alarma","pushoversounds tugboat":"Tug Boat","pushoversounds alien":"Alien Alarm (long)","pushoversounds climb":"Climb (long)","pushoversounds persistent":"Persistent (long)","pushoversounds echo":"Pushover Echo (long)","pushoversounds updown":"Up Down (long)","pushoversounds vibrate":"Bibrazioa soilik","pushoversounds none":"Bat ere ez (isilik)",pushyAPIKey:wi,pushyToken:Ii,"Show update if available":"Erakutsi eguneratzea eskuragarri badago","Also check beta release":"Beta bertsioak ere egiaztatu","Using a Reverse Proxy?":"Proxy alderantzizkako zerbitzaria erabiltzen?","Check how to config it for WebSocket":"Check how to config it for WebSocket","Steam Game Server":"Steam joko zerbitzaria","Most likely causes:":"Arrazoi probableenak:","The resource is no longer available.":"Baliabidea ez dago erabilgarri.","There might be a typing error in the address.":"Idazketa-akats bat egon daiteke helbidean.","What you can try:":"Probatu dezakezuna:","Retype the address.":"Berridatzi helbidea.","Go back to the previous page.":"Itzuli aurreko orrialdera","Coming Soon":"Laster",wayToGetClickSendSMSToken:Ei,"Connection String":"Konexio katea",Query:Mi,settingsCertificateExpiry:Ci,certificationExpiryDescription:Li,"ntfy Topic":"ntfy Topic",Domain:Ni,Workstation:Ri,disableCloudflaredNoAuthMsg:Ui})}}}));
