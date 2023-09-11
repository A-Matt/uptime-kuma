System.register([],(function(e,o){"use strict";return{execute:function(){var o=e("languageName","ไทย"),t=e("checkEverySecond","ตรวจสอบทุก {0} วินาที"),s=e("retryCheckEverySecond","ลองใหม่ทุก {0} วินาที"),a=e("retriesDescription","จำนวนครั้งสูงสุดที่จะลองก่อนบริการถูกระบุว่าไม่สามารถใช้งานได้และส่งการแจ้งเตือน"),r=e("ignoreTLSError","ไม่สนใจข้อผิดพลาด TLS/SSL สำหรับเว็บไซต์ HTTPS"),i=e("upsideDownModeDescription","สลับสถานะ เช่น ถ้าบริการสามารถใช้งานได้จะถูกเปลี่ยนเป็นใช้งานไม่ได้"),n=e("maxRedirectDescription","จำนวนครั้งสูงสุดที่จะเปลี่ยนเส้นทาง, ตั้งเป็น 0 เพื่อปิดการเปลี่ยนเส้นทาง"),c=e("acceptedStatusCodesDescription","เลือกรหัสสถานะที่ถือว่าการตอบกลับสำเร็จ"),l=e("passwordNotMatchMsg","รหัสผ่านไม่ตรงกัน"),p=e("notificationDescription","การแจ้งเตือนต้องกำหนดให้มอนิเตอร์เพื่อให้สามารถใช้งานได้"),d=e("keywordDescription","ค้นหาคำสำคัญใน HTML หรือ JSON ของการตอบกลับ, คำสำคัญต้องคำนึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่"),u=e("pauseDashboardHome","หยุดชั่วคราว"),m=e("deleteMonitorMsg","คุณแน่ใจหรือไม่ที่จะลบมอนิเตอร์?"),h=e("deleteNotificationMsg","คุณแน่ใจหรือไม่ที่จะลบการแจ้งเตือนสำหรับมอนิเตอร์ทั้งหมด?"),g=e("resolverserverDescription","Cloudflare เป็นเซิร์ฟเวอร์ค้นหาเริ่มต้น, คุณสามารถเปลี่ยนเซิร์ฟเวอร์ได้ตลอดเวลา"),S=e("rrtypeDescription","เลือกประเภท DNS Record ที่คุณต้องการจะมอนิเตอร์"),y=e("pauseMonitorMsg","คุณแน่ใจหรือไม่ที่จะหยุดมอนิเตอร์ชั่วคราว?"),D=e("enableDefaultNotificationDescription","การแจ้งเตือนนี้จะถูกเปิดโดยค่าเริ่มต้นสำหรับมอนิเตอร์ใหม่, คุณสามารถปิดการแจ้งเตือนสำหรับแต่ละมอนิเตอร์ได้"),T=e("clearEventsMsg","คุณแน่ใจหรือไม่ที่จะลบเหตุการณ์ทั้งหมดสำหรับมอนิเตอร์นี้?"),P=e("clearHeartbeatsMsg","คุณแน่ใจหรือไม่ที่จะลบประวัติการตรวจสอบทั้งหมดสำหรับมอนิเตอร์นี้?"),k=e("confirmClearStatisticsMsg","คุณแน่ใจหรือไม่ที่จะลบสถิติทั้งหมด?"),b=e("importHandleDescription",'เลือก "ข้ามรายการที่มีอยู่แล้ว" ถ้าคุณต้องการข้ามทุกมอนิเตอร์หรือการแจ้งเตือนที่มีชื่อซ้ำกัน, "เขียนทับ" จะลบทุกมอนิเตอร์หรือการแจ้งเตือนที่มีชื่อซ้ำกัน'),A=e("confirmImportMsg","คุณแน่ใจหรือไม่ที่จะนำเข้าข้อมูลสำรอง, กรุณาตรวจสอบว่าคุณเลือกข้อมูลที่ถูกต้อง"),v=e("twoFAVerifyLabel","โปรดกรอกกุญแจ 2FA ของคุณเพื่อยืนยัน:"),C=e("tokenValidSettingsMsg","กุญแจถูกต้อง, ตอนนี้คุณสามารถบันทึกการตั้งค่า 2FA ของคุณได้แล้ว"),I=e("confirmEnableTwoFAMsg","คุณแน่ใจหรือไม่ที่จะเปิดใช้งาน 2FA?"),M=e("confirmDisableTwoFAMsg","คุณแน่ใจหรือไม่ที่จะปิดใช้งาน 2FA?"),f=e("Settings","การตั้งค่า"),w=e("Dashboard","แผงควบคุม"),R=e("Language","ภาษา"),N=e("Appearance","หน้าตา"),L=e("Theme","หน้าตา"),U=e("General","ทั่วไป"),H=e("Version","เวอร์ชั่น"),x=e("List","รายการ"),E=e("Add","เพิ่ม"),F=e("Up","ใช้งานได้"),O=e("Down","ไม่สามารถใช้งานได้"),G=e("Pending","รอดำเนินการ"),K=e("Unknown","ไม่ทราบ"),B=e("Pause","หยุดชั่วคราว"),W=e("Name","ชื่อ"),V=e("Status","สถานะ"),j=e("DateTime","วันที่และเวลา"),q=e("Message","ข้อความ"),J=e("Resume","ดำเนินการต่อ"),z=e("Edit","แก้ไข"),Q=e("Delete","ลบ"),X=e("Current","ปัจจุบัน"),Z=e("Uptime","เวลาที่ใช้งานได้"),Y=e("days","วัน"),_=e("day","วัน"),$=e("hour","ชั่วโมง"),ee=e("Response","การตอบสนอง"),oe=e("Ping","การตอบสนอง"),te=e("Keyword","คำสำคัญ"),se=e("URL","URL"),ae=e("Hostname","ชื่อโฮสต์"),re=e("Port","พอร์ต"),ie=e("Retries","จำนวนครั้งที่จะลองใหม่"),ne=e("Advanced","ขั้นสูง"),ce=e("needPushEvery","คุณควรเรียก URL นี้ทุก {0} วินาที"),le=e("pushOptionalParams","ตัวแปรเสริม: {0}"),pe=e("Save","บันทึก"),de=e("Notifications","การแจ้งเตือน"),ue=e("Light","สว่าง"),me=e("Dark","มืด"),he=e("Auto","อัตโนมัติ"),ge=e("Normal","ปกติ"),Se=e("Bottom","ด้านล่าง"),ye=e("None","ไม่มี"),De=e("Timezone","เขตเวลา"),Te=e("Logout","ออกจากระบบ"),Pe=e("Leave","ออก"),ke=e("Confirm","ยืนยัน"),be=e("Yes","ใช่"),Ae=e("No","ไม่"),ve=e("Username","ชื่อผู้ใช้"),Ce=e("Password","รหัสผ่าน"),Ie=e("Login","เข้าสู่ระบบ"),Me=e("Email","อีเมล"),fe=e("Test","ทดสอบ"),we=e("Export","ส่งออก"),Re=e("Import","นำเข้า"),Ne=e("respTime","ระยะเวลาการตอบสนอง (ms)"),Le=e("notAvailableShort","ไม่สามารถใช้งานได้"),Ue=e("Create","สร้าง"),He=e("Events","เหตุการณ์"),xe=e("Heartbeats","ประวัติการตรวจสอบ"),Ee=e("backupDescription","คุณสามารถสำรองข้อมูลการแจ้งเตือนและมอนิเตอร์ทั้งหมดไว้ได้ในไฟล์ JSON"),Fe=e("backupDescription2","หมายเหตุ : ประวัติและข้อมูลเหตการณ์จะไม่ถูกสำรอง"),Oe=e("backupDescription3","ข้อมูลที่ละเอียดอ่อนเช่นกุญแจการแจ้งเตือนจะรวมอยู่ในไฟล์ข้อมูลสำรอง, โปรดเก็บข้อมูลสำรองอย่างปลอดภัย"),Ge=e("alertNoFile","กรุณาเลือกไฟล์ที่จะใช้งาน"),Ke=e("alertWrongFileType","กรุณาเลือกไฟล์ที่เป็น JSON"),Be=e("Overwrite","เขียนทับ"),We=e("Options","ตัวเลือก"),Ve=e("Active","ใช้งาน"),je=e("Inactive","ไม่ใช้งาน"),qe=e("Token","กุญแจ"),Je=e("Tags","แท็ก"),ze=e("color","สี"),Qe=e("Gray","เทา"),Xe=e("Red","แดง"),Ze=e("Orange","ส้ม"),Ye=e("Green","เขียว"),_e=e("Blue","น้ำเงิน"),$e=e("Indigo","ม่วง"),eo=e("Purple","ม่วง"),oo=e("Pink","ชมพู"),to=e("statusPageNothing","ไม่มีอะไรตรงนี้ !, กรุณาเพิ่มกลุ่มหรือมอนิเตอร์"),so=e("defaultNotificationName","การแจ้งเตือน {notification} ของฉัน ({number})"),ao=e("here","ที่นี่"),ro=e("Required","จำเป็น"),io=e("telegram","Telegram"),no=e("wayToGetTelegramToken","คุณสามารถรับกุญแจได้จาก {0}."),co=e("supportTelegramChatID","รองรับ แชทส่วนตัว, แชทกลุ่ม, ไอดีแชท"),lo=e("wayToGetTelegramChatID","คุณสามารถรับ ID แชทของคุณได้โดยส่งข้อความไปยังบอทและไปที่ URL นี้เพื่อดู chat_id :"),po=e("chatIDNotFound","ไม่พบไอดีแชท, กรุณาส่งข้อความไปที่บอท"),uo=e("webhook","Webhook"),mo=e("webhookJsonDesc","{0} ดีสำหรับเซิร์ฟเวอร์ HTTP สมัยใหม่เช่น Express.js"),ho=e("webhookFormDataDesc","{multipart} ดีสำหรับ PHP, ข้อมูล JSON จะต้องถูกประมวลผลด้วย {decodeFunction}"),go=e("smtp","Email (SMTP)"),So=e("secureOptionNone","None / STARTTLS (25, 587)"),yo=e("secureOptionTLS","TLS (465)"),Do=e("emailCustomSubject","หัวข้อที่กำหนดเอง"),To=e("smtpCC","CC"),Po=e("smtpBCC","BCC"),ko=e("discord","Discord"),bo=e("wayToGetDiscordURL","คุณสามารถรับได้โดยการไปที่ Server Settings -> Integrations -> Create Webhook"),Ao=e("teams","Microsoft Teams"),vo=e("wayToGetTeamsURL","คุณสามารถเรียนรู้วิธีการสร้าง Webhook URL {0}"),Co=e("signal","Signal"),Io=e("Recipients","ผู้รับ"),Mo=e("needSignalAPI","คุณต้องมี Signal Client ที่มี Rest API"),fo=e("wayToCheckSignalURL","คุณสามารถตรวจสอบ URL นี้เพื่อดูวิธีตั้งค่า :"),wo=e("signalImportant","สำคัญ: คุณไม่สามารถผสมกลุ่มและตัวเลขในผู้รับได้!"),Ro=e("gotify","Gotify"),No=e("Priority","ลำดับความสำคัญ"),Lo=e("slack","Slack"),Uo=e("aboutWebhooks","ข้อมูลเพิ่มเติมสำหรับ Webhooks : {0}"),Ho=e("aboutChannelName","ใส่ชื่อห้องใน {0} ในช่องชื่อห้องถ้าต้องการที่จะข้าม Webhook, เช่น: #ช่องอื่นๆ"),xo=e("aboutKumaURL","ถ้าคุณไม่ใส่ข้อมูลในช่อง Uptime Kuma URL ค่าเริ่มต้นจะเป็นจะเป็น Uptime Kuma Github"),Eo=e("emojiCheatSheet","ตาราง Emoji : {0}"),Fo=e("pushover","Pushover"),Oo=e("pushy","Pushy"),Go=e("PushByTechulus","Push by Techulus"),Ko=e("octopush","Octopush"),Bo=e("promosms","PromoSMS"),Wo=e("clicksendsms","ClickSend SMS"),Vo=e("lunasea","LunaSea"),jo=e("apprise","Apprise (รองรับการแจ้งเตือนมากกว่า 50 บริการ)"),qo=e("GoogleChat","Google Chat (สำหรับ Google Workspace เท่านั้น)"),Jo=e("pushbullet","Pushbullet"),zo=e("line","Line Messenger"),Qo=e("mattermost","Mattermost"),Xo=e("Device","อุปกรณ์"),Zo=e("pushoverDesc1","ลำดับความสำคัญฉุกเฉิน (2) มีการหมดเวลาเริ่มต้น 30 วินาทีระหว่างการลองใหม่และจะหมดอายุหลังจาก 1 ชั่วโมง"),Yo=e("pushoverDesc2","ถ้าคุณต้องการจะส่งการแจ้งเตือนไปยังอุปกรณ์อื่นๆ สามารถกำหนดได้ที่ช่องอุปกรณ์"),_o=e("octopushTypePremium","พรีเมี่ยม (เร็ว - แนะนำสำหรับการแจ้งเตือน)"),$o=e("octopushTypeLowCost","ต้นทุนต่ำ (ช้า - บางครั้งจะถูกบล็อกโดยผู้ให้บริการ)"),et=e("checkPrice","ตรวจสอบราคาของ {0} :"),ot=e("apiCredentials","ข้อมูลการตรวจสอบสิทธิ์ API"),tt=e("octopushLegacyHint","คุณใช้เวอร์ชันดั้งเดิมของ Octopush (2011 - 2020) หรือเวอร์ชันใหม่หรือไม่?"),st=e("octopushPhoneNumber","หมายเลขโทรศัพท์ (รูปแบบสากล เช่น +33612345678) "),at=e("octopushSMSSender","ชื่อผู้ส่ง SMS : ความยาว 3 - 11 ตัวอักษร, ตัวเลข และช่องว่าง (a-zA-Z0-9 )"),rt=e("appriseInstalled","Apprise ถูกติดตั้งแล้ว"),it=e("appriseNotInstalled","Apprise ยังไม่ถูกติดตั้ง {0}"),nt=e("lineDevConsoleTo","Line Developers Console - {0}"),ct=e("wayToGetLineChannelToken","ขั้นแรกให้เข้า {0} สร้างผู้ให้บริการและช่องทาง (Messaging API) จากนั้นคุณจะได้รับกุญแจการเข้าถึงช่องและไอดีผู้ใช้จากรายการเมนูที่กล่าวถึงข้างต้น"),lt=e("aboutIconURL",'คุณสามารถระบุลิงก์รูปภาพใน "URL ไอคอน" เพื่อแทนที่รูปภาพโปรไฟล์เริ่มต้น จะไม่ถูกใช้หากมีการตั้งค่า Icon Emoji'),pt=e("aboutMattermostChannelName",'คุณลบช่องเริ่มต้นที่ Webhook โพสต์ได้ด้วยการป้อนชื่อช่องลงในช่อง "ชื่อช่อง" ต้องเปิดใช้งานในการตั้งค่า Mattermost Webhook เช่น #ช่องอื่นๆ'),dt=e("matrix","Matrix"),ut=e("promosmsTypeEco","SMS ECO - ราคาถูก แต่ช้าและมักจะโอเวอร์โหลด จำกัดเฉพาะผู้รับในโปแลนด์"),mt=e("promosmsTypeFlash","SMS FLASH - ข้อความจะแสดงบนอุปกรณ์ของผู้รับโดยอัตโนมัติ จำกัดเฉพาะผู้รับในโปแลนด์"),ht=e("promosmsTypeFull","SMS FULL - SMS ระดับพรีเมียม คุณสามารถใช้ชื่อผู้ส่งของคุณได้ (คุณต้องลงทะเบียนชื่อก่อน) เชื่อถือได้สำหรับการแจ้งเตือน"),gt=e("promosmsTypeSpeed","SMS SPEED - ลำดับความสำคัญสูงสุดในระบบ รวดเร็วและเชื่อถือได้ แต่มีค่าใช้จ่ายสูง (ประมาณสองเท่าของราคาเต็ม SMS)"),St=e("promosmsPhoneNumber","หมายเลขโทรศัพท์ (สำหรับผู้รับโปแลนด์ คุณสามารถข้ามรหัสพื้นที่ได้)"),yt=e("promosmsSMSSender","ชื่อผู้ส่ง SMS : ชื่อที่ลงทะเบียนล่วงหน้าหรือหนึ่งในค่าเริ่มต้น: InfoSMS, ข้อมูล SMS, MaxSMS, INFO, SMS"),Dt=e("matrixHomeserverURL","URL ของโฮมเซิร์ฟเวอร์ (พร้อม http(s):// และพอร์ตเสริม)"),Tt=e("matrixDesc1","คุณค้นหารหัสห้องภายในได้โดยดูในส่วนขั้นสูงของการตั้งค่าห้องในไคลเอ็นต์ Matrix มันควรจะมีลักษณะเช่น !PMdRCpsIfLwsfjIye6:kiznick.server."),Pt=e("matrixDesc2","ขอแนะนำเป็นอย่างยิ่งให้คุณสร้างผู้ใช้ใหม่และอย่าใช้โทเค็นการเข้าถึงของผู้ใช้ Matrix ของคุณเอง เนื่องจากจะทำให้สามารถเข้าถึงบัญชีของคุณและห้องทั้งหมดที่คุณเข้าร่วม ให้สร้างผู้ใช้ใหม่และเชิญเฉพาะห้องที่คุณต้องการรับการแจ้งเตือนแทน คุณสามารถรับโทเค็นเพื่อการเข้าถึงได้โดยเรียกใช้ {0}"),kt=e("Method","วิธี"),bt=e("Body","เนื้อหา"),At=e("Headers","ส่วนหัว"),vt=e("PushUrl","Push URL"),Ct=e("HeadersInvalidFormat","เนื้อหาคำขอส่วนหัวไม่ใช่ JSON ที่ถูกต้อง: "),It=e("BodyInvalidFormat","เนื้อหาคำขอไม่ใช่ JSON ที่ถูกต้อง : "),Mt=e("clearDataOlderThan","เก็บข้อมูลมอนิเตอร์ {0} วัน"),ft=e("PasswordsDoNotMatch","รหัสผ่านไม่ตรงกัน"),wt=e("records","บันทึก"),Rt=e("steamApiKeyDescription","สำหรับการมอนิเตอร์ Steam Game Server คุณต้องมี Steam Web-API key, คุณสามารถสมัครได้จากที่นี่ : "),Nt=e("topic","หัวข้อ"),Lt=e("topicExplanation","หัวข้อ MQTT ที่จะมอนิเตอร์"),Ut=e("successMessage","ข้อความที่จะถือว่าประสบความสำเร็จ"),Ht=e("successMessageExplanation","ข้อความ MQTT ที่จะถือว่าประสบความสำเร็จ"),xt=e("recent","ล่าสุด"),Et=e("Done","สำเร็จ"),Ft=e("Info","ข้อมูล"),Ot=e("Security","ความปลอดภัย"),Gt=e("Default","ค่าเริ่มต้น"),Kt=e("Title","หัวข้อ"),Bt=e("Content","เนื้อหา"),Wt=e("Style","สไตล์"),Vt=e("info","ข้อมูล"),jt=e("warning","แจ้งเตือน"),qt=e("danger","อันตราย"),Jt=e("primary","หลัก"),zt=e("light","สว่าง"),Qt=e("dark","มืด"),Xt=e("Post","โพสต์"),Zt=e("Created","สร้าง"),Yt=e("Unpin","เลิกตรึง"),_t=e("Description","รายละเอียด"),$t=e("Services","บริการ"),es=e("Discard","ทิ้ง"),os=e("Cancel","ยกเลิก"),ts=e("shrinkDatabaseDescription","ทริกเกอร์ฐานข้อมูล VACUUM สำหรับ SQLite หากฐานข้อมูลของคุณถูกสร้างขึ้นหลังจากเวอร์ชั่น 1.10.0 แสดงว่า AUTO_VACUUM เปิดใช้งานอยู่แล้วและไม่จำเป็นต้องดำเนินการนี้"),ss=e("serwersms","SerwerSMS.pl"),as=e("serwersmsAPIUser","API Username (incl. webapi_ prefix)"),rs=e("serwersmsAPIPassword","API Password"),is=e("serwersmsPhoneNumber","หมายเลขโทรศัพท์"),ns=e("serwersmsSenderName","ชื่อผู้ส่ง SMS (ลงทะเบียนผ่านหน้าควบคุม)"),cs=e("stackfield","Stackfield"),ls=e("Customize","ปรับแต่ง"),ps=e("smtpDkimSettings","การตั้งค่า DKIM"),ds=e("smtpDkimDesc","โปรดดู Nodemailer DKIM {0} สำหรับการใช้งาน"),us=e("documentation","คู่มือการใช้งาน"),ms=e("smtpDkimDomain","ชื่อโดเมน"),hs=e("smtpDkimKeySelector","Key Selector"),gs=e("smtpDkimPrivateKey","Private Key"),Ss=e("smtpDkimHashAlgo","อัลกอริทึมแฮช (ไม่บังคับ)"),ys=e("smtpDkimheaderFieldNames","คีย์ส่วนหัวสำหรับลงชื่อ (ไม่บังคับ)"),Ds=e("smtpDkimskipFields","Header Keys ไม่ต้องเซ็น (ไม่บังคับ)"),Ts=e("gorush","Gorush"),Ps=e("alerta","Alerta"),ks=e("alertaApiEndpoint","API Endpoint"),bs=e("alertaEnvironment","Environment"),As=e("alertaApiKey","กุญแจ API"),vs=e("alertaAlertState","แจ้งเตือนสถานะ"),Cs=e("alertaRecoverState","กู้คืนสถานะ"),Is=e("deleteStatusPageMsg","คุณแน่ใจหรือไม่ว่าต้องการลบหน้าสถานะนี้"),Ms=e("Proxies","พร็อกซี"),fs=e("enabled","เปิดใช้งานแล้ว"),ws=e("setAsDefault","ตั้งเป็นค่าเริ่มต้น"),Rs=e("deleteProxyMsg","คุณแน่ใจหรือไม่ว่าต้องการลบพร็อกซีสำหรับมอนิเตอร์ทั้งหมด?"),Ns=e("proxyDescription","ต้องตั้งค่ามอนิเตอร์ให้ใช้พร็อกซีเพื่อให้ใช้งานได้"),Ls=e("enableProxyDescription","พร็อกซีนี้จะไม่ส่งผลต่อมอนิเตอร์จนกว่าจะเปิดใช้งาน คุณสามารถควบคุมการปิดใช้งานพร็อกซีชั่วคราวจากมอนิเตอร์ทั้งหมดได้ที่ส่วนสถานะการเปิดใช้งาน"),Us=e("setAsDefaultProxyDescription","พร็อกซีนี้จะถูกเปิดโดนค่าเริ่มต้นสำหรับมอนิเตอร์ใหม่, คุณสามารถปิดการแจ้งเตือนสำหรับแต่ละมอนิเตอร์ได้"),Hs=e("Valid","ถูกต้อง"),xs=e("Invalid","ไม่ถูกต้อง"),Es=e("AccessKeyId","กุญแจสิทธิ ID"),Fs=e("SecretAccessKey","กุญแจสิทธิ Secret"),Os=e("PhoneNumbers","PhoneNumbers"),Gs=e("TemplateCode","รหัสเทมเพลต"),Ks=e("SignName","ป้ายชื่อ"),Bs=e("WebHookUrl","WebHookUrl"),Ws=e("SecretKey","SecretKey"),Vs=e("Platform","แพลตฟอร์ม"),js=e("iOS","iOS"),qs=e("Android","Android"),Js=e("Huawei","Huawei"),zs=e("High","สูง"),Qs=e("Retry","ลองใหม่"),Xs=e("Topic","หัวข้อ"),Zs=e("User","ผู้ใช้"),Ys=e("Installed","ติดตั้งแล้ว"),_s=e("Running","กำลังทำงาน"),$s=e("Start","เริ่ม"),ea=e("Stop","หยุด"),oa=e("Slug","ชื่อ"),ta=e("startOrEndWithOnly","เริ่มหรือจบด้วย {0} เท่านั้น"),sa=e("Next","ต่อไป"),aa=e("Backup","สำรองข้อมูล"),ra=e("About","เกี่ยวกับ"),ia=e("wayToGetCloudflaredURL","(ดาวโหลด cloudflared จาก {0})"),na=e("cloudflareWebsite","เว็บไซต์ Cloudflare"),ca=e("onebotHttpAddress","ที่อยู่ HTTP OneBot"),la=e("onebotMessageType","ชนิดข้อความ OneBot"),pa=e("onebotGroupMessage","กลุ่ม"),da=e("onebotPrivateMessage","ส่วนตัว"),ua=e("onebotUserOrGroupId","กลุ่ม / ไอดีผู้ใช้"),ma=e("onebotSafetyTips","เพื่อความปลอดภัย จำเป็นต้องตั้งค่ากุญแจการเข้าถึง"),ha=e("signedInDisp","เข้าใช้งานในฐานะ {0}"),ga=e("signedInDispDisabled","ปิดการยืนยันตัวตน"),Sa=e("endpoint","endpoint"),ya=e("octopushAPIKey",'"API key" จากข้อมูลยืนยันตัวตน HTTP API ในแผงควบคุม'),Da=e("octopushLogin",'"Login" จากข้อมูลยืนยันตัวตน HTTP API ในแผงควบคุม'),Ta=e("promosmsLogin","API Login Name"),Pa=e("promosmsPassword","API Password"),ka=e("pushyAPIKey","Secret API Key"),ba=e("pushyToken","Device token"),Aa=e("wayToGetClickSendSMSToken","คุณสามารถรับ API Username และ API Key ได้จาก {0}"),va=e("wayToGetLineNotifyToken","คุณสามารถรับ access token ได้จาก {0}"),Ca=e("resendEveryXTimes","ส่งซ้ำทุก {0} ครั้ง"),Ia=e("resendDisabled","การส่งซ้ำถูกปิดใช้งาน"),Ma=e("dnsPortDescription","พอร์ตของเซิร์ฟเวอร์ DNS, ค่าเริ่มต้นคือ 53, คุณสามารถเปลี่ยนพอร์ตตอนไหนก็ได้"),fa=e("error","เกิดข้อผิดพลาด"),wa=e("critical","วิกฤต"),Ra=e("wayToGetPagerDutyKey",'คุณสามารถรับคีย์ได้โดยการไปที่ Service -> Service Directory -> (Select a service) -> Integrations -> Add integration, และค้นหา "Events API V2", สำหรับข้อมูลเพิ่มเติม {0}'),Na=e("Authentication","การตรวจสอบสิทธิ์"),La=e("HomeAssistant","Home Assistant"),Ua=e("RadiusSecret","Radius Secret"),Ha=e("RadiusSecretDescription","แบ่งปันคีย์ลับระหว่างผู้ใช้งานและเซิร์ฟเวอร์"),xa=e("RadiusCalledStationId","Called Station Id"),Ea=e("RadiusCalledStationIdDescription","Identifier of the called device"),Fa=e("RadiusCallingStationId","Calling Station Id"),Oa=e("RadiusCallingStationIdDescription","Identifier of the calling device"),Ga=e("Query","Query"),Ka=e("settingsCertificateExpiry","วันหมดอายุของใบรับรอง TLS"),Ba=e("certificationExpiryDescription","การตรวจสอบ HTTPS จะแจ้งเตือนถ้าใบอนุญาติ TLS จะหมดอายุใน:"),Wa=e("deleteDockerHostMsg","คุณแน่ใจหรือไม่ที่จะลบ Docker host นี้สำหรับการมอนิเตอร์ทั้งหมด?"),Va=e("socket","Socket"),ja=e("tcp","TCP / HTTP"),qa=e("Domain","โดเมน"),Ja=e("Workstation","Workstation"),za=e("disableCloudflaredNoAuthMsg","คุณอยู่ในโหมดไม่มีการตรวจสอบสิทธิ์, ไม่จำเป็นต้องมีรหัสผ่าน"),Qa=e("trustProxyDescription","เชื่อ Header 'X-Forwarded-*', คุณควรเปิดใช้งาน ถ้าคุณต้องการ IP ของผู้ใช้ที่ถูกต้องและ Uptime Kuma อยู่ข้างหลัง Nginx หรือ Apache"),Xa=e("Examples","ตัวอย่าง"),Za=e("webhookAdditionalHeadersTitle","Header เพิ่มเติม"),Ya=e("webhookAdditionalHeadersDesc","กำหนด Header ที่จะส่งไปหร้อมกับ Webhook"),_a=e("Custom","กำหนดเอง"),$a=e("Game","เกม"),er=e("statusMaintenance","การซ่อมบำรุง"),or=e("Maintenance","การซ่อมบำรุง"),tr=e("Monitor","มอนิเตอร์ | มอนิเตอร์"),sr=e("markdownSupported","รองรับ Markdown"),ar=e("Help","ช่วยเหลือ"),rr=e("ZohoCliq","ZohoCliq"),ir=e("backupOutdatedWarning","ไม่ได้รับการพัฒนาแล้ว : ไม่สามารถสร้างหรือกูข้อมูลสำรองได้สมบูรณ์ เนื่องจากมีฟีเจอร์ใหม่เพิ่มขึ้นมากและการแบ็คอัพไม่ได้ถูกพัฒนา"),nr=e("backupRecommend","กรุณาแบ็คอัพข้อมูลทั้งหมดหรือโฟลเดอร์ Data (./data/) โดยตรงแทน"),cr=e("Optional","ไม่จำเป็น"),lr=e("squadcast","Squadcast"),pr=e("or","หรือ"),dr=e("recurringInterval","ช่วงเวลา"),ur=e("Recurring","ทำซ้ำ"),mr=e("pagertreeCritical","วิกฤต"),hr=e("pagertreeDoNothing","ไม่ต้องทำอะไร"),gr=e("pagertreeResolve","แก้ไขอัตโนมัติ"),Sr=e("wayToGetPagerTreeIntegrationURL","หลังจากสร้างการรวม Uptime Kuma ใน PagerTree แล้ว ให้คัดลอก Endpoint, ดูรายละเอียดทั้งหมด {0}");e("default",{languageName:o,checkEverySecond:t,retryCheckEverySecond:s,retriesDescription:a,ignoreTLSError:r,upsideDownModeDescription:i,maxRedirectDescription:n,acceptedStatusCodesDescription:c,passwordNotMatchMsg:l,notificationDescription:p,keywordDescription:d,pauseDashboardHome:u,deleteMonitorMsg:m,deleteNotificationMsg:h,resolverserverDescription:g,rrtypeDescription:S,pauseMonitorMsg:y,enableDefaultNotificationDescription:D,clearEventsMsg:T,clearHeartbeatsMsg:P,confirmClearStatisticsMsg:k,importHandleDescription:b,confirmImportMsg:A,twoFAVerifyLabel:v,tokenValidSettingsMsg:C,confirmEnableTwoFAMsg:I,confirmDisableTwoFAMsg:M,Settings:f,Dashboard:w,"New Update":"อัพเดทใหม่",Language:R,Appearance:N,Theme:L,General:U,"Primary Base URL":"URL หลัก",Version:H,"Check Update On GitHub":"ตรวจสอบการอัปเดตบน GitHub",List:x,Add:E,"Add New Monitor":"เพิ่มมอนิเตอร์ใหม่","Quick Stats":"สถิติด่วน",Up:F,Down:O,Pending:G,Unknown:K,Pause:B,Name:W,Status:V,DateTime:j,Message:q,"No important events":"ไม่มีเหตการณ์ที่สำคัญ",Resume:J,Edit:z,Delete:Q,Current:X,Uptime:Z,"Cert Exp.":"วันหมดอายุใบรับรอง",days:Y,day:_,"-day":"-วัน",hour:$,"-hour":"-ชั่วโมง",Response:ee,Ping:oe,"Monitor Type":"ประเภทมอนิเตอร์",Keyword:te,"Friendly Name":"ชื่อที่เป็นมิตร",URL:se,Hostname:ae,Port:re,"Heartbeat Interval":"ระยะเวลาระหว่างการทดสอบ",Retries:ie,"Heartbeat Retry Interval":"ระยะห่างระหว่างการทดสอบใหม่หลังจากไม่สำเร็จ",Advanced:ne,"Upside Down Mode":"โหมดสลับ","Max. Redirects":"จำนวนการเปลี่ยนเส้นทางสูงสุด","Accepted Status Codes":"รหัสสถานะที่ยอมรับ","Push URL":"URL เป้าหมาย",needPushEvery:ce,pushOptionalParams:le,Save:pe,Notifications:de,"Not available, please setup.":"ไม่พร้อมใช้งาน, กรุณาตั้งค่า","Setup Notification":"ตั้งค่าการแจ้งเตือน",Light:ue,Dark:me,Auto:he,"Theme - Heartbeat Bar":"หน้าตา - แถบการตอบสนอง",Normal:ge,Bottom:Se,None:ye,Timezone:De,"Search Engine Visibility":"การมองเห็นของเครื่องมือค้นหา","Allow indexing":"อนุญาตให้สร้างดัชนี","Discourage search engines from indexing site":"ปฏิเสธเครื่องมือค้นหาไม่ให้สร้างดัชนีของเว็บไซต์","Change Password":"เปลี่ยนรหัสผ่าน","Current Password":"รหัสผ่านปัจจุบัน","New Password":"รหัสผ่านใหม่","Repeat New Password":"ยืนยันรหัสผ่านใหม่","Update Password":"อัพเดทรหัสผ่าน","Disable Auth":"ปิดใช้งานการตรวจสอบสิทธิ์","Enable Auth":"เปิดใช้งานการตรวจสอบสิทธิ์","disableauth.message1":"คุณต้องการที่จะ <strong>ปิดใช้งานระบบรับรองความถูกต้องใช่หรือไม่</strong>?","disableauth.message2":"ระบบนี้ถูกออกแบบมาเพื่อการใช้งานกับระบบรับรองความถูกต้องของบุคคลที่สามเช่น Cloudflare Access, Authelia หรือวิธีการอื่นๆ","Please use this option carefully!":"โปรดใช้ความระมัดระวังในการเลือกใช้งานระบบนี้ !",Logout:Te,Leave:Pe,"I understand, please disable":"ฉันเข้าใจแล้ว, กรุณาปิดการใช้งาน",Confirm:ke,Yes:be,No:Ae,Username:ve,Password:Ce,"Remember me":"จดจำฉันไว้",Login:Ie,"No Monitors, please":"ไม่มีมอนิเตอร์, กรุณา","add one":"สร้าง","Notification Type":"ประเภทการแจ้งเตือน",Email:Me,Test:fe,"Certificate Info":"ข้อมูลใบรับรอง","Resolver Server":"เซิร์ฟเวอร์ที่ค้นหา","Resource Record Type":"ประเภท DNS Record","Last Result":"ผลล่าสุด","Create your admin account":"สร้างบัญชีผู้ดูแลระบบ","Repeat Password":"ยืนยันรหัสผ่าน","Import Backup":"นำเข้าข้อมูลสำรอง","Export Backup":"ส่งออกข้อมูลสำรอง",Export:we,Import:Re,respTime:Ne,notAvailableShort:Le,"Default enabled":"เปิดใช้งานโดยค่าเริ่มต้น","Apply on all existing monitors":"ใช้กับมอนิเตอร์ทั้งหมด",Create:Ue,"Clear Data":"ล้างข้อมูล",Events:He,Heartbeats:xe,"Auto Get":"ดึงอัตโนมัติ",backupDescription:Ee,backupDescription2:Fe,backupDescription3:Oe,alertNoFile:Ge,alertWrongFileType:Ke,"Clear all statistics":"ล้างข้อมูลสถิติทั้งหมด","Skip existing":"ข้ามรายการที่มีอยู่แล้ว",Overwrite:Be,Options:We,"Keep both":"เก็บทั้งสอง","Verify Token":"ยืนยันกุญแจ","Setup 2FA":"ติดตั้ง 2FA","Enable 2FA":"เปิดใช้งาน 2FA","Disable 2FA":"ปิดใช้งาน 2FA","2FA Settings":"ตั้งค่า 2FA","Two Factor Authentication":"การยืนยันตัวตนแบบสองขั้นตอน",Active:Ve,Inactive:je,Token:qe,"Show URI":"แสดง URI",Tags:Je,"Add New below or Select...":"เพิ่มใหม่ด้านล่างหรือเลือก…","Tag with this name already exist.":"แท็กที่มีชื่อนี้มีอยู่แล้ว","Tag with this value already exist.":"แท็กที่มีข้อมูลนี้มีอยู่แล้ว",color:ze,"value (optional)":"ข้อมูล (ไม่จำเป็น)",Gray:Qe,Red:Xe,Orange:Ze,Green:Ye,Blue:_e,Indigo:$e,Purple:eo,Pink:oo,"Search...":"ค้นหา…","Avg. Ping":"ค่า Ping เฉลี่ย","Avg. Response":"ค่า Response เฉลี่ย","Entry Page":"หน้าต้อนรับ",statusPageNothing:to,"No Services":"ไม่มีบริการ","All Systems Operational":"บริการทั้งหมดทำงานได้ปกติ","Partially Degraded Service":"บริการมีปัญหาบางส่วน","Degraded Service":"บริการมีปัญหา","Add Group":"เพิ่มกลุ่ม","Add a monitor":"เพิ่มมอนิเตอร์","Edit Status Page":"แก้ไขหน้าสถานะ","Go to Dashboard":"ไปที่หน้าควบคุม","Status Page":"หน้าสถานะ","Status Pages":"หน้าสถานะ",defaultNotificationName:so,here:ao,Required:ro,telegram:io,"Bot Token":"กุญแจของบอท",wayToGetTelegramToken:no,"Chat ID":"ไอดีแชท",supportTelegramChatID:co,wayToGetTelegramChatID:lo,"YOUR BOT TOKEN HERE":"กุญแจของบอทของคุณที่นี่",chatIDNotFound:po,webhook:uo,"Post URL":"URL โพสต์","Content Type":"ประเภทเนื้อหา",webhookJsonDesc:mo,webhookFormDataDesc:ho,smtp:go,secureOptionNone:So,secureOptionTLS:yo,"Ignore TLS Error":"เพิกเฉยข้อผิดพลาด TLS","From Email":"จากอีเมล",emailCustomSubject:Do,"To Email":"ถึงอีเมล",smtpCC:To,smtpBCC:Po,discord:ko,"Discord Webhook URL":"Discord Webhook URL",wayToGetDiscordURL:bo,"Bot Display Name":"ชื่อบอท","Prefix Custom Message":"คำนำหน้าข้อความที่กำหนดเอง","Hello @everyone is...":"สวัสดี {'@'}everyone นี่…",teams:Ao,"Webhook URL":"Webhook URL",wayToGetTeamsURL:vo,signal:Co,Number:"หมายเลข",Recipients:Io,needSignalAPI:Mo,wayToCheckSignalURL:fo,signalImportant:wo,gotify:Ro,"Application Token":"กุญแจของแอพพลิเคชั่น","Server URL":"Server URL",Priority:No,slack:Lo,"Icon Emoji":"Icon Emoji","Channel Name":"ชื่อห้อง","Uptime Kuma URL":"Uptime Kuma URL",aboutWebhooks:Uo,aboutChannelName:Ho,aboutKumaURL:xo,emojiCheatSheet:Eo,"rocket.chat":"Rocket.Chat",pushover:Fo,pushy:Oo,PushByTechulus:Go,octopush:Ko,promosms:Bo,clicksendsms:Wo,lunasea:Vo,apprise:jo,GoogleChat:qo,pushbullet:Jo,line:zo,mattermost:Qo,"User Key":"กุญแจผู้ใช้งาน",Device:Xo,"Message Title":"หัวข้อข้อความ","Notification Sound":"เสียงแจ้งเตือน","More info on:":"ข้อมูลเพิ่มเติม : {0}",pushoverDesc1:Zo,pushoverDesc2:Yo,"SMS Type":"ประเภท SMS",octopushTypePremium:_o,octopushTypeLowCost:$o,checkPrice:et,apiCredentials:ot,octopushLegacyHint:tt,"Check octopush prices":"ตรวจสอบราคาของ Octopush {0}",octopushPhoneNumber:st,octopushSMSSender:at,"LunaSea Device ID":"ไอดีอุปกรณ์ LunaSea","Apprise URL":"Apprise URL","Example:":"ตัวอย่าง : {0}","Read more:":"อ่านเพิ่มเติม : {0}","Status:":"สถานะ : {0}","Read more":"อ่านเพิ่มเติม",appriseInstalled:rt,appriseNotInstalled:it,"Access Token":"กุญแจการเข้าถึง","Channel access token":"กุญแจการเข้าถึงของช่อง","Line Developers Console":"Line Developers Console",lineDevConsoleTo:nt,"Basic Settings":"การตั้งค่าพื้นฐาน","User ID":"ไอดีผู้ใช้","Messaging API":"Messaging API",wayToGetLineChannelToken:ct,"Icon URL":"Icon URL",aboutIconURL:lt,aboutMattermostChannelName:pt,matrix:dt,promosmsTypeEco:ut,promosmsTypeFlash:mt,promosmsTypeFull:ht,promosmsTypeSpeed:gt,promosmsPhoneNumber:St,promosmsSMSSender:yt,"Feishu WebHookUrl":"Feishu WebHookURL",matrixHomeserverURL:Dt,"Internal Room Id":"รหัสห้องภายใน",matrixDesc1:Tt,matrixDesc2:Pt,Method:kt,Body:bt,Headers:At,PushUrl:vt,HeadersInvalidFormat:Ct,BodyInvalidFormat:It,"Monitor History":"ประวัติมอนิเตอร์",clearDataOlderThan:Mt,PasswordsDoNotMatch:ft,records:wt,"One record":"หนึ่งบันทึก",steamApiKeyDescription:Rt,"Current User":"ผู้ใช้ปัจจุบัน",topic:Nt,topicExplanation:Lt,successMessage:Ut,successMessageExplanation:Ht,recent:xt,Done:Et,Info:Ft,Security:Ot,"Steam API Key":"Steam API Key","Shrink Database":"ย่อฐานข้อมูล","Pick a RR-Type...":"เลือกชนิด DNS Record","Pick Accepted Status Codes...":"เลือกเลขสถานะที่ยอมรับ…",Default:Gt,"HTTP Options":"ตัวเลือก HTTP","Create Incident":"สร้างเหตุการณ์",Title:Kt,Content:Bt,Style:Wt,info:Vt,warning:jt,danger:qt,primary:Jt,light:zt,dark:Qt,Post:Xt,"Please input title and content":"กรุณาใส่ชื่อและเนื้อหา",Created:Zt,"Last Updated":"อัพเดทล่าสุด",Unpin:Yt,"Switch to Light Theme":"เปลี่ยนเป็นแบบสว่าง","Switch to Dark Theme":"เปลี่ยนเป็นแบบมืด","Show Tags":"แสดงแท็ก","Hide Tags":"ซ่อนแท็ก",Description:_t,"No monitors available.":"ไม่มีมอนิเตอร์ที่สามารถใช้งานได้","Add one":"เพิ่ม","No Monitors":"ไม่มีมอนิเตอร์","Untitled Group":"กลุ่มที่ไม่มีชื่อ",Services:$t,Discard:es,Cancel:os,"Powered by":"ขับเคลื่อนโดย",shrinkDatabaseDescription:ts,serwersms:ss,serwersmsAPIUser:as,serwersmsAPIPassword:rs,serwersmsPhoneNumber:is,serwersmsSenderName:ns,stackfield:cs,Customize:ls,"Custom Footer":"ส่วนท้ายที่กำหนดเอง","Custom CSS":"CSS ที่กำหนดเอง",smtpDkimSettings:ps,smtpDkimDesc:ds,documentation:us,smtpDkimDomain:ms,smtpDkimKeySelector:hs,smtpDkimPrivateKey:gs,smtpDkimHashAlgo:Ss,smtpDkimheaderFieldNames:ys,smtpDkimskipFields:Ds,gorush:Ts,alerta:Ps,alertaApiEndpoint:ks,alertaEnvironment:bs,alertaApiKey:As,alertaAlertState:vs,alertaRecoverState:Cs,deleteStatusPageMsg:Is,Proxies:Ms,default:"ค่าเริ่มต้น",enabled:fs,setAsDefault:ws,deleteProxyMsg:Rs,proxyDescription:Ns,enableProxyDescription:Ls,setAsDefaultProxyDescription:Us,"Certificate Chain":"ห่วงโซ่ใบรับรอง",Valid:Hs,Invalid:xs,AccessKeyId:Es,SecretAccessKey:Fs,PhoneNumbers:Os,TemplateCode:Gs,SignName:Ks,"Sms template must contain parameters: ":"เทมเพลต SMS ต้องมีพารามิเตอร์ : ","Bark Endpoint":"Bark Endpoint",WebHookUrl:Bs,SecretKey:Ws,"For safety, must use secret key":"เพื่อความปลอดภัย จำเป็นต้องตั้งค่ากุญแจการเข้าถึง","Device Token":"Device Token",Platform:Vs,iOS:js,Android:qs,Huawei:Js,High:zs,Retry:Qs,Topic:Xs,"WeCom Bot Key":"WeCom Bot Key","Setup Proxy":"ติดตั้งพร็อกซี่","Proxy Protocol":"โปรโตคอลพร็อกซี่","Proxy Server":"เซิร์ฟเวอร์พร็อกซี","Proxy server has authentication":"พร็อกซีเซิร์ฟเวอร์มีการตรวจสอบสิทธิ์",User:Zs,Installed:Ys,"Not installed":"ไม่ได้ติดตั้ง",Running:_s,"Not running":"ไม่ได้ทำงาน","Remove Token":"ลบกุญแจ",Start:$s,Stop:ea,"Uptime Kuma":"Uptime Kuma","Add New Status Page":"เพิ่มหน้าสถานะใหม่",Slug:oa,"Accept characters:":"ตัวอักษรที่ใช้งานได้ :",startOrEndWithOnly:ta,"No consecutive dashes":"ไม่มีขีดกลางติดต่อกัน",Next:sa,"The slug is already taken. Please choose another slug.":"ชื่อนี้ถูกใช้งานแล้ว กรุณาใช้ชื่ออื่น","No Proxy":"ไม่มีพร็อกซี่","HTTP Basic Auth":"HTTP Basic Auth","New Status Page":"หน้าสถานะใหม่","Page Not Found":"ไม่พบหน้านี้","Reverse Proxy":"พร็อกซีย้อนกลับ",Backup:aa,About:ra,wayToGetCloudflaredURL:ia,cloudflareWebsite:na,"Message:":"ข้อความ :","Don't know how to get the token? Please read the guide:":"ไม่รู้วิธีการรับกุญแจ? กรุณาอ่านคู่มือ:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"การเชื่อมต่อปัจุบันอาจขาดหายหากคุณกำลังเชื่อมต่อ Cloudflare Tunnel คุณแน่ใจหรือไม่ที่จะหยุด, พิมรหัสผ่านของคุณเพื่อยืนยัน","Other Software":"ซอฟต์แวร์อื่นๆ","For example: nginx, Apache and Traefik.":"เช่น: nginx, Apache และ Traefik","Please read":"กรุณาอ่าน","Subject:":"เรื่อง :","Valid To:":"ใช้ได้ถึง :","Days Remaining:":"จำนวนวันที่เหลือ :","Issuer:":"ผู้ออก :","Fingerprint:":"ลายนิ้วมือ :","No status pages":"ไม่มีหน้าสถานะ","Domain Name Expiry Notification":"แจ้งเตือนการหมดอายุของโดเมน",Proxy:"Proxy","Date Created":"วันที่สร้าง",onebotHttpAddress:ca,onebotMessageType:la,onebotGroupMessage:pa,onebotPrivateMessage:da,onebotUserOrGroupId:ua,onebotSafetyTips:ma,"PushDeer Key":"กุญแจ PushDeer","Footer Text":"ข้อความส่วนท้าย","Show Powered By":'แสดงข้อความ "ขับเคลื่อนโดย"',"Domain Names":"Domain Names",signedInDisp:ha,signedInDispDisabled:ga,"Certificate Expiry Notification":"แจ้งเตือนใบรับรองหมดอายุ","API Username":"API Username","API Key":"API Key","Recipient Number":"หมายเลขผู้รับ","From Name/Number":"จาก ชื่อ / หมายเลข","Leave blank to use a shared sender number.":"ไม่ต้องกรอกเพื่อใช้ชื่อผู้ส่งร่วมกัน","Octopush API Version":"เวอร์ชั่น API Octopush","Legacy Octopush-DM":"Octopush-DM  แบบเก่า",endpoint:Sa,octopushAPIKey:ya,octopushLogin:Da,promosmsLogin:Ta,promosmsPassword:Pa,"pushoversounds pushover":"Pushover (default)","pushoversounds bike":"Bike","pushoversounds bugle":"Bugle","pushoversounds cashregister":"Cash Register","pushoversounds classical":"Classical","pushoversounds cosmic":"Cosmic","pushoversounds falling":"Falling","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"Incoming","pushoversounds intermission":"Intermission","pushoversounds magic":"Magic","pushoversounds mechanical":"Mechanical","pushoversounds pianobar":"Piano Bar","pushoversounds siren":"Siren","pushoversounds spacealarm":"Space Alarm","pushoversounds tugboat":"Tug Boat","pushoversounds alien":"Alien Alarm (long)","pushoversounds climb":"Climb (long)","pushoversounds persistent":"Persistent (long)","pushoversounds echo":"Pushover Echo (long)","pushoversounds updown":"Up Down (long)","pushoversounds vibrate":"Vibrate Only","pushoversounds none":"None (silent)",pushyAPIKey:ka,pushyToken:ba,"Show update if available":"แสดงการอัปเดตถ้ามี","Also check beta release":"ตรวจสอบรุ่นเบต้า","Using a Reverse Proxy?":"ใช้ Reverse Proxy อยู่ใช่มั้ย?","Check how to config it for WebSocket":"ตรวจสอบวิธีการตั้งค่าสำหรับ WebSocket","Steam Game Server":"Steam Game Server","Most likely causes:":"สาเหตุที่เป็นไปได้มากที่สุด :","The resource is no longer available.":"ทรัพยากรไม่สามารถใช้งานได้อีกต่อไป","There might be a typing error in the address.":"อาจมีข้อผิดพลาดในการพิมพ์ที่อยู่","What you can try:":"สิ่งที่คุณสามารถลองทำ :","Retype the address.":"พิมพ์ที่อยู่อีกครั้ง","Go back to the previous page.":"กลับไปหน้าที่แล้ว","Coming Soon":"เร็วๆ นี้",wayToGetClickSendSMSToken:Aa,wayToGetLineNotifyToken:va,resendEveryXTimes:Ca,resendDisabled:Ia,dnsPortDescription:Ma,"Resend Notification if Down X times consecutively":"ส่งการแจ้งเตือนซ้ำถ้าออฟไลน์ครบ X ครั้ง",error:fa,critical:wa,wayToGetPagerDutyKey:Ra,"Integration Key":"Integration Key","Integration URL":"Integration URL","Auto resolve or acknowledged":"แก้ไขอัตโนมัติหรือยอมรับ","do nothing":"ไม่ทำอะไร","auto acknowledged":"ยอมรับอัตโนมัติ","auto resolve":"แก้ไขอัตโนมัติ","Bark Group":"กลุ่มที่จะประกาศ","Bark Sound":"เสียงประกาศ",Authentication:Na,"HTTP Headers":"HTTP Headers","Trust Proxy":"Trust Proxy",HomeAssistant:La,RadiusSecret:Ua,RadiusSecretDescription:Ha,RadiusCalledStationId:xa,RadiusCalledStationIdDescription:Ea,RadiusCallingStationId:Fa,RadiusCallingStationIdDescription:Oa,"Connection String":"Connection String",Query:Ga,settingsCertificateExpiry:Ka,certificationExpiryDescription:Ba,"Setup Docker Host":"ติดตั้ง Docker Host","Connection Type":"ประเภทการเชื่อมต่อ","Docker Daemon":"Docker Daemon",deleteDockerHostMsg:Wa,socket:Va,tcp:ja,"Docker Container":"Docker Container","Container Name / ID":"Container Name / ID","Docker Host":"Docker Host","Docker Hosts":"Docker Hosts","ntfy Topic":"หัวข้อ ntfy",Domain:qa,Workstation:Ja,disableCloudflaredNoAuthMsg:za,trustProxyDescription:Qa,Examples:Xa,"Home Assistant URL":"Home Assistant URL","Long-Lived Access Token":"Access Token แบบมีอายุนาน","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":'Access Token แบบมีอายุนานสามารถสร้างได้โดยคลิกชื่อบนโปรไฟล์ (ล่างซ้าย) และเลื่อนไปข้างล่างจากนั้นคลิก "Create Token" ',"Notification Service":"บริการแจ้งเตือน","default: notify all devices":"ค่าเริ่มต้น: แจ้งเตือนทุกอุปกรณ์",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'รายการแจ้งเตือนสามารถหาได้ใน Home Assistant ในเมนู "Developer Tools > Services" แล้วค้นหา "notification" เพื่อหาชื่ออุปกรณ์หรือชื่อโทรศัพท์',"Automations can optionally be triggered in Home Assistant:":"สามารถเลือกสั่งงานระบบอัตโนมัติได้ใน Home Assistant:","Trigger type:":"ชนิดสิ่งกระตุ้น:","Event type:":"ชนิดเหตการณ์:","Event data:":"ข้อมูลกิจกรรม:","Then choose an action, for example switch the scene to where an RGB light is red.":"จากนั้นเลือกการกระทำ, ตัวอย่าง เช่น เปลี่ยนเป็นไฟสีแดง","Frontend Version":"เวอร์ชั่น Frontend","Frontend Version do not match backend version!":"เวอร์ชั่น Frontend ไม่ตรงกับ Backend !",webhookAdditionalHeadersTitle:Za,webhookAdditionalHeadersDesc:Ya,"Start of maintenance":"เริ่มการซ่อมบำรุง","All Status Pages":"หน้าสถานะทั้งหมด",Custom:_a,Game:$a,statusMaintenance:er,Maintenance:or,Monitor:tr,"Select status pages...":"เลือกหน้าสถานะ","Schedule maintenance":"กำหนดเวลาบำรุงรักษา","Affected Monitors":"มอนิเตอร์ที่ได้รับผลกระทบ",markdownSupported:sr,Help:ar,"Pick Affected Monitors...":"เลือกมอนิเตอร์ที่ได้รับผลกระทบ","Packet Size":"ขนาดของ Packet",ZohoCliq:rr,backupOutdatedWarning:ir,backupRecommend:nr,Optional:cr,squadcast:lr,or:pr,recurringInterval:dr,Recurring:ur,"General Monitor Type":"ชนิดมอนิเตอร์ทั่วไป",pagertreeCritical:mr,pagertreeDoNothing:hr,pagertreeResolve:gr,wayToGetPagerTreeIntegrationURL:Sr})}}}));