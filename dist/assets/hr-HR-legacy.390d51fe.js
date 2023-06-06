System.register([],(function(e,o){"use strict";return{execute:function(){var o=e("languageName","Hrvatski"),a=e("checkEverySecond","Provjera svake {0} sekunde"),i=e("retryCheckEverySecond","Ponovni pokušaj svake {0} sekunde"),t=e("retriesDescription","Broj ponovnih pokušaja prije nego će se servis označiti kao nedostupan te poslati obavijest"),n=e("ignoreTLSError","Ignoriraj TLS/SSL pogreške za HTTPS web stranice"),r=e("upsideDownModeDescription","Preokreni logiku statusa. Ako se primi pozitivan odgovor, smatra se da je usluga nedostupna."),s=e("maxRedirectDescription","Maksimalan broj preusmjeravanja. Postaviti na 0 kako bi se preusmjeravanja onemogućila."),u=e("acceptedStatusCodesDescription","Odaberite statusne kodove koji se smatraju uspješnim odgovorom."),p=e("passwordNotMatchMsg","Lozinke se ne poklapaju."),l=e("notificationDescription","Obavijesti će funkcionirati samo ako su dodijeljene monitoru."),d=e("keywordDescription","Ključna riječ za pretragu, u obliku običnog HTML-a ili u JSON formatu. Pretraga je osjetljiva na velika i mala slova."),m=e("deleteMonitorMsg","Jeste li sigurni da želite izbrisati monitor?"),k=e("deleteNotificationMsg","Jeste li sigurni da želite izbrisati ovu obavijest za sve monitore?"),c=e("resolverserverDescription","Cloudflare je zadani DNS poslužitelj. Možete to promijeniti u bilo kojem trenutku."),j=e("rrtypeDescription","Odaberite vrstu DNS zapisa o resursu kojeg želite pratiti"),v=e("pauseMonitorMsg","Jeste li sigurni da želite pauzirati?"),g=e("enableDefaultNotificationDescription","Ova će obavijesti biti omogućena za sve nove monitore. Možete ju ručno onemogućiti za pojedini monitor."),h=e("clearEventsMsg","Jeste li sigurni da želite izbrisati sve zapise o događajima za ovaj monitor?"),P=e("clearHeartbeatsMsg","Jeste li sigurni da želite izbrisati sve zapise o provjerama za ovaj monitor?"),b=e("confirmClearStatisticsMsg","Jeste li sigurni da želite izbrisati SVE statistike?"),S=e("importHandleDescription",'Odaberite opciju "Preskoči postojeće" ako želite preskočiti uvoz postojećih monitora i obavijesti ako dođe do poklapanja u imenu. Opcija "Prepiši" će izbrisati postojeće monitore i obavijesti.'),D=e("confirmImportMsg","Jeste li sigurni da želite pokrenuti uvoz? Provjerite jeste li odabrali ispravnu opciju uvoza."),T=e("twoFAVerifyLabel","Unesite svoj 2FA token:"),z=e("tokenValidSettingsMsg","Token je važeći! Sada možete spremiti postavke dvofaktorske autentikacije."),y=e("confirmEnableTwoFAMsg","Želite li omogućiti dvofaktorsku autentikaciju?"),A=e("confirmDisableTwoFAMsg","Jeste li sigurni da želite onemogućiti dvofaktorsku autentikaciju?"),f=e("Settings","Postavke"),I=e("Dashboard","Kontrolna ploča"),N=e("Language","Jezik"),M=e("Appearance","Izgled"),C=e("Theme","Tema"),w=e("General","Općenito"),U=e("Version","Inačica"),R=e("List","Popis"),L=e("Add","Dodaj"),O=e("Up","Dostupno"),x=e("Down","Nedostupno"),E=e("Pending","U tijeku"),H=e("Unknown","Nepoznato"),K=e("pauseDashboardHome","Pauzirano"),B=e("Name","Naziv"),F=e("Status","Status"),G=e("DateTime","Vremenska oznaka"),V=e("Message","Izvještaj"),W=e("Pause","Pauziraj"),J=e("Resume","Nastavi"),Z=e("Edit","Uredi"),Q=e("Delete","Obriši"),X=e("Current","Trenutno"),Y=e("Uptime","Dostupnost"),q=e("day","dan | dana"),_=e("hour","sat"),$=e("Response","Odgovor"),ee=e("Ping","Odziv"),oe=e("Keyword","Ključna riječ"),ae=e("URL","URL"),ie=e("Hostname","Domaćin"),te=e("Port","Port"),ne=e("Retries","Broj ponovnih pokušaja"),re=e("Advanced","Napredne postavke"),se=e("needPushEvery","Potrebno je slati zahtjeve na URL svakih {0} sekundi."),ue=e("pushOptionalParams","Neobavezni parametri: {0}"),pe=e("Save","Spremi"),le=e("Notifications","Obavijesti"),de=e("Light","Svijetli način"),me=e("Dark","Tamni način"),ke=e("Auto","Automatski"),ce=e("Normal","Normalno"),je=e("Bottom","Ispod"),ve=e("None","Isključeno"),ge=e("Timezone","Vremenska zona"),he=e("Logout","Odjava"),Pe=e("Leave","Poništi"),be=e("Confirm","Potvrda"),Se=e("Yes","Da"),De=e("No","Ne"),Te=e("Username","Korisničko ime"),ze=e("Password","Lozinka"),ye=e("Login","Prijava"),Ae=e("Email","E-pošta"),fe=e("Test","Testiraj"),Ie=e("Export","Izvoz"),Ne=e("Import","Uvoz"),Me=e("respTime","Vrijeme odgovora (ms)"),Ce=e("notAvailableShort","ne postoji"),we=e("Create","Kreiraj"),Ue=e("Events","Događaji"),Re=e("Heartbeats","Provjere"),Le=e("backupDescription","Moguće je napraviti sigurnosnu kopiju svih monitora i obavijesti koja će biti spremljena kao JSON datoteka."),Oe=e("backupDescription2","Napomena: povijest i podaci o događajima nisu uključeni u sigurnosnu kopiju."),xe=e("backupDescription3","Osjetljivi podaci poput tokena za obavijesti uključeni su u sigurnosnu kopiju. Zato je potrebno čuvati izvoz na sigurnom mjestu."),Ee=e("alertNoFile","Datoteka za uvoz nije odabrana."),He=e("alertWrongFileType","Datoteka za uvoz nije u JSON formatu."),Ke=e("Overwrite","Prepiši"),Be=e("Options","Opcije"),Fe=e("Active","Aktivna"),Ge=e("Inactive","Neaktivno"),Ve=e("Token","Token"),We=e("Tags","Oznake"),Je=e("color","Boja"),Ze=e("Gray","Siva"),Qe=e("Red","Crvena"),Xe=e("Orange","Narančasta"),Ye=e("Green","Zelena"),qe=e("Blue","Plava"),_e=e("Indigo","Indigo"),$e=e("Purple","Ljubičasta"),eo=e("Pink","Ružičasta"),oo=e("statusPageNothing","Ovdje nema ničega, dodajte grupu ili monitor."),ao=e("defaultNotificationName","Moja {number}. {notification} obavijest"),io=e("here","ovdje"),to=e("Required","Potrebno"),no=e("telegram","Telegram"),ro=e("wayToGetTelegramToken","Token možete nabaviti preko {0}."),so=e("supportTelegramChatID","Podržani su ID-jevi izravnih razgovora, grupa i kanala"),uo=e("wayToGetTelegramChatID","ID razgovora možete saznati tako da botu pošaljete poruku te odete na ovaj URL:"),po=e("chatIDNotFound","ID razgovora nije pronađen; prvo morate poslati poruku botu"),lo=e("webhook","Webhook"),mo=e("webhookJsonDesc","{0} je dobra opcija za moderne HTTP poslužitelje poput Express.js-a"),ko=e("webhookFormDataDesc","{multipart} je moguća alternativa za PHP, samo je potrebno parsirati JSON koristeći {decodeFunction}"),co=e("smtp","E-mail (SMTP)"),jo=e("secureOptionNone","Bez sigurnosti / STARTTLS (25, 587)"),vo=e("secureOptionTLS","TLS (465)"),go=e("emailCustomSubject",'Prilagođeno "Subject" polje'),ho=e("smtpCC","Cc"),Po=e("smtpBCC","Bcc"),bo=e("discord","Discord"),So=e("wayToGetDiscordURL","Ovo možete dobiti tako da odete na Postavke servera -> Integracije -> Napravi webhook"),Do=e("teams","Microsoft Teams"),To=e("wayToGetTeamsURL","Više informacija o Teams webhookovima možete pročitati {0}."),zo=e("signal","Signal"),yo=e("Recipients","Primatelji"),Ao=e("needSignalAPI","Potreban je klijent s REST sučeljem."),fo=e("wayToCheckSignalURL","Više informacija o postavljanju Signal klijenta:"),Io=e("signalImportant","VAŽNO: Grupe i brojevi se ne mogu istovremeno koristiti kao primatelji!"),No=e("gotify","Gotify"),Mo=e("Priority","Prioritet"),Co=e("slack","Slack"),wo=e("aboutWebhooks","Dodatne informacije o webhookovima su dostupne na: {0}"),Uo=e("aboutChannelName","Unesite ime {0} kanala u polju Naziv kanala ako želite zaobići webhook kanal. Primjerice: #neki-kanal"),Ro=e("aboutKumaURL",'Ako je polje "Uptime Kuma URL" prazno, koristi se zadana vrijednost koja vodi na GitHub stranicu projekta.'),Lo=e("emojiCheatSheet","Popis emotikona: {0}"),Oo=e("pushover","Pushover"),xo=e("pushy","Pushy"),Eo=e("octopush","Octopush"),Ho=e("promosms","PromoSMS"),Ko=e("clicksendsms","ClickSend SMS"),Bo=e("lunasea","LunaSea"),Fo=e("apprise","Apprise (Podržava preko 50 usluga za obavijesti)"),Go=e("pushbullet","Pushbullet"),Vo=e("line","LINE"),Wo=e("mattermost","Mattermost"),Jo=e("Device","Uređaji"),Zo=e("pushoverDesc1","Hitni prioritet (2) ima zadani istek vremena od 30 sekundi između ponovnih pokušaja te će isteći nakon 1 sata."),Qo=e("pushoverDesc2",'Ako želite slati obavijesti na više uređaja, ispunite polje "Uređaji".'),Xo=e("octopushTypePremium","Premium (Brzo - preporučeno za obavijesti)"),Yo=e("octopushTypeLowCost","Low Cost (Sporo - mobilni operateri ponekad blokiraju ove poruke)"),qo=e("checkPrice","Provjerite {0} cijene:"),_o=e("apiCredentials","Vjerodajnice za API"),$o=e("octopushLegacyHint","Koristite li staru inačicu usluge Octopush (2011-2020) ili noviju inačicu?"),ea=e("octopushPhoneNumber","Telefonski broj (međunarodni format, primjerice: +38512345678) "),oa=e("octopushSMSSender","Naziv SMS pošiljatelja : 3-11 alfanumeričkih znakova i razmak (a-zA-Z0-9)"),aa=e("appriseInstalled","Apprise je instaliran."),ia=e("appriseNotInstalled","Apprise nije instaliran. {0}"),ta=e("lineDevConsoleTo","LINE razvojna konzola - {0}"),na=e("wayToGetLineChannelToken","Prvo, pristupite {0}, kreirajte pružatelja usluga te kanal (API za razmjenu poruka), zatim možete dobiti token za pristup kanalu te korisnički ID za polja iznad."),ra=e("aboutIconURL",'Možete postaviti poveznicu na sliku u polju "URL slike" kako biste spriječili korištenje zadane slike. Ovo se polje neće koristiti ako je postavljeno polje "Emotikon".'),sa=e("aboutMattermostChannelName",'Možete promijeniti kanal u kojeg webhook šalje tako da ispunite polje "Naziv kanala". Ta opcija mora biti omogućena unutar Mattermost postavki za webhook. Primjerice: #neki-kanal'),ua=e("matrix","Matrix"),pa=e("promosmsTypeEco","SMS ECO - jeftina, ali spora opcija koja je često preopterećena. Ograničeno samo na primatelje unutar Poljske."),la=e("promosmsTypeFlash","SMS FLASH - Poruka se automatski pojavljuje na uređaju primatelja. Ograničeno samo na primatelje unutar Poljske."),da=e("promosmsTypeFull","SMS FULL - Premium razina usluge, dozvoljava postavljanje naziva SMS pošiljatelja (Naziv mora biti registriran). Usluga pouzdana za obavijesti."),ma=e("promosmsTypeSpeed","SMS SPEED - Usluga najvećeg prioriteta. Brza i pouzdana, ali skupa (otprilike dvostruko skuplja od cijene usluge SMS FULL)."),ka=e("promosmsPhoneNumber","Telefonski broj (za primatelje unutar Poljske nije potrebno navoditi pozivni broj države)"),ca=e("promosmsSMSSender","Naziv SMS pošiljatelja: Registriran naziv ili jedan od zadanih: InfoSMS, SMS Info, MaxSMS, INFO, SMS"),ja=e("matrixHomeserverURL","URL Matrix homeservera (uključujući http(s):// te port, ako je potrebno)"),va=e("matrixDesc1","Interni ID sobe se može pronaći u naprednim postavkama sobe unutar Matrix klijenta. ID sobe nalikuje idućem zapisu: !QMdRCpUIfLwsfjxye6:home.server."),ga=e("matrixDesc2","Preporučuje se stvaranje novog korisnika te suzdržavanje od korištenja pristupnog tokena vlastitog Matrix korisnika. Novog korisnika potrebno je dodati u sobe u kojima želite primati obavijesti. Pristupni token možete dobiti pokretanjem naredbe {0}"),ha=e("Method","Metoda"),Pa=e("Body","Tijelo"),ba=e("Headers","Zaglavlja"),Sa=e("PushUrl","Push URL"),Da=e("HeadersInvalidFormat","Zaglavlja nisu nije valjani JSON: "),Ta=e("BodyInvalidFormat","Tijelo zahtjeva nije valjani JSON: "),za=e("clearDataOlderThan","Podaci o povijesti monitora čuvaju se {0} dana."),ya=e("PasswordsDoNotMatch","Lozinke se ne poklapaju."),Aa=e("records","zapisa"),fa=e("steamApiKeyDescription","Za praćenje Steam poslužitelja za igru, potrebno je imati Steam Web-API ključ. Možete registrirati vlastiti ključ ovdje: "),Ia=e("recent","Nedavno"),Na=e("Done","Gotovo"),Ma=e("Info","Informacije"),Ca=e("Security","Sigurnost"),wa=e("Default","Zadano"),Ua=e("Title","Naslov"),Ra=e("Content","Sadržaj"),La=e("Style","Stil"),Oa=e("info","informacija"),xa=e("warning","upozorenje"),Ea=e("danger","opasnost"),Ha=e("primary","primarno"),Ka=e("light","svijetlo"),Ba=e("dark","tamno"),Fa=e("Post","Objavi"),Ga=e("Created","Stvoreno"),Va=e("Unpin","Ukloni"),Wa=e("Description","Opis"),Ja=e("Services","Usluge"),Za=e("Discard","Odbaci"),Qa=e("Cancel","Otkaži"),Xa=e("Saved","Spremljeno"),Ya=e("PushByTechulus","Push by Techulus"),qa=e("GoogleChat","Google Chat (preko platforme Google Workspace)"),_a=e("shrinkDatabaseDescription","Pokreni VACUUM operaciju za SQLite. Ako je baza podataka kreirana nakon inačice 1.10.0, AUTO_VACUUM opcija već je uključena te ova akcija nije nužna."),$a=e("serwersms","SerwerSMS.pl"),ei=e("serwersmsAPIUser","API korisničko ime (uključujući webapi_ prefiks)"),oi=e("serwersmsAPIPassword","API lozinka"),ai=e("serwersmsPhoneNumber","Broj telefona"),ii=e("serwersmsSenderName","Ime SMS pošiljatelja (registrirano preko korisničkog portala)"),ti=e("stackfield","Stackfield"),ni=e("smtpDkimSettings","DKIM postavke"),ri=e("smtpDkimDesc","Za više informacija, postoji Nodemailer DKIM {0}."),si=e("documentation","dokumentacija"),ui=e("smtpDkimDomain","Domena"),pi=e("smtpDkimKeySelector","Odabir ključa"),li=e("smtpDkimPrivateKey","Privatni ključ"),di=e("smtpDkimHashAlgo","Hash algoritam (neobavezno)"),mi=e("smtpDkimheaderFieldNames","Ključevi zaglavlja za potpis (neobavezno)"),ki=e("smtpDkimskipFields","Ključevi zaglavlja koji se neće potpisati (neobavezno)"),ci=e("gorush","Gorush"),ji=e("alerta","Alerta"),vi=e("alertaApiEndpoint","Krajnja točka API-ja (Endpoint)"),gi=e("alertaEnvironment","Okruženje (Environment)"),hi=e("alertaApiKey","API ključ"),Pi=e("alertaAlertState","Stanje upozorenja"),bi=e("alertaRecoverState","Stanje oporavka"),Si=e("deleteStatusPageMsg","Sigurno želite obrisati ovu statusnu stranicu?"),Di=e("resendEveryXTimes","Ponovno pošalji svakih {0} puta"),Ti=e("resendDisabled","Ponovno slanje je onemogućeno"),zi=e("dnsPortDescription","Port DNS poslužitelja. Zadana vrijednost je 53. Moguće je promijeniti ga u svakom trenutku."),yi=e("topic","Tema"),Ai=e("topicExplanation","MQTT tema koja će se monitorirati"),fi=e("successMessage","Poruka o uspjehu"),Ii=e("successMessageExplanation","MQTT poruka koja se smatra uspješnom"),Ni=e("error","greška"),Mi=e("critical","kritično"),Ci=e("Customize","Customize"),wi=e("wayToGetPagerDutyKey",'Ključ možete dobiti odlaskom na "Service -> Service Directory -> (Odabrani servis) -> Integrations -> Add integration". Ovdje pretražite za "Events API V2". Više informacija {0}'),Ui=e("Proxies","Proxy poslužitelji"),Ri=e("enabled","Omogućeno"),Li=e("setAsDefault","Postavi kao zadano"),Oi=e("deleteProxyMsg","Sigurno želite obrisati ovaj proxy za sve monitore?"),xi=e("proxyDescription","Proxy poslužitelji moraju biti dodijeljni monitoru kako bi funkcionirali."),Ei=e("enableProxyDescription","Onemogućeni proxy poslužitelj neće imati učinak na zahtjeve monitora. Možete privremeno onemogućiti proxy poslužitelja za sve monitore."),Hi=e("setAsDefaultProxyDescription","Ovaj proxy poslužitelj bit će odmah omogućen za nove monitore. I dalje ga možete onemogućiti za svaki monitor zasebno."),Ki=e("Valid","Važeći"),Bi=e("Invalid","Nevažeći"),Fi=e("AccessKeyId","AccessKey ID"),Gi=e("SecretAccessKey","AccessKey tajni ključ"),Vi=e("PhoneNumbers","Telefonski brojevi"),Wi=e("TemplateCode","Predložak koda"),Ji=e("SignName","Potpis"),Zi=e("WebHookUrl","WebHookUrl"),Qi=e("SecretKey","Tajni ključ"),Xi=e("Platform","Platforma"),Yi=e("iOS","iOS"),qi=e("Android","Android"),_i=e("Huawei","Huawei"),$i=e("High","Visoko"),et=e("Retry","Ponovnih pokušaja"),ot=e("Topic","Tema"),at=e("User","Korisnik"),it=e("Installed","Instalirano"),tt=e("Running","Pokrenuto"),nt=e("Start","Pokreni"),rt=e("Stop","Zaustavi"),st=e("Slug","Slug"),ut=e("startOrEndWithOnly","Započinje ili završava znakovima {0}"),pt=e("Next","Sljedeće"),lt=e("Authentication","Autentikacija"),dt=e("Backup","Sigurnosno kopiranje"),mt=e("About","O Uptime Kumi"),kt=e("wayToGetCloudflaredURL","(Preuzmite cloudflared s {0})"),ct=e("cloudflareWebsite","Cloudflare web stranice"),jt=e("HomeAssistant","Home Assistant"),vt=e("onebotHttpAddress","OneBot HTTP adresa"),gt=e("onebotMessageType","OneBot tip poruke"),ht=e("onebotGroupMessage","Grupna"),Pt=e("onebotPrivateMessage","Privatna"),bt=e("onebotUserOrGroupId","ID korisnika/grupe"),St=e("onebotSafetyTips","Pristupni token mora biti postavljen"),Dt=e("signedInDisp","Prijavljeni ste kao {0}"),Tt=e("signedInDispDisabled","Autentikacija onemogućena."),zt=e("RadiusSecret","Radius Tajna"),yt=e("RadiusSecretDescription","Dijeljena Tajna između klijenta i poslužitelja"),At=e("RadiusCalledStationId","Called Station ID"),ft=e("RadiusCalledStationIdDescription","Identifikator pozivne stanice"),It=e("RadiusCallingStationId","Calling Station ID"),Nt=e("RadiusCallingStationIdDescription","Identifikator pozivajuće stanice"),Mt=e("endpoint","krajnja točka (endpoint)"),Ct=e("octopushAPIKey",'"API ključ" iz HTTP API postavki'),wt=e("octopushLogin",'"Korisničko ime" iz HTTP API postavki'),Ut=e("promosmsLogin","API korisničko ime"),Rt=e("promosmsPassword","API lozinka"),Lt=e("pushyAPIKey","Tajni API ključ"),Ot=e("pushyToken","Token uređaja"),xt=e("wayToGetClickSendSMSToken","Možete dobiti API korisničko ime i API ključ sa {0}."),Et=e("Query","Upit"),Ht=e("settingsCertificateExpiry","TLS istek certifikata"),Kt=e("certificationExpiryDescription","HTTPS monitori će obavijesiti kada je istek TLS certifikata za:"),Bt=e("deleteDockerHostMsg","Sigurno želite izbrisati ovog Docker domaćina za sve monitore?"),Ft=e("socket","Docker socket"),Gt=e("tcp","TCP / HTTP"),Vt=e("Domain","Domena"),Wt=e("Workstation","Radna stanica"),Jt=e("disableCloudflaredNoAuthMsg","Lozinka nije nužna dok je isključena autentikacija."),Zt=e("trustProxyDescription","Vjeruj 'X-Forwarded-*' zaglavljima. Ako želite dobiti ispravnu IP adresu klijenta i Uptime Kuma je iza reverznog proxy poslužitelja, trebate omogućiti ovo."),Qt=e("wayToGetLineNotifyToken","Možete dobiti pristupni token sa {0}"),Xt=e("Examples","Primjeri");e("default",{languageName:o,checkEverySecond:a,retryCheckEverySecond:i,retriesDescription:t,ignoreTLSError:n,upsideDownModeDescription:r,maxRedirectDescription:s,acceptedStatusCodesDescription:u,passwordNotMatchMsg:p,notificationDescription:l,keywordDescription:d,deleteMonitorMsg:m,deleteNotificationMsg:k,resolverserverDescription:c,rrtypeDescription:j,pauseMonitorMsg:v,enableDefaultNotificationDescription:g,clearEventsMsg:h,clearHeartbeatsMsg:P,confirmClearStatisticsMsg:b,importHandleDescription:S,confirmImportMsg:D,twoFAVerifyLabel:T,tokenValidSettingsMsg:z,confirmEnableTwoFAMsg:y,confirmDisableTwoFAMsg:A,Settings:f,Dashboard:I,"New Update":"Novo ažuriranje",Language:N,Appearance:M,Theme:C,General:w,"Primary Base URL":"Osnovni URL",Version:U,"Check Update On GitHub":"Provjeri dostupnost nove inačice na GitHubu",List:R,Add:L,"Add New Monitor":"Dodaj novi Monitor","Quick Stats":"Statistika",Up:O,Down:x,Pending:E,Unknown:H,pauseDashboardHome:K,Name:B,Status:F,DateTime:G,Message:V,"No important events":"Nema važnih događaja",Pause:W,Resume:J,Edit:Z,Delete:Q,Current:X,Uptime:Y,"Cert Exp.":"Istek cert.",day:q,"-day":"-dnevno",hour:_,"-hour":"-satno",Response:$,Ping:ee,"Monitor Type":"Vrsta Monitora",Keyword:oe,"Friendly Name":"Prilagođen naziv",URL:ae,Hostname:ie,Port:te,"Heartbeat Interval":"Interval provjere",Retries:ne,"Heartbeat Retry Interval":"Interval ponovnih pokušaja",Advanced:re,"Upside Down Mode":"Obrnuti način","Max. Redirects":"Maksimalan broj preusmjeravanja","Accepted Status Codes":"Prihvaćeni statusni kodovi","Push URL":"Push URL",needPushEvery:se,pushOptionalParams:ue,Save:pe,Notifications:le,"Not available, please setup.":"Nije dostupno, potrebno je dodati novu stavku.","Setup Notification":"Dodaj obavijest",Light:de,Dark:me,Auto:ke,"Theme - Heartbeat Bar":"Tema za traku dostupnosti",Normal:ce,Bottom:je,None:ve,Timezone:ge,"Search Engine Visibility":"Vidljivost tražilicama","Allow indexing":"Dopusti indeksiranje","Discourage search engines from indexing site":"Sprječavanje indeksiranja","Change Password":"Promjena lozinke","Current Password":"Trenutna lozinka","New Password":"Nova lozinka","Repeat New Password":"Potvrdite novu lozinku","Update Password":"Spremi novu lozinku","Disable Auth":"Onemogući autentikaciju","Enable Auth":"Omogući autentikaciju","disableauth.message1":"Jeste li sigurni da želite <strong>isključiti autentikaciju</strong>?","disableauth.message2":"To je za <strong>korisnike koji imaju vanjsku autentikaciju stranice</strong> ispred Uptime Kume, poput usluge Cloudflare Access.","Please use this option carefully!":"Pažljivo koristite ovu opciju.",Logout:he,Leave:Pe,"I understand, please disable":"Razumijem, svejedno onemogući",Confirm:be,Yes:Se,No:De,Username:Te,Password:ze,"Remember me":"Zapamti me",Login:ye,"No Monitors, please":"Nema monitora, ","add one":"dodaj jedan","Notification Type":"Tip obavijesti",Email:Ae,Test:fe,"Certificate Info":"Informacije o certifikatu","Resolver Server":"DNS poslužitelj","Resource Record Type":"Vrsta DNS zapisa","Last Result":"Posljednji rezultat","Create your admin account":"Stvori administratorski račun","Repeat Password":"Potvrda lozinke","Import Backup":"Uvoz sigurnosne kopije","Export Backup":"Izvoz sigurnosne kopije",Export:Ie,Import:Ne,respTime:Me,notAvailableShort:Ce,"Default enabled":"Omogući za nove monitore","Apply on all existing monitors":"Primijeni na postojeće monitore",Create:we,"Clear Data":"Obriši podatke",Events:Ue,Heartbeats:Re,"Auto Get":"Automatski dohvat",backupDescription:Le,backupDescription2:Oe,backupDescription3:xe,alertNoFile:Ee,alertWrongFileType:He,"Clear all statistics":"Obriši sve statistike","Skip existing":"Preskoči postojeće",Overwrite:Ke,Options:Be,"Keep both":"Zadrži sve","Verify Token":"Provjeri Token","Setup 2FA":"Postavi dvofaktorsku autentikaciju","Enable 2FA":"Omogući dvofaktorsku autentikaciju","Disable 2FA":"Onemogući dvofaktorsku autentikaciju","2FA Settings":"Postavke 2FA","Two Factor Authentication":"Dvofaktorska autentikacija",Active:Fe,Inactive:Ge,Token:Ve,"Show URI":"Pokaži URI",Tags:We,"Add New below or Select...":"Dodajte novu oznaku ispod ili odaberite...","Tag with this name already exist.":"Oznaka s tim nazivom već postoji","Tag with this value already exist.":"Oznaka s tom vrijednošću već postoji.",color:Je,"value (optional)":"Vrijednost (neobavezno)",Gray:Ze,Red:Qe,Orange:Xe,Green:Ye,Blue:qe,Indigo:_e,Purple:$e,Pink:eo,"Search...":"Pretraga...","Avg. Ping":"Prosječni odziv","Avg. Response":"Prosječni odgovor","Entry Page":"Početna stranica",statusPageNothing:oo,"No Services":"Nema usluga","All Systems Operational":"Svi sustavi su operativni","Partially Degraded Service":"Usluga djelomično nedostupna","Degraded Service":"Usluga nedostupna","Add Group":"Dodaj grupu","Add a monitor":"Dodaj monitor","Edit Status Page":"Uredi Statusnu stranicu","Go to Dashboard":"Na Kontrolnu ploču","Status Page":"Statusna stranica","Status Pages":"Statusne stranice",defaultNotificationName:ao,here:io,Required:to,telegram:no,"Bot Token":"Token bota",wayToGetTelegramToken:ro,"Chat ID":"ID razgovora",supportTelegramChatID:so,wayToGetTelegramChatID:uo,"YOUR BOT TOKEN HERE":"OVDJE IDE TOKEN BOTA",chatIDNotFound:po,webhook:lo,"Post URL":"URL Post zahtjeva","Content Type":"Tip sadržaja (Content Type)",webhookJsonDesc:mo,webhookFormDataDesc:ko,smtp:co,secureOptionNone:jo,secureOptionTLS:vo,"Ignore TLS Error":"Ignoriraj greške TLS-a","From Email":'Adresa za "From" polje',emailCustomSubject:go,"To Email":"Odredišne adrese e-pošte",smtpCC:ho,smtpBCC:Po,discord:bo,"Discord Webhook URL":"URL Discord webhooka",wayToGetDiscordURL:So,"Bot Display Name":"Nadimak Bota unutar servera","Prefix Custom Message":"Prefiks prilagođene poruke","Hello @everyone is...":"Pozdrav {'@'}everyone...",teams:Do,"Webhook URL":"URL webhooka",wayToGetTeamsURL:To,signal:zo,Number:"Broj",Recipients:yo,needSignalAPI:Ao,wayToCheckSignalURL:fo,signalImportant:Io,gotify:No,"Application Token":"Token Aplikacije","Server URL":"URL poslužitelja",Priority:Mo,slack:Co,"Icon Emoji":"Emotikon","Channel Name":"Naziv kanala","Uptime Kuma URL":"Uptime Kuma URL",aboutWebhooks:wo,aboutChannelName:Uo,aboutKumaURL:Ro,emojiCheatSheet:Lo,"rocket.chat":"Rocket.Chat",pushover:Oo,pushy:xo,octopush:Eo,promosms:Ho,clicksendsms:Ko,lunasea:Bo,apprise:Fo,pushbullet:Go,line:Vo,mattermost:Wo,"User Key":"Korisnički ključ",Device:Jo,"Message Title":"Naslov poruke","Notification Sound":"Zvuk obavijesti","More info on:":"Više informacija na: {0}",pushoverDesc1:Zo,pushoverDesc2:Qo,"SMS Type":"Tip SMS-a",octopushTypePremium:Xo,octopushTypeLowCost:Yo,checkPrice:qo,apiCredentials:_o,octopushLegacyHint:$o,"Check octopush prices":"Provjerite cijene usluge Octopush {0}.",octopushPhoneNumber:ea,octopushSMSSender:oa,"LunaSea Device ID":"LunaSea ID Uređaja","Apprise URL":"URL usluge Apprise","Example:":"Primjerice: {0}","Read more:":"Pročitajte više: {0}","Status:":"Status: {0}","Read more":"Pročitaj više",appriseInstalled:aa,appriseNotInstalled:ia,"Access Token":"Pristupni token","Channel access token":"Token za pristup kanalu","Line Developers Console":"LINE razvojnoj konzoli",lineDevConsoleTo:ta,"Basic Settings":"Osnovne Postavke","User ID":"Korisnički ID","Messaging API":"API za razmjenu poruka",wayToGetLineChannelToken:na,"Icon URL":"URL slike",aboutIconURL:ra,aboutMattermostChannelName:sa,matrix:ua,promosmsTypeEco:pa,promosmsTypeFlash:la,promosmsTypeFull:da,promosmsTypeSpeed:ma,promosmsPhoneNumber:ka,promosmsSMSSender:ca,"Feishu WebHookUrl":"Feishu URL webhooka",matrixHomeserverURL:ja,"Internal Room Id":"Interni ID sobe",matrixDesc1:va,matrixDesc2:ga,Method:ha,Body:Pa,Headers:ba,PushUrl:Sa,HeadersInvalidFormat:Da,BodyInvalidFormat:Ta,"Monitor History":"Povijest monitora",clearDataOlderThan:za,PasswordsDoNotMatch:ya,records:Aa,"One record":"Jedan zapis","Showing {from} to {to} of {count} records":"Prikaz zapisa {from}-{to} od sveukupno {count}",steamApiKeyDescription:fa,"Current User":"Trenutni korisnik",recent:Ia,Done:Na,Info:Ma,Security:Ca,"Shrink Database":"Smanji bazu podataka","Pick a RR-Type...":"Odaberite vrstu DNS zapisa od navedenih...","Pick Accepted Status Codes...":"Odaberite HTTP statusne kodove koji će biti prihvaćeni...","Steam API Key":"Steam API ključ",Default:wa,"HTTP Options":"HTTP Postavke","Create Incident":"Novi izvještaj o incidentu",Title:Ua,Content:Ra,Style:La,info:Oa,warning:xa,danger:Ea,primary:Ha,light:Ka,dark:Ba,Post:Fa,Created:Ga,"Last Updated":"Uređeno","Please input title and content":"Naslov i sadržaj ne mogu biti prazni",Unpin:Va,"Switch to Light Theme":"Prebaci na svijetli način","Switch to Dark Theme":"Prebaci na tamni način","Show Tags":"Pokaži oznake","Hide Tags":"Sakrij oznake",Description:Wa,"No monitors available.":"Nema dostupnih monitora.","Add one":"Stvori jednog","No Monitors":"Bez monitora","Untitled Group":"Bezimena grupa",Services:Ja,Discard:Za,Cancel:Qa,"Powered by":"Pokreće",Saved:Xa,PushByTechulus:Ya,GoogleChat:qa,shrinkDatabaseDescription:_a,serwersms:$a,serwersmsAPIUser:ei,serwersmsAPIPassword:oi,serwersmsPhoneNumber:ai,serwersmsSenderName:ii,stackfield:ti,smtpDkimSettings:ni,smtpDkimDesc:ri,documentation:si,smtpDkimDomain:ui,smtpDkimKeySelector:pi,smtpDkimPrivateKey:li,smtpDkimHashAlgo:di,smtpDkimheaderFieldNames:mi,smtpDkimskipFields:ki,gorush:ci,alerta:ji,alertaApiEndpoint:vi,alertaEnvironment:gi,alertaApiKey:hi,alertaAlertState:Pi,alertaRecoverState:bi,deleteStatusPageMsg:Si,resendEveryXTimes:Di,resendDisabled:Ti,dnsPortDescription:zi,"Resend Notification if Down X times consecutively":"Ponovno pošalji obavijest ako je usluga nedostupna više puta zaredom",topic:yi,topicExplanation:Ai,successMessage:fi,successMessageExplanation:Ii,error:Ni,critical:Mi,Customize:Ci,"Custom Footer":"Prilagođeno podnožje","Custom CSS":"Prilagođeni CSS",wayToGetPagerDutyKey:wi,"Integration Key":"Ključ integracije","Integration URL":"URL integracije","Auto resolve or acknowledged":"Automatsko razrješavanje i priznavanje","do nothing":"Ne radi ništa","auto acknowledged":"Automatsko priznavanje","auto resolve":"Automatsko razrješavanje",Proxies:Ui,default:"Zadano",enabled:Ri,setAsDefault:Li,deleteProxyMsg:Oi,proxyDescription:xi,enableProxyDescription:Ei,setAsDefaultProxyDescription:Hi,"Certificate Chain":"Lanac certifikata",Valid:Ki,Invalid:Bi,AccessKeyId:Fi,SecretAccessKey:Gi,PhoneNumbers:Vi,TemplateCode:Wi,SignName:Ji,"Sms template must contain parameters: ":"SMS predložak mora sadržavati parametre: ","Bark Endpoint":"Bark krajnja točka (endpoint)","Bark Group":"Bark grupa","Bark Sound":"Bark zvuk",WebHookUrl:Zi,SecretKey:Qi,"For safety, must use secret key":"Korištenje tajnog ključa je obavezno","Device Token":"Token uređaja",Platform:Xi,iOS:Yi,Android:qi,Huawei:_i,High:$i,Retry:et,Topic:ot,"WeCom Bot Key":"WeCom ključ Bota","Setup Proxy":"Dodaj proxy poslužitelj","Proxy Protocol":"Protokol","Proxy Server":"Proxy poslužitelj","Proxy server has authentication":"Proxy poslužitelj ima autentikaciju",User:at,Installed:it,"Not installed":"Nije instalirano",Running:tt,"Not running":"Nije pokrenuto","Remove Token":"Ukloni Token",Start:nt,Stop:rt,"Uptime Kuma":"Uptime Kuma","Add New Status Page":"Dodaj novu statusnu stranicu",Slug:st,"Accept characters:":"Dozvoljeni znakovi:",startOrEndWithOnly:ut,"No consecutive dashes":"Bez uzastopnih povlaka",Next:pt,"The slug is already taken. Please choose another slug.":"Slug je zauzet. Odaberite novi slug.","No Proxy":"Bez proxy poslužitelja",Authentication:lt,"HTTP Basic Auth":"HTTP Basic Auth","New Status Page":"Dodaj statusnu stranicu","Page Not Found":"Stranica nije pronađena","Reverse Proxy":"Reverzni proxy",Backup:dt,About:mt,wayToGetCloudflaredURL:kt,cloudflareWebsite:ct,"Message:":"Poruka:","Don't know how to get the token? Please read the guide:":"Ne znate kako doći do tokena? Pročitajte vodič:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"Trenutna veza možda bude prekinuta jer se koristi Cloudflare tuneliranje. Sigurno želite zaustaviti? Unesite lozinku za potvrdu.","HTTP Headers":"HTTP zaglavlja","Trust Proxy":"Vjeruj proxy poslužitelju","Other Software":"Ostali programi","For example: nginx, Apache and Traefik.":"Primjerice: nginx, Apache ili Traefik.","Please read":"Molimo pročitajte","Subject:":"Predmet:","Valid To:":"Valjano do:","Days Remaining:":"Preostalo dana:","Issuer:":"Izdavatelj:","Fingerprint:":"Fingerprint:","No status pages":"Nema statusnih stranica","Domain Name Expiry Notification":"Obavijest za istek domena",Proxy:"Proxy","Date Created":"Datum stvaranja",HomeAssistant:jt,onebotHttpAddress:vt,onebotMessageType:gt,onebotGroupMessage:ht,onebotPrivateMessage:Pt,onebotUserOrGroupId:bt,onebotSafetyTips:St,"PushDeer Key":"PushDeer ključ","Footer Text":"Tekst podnožja","Show Powered By":"Pokaži natpis 'Pokreće...'","Domain Names":"Domene",signedInDisp:Dt,signedInDispDisabled:Tt,RadiusSecret:zt,RadiusSecretDescription:yt,RadiusCalledStationId:At,RadiusCalledStationIdDescription:ft,RadiusCallingStationId:It,RadiusCallingStationIdDescription:Nt,"Certificate Expiry Notification":"Obavijest za istek certifikata","API Username":"API korisničko ime","API Key":"API ključ","Recipient Number":"Broj primatelja","From Name/Number":"Naziv/broj pošiljatelja","Leave blank to use a shared sender number.":"Ostaviti prazno za korištenje dijeljenog broja pošiljatelja.","Octopush API Version":"Octopush verzija API-ja","Legacy Octopush-DM":"Legacy Octopush-DM",endpoint:Mt,octopushAPIKey:Ct,octopushLogin:wt,promosmsLogin:Ut,promosmsPassword:Rt,"pushoversounds pushover":"Pushover (default)","pushoversounds bike":"Bike","pushoversounds bugle":"Bugle","pushoversounds cashregister":"Cash Register","pushoversounds classical":"Classical","pushoversounds cosmic":"Cosmic","pushoversounds falling":"Falling","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"Incoming","pushoversounds intermission":"Intermission","pushoversounds magic":"Magic","pushoversounds mechanical":"Mechanical","pushoversounds pianobar":"Piano Bar","pushoversounds siren":"Siren","pushoversounds spacealarm":"Space Alarm","pushoversounds tugboat":"Tug Boat","pushoversounds alien":"Alien Alarm (long)","pushoversounds climb":"Climb (long)","pushoversounds persistent":"Persistent (long)","pushoversounds echo":"Pushover Echo (long)","pushoversounds updown":"Up Down (long)","pushoversounds vibrate":"Vibrate Only","pushoversounds none":"None (silent)",pushyAPIKey:Lt,pushyToken:Ot,"Show update if available":"Pokaži moguću nadogradnju","Also check beta release":"Provjeravaj i za beta izdanja","Using a Reverse Proxy?":"Koristi li se reverzni proxy?","Check how to config it for WebSocket":"Provjerite kako se konfigurira za WebSocket protokol","Steam Game Server":"Steam poslužitelj igre","Most likely causes:":"Najvjerojatniji uzroci:","The resource is no longer available.":"Resurs više nije dostupan.","There might be a typing error in the address.":"Možda je nastala greška pri upisu adrese.","What you can try:":"Što možete pokušati:","Retype the address.":"Ponovno napišite adresu.","Go back to the previous page.":"Vratite se na prethodnu stranicu.","Coming Soon":"Dolazi uskoro",wayToGetClickSendSMSToken:xt,"Connection String":"Tekst veze",Query:Et,settingsCertificateExpiry:Ht,certificationExpiryDescription:Kt,"Setup Docker Host":"Dodaj Docker domaćina","Connection Type":"Tip veze","Docker Daemon":"Docker daemon",deleteDockerHostMsg:Bt,socket:Ft,tcp:Gt,"Docker Container":"Docker kontejner","Container Name / ID":"Naziv / ID kontejnera","Docker Host":"Docker domaćin","Docker Hosts":"Docker domaćini","ntfy Topic":"ntfy tema",Domain:Vt,Workstation:Wt,disableCloudflaredNoAuthMsg:Jt,trustProxyDescription:Zt,wayToGetLineNotifyToken:Qt,Examples:Xt,"Home Assistant URL":"URL Home Assistanta","Long-Lived Access Token":"Dugotrajni pristupni token","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":"Dugotrajni pristupni token može se kreirati klikom na korisničko ime (dolje lijevo) u Home Assistantu, pomicanjem do dna, te klikom na 'Create Token'. ","Notification Service":"Notification Service","default: notify all devices":"zadano ponašanje: obavijesti sve uređaje",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'Popis servisa za obavijesti u Home Assistantu nalaze se pod "Developer Tools > Services" te pretražiti "notification".',"Automations can optionally be triggered in Home Assistant:":"Automacije se mogu okinuti u Home Assistantu:","Trigger type:":"Tip triggera:","Event type:":"Tip eventa:","Event data:":"Podaci eventa:","Then choose an action, for example switch the scene to where an RGB light is red.":"Potrebno je i odabrati akciju za izvođenje na Home Assistantu.","Frontend Version":"Inačica sučelja","Frontend Version do not match backend version!":"Inačica sučelja ne odgovara poslužitelju!"})}}}));
