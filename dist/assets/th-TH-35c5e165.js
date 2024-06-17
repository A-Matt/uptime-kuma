const e="ไทย",t="ตรวจสอบทุก {0} วินาที",o="ลองใหม่ทุก {0} วินาที",s="จำนวนครั้งสูงสุดที่จะลองก่อนบริการถูกระบุว่าไม่สามารถใช้งานได้และส่งการแจ้งเตือน",n="ไม่สนใจข้อผิดพลาด TLS/SSL สำหรับเว็บไซต์ HTTPS",a="สลับสถานะ เช่น ถ้าบริการสามารถใช้งานได้จะถูกเปลี่ยนเป็นใช้งานไม่ได้",r="จำนวนครั้งสูงสุดที่จะเปลี่ยนเส้นทาง, ตั้งเป็น 0 เพื่อปิดการเปลี่ยนเส้นทาง",i="เลือกรหัสสถานะที่ถือว่าการตอบกลับสำเร็จ",c="รหัสผ่านไม่ตรงกัน",l="การแจ้งเตือนต้องกำหนดให้มอนิเตอร์เพื่อให้สามารถใช้งานได้",d="ค้นหาคำสำคัญใน HTML หรือ JSON ของการตอบกลับ, คำสำคัญต้องคำนึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่",p="หยุดชั่วคราว",u="คุณแน่ใจหรือไม่ที่จะลบมอนิเตอร์?",m="คุณแน่ใจหรือไม่ที่จะลบการแจ้งเตือนสำหรับมอนิเตอร์ทั้งหมด?",h="Cloudflare เป็นเซิร์ฟเวอร์ค้นหาเริ่มต้น, คุณสามารถเปลี่ยนเซิร์ฟเวอร์ได้ตลอดเวลา",g="เลือกประเภท DNS Record ที่คุณต้องการจะมอนิเตอร์",S="คุณแน่ใจหรือไม่ที่จะหยุดมอนิเตอร์ชั่วคราว?",y="การแจ้งเตือนนี้จะถูกเปิดโดยค่าเริ่มต้นสำหรับมอนิเตอร์ใหม่, คุณสามารถปิดการแจ้งเตือนสำหรับแต่ละมอนิเตอร์ได้",D="คุณแน่ใจหรือไม่ที่จะลบเหตุการณ์ทั้งหมดสำหรับมอนิเตอร์นี้?",T="คุณแน่ใจหรือไม่ที่จะลบประวัติการตรวจสอบทั้งหมดสำหรับมอนิเตอร์นี้?",k="คุณแน่ใจหรือไม่ที่จะลบสถิติทั้งหมด?",P='เลือก "ข้ามรายการที่มีอยู่แล้ว" ถ้าคุณต้องการข้ามทุกมอนิเตอร์หรือการแจ้งเตือนที่มีชื่อซ้ำกัน, "เขียนทับ" จะลบทุกมอนิเตอร์หรือการแจ้งเตือนที่มีชื่อซ้ำกัน',b="คุณแน่ใจหรือไม่ที่จะนำเข้าข้อมูลสำรอง, กรุณาตรวจสอบว่าคุณเลือกข้อมูลที่ถูกต้อง",A="โปรดกรอกกุญแจ 2FA ของคุณเพื่อยืนยัน:",v="กุญแจถูกต้อง, ตอนนี้คุณสามารถบันทึกการตั้งค่า 2FA ของคุณได้แล้ว",C="คุณแน่ใจหรือไม่ที่จะเปิดใช้งาน 2FA?",M="คุณแน่ใจหรือไม่ที่จะปิดใช้งาน 2FA?",w="การตั้งค่า",I="แผงควบคุม",f="ภาษา",R="หน้าตา",N="หน้าตา",L="ทั่วไป",U="เวอร์ชั่น",E="รายการ",H="เพิ่ม",x="ใช้งานได้",F="ไม่สามารถใช้งานได้",O="รอดำเนินการ",G="ไม่ทราบ",K="หยุดชั่วคราว",W="ชื่อ",B="สถานะ",V="วันที่และเวลา",z="ข้อความ",j="ดำเนินการต่อ",q="แก้ไข",J="ลบ",Q="ปัจจุบัน",Z="เวลาที่ใช้งานได้",X="วัน",Y="วัน",_="ชั่วโมง",$="การตอบสนอง",ee="การตอบสนอง",te="คำสำคัญ",oe="URL",se="ชื่อโฮสต์",ne="พอร์ต",ae="จำนวนครั้งที่จะลองใหม่",re="ขั้นสูง",ie="คุณควรเรียก URL นี้ทุก {0} วินาที",ce="ตัวแปรเสริม: {0}",le="บันทึก",de="การแจ้งเตือน",pe="สว่าง",ue="มืด",me="อัตโนมัติ",he="ปกติ",ge="ด้านล่าง",Se="ไม่มี",ye="เขตเวลา",De="ออกจากระบบ",Te="ออก",ke="ยืนยัน",Pe="ใช่",be="ไม่",Ae="ชื่อผู้ใช้",ve="รหัสผ่าน",Ce="เข้าสู่ระบบ",Me="อีเมล",we="ทดสอบ",Ie="ส่งออก",fe="นำเข้า",Re="ระยะเวลาการตอบสนอง (ms)",Ne="ไม่สามารถใช้งานได้",Le="สร้าง",Ue="เหตุการณ์",Ee="ประวัติการตรวจสอบ",He="คุณสามารถสำรองข้อมูลการแจ้งเตือนและมอนิเตอร์ทั้งหมดไว้ได้ในไฟล์ JSON",xe="หมายเหตุ : ประวัติและข้อมูลเหตการณ์จะไม่ถูกสำรอง",Fe="ข้อมูลที่ละเอียดอ่อนเช่นกุญแจการแจ้งเตือนจะรวมอยู่ในไฟล์ข้อมูลสำรอง, โปรดเก็บข้อมูลสำรองอย่างปลอดภัย",Oe="กรุณาเลือกไฟล์ที่จะใช้งาน",Ge="กรุณาเลือกไฟล์ที่เป็น JSON",Ke="เขียนทับ",We="ตัวเลือก",Be="ใช้งาน",Ve="ไม่ใช้งาน",ze="กุญแจ",je="แท็ก",qe="สี",Je="เทา",Qe="แดง",Ze="ส้ม",Xe="เขียว",Ye="น้ำเงิน",_e="ม่วง",$e="ม่วง",et="ชมพู",tt="ไม่มีอะไรตรงนี้ !, กรุณาเพิ่มกลุ่มหรือมอนิเตอร์",ot="การแจ้งเตือน {notification} ของฉัน ({number})",st="ที่นี่",nt="จำเป็น",at="Telegram",rt="คุณสามารถรับกุญแจได้จาก {0}.",it="รองรับ แชทส่วนตัว, แชทกลุ่ม, ไอดีแชท",ct="คุณสามารถรับ ID แชทของคุณได้โดยส่งข้อความไปยังบอทและไปที่ URL นี้เพื่อดู chat_id :",lt="ไม่พบไอดีแชท, กรุณาส่งข้อความไปที่บอท",dt="Webhook",pt="{0} ดีสำหรับเซิร์ฟเวอร์ HTTP สมัยใหม่เช่น Express.js",ut="{multipart} ดีสำหรับ PHP, ข้อมูล JSON จะต้องถูกประมวลผลด้วย {decodeFunction}",mt="Email (SMTP)",ht="None / STARTTLS (25, 587)",gt="TLS (465)",St="หัวข้อที่กำหนดเอง",yt="CC",Dt="BCC",Tt="Discord",kt="คุณสามารถทำได้โดยการไปที่ Server Settings -> Integrations -> Create Webhook",Pt="Microsoft Teams",bt="คุณสามารถเรียนรู้วิธีการสร้าง Webhook URL {0}",At="Signal",vt="ผู้รับ",Ct="คุณต้องมี Signal Client ที่มี Rest API",Mt="คุณสามารถตรวจสอบ URL นี้เพื่อดูวิธีตั้งค่า :",wt="สำคัญ: คุณไม่สามารถผสมกลุ่มและตัวเลขในผู้รับได้!",It="Gotify",ft="ลำดับความสำคัญ",Rt="Slack",Nt="ข้อมูลเพิ่มเติมสำหรับ Webhooks : {0}",Lt="ใส่ชื่อห้องใน {0} ในช่องชื่อห้องถ้าต้องการที่จะข้าม Webhook, เช่น: #ช่องอื่นๆ",Ut="ถ้าคุณไม่ใส่ข้อมูลในช่อง Uptime Kuma URL ค่าเริ่มต้นจะเป็นจะเป็น Uptime Kuma Github",Et="ตาราง Emoji : {0}",Ht="Pushover",xt="Pushy",Ft="Push by Techulus",Ot="Octopush",Gt="PromoSMS",Kt="ClickSend SMS",Wt="LunaSea",Bt="Apprise (รองรับการแจ้งเตือนมากกว่า 50 บริการ)",Vt="Google Chat (สำหรับ Google Workspace เท่านั้น)",zt="Pushbullet",jt="Line Messenger",qt="Mattermost",Jt="อุปกรณ์",Qt="ลำดับความสำคัญฉุกเฉิน (2) มีการหมดเวลาเริ่มต้น 30 วินาทีระหว่างการลองใหม่และจะหมดอายุหลังจาก 1 ชั่วโมง",Zt="ถ้าคุณต้องการจะส่งการแจ้งเตือนไปยังอุปกรณ์อื่นๆ สามารถกำหนดได้ที่ช่องอุปกรณ์",Xt="พรีเมี่ยม (เร็ว - แนะนำสำหรับการแจ้งเตือน)",Yt="ต้นทุนต่ำ (ช้า - บางครั้งจะถูกบล็อกโดยผู้ให้บริการ)",_t="ตรวจสอบราคาของ {0} :",$t="ข้อมูลการตรวจสอบสิทธิ์ API",eo="คุณใช้เวอร์ชันดั้งเดิมของ Octopush (2011 - 2020) หรือเวอร์ชันใหม่หรือไม่?",to="หมายเลขโทรศัพท์ (รูปแบบสากล เช่น +33612345678) ",oo="ชื่อผู้ส่ง SMS : ความยาว 3 - 11 ตัวอักษร, ตัวเลข และช่องว่าง (a-zA-Z0-9 )",so="Apprise ถูกติดตั้งแล้ว",no="Apprise ยังไม่ถูกติดตั้ง {0}",ao="Line Developers Console - {0}",ro="ขั้นแรกให้เข้า {0} สร้างผู้ให้บริการและช่องทาง (Messaging API) จากนั้นคุณจะได้รับกุญแจการเข้าถึงช่องและไอดีผู้ใช้จากรายการเมนูที่กล่าวถึงข้างต้น",io='คุณสามารถระบุลิงก์รูปภาพใน "URL ไอคอน" เพื่อแทนที่รูปภาพโปรไฟล์เริ่มต้น จะไม่ถูกใช้หากมีการตั้งค่า Icon Emoji',co='คุณลบช่องเริ่มต้นที่ Webhook โพสต์ได้ด้วยการป้อนชื่อช่องลงในช่อง "ชื่อช่อง" ต้องเปิดใช้งานในการตั้งค่า Mattermost Webhook เช่น #ช่องอื่นๆ',lo="Matrix",po="SMS ECO - ราคาถูก แต่ช้าและมักจะโอเวอร์โหลด จำกัดเฉพาะผู้รับในโปแลนด์",uo="SMS FLASH - ข้อความจะแสดงบนอุปกรณ์ของผู้รับโดยอัตโนมัติ จำกัดเฉพาะผู้รับในโปแลนด์",mo="SMS FULL - SMS ระดับพรีเมียม คุณสามารถใช้ชื่อผู้ส่งของคุณได้ (คุณต้องลงทะเบียนชื่อก่อน) เชื่อถือได้สำหรับการแจ้งเตือน",ho="SMS SPEED - ลำดับความสำคัญสูงสุดในระบบ รวดเร็วและเชื่อถือได้ แต่มีค่าใช้จ่ายสูง (ประมาณสองเท่าของราคาเต็ม SMS)",go="หมายเลขโทรศัพท์ (สำหรับผู้รับโปแลนด์ คุณสามารถข้ามรหัสพื้นที่ได้)",So="ชื่อผู้ส่ง SMS : ชื่อที่ลงทะเบียนล่วงหน้าหรือหนึ่งในค่าเริ่มต้น: InfoSMS, ข้อมูล SMS, MaxSMS, INFO, SMS",yo="URL ของโฮมเซิร์ฟเวอร์ (พร้อม http(s):// และพอร์ตเสริม)",Do="คุณค้นหารหัสห้องภายในได้โดยดูในส่วนขั้นสูงของการตั้งค่าห้องในไคลเอ็นต์ Matrix มันควรจะมีลักษณะเช่น !PMdRCpsIfLwsfjIye6:kiznick.server.",To="ขอแนะนำเป็นอย่างยิ่งให้คุณสร้างผู้ใช้ใหม่และอย่าใช้โทเค็นการเข้าถึงของผู้ใช้ Matrix ของคุณเอง เนื่องจากจะทำให้สามารถเข้าถึงบัญชีของคุณและห้องทั้งหมดที่คุณเข้าร่วม ให้สร้างผู้ใช้ใหม่และเชิญเฉพาะห้องที่คุณต้องการรับการแจ้งเตือนแทน คุณสามารถรับโทเค็นเพื่อการเข้าถึงได้โดยเรียกใช้ {0}",ko="วิธี",Po="เนื้อหา",bo="ส่วนหัว",Ao="Push URL",vo="เนื้อหาคำขอส่วนหัวไม่ใช่ JSON ที่ถูกต้อง: ",Co="เนื้อหาคำขอไม่ใช่ JSON ที่ถูกต้อง : ",Mo="เก็บข้อมูลมอนิเตอร์ {0} วัน",wo="รหัสผ่านไม่ตรงกัน",Io="บันทึก",fo="สำหรับการมอนิเตอร์ Steam Game Server คุณต้องมี Steam Web-API key, คุณสามารถสมัครได้จากที่นี่ : ",Ro="หัวข้อ",No="หัวข้อ MQTT ที่จะมอนิเตอร์",Lo="ข้อความที่จะถือว่าประสบความสำเร็จ",Uo="ข้อความ MQTT ที่จะถือว่าประสบความสำเร็จ",Eo="ล่าสุด",Ho="สำเร็จ",xo="ข้อมูล",Fo="ความปลอดภัย",Oo="ค่าเริ่มต้น",Go="หัวข้อ",Ko="เนื้อหา",Wo="สไตล์",Bo="ข้อมูล",Vo="แจ้งเตือน",zo="อันตราย",jo="หลัก",qo="สว่าง",Jo="มืด",Qo="โพสต์",Zo="สร้าง",Xo="เลิกตรึง",Yo="รายละเอียด",_o="บริการ",$o="ทิ้ง",es="ยกเลิก",ts="ทริกเกอร์ฐานข้อมูล VACUUM สำหรับ SQLite หากฐานข้อมูลของคุณถูกสร้างขึ้นหลังจากเวอร์ชั่น 1.10.0 แสดงว่า AUTO_VACUUM เปิดใช้งานอยู่แล้วและไม่จำเป็นต้องดำเนินการนี้",os="SerwerSMS.pl",ss="API Username (incl. webapi_ prefix)",ns="API Password",as="หมายเลขโทรศัพท์",rs="ชื่อผู้ส่ง SMS (ลงทะเบียนผ่านหน้าควบคุม)",is="Stackfield",cs="ปรับแต่ง",ls="การตั้งค่า DKIM",ds="โปรดดู Nodemailer DKIM {0} สำหรับการใช้งาน",ps="คู่มือการใช้งาน",us="ชื่อโดเมน",ms="Key Selector",hs="Private Key",gs="อัลกอริทึมแฮช (ไม่บังคับ)",Ss="คีย์ส่วนหัวสำหรับลงชื่อ (ไม่บังคับ)",ys="Header Keys ไม่ต้องเซ็น (ไม่บังคับ)",Ds="Gorush",Ts="Alerta",ks="API Endpoint",Ps="Environment",bs="กุญแจ API",As="แจ้งเตือนสถานะ",vs="กู้คืนสถานะ",Cs="คุณแน่ใจหรือไม่ว่าต้องการลบหน้าสถานะนี้",Ms="พร็อกซี",ws="เปิดใช้งานแล้ว",Is="ตั้งเป็นค่าเริ่มต้น",fs="คุณแน่ใจหรือไม่ว่าต้องการลบพร็อกซีสำหรับมอนิเตอร์ทั้งหมด?",Rs="ต้องตั้งค่ามอนิเตอร์ให้ใช้พร็อกซีเพื่อให้ใช้งานได้",Ns="พร็อกซีนี้จะไม่ส่งผลต่อมอนิเตอร์จนกว่าจะเปิดใช้งาน คุณสามารถควบคุมการปิดใช้งานพร็อกซีชั่วคราวจากมอนิเตอร์ทั้งหมดได้ที่ส่วนสถานะการเปิดใช้งาน",Ls="พร็อกซีนี้จะถูกเปิดโดนค่าเริ่มต้นสำหรับมอนิเตอร์ใหม่, คุณสามารถปิดการแจ้งเตือนสำหรับแต่ละมอนิเตอร์ได้",Us="ถูกต้อง",Es="ไม่ถูกต้อง",Hs="กุญแจสิทธิ ID",xs="กุญแจสิทธิ Secret",Fs="PhoneNumbers",Os="รหัสเทมเพลต",Gs="ป้ายชื่อ",Ks="WebHookUrl",Ws="SecretKey",Bs="แพลตฟอร์ม",Vs="Huawei",zs="สูง",js="ลองใหม่",qs="หัวข้อ",Js="ผู้ใช้",Qs="ติดตั้งแล้ว",Zs="กำลังทำงาน",Xs="เริ่ม",Ys="หยุด",_s="ชื่อ",$s="เริ่มหรือจบด้วย {0} เท่านั้น",en="ต่อไป",tn="สำรองข้อมูล",on="เกี่ยวกับ",sn="(ดาวโหลด cloudflared จาก {0})",nn="เว็บไซต์ Cloudflare",an="ที่อยู่ HTTP OneBot",rn="ชนิดข้อความ OneBot",cn="กลุ่ม",ln="ส่วนตัว",dn="กลุ่ม / ไอดีผู้ใช้",pn="เพื่อความปลอดภัย จำเป็นต้องตั้งค่ากุญแจการเข้าถึง",un="เข้าใช้งานในฐานะ {0}",mn="ปิดการยืนยันตัวตน",hn="endpoint",gn='"API key" จากข้อมูลยืนยันตัวตน HTTP API ในแผงควบคุม',Sn='"Login" จากข้อมูลยืนยันตัวตน HTTP API ในแผงควบคุม',yn="API Login Name",Dn="API Password",Tn="Secret API Key",kn="Device token",Pn="คุณสามารถรับ API Username และ API Key ได้จาก {0}",bn="คุณสามารถรับ access token ได้จาก {0}",An="ส่งซ้ำทุก {0} ครั้ง",vn="การส่งซ้ำถูกปิดใช้งาน",Cn="พอร์ตของเซิร์ฟเวอร์ DNS, ค่าเริ่มต้นคือ 53, คุณสามารถเปลี่ยนพอร์ตตอนไหนก็ได้",Mn="เกิดข้อผิดพลาด",wn="วิกฤต",In='คุณสามารถรับคีย์ได้โดยการไปที่ Service -> Service Directory -> (Select a service) -> Integrations -> Add integration, และค้นหา "Events API V2", สำหรับข้อมูลเพิ่มเติม {0}',fn="การตรวจสอบสิทธิ์",Rn="Home Assistant",Nn="Radius Secret",Ln="แบ่งปันคีย์ลับระหว่างผู้ใช้งานและเซิร์ฟเวอร์",Un="Called Station Id",En="Identifier of the called device",Hn="Calling Station Id",xn="Identifier of the calling device",Fn="Query",On="วันหมดอายุของใบรับรอง TLS",Gn="การตรวจสอบ HTTPS จะแจ้งเตือนถ้าใบอนุญาติ TLS จะหมดอายุใน:",Kn="คุณแน่ใจหรือไม่ที่จะลบ Docker host นี้สำหรับการมอนิเตอร์ทั้งหมด?",Wn="Socket",Bn="TCP / HTTP",Vn="โดเมน",zn="Workstation",jn="คุณอยู่ในโหมดไม่มีการตรวจสอบสิทธิ์, ไม่จำเป็นต้องมีรหัสผ่าน",qn="เชื่อ Header 'X-Forwarded-*', คุณควรเปิดใช้งาน ถ้าคุณต้องการ IP ของผู้ใช้ที่ถูกต้องและ Uptime Kuma อยู่ข้างหลัง Nginx หรือ Apache",Jn="ตัวอย่าง",Qn="Header เพิ่มเติม",Zn="กำหนด Header ที่จะส่งไปหร้อมกับ Webhook",Xn="กำหนดเอง",Yn="เกม",_n="การซ่อมบำรุง",$n="การซ่อมบำรุง",ea="มอนิเตอร์ | มอนิเตอร์",ta="รองรับ Markdown",oa="ช่วยเหลือ",sa="ZohoCliq",na="ไม่ได้รับการพัฒนาแล้ว : ไม่สามารถสร้างหรือกูข้อมูลสำรองได้สมบูรณ์ เนื่องจากมีฟีเจอร์ใหม่เพิ่มขึ้นมากและการแบ็คอัพไม่ได้ถูกพัฒนา",aa="กรุณาแบ็คอัพข้อมูลทั้งหมดหรือโฟลเดอร์ Data (./data/) โดยตรงแทน",ra="ไม่จำเป็น",ia="Squadcast",ca="หรือ",la="ช่วงเวลา",da="ทำซ้ำ",pa="วิกฤต",ua="ไม่ต้องทำอะไร",ma="แก้ไขอัตโนมัติ",ha="หลังจากสร้างการรวม Uptime Kuma ใน PagerTree แล้ว ให้คัดลอก Endpoint, ดูรายละเอียดทั้งหมด {0}",ga="ส่งอย่างเงียบ ๆ",Sa="ป้องกันการส่งต่อ/บันทึก",ya="ตั่งให้ใช้งาน/ไม่ใช้งานด้วยตนเอง",Da="ใช้เขตเวลาของเซิร์ฟเวอร์",Ta="จันทร์",ka="วันอังคาร",Pa="พุธ",ba="พฤหัสบดี",Aa="ศุกร์",va="เสาร์",Ca="อาทิตย์",Ma="วันในสัปดาห์",wa="วันในเดือน",Ia="(ตัวเลือก) ไอดีเทรดข้อความ",fa="ตัวระบุที่ไม่ซ้ำซึ่งเป็นทางเลือกสำหรับเธรดข้อความเป้าหมาย (หัวข้อ) ของฟอรัม สำหรับฟอรัมซูเปอร์กรุ๊ปเท่านั้น",Ra="เช่นเดียวกับเขตเวลาของเซิร์ฟเวอร์",Na="วันที่/เวลาเริ่มต้น",La="วันที่/เวลาสิ้นสุด",Ua="กำหนดการ: ",Ea="นิพจน์ Cron ไม่ถูกต้อง: {0}",Ha="นิพจน์ Cron",xa="วันสุดท้าย",Fa="วันสุดท้ายของเดือน",Oa="วันที่ 2 สุดท้ายของเดือน",Ga="วันที่ 3 สุดท้ายของเดือน",Ka="วันที่ 4 สุดท้ายของเดือน",Wa="แน่ใจไหมว่าต้องการหยุดชั่วคราว",Ba="จบ",Va="รีโหลดใน: {0}",za="ส่งข้อความอย่างเงียบๆ ผู้ใช้จะได้รับการแจ้งเตือนโดยไม่มีเสียง",ja="หากเปิดใช้งาน ข้อความบอทใน Telegram จะได้รับการปกป้องจากการส่งต่อและการบันทึก",qa="อาจจะทำงานไม่ได้กับ IPv6, ปิดใช้งานถ้าเจอปัญหา",Ja="URL ไอคอน",Qa="เปิดใช้งาน",Za="ปิดใช้งาน",Xa="โคลนมอนิเตอร์",Ya="ชื่อเล่นมอนิเตอร์",_a="คุณสามารถดูวิธีการสร้าง Webhook URL {0}",$a="หน้าหลัก",er="ไม่สามารถดึงข้อมูลได้ โปรดลองอีกครั้งในภายหลัง",tr="ปลั้กอิน | ปลั้กอิน",or="ติดตั้ง",sr="กำลังติดตั้ง",nr="ถอนการติดตั้ง",ar="กำลังถอนการติดตั้ง",rr="แน่ใจหรือไม่ว่าต้องการถอนการติดตั้งปลั้กอินนี้?",ir="ดำเนินการทุกวัน | ดำเนินการทุก {0} วัน",cr="ตรวจจับอัตโนมัติ",lr="สำหรับผู้ใช้งาน Docker, ถ้ายังไม่ได้ติดตั่ง Chromium, อาจจะเสียเวลาในการติดตั่งและแสดงผลการทดสอบเพิ่มเติม, ใช้พื้นที่ประมาณ 1GB",dr="ภูมิภาค",pr="หมดเวลาหลังจาก {0} วินาที",ur="เลือก",mr={languageName:e,checkEverySecond:t,retryCheckEverySecond:o,retriesDescription:s,ignoreTLSError:n,upsideDownModeDescription:a,maxRedirectDescription:r,acceptedStatusCodesDescription:i,passwordNotMatchMsg:c,notificationDescription:l,keywordDescription:d,pauseDashboardHome:p,deleteMonitorMsg:u,deleteNotificationMsg:m,resolverserverDescription:h,rrtypeDescription:g,pauseMonitorMsg:S,enableDefaultNotificationDescription:y,clearEventsMsg:D,clearHeartbeatsMsg:T,confirmClearStatisticsMsg:k,importHandleDescription:P,confirmImportMsg:b,twoFAVerifyLabel:A,tokenValidSettingsMsg:v,confirmEnableTwoFAMsg:C,confirmDisableTwoFAMsg:M,Settings:w,Dashboard:I,"New Update":"อัพเดทใหม่",Language:f,Appearance:R,Theme:N,General:L,"Primary Base URL":"URL หลัก",Version:U,"Check Update On GitHub":"ตรวจสอบการอัปเดตบน GitHub",List:E,Add:H,"Add New Monitor":"เพิ่มมอนิเตอร์ใหม่","Quick Stats":"สถิติด่วน",Up:x,Down:F,Pending:O,Unknown:G,Pause:K,Name:W,Status:B,DateTime:V,Message:z,"No important events":"ไม่มีเหตการณ์ที่สำคัญ",Resume:j,Edit:q,Delete:J,Current:Q,Uptime:Z,"Cert Exp.":"วันหมดอายุใบรับรอง",days:X,day:Y,"-day":"-วัน",hour:_,"-hour":"-ชั่วโมง",Response:$,Ping:ee,"Monitor Type":"ประเภทมอนิเตอร์",Keyword:te,"Friendly Name":"ชื่อที่เป็นมิตร",URL:oe,Hostname:se,Port:ne,"Heartbeat Interval":"ระยะเวลาระหว่างการทดสอบ",Retries:ae,"Heartbeat Retry Interval":"ระยะห่างระหว่างการทดสอบใหม่หลังจากไม่สำเร็จ",Advanced:re,"Upside Down Mode":"โหมดสลับ","Max. Redirects":"จำนวนการเปลี่ยนเส้นทางสูงสุด","Accepted Status Codes":"รหัสสถานะที่ยอมรับ","Push URL":"URL เป้าหมาย",needPushEvery:ie,pushOptionalParams:ce,Save:le,Notifications:de,"Not available, please setup.":"ไม่พร้อมใช้งาน, กรุณาตั้งค่า","Setup Notification":"ตั้งค่าการแจ้งเตือน",Light:pe,Dark:ue,Auto:me,"Theme - Heartbeat Bar":"หน้าตา - แถบการตอบสนอง",Normal:he,Bottom:ge,None:Se,Timezone:ye,"Search Engine Visibility":"การมองเห็นของเครื่องมือค้นหา","Allow indexing":"อนุญาตให้สร้างดัชนี","Discourage search engines from indexing site":"ปฏิเสธเครื่องมือค้นหาไม่ให้สร้างดัชนีของเว็บไซต์","Change Password":"เปลี่ยนรหัสผ่าน","Current Password":"รหัสผ่านปัจจุบัน","New Password":"รหัสผ่านใหม่","Repeat New Password":"ยืนยันรหัสผ่านใหม่","Update Password":"อัพเดทรหัสผ่าน","Disable Auth":"ปิดใช้งานการตรวจสอบสิทธิ์","Enable Auth":"เปิดใช้งานการตรวจสอบสิทธิ์","disableauth.message1":"คุณต้องการที่จะ <strong>ปิดใช้งานระบบรับรองความถูกต้องใช่หรือไม่</strong>?","disableauth.message2":"ระบบนี้ถูกออกแบบมาเพื่อการใช้งานกับระบบรับรองความถูกต้องของบุคคลที่สามเช่น Cloudflare Access, Authelia หรือวิธีการอื่นๆ","Please use this option carefully!":"โปรดใช้ความระมัดระวังในการเลือกใช้งานระบบนี้ !",Logout:De,Leave:Te,"I understand, please disable":"ฉันเข้าใจแล้ว, กรุณาปิดการใช้งาน",Confirm:ke,Yes:Pe,No:be,Username:Ae,Password:ve,"Remember me":"จดจำฉันไว้",Login:Ce,"No Monitors, please":"ไม่มีมอนิเตอร์, กรุณา","add one":"สร้าง","Notification Type":"ประเภทการแจ้งเตือน",Email:Me,Test:we,"Certificate Info":"ข้อมูลใบรับรอง","Resolver Server":"เซิร์ฟเวอร์ที่ค้นหา","Resource Record Type":"ประเภท DNS Record","Last Result":"ผลล่าสุด","Create your admin account":"สร้างบัญชีผู้ดูแลระบบ","Repeat Password":"ยืนยันรหัสผ่าน","Import Backup":"นำเข้าข้อมูลสำรอง","Export Backup":"ส่งออกข้อมูลสำรอง",Export:Ie,Import:fe,respTime:Re,notAvailableShort:Ne,"Default enabled":"เปิดใช้งานโดยค่าเริ่มต้น","Apply on all existing monitors":"ใช้กับมอนิเตอร์ทั้งหมด",Create:Le,"Clear Data":"ล้างข้อมูล",Events:Ue,Heartbeats:Ee,"Auto Get":"ดึงอัตโนมัติ",backupDescription:He,backupDescription2:xe,backupDescription3:Fe,alertNoFile:Oe,alertWrongFileType:Ge,"Clear all statistics":"ล้างข้อมูลสถิติทั้งหมด","Skip existing":"ข้ามรายการที่มีอยู่แล้ว",Overwrite:Ke,Options:We,"Keep both":"เก็บทั้งสอง","Verify Token":"ยืนยันกุญแจ","Setup 2FA":"ติดตั้ง 2FA","Enable 2FA":"เปิดใช้งาน 2FA","Disable 2FA":"ปิดใช้งาน 2FA","2FA Settings":"ตั้งค่า 2FA","Two Factor Authentication":"การยืนยันตัวตนแบบสองขั้นตอน",Active:Be,Inactive:Ve,Token:ze,"Show URI":"แสดง URI",Tags:je,"Add New below or Select...":"เพิ่มใหม่ด้านล่างหรือเลือก…","Tag with this name already exist.":"แท็กที่มีชื่อนี้มีอยู่แล้ว","Tag with this value already exist.":"แท็กที่มีข้อมูลนี้มีอยู่แล้ว",color:qe,"value (optional)":"ข้อมูล (ไม่จำเป็น)",Gray:Je,Red:Qe,Orange:Ze,Green:Xe,Blue:Ye,Indigo:_e,Purple:$e,Pink:et,"Search...":"ค้นหา…","Avg. Ping":"ค่า Ping เฉลี่ย","Avg. Response":"ค่า Response เฉลี่ย","Entry Page":"หน้าต้อนรับ",statusPageNothing:tt,"No Services":"ไม่มีบริการ","All Systems Operational":"บริการทั้งหมดทำงานได้ปกติ","Partially Degraded Service":"บริการมีปัญหาบางส่วน","Degraded Service":"บริการมีปัญหา","Add Group":"เพิ่มกลุ่ม","Add a monitor":"เพิ่มมอนิเตอร์","Edit Status Page":"แก้ไขหน้าสถานะ","Go to Dashboard":"ไปที่หน้าควบคุม","Status Page":"หน้าสถานะ","Status Pages":"หน้าสถานะ",defaultNotificationName:ot,here:st,Required:nt,telegram:at,"Bot Token":"กุญแจของบอท",wayToGetTelegramToken:rt,"Chat ID":"ไอดีแชท",supportTelegramChatID:it,wayToGetTelegramChatID:ct,"YOUR BOT TOKEN HERE":"กุญแจของบอทของคุณที่นี่",chatIDNotFound:lt,webhook:dt,"Post URL":"URL โพสต์","Content Type":"ประเภทเนื้อหา",webhookJsonDesc:pt,webhookFormDataDesc:ut,smtp:mt,secureOptionNone:ht,secureOptionTLS:gt,"Ignore TLS Error":"เพิกเฉยข้อผิดพลาด TLS","From Email":"จากอีเมล",emailCustomSubject:St,"To Email":"ถึงอีเมล",smtpCC:yt,smtpBCC:Dt,discord:Tt,"Discord Webhook URL":"Discord Webhook URL",wayToGetDiscordURL:kt,"Bot Display Name":"ชื่อบอท","Prefix Custom Message":"คำนำหน้าข้อความที่กำหนดเอง","Hello @everyone is...":"สวัสดี {'@'}everyone นี่…",teams:Pt,"Webhook URL":"Webhook URL",wayToGetTeamsURL:bt,signal:At,Number:"หมายเลข",Recipients:vt,needSignalAPI:Ct,wayToCheckSignalURL:Mt,signalImportant:wt,gotify:It,"Application Token":"กุญแจของแอพพลิเคชั่น","Server URL":"Server URL",Priority:ft,slack:Rt,"Icon Emoji":"Icon Emoji","Channel Name":"ชื่อห้อง","Uptime Kuma URL":"Uptime Kuma URL",aboutWebhooks:Nt,aboutChannelName:Lt,aboutKumaURL:Ut,emojiCheatSheet:Et,"rocket.chat":"Rocket.Chat",pushover:Ht,pushy:xt,PushByTechulus:Ft,octopush:Ot,promosms:Gt,clicksendsms:Kt,lunasea:Wt,apprise:Bt,GoogleChat:Vt,pushbullet:zt,line:jt,mattermost:qt,"User Key":"กุญแจผู้ใช้งาน",Device:Jt,"Message Title":"หัวข้อข้อความ","Notification Sound":"เสียงแจ้งเตือน","More info on:":"ข้อมูลเพิ่มเติม : {0}",pushoverDesc1:Qt,pushoverDesc2:Zt,"SMS Type":"ประเภท SMS",octopushTypePremium:Xt,octopushTypeLowCost:Yt,checkPrice:_t,apiCredentials:$t,octopushLegacyHint:eo,"Check octopush prices":"ตรวจสอบราคาของ Octopush {0}",octopushPhoneNumber:to,octopushSMSSender:oo,"LunaSea Device ID":"ไอดีอุปกรณ์ LunaSea","Apprise URL":"Apprise URL","Example:":"ตัวอย่าง : {0}","Read more:":"อ่านเพิ่มเติม : {0}","Status:":"สถานะ : {0}","Read more":"อ่านเพิ่มเติม",appriseInstalled:so,appriseNotInstalled:no,"Access Token":"กุญแจการเข้าถึง","Channel access token":"กุญแจการเข้าถึงของช่อง","Line Developers Console":"Line Developers Console",lineDevConsoleTo:ao,"Basic Settings":"การตั้งค่าพื้นฐาน","User ID":"ไอดีผู้ใช้","Messaging API":"Messaging API",wayToGetLineChannelToken:ro,"Icon URL":"Icon URL",aboutIconURL:io,aboutMattermostChannelName:co,matrix:lo,promosmsTypeEco:po,promosmsTypeFlash:uo,promosmsTypeFull:mo,promosmsTypeSpeed:ho,promosmsPhoneNumber:go,promosmsSMSSender:So,"Feishu WebHookUrl":"Feishu WebHookURL",matrixHomeserverURL:yo,"Internal Room Id":"รหัสห้องภายใน",matrixDesc1:Do,matrixDesc2:To,Method:ko,Body:Po,Headers:bo,PushUrl:Ao,HeadersInvalidFormat:vo,BodyInvalidFormat:Co,"Monitor History":"ประวัติมอนิเตอร์",clearDataOlderThan:Mo,PasswordsDoNotMatch:wo,records:Io,"One record":"หนึ่งบันทึก",steamApiKeyDescription:fo,"Current User":"ผู้ใช้ปัจจุบัน",topic:Ro,topicExplanation:No,successMessage:Lo,successMessageExplanation:Uo,recent:Eo,Done:Ho,Info:xo,Security:Fo,"Steam API Key":"Steam API Key","Shrink Database":"ย่อฐานข้อมูล","Pick a RR-Type...":"เลือกชนิด DNS Record","Pick Accepted Status Codes...":"เลือกเลขสถานะที่ยอมรับ…",Default:Oo,"HTTP Options":"ตัวเลือก HTTP","Create Incident":"สร้างเหตุการณ์",Title:Go,Content:Ko,Style:Wo,info:Bo,warning:Vo,danger:zo,primary:jo,light:qo,dark:Jo,Post:Qo,"Please input title and content":"กรุณาใส่ชื่อและเนื้อหา",Created:Zo,"Last Updated":"อัพเดทล่าสุด",Unpin:Xo,"Switch to Light Theme":"เปลี่ยนเป็นแบบสว่าง","Switch to Dark Theme":"เปลี่ยนเป็นแบบมืด","Show Tags":"แสดงแท็ก","Hide Tags":"ซ่อนแท็ก",Description:Yo,"No monitors available.":"ไม่มีมอนิเตอร์ที่สามารถใช้งานได้","Add one":"เพิ่ม","No Monitors":"ไม่มีมอนิเตอร์","Untitled Group":"กลุ่มที่ไม่มีชื่อ",Services:_o,Discard:$o,Cancel:es,"Powered by":"ขับเคลื่อนโดย",shrinkDatabaseDescription:ts,serwersms:os,serwersmsAPIUser:ss,serwersmsAPIPassword:ns,serwersmsPhoneNumber:as,serwersmsSenderName:rs,stackfield:is,Customize:cs,"Custom Footer":"ส่วนท้ายที่กำหนดเอง","Custom CSS":"CSS ที่กำหนดเอง",smtpDkimSettings:ls,smtpDkimDesc:ds,documentation:ps,smtpDkimDomain:us,smtpDkimKeySelector:ms,smtpDkimPrivateKey:hs,smtpDkimHashAlgo:gs,smtpDkimheaderFieldNames:Ss,smtpDkimskipFields:ys,gorush:Ds,alerta:Ts,alertaApiEndpoint:ks,alertaEnvironment:Ps,alertaApiKey:bs,alertaAlertState:As,alertaRecoverState:vs,deleteStatusPageMsg:Cs,Proxies:Ms,default:"ค่าเริ่มต้น",enabled:ws,setAsDefault:Is,deleteProxyMsg:fs,proxyDescription:Rs,enableProxyDescription:Ns,setAsDefaultProxyDescription:Ls,"Certificate Chain":"ห่วงโซ่ใบรับรอง",Valid:Us,Invalid:Es,AccessKeyId:Hs,SecretAccessKey:xs,PhoneNumbers:Fs,TemplateCode:Os,SignName:Gs,"Sms template must contain parameters: ":"เทมเพลต SMS ต้องมีพารามิเตอร์ : ","Bark Endpoint":"Bark Endpoint",WebHookUrl:Ks,SecretKey:Ws,"For safety, must use secret key":"เพื่อความปลอดภัย จำเป็นต้องตั้งค่ากุญแจการเข้าถึง","Device Token":"Device Token",Platform:Bs,Huawei:Vs,High:zs,Retry:js,Topic:qs,"WeCom Bot Key":"WeCom Bot Key","Setup Proxy":"ติดตั้งพร็อกซี่","Proxy Protocol":"โปรโตคอลพร็อกซี่","Proxy Server":"เซิร์ฟเวอร์พร็อกซี","Proxy server has authentication":"พร็อกซีเซิร์ฟเวอร์มีการตรวจสอบสิทธิ์",User:Js,Installed:Qs,"Not installed":"ไม่ได้ติดตั้ง",Running:Zs,"Not running":"ไม่ได้ทำงาน","Remove Token":"ลบกุญแจ",Start:Xs,Stop:Ys,"Uptime Kuma":"Uptime Kuma","Add New Status Page":"เพิ่มหน้าสถานะใหม่",Slug:_s,"Accept characters:":"ตัวอักษรที่ใช้งานได้ :",startOrEndWithOnly:$s,"No consecutive dashes":"ไม่มีขีดกลางติดต่อกัน",Next:en,"The slug is already taken. Please choose another slug.":"ชื่อนี้ถูกใช้งานแล้ว กรุณาใช้ชื่ออื่น","No Proxy":"ไม่มีพร็อกซี่","HTTP Basic Auth":"HTTP Basic Auth","New Status Page":"หน้าสถานะใหม่","Page Not Found":"ไม่พบหน้านี้","Reverse Proxy":"พร็อกซีย้อนกลับ",Backup:tn,About:on,wayToGetCloudflaredURL:sn,cloudflareWebsite:nn,"Message:":"ข้อความ :","Don't know how to get the token? Please read the guide:":"ไม่รู้วิธีการรับกุญแจ? กรุณาอ่านคู่มือ:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"การเชื่อมต่อปัจุบันอาจขาดหายหากคุณกำลังเชื่อมต่อ Cloudflare Tunnel คุณแน่ใจหรือไม่ที่จะหยุด, พิมรหัสผ่านของคุณเพื่อยืนยัน","Other Software":"ซอฟต์แวร์อื่นๆ","For example: nginx, Apache and Traefik.":"เช่น: nginx, Apache และ Traefik","Please read":"กรุณาอ่าน","Subject:":"เรื่อง :","Valid To:":"ใช้ได้ถึง :","Days Remaining:":"จำนวนวันที่เหลือ :","Issuer:":"ผู้ออก :","Fingerprint:":"ลายนิ้วมือ :","No status pages":"ไม่มีหน้าสถานะ","Domain Name Expiry Notification":"แจ้งเตือนการหมดอายุของโดเมน",Proxy:"Proxy","Date Created":"วันที่สร้าง",onebotHttpAddress:an,onebotMessageType:rn,onebotGroupMessage:cn,onebotPrivateMessage:ln,onebotUserOrGroupId:dn,onebotSafetyTips:pn,"PushDeer Key":"กุญแจ PushDeer","Footer Text":"ข้อความส่วนท้าย","Show Powered By":'แสดงข้อความ "ขับเคลื่อนโดย"',"Domain Names":"Domain Names",signedInDisp:un,signedInDispDisabled:mn,"Certificate Expiry Notification":"แจ้งเตือนใบรับรองหมดอายุ","API Username":"API Username","API Key":"API Key","Recipient Number":"หมายเลขผู้รับ","From Name/Number":"จาก ชื่อ / หมายเลข","Leave blank to use a shared sender number.":"ไม่ต้องกรอกเพื่อใช้ชื่อผู้ส่งร่วมกัน","Octopush API Version":"เวอร์ชั่น API Octopush","Legacy Octopush-DM":"Octopush-DM แบบเก่า",endpoint:hn,octopushAPIKey:gn,octopushLogin:Sn,promosmsLogin:yn,promosmsPassword:Dn,"pushoversounds pushover":"Pushover (default)","pushoversounds bike":"Bike","pushoversounds bugle":"Bugle","pushoversounds cashregister":"Cash Register","pushoversounds classical":"Classical","pushoversounds cosmic":"Cosmic","pushoversounds falling":"Falling","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"Incoming","pushoversounds intermission":"Intermission","pushoversounds magic":"Magic","pushoversounds mechanical":"Mechanical","pushoversounds pianobar":"Piano Bar","pushoversounds siren":"Siren","pushoversounds spacealarm":"Space Alarm","pushoversounds tugboat":"Tug Boat","pushoversounds alien":"Alien Alarm (long)","pushoversounds climb":"Climb (long)","pushoversounds persistent":"Persistent (long)","pushoversounds echo":"Pushover Echo (long)","pushoversounds updown":"Up Down (long)","pushoversounds vibrate":"Vibrate Only","pushoversounds none":"None (silent)",pushyAPIKey:Tn,pushyToken:kn,"Show update if available":"แสดงการอัปเดตถ้ามี","Also check beta release":"ตรวจสอบรุ่นเบต้า","Using a Reverse Proxy?":"ใช้ Reverse Proxy อยู่ใช่มั้ย?","Check how to config it for WebSocket":"ตรวจสอบวิธีการตั้งค่าสำหรับ WebSocket","Steam Game Server":"Steam Game Server","Most likely causes:":"สาเหตุที่เป็นไปได้มากที่สุด :","The resource is no longer available.":"ทรัพยากรไม่สามารถใช้งานได้อีกต่อไป","There might be a typing error in the address.":"อาจมีข้อผิดพลาดในการพิมพ์ที่อยู่","What you can try:":"สิ่งที่คุณสามารถลองทำ :","Retype the address.":"พิมพ์ที่อยู่อีกครั้ง","Go back to the previous page.":"กลับไปหน้าที่แล้ว","Coming Soon":"เร็วๆ นี้",wayToGetClickSendSMSToken:Pn,wayToGetLineNotifyToken:bn,resendEveryXTimes:An,resendDisabled:vn,dnsPortDescription:Cn,"Resend Notification if Down X times consecutively":"ส่งการแจ้งเตือนซ้ำถ้าออฟไลน์ครบ X ครั้ง",error:Mn,critical:wn,wayToGetPagerDutyKey:In,"Integration Key":"Integration Key","Integration URL":"Integration URL","Auto resolve or acknowledged":"แก้ไขอัตโนมัติหรือยอมรับ","do nothing":"ไม่ทำอะไร","auto acknowledged":"ยอมรับอัตโนมัติ","auto resolve":"แก้ไขอัตโนมัติ","Bark Group":"กลุ่มที่จะประกาศ","Bark Sound":"เสียงประกาศ",Authentication:fn,"HTTP Headers":"HTTP Headers","Trust Proxy":"Trust Proxy",HomeAssistant:Rn,RadiusSecret:Nn,RadiusSecretDescription:Ln,RadiusCalledStationId:Un,RadiusCalledStationIdDescription:En,RadiusCallingStationId:Hn,RadiusCallingStationIdDescription:xn,"Connection String":"Connection String",Query:Fn,settingsCertificateExpiry:On,certificationExpiryDescription:Gn,"Setup Docker Host":"ติดตั้ง Docker Host","Connection Type":"ประเภทการเชื่อมต่อ","Docker Daemon":"Docker Daemon",deleteDockerHostMsg:Kn,socket:Wn,tcp:Bn,"Docker Container":"Docker Container","Container Name / ID":"Container Name / ID","Docker Host":"Docker Host","Docker Hosts":"Docker Hosts","ntfy Topic":"หัวข้อ ntfy",Domain:Vn,Workstation:zn,disableCloudflaredNoAuthMsg:jn,trustProxyDescription:qn,Examples:Jn,"Home Assistant URL":"Home Assistant URL","Long-Lived Access Token":"Access Token แบบมีอายุนาน","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":'Access Token แบบมีอายุนานสามารถสร้างได้โดยคลิกชื่อบนโปรไฟล์ (ล่างซ้าย) และเลื่อนไปข้างล่างจากนั้นคลิก "Create Token" ',"Notification Service":"บริการแจ้งเตือน","default: notify all devices":"ค่าเริ่มต้น: แจ้งเตือนทุกอุปกรณ์",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'รายการแจ้งเตือนสามารถหาได้ใน Home Assistant ในเมนู "Developer Tools > Services" แล้วค้นหา "notification" เพื่อหาชื่ออุปกรณ์หรือชื่อโทรศัพท์',"Automations can optionally be triggered in Home Assistant:":"สามารถเลือกสั่งงานระบบอัตโนมัติได้ใน Home Assistant:","Trigger type:":"ชนิดสิ่งกระตุ้น:","Event type:":"ชนิดเหตการณ์:","Event data:":"ข้อมูลกิจกรรม:","Then choose an action, for example switch the scene to where an RGB light is red.":"จากนั้นเลือกการกระทำ, ตัวอย่าง เช่น เปลี่ยนเป็นไฟสีแดง","Frontend Version":"เวอร์ชั่น Frontend","Frontend Version do not match backend version!":"เวอร์ชั่น Frontend ไม่ตรงกับ Backend !",webhookAdditionalHeadersTitle:Qn,webhookAdditionalHeadersDesc:Zn,"Start of maintenance":"เริ่มการซ่อมบำรุง","All Status Pages":"หน้าสถานะทั้งหมด",Custom:Xn,Game:Yn,statusMaintenance:_n,Maintenance:$n,Monitor:ea,"Select status pages...":"เลือกหน้าสถานะ","Schedule maintenance":"กำหนดเวลาบำรุงรักษา","Affected Monitors":"มอนิเตอร์ที่ได้รับผลกระทบ",markdownSupported:ta,Help:oa,"Pick Affected Monitors...":"เลือกมอนิเตอร์ที่ได้รับผลกระทบ","Packet Size":"ขนาดของ Packet",ZohoCliq:sa,backupOutdatedWarning:na,backupRecommend:aa,Optional:ra,squadcast:ia,or:ca,recurringInterval:la,Recurring:da,"General Monitor Type":"ชนิดมอนิเตอร์ทั่วไป",pagertreeCritical:pa,pagertreeDoNothing:ua,pagertreeResolve:ma,wayToGetPagerTreeIntegrationURL:ha,telegramSendSilently:ga,"maintenanceStatus-inactive":"ไม่ใช้งาน",telegramProtectContent:Sa,"Add New Tag":"เพิ่มแท็กใหม่",strategyManual:ya,warningTimezone:Da,weekdayShortMon:Ta,weekdayShortTue:ka,weekdayShortWed:Pa,weekdayShortThu:ba,weekdayShortFri:Aa,weekdayShortSat:va,weekdayShortSun:Ca,dayOfWeek:Ma,dayOfMonth:wa,"maintenanceStatus-under-maintenance":"อยู่ภายใต้การบำรุงรักษา","maintenanceStatus-scheduled":"กำหนดการ","maintenanceStatus-ended":"สิ้นสุด","maintenanceStatus-unknown":"ไม่ทราบ","Specific Monitor Type":"ประเภทมอนิเตอร์เฉพาะ",telegramMessageThreadID:Ia,telegramMessageThreadIDDescription:fa,sameAsServerTimezone:Ra,startDateTime:Na,endDateTime:La,cronSchedule:Ua,invalidCronExpression:Ea,cronExpression:Ha,lastDay:xa,lastDay1:Fa,lastDay2:Oa,lastDay3:Ga,lastDay4:Ka,"No Maintenance":"ไม่มีการบำรุงรักษา",pauseMaintenanceMsg:Wa,"Display Timezone":"แสดงเขตเวลา",statusPageMaintenanceEndDate:Ba,"Server Timezone":"เขตเวลาเซิร์ฟเวอร์",statusPageRefreshIn:Va,telegramSendSilentlyDescription:za,telegramProtectContentDescription:ja,dnsCacheDescription:qa,IconUrl:Ja,"Enable DNS Cache":"เปิดใช้งาน DNS Cache",Enable:Qa,Disable:Za,"Single Maintenance Window":"หน้าการปรับปรุงเดี่ยว","Clone Monitor":"มอนิเตอร์",Clone:Xa,cloneOf:Ya,wayToGetZohoCliqURL:_a,"Cannot connect to the socket server":"ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ Socket","Reconnecting...":"กำลังเชื่อมต่อใหม่",Home:$a,"Date and Time":"วันที่และเวลา","DateTime Range":"ช่วงวันที่และเวลา",loadingError:er,plugin:tr,install:or,installing:sr,uninstall:nr,uninstalling:ar,confirmUninstallPlugin:rr,"Schedule Maintenance":"กำหนดเวลาซ่อมแซม","Edit Maintenance":"แก้ใขการบำรุงรักษา",recurringIntervalMessage:ir,chromeExecutableAutoDetect:cr,chromeExecutableDescription:lr,notificationRegional:dr,timeoutAfter:pr,Select:ur,"Expected Value":"ค่าที่คาดหวัง"};export{on as About,Hs as AccessKeyId,Be as Active,H as Add,re as Advanced,R as Appearance,fn as Authentication,me as Auto,tn as Backup,Ye as Blue,Po as Body,Co as BodyInvalidFormat,ge as Bottom,es as Cancel,Xa as Clone,ke as Confirm,Ko as Content,Le as Create,Zo as Created,Q as Current,Xn as Custom,cs as Customize,ue as Dark,I as Dashboard,V as DateTime,Oo as Default,J as Delete,Yo as Description,Jt as Device,Za as Disable,$o as Discard,Vn as Domain,Ho as Done,F as Down,q as Edit,Me as Email,Qa as Enable,Ue as Events,Jn as Examples,Ie as Export,Yn as Game,L as General,Vt as GoogleChat,Je as Gray,Xe as Green,bo as Headers,vo as HeadersInvalidFormat,Ee as Heartbeats,oa as Help,zs as High,$a as Home,Rn as HomeAssistant,se as Hostname,Vs as Huawei,Ja as IconUrl,fe as Import,Ve as Inactive,_e as Indigo,xo as Info,Qs as Installed,Es as Invalid,te as Keyword,f as Language,Te as Leave,pe as Light,E as List,Ce as Login,De as Logout,$n as Maintenance,z as Message,ko as Method,ea as Monitor,W as Name,en as Next,be as No,Se as None,he as Normal,de as Notifications,ra as Optional,We as Options,Ze as Orange,Ke as Overwrite,ve as Password,wo as PasswordsDoNotMatch,K as Pause,O as Pending,Fs as PhoneNumbers,ee as Ping,et as Pink,Bs as Platform,ne as Port,Qo as Post,ft as Priority,Ms as Proxies,$e as Purple,Ft as PushByTechulus,Ao as PushUrl,Fn as Query,Un as RadiusCalledStationId,En as RadiusCalledStationIdDescription,Hn as RadiusCallingStationId,xn as RadiusCallingStationIdDescription,Nn as RadiusSecret,Ln as RadiusSecretDescription,vt as Recipients,da as Recurring,Qe as Red,nt as Required,$ as Response,j as Resume,ae as Retries,js as Retry,Zs as Running,le as Save,xs as SecretAccessKey,Ws as SecretKey,Fo as Security,ur as Select,_o as Services,w as Settings,Gs as SignName,_s as Slug,Xs as Start,B as Status,Ys as Stop,Wo as Style,je as Tags,Os as TemplateCode,we as Test,N as Theme,ye as Timezone,Go as Title,ze as Token,qs as Topic,oe as URL,G as Unknown,Xo as Unpin,x as Up,Z as Uptime,Js as User,Ae as Username,Us as Valid,U as Version,Ks as WebHookUrl,zn as Workstation,Pe as Yes,sa as ZohoCliq,Lt as aboutChannelName,io as aboutIconURL,Ut as aboutKumaURL,co as aboutMattermostChannelName,Nt as aboutWebhooks,i as acceptedStatusCodesDescription,Oe as alertNoFile,Ge as alertWrongFileType,Ts as alerta,As as alertaAlertState,ks as alertaApiEndpoint,bs as alertaApiKey,Ps as alertaEnvironment,vs as alertaRecoverState,$t as apiCredentials,Bt as apprise,so as appriseInstalled,no as appriseNotInstalled,He as backupDescription,xe as backupDescription2,Fe as backupDescription3,na as backupOutdatedWarning,aa as backupRecommend,Gn as certificationExpiryDescription,lt as chatIDNotFound,t as checkEverySecond,_t as checkPrice,cr as chromeExecutableAutoDetect,lr as chromeExecutableDescription,Mo as clearDataOlderThan,D as clearEventsMsg,T as clearHeartbeatsMsg,Kt as clicksendsms,Ya as cloneOf,nn as cloudflareWebsite,qe as color,k as confirmClearStatisticsMsg,M as confirmDisableTwoFAMsg,C as confirmEnableTwoFAMsg,b as confirmImportMsg,rr as confirmUninstallPlugin,wn as critical,Ha as cronExpression,Ua as cronSchedule,zo as danger,Jo as dark,Y as day,wa as dayOfMonth,Ma as dayOfWeek,X as days,mr as default,ot as defaultNotificationName,Kn as deleteDockerHostMsg,u as deleteMonitorMsg,m as deleteNotificationMsg,fs as deleteProxyMsg,Cs as deleteStatusPageMsg,jn as disableCloudflaredNoAuthMsg,Tt as discord,qa as dnsCacheDescription,Cn as dnsPortDescription,ps as documentation,St as emailCustomSubject,Et as emojiCheatSheet,y as enableDefaultNotificationDescription,Ns as enableProxyDescription,ws as enabled,La as endDateTime,hn as endpoint,Mn as error,Ds as gorush,It as gotify,st as here,_ as hour,n as ignoreTLSError,P as importHandleDescription,Bo as info,or as install,sr as installing,Ea as invalidCronExpression,d as keywordDescription,e as languageName,xa as lastDay,Fa as lastDay1,Oa as lastDay2,Ga as lastDay3,Ka as lastDay4,qo as light,jt as line,ao as lineDevConsoleTo,er as loadingError,Wt as lunasea,ta as markdownSupported,lo as matrix,Do as matrixDesc1,To as matrixDesc2,yo as matrixHomeserverURL,qt as mattermost,r as maxRedirectDescription,ie as needPushEvery,Ct as needSignalAPI,Ne as notAvailableShort,l as notificationDescription,dr as notificationRegional,Ot as octopush,gn as octopushAPIKey,eo as octopushLegacyHint,Sn as octopushLogin,to as octopushPhoneNumber,oo as octopushSMSSender,Yt as octopushTypeLowCost,Xt as octopushTypePremium,cn as onebotGroupMessage,an as onebotHttpAddress,rn as onebotMessageType,ln as onebotPrivateMessage,pn as onebotSafetyTips,dn as onebotUserOrGroupId,ca as or,pa as pagertreeCritical,ua as pagertreeDoNothing,ma as pagertreeResolve,c as passwordNotMatchMsg,p as pauseDashboardHome,Wa as pauseMaintenanceMsg,S as pauseMonitorMsg,tr as plugin,jo as primary,Gt as promosms,yn as promosmsLogin,Dn as promosmsPassword,go as promosmsPhoneNumber,So as promosmsSMSSender,po as promosmsTypeEco,uo as promosmsTypeFlash,mo as promosmsTypeFull,ho as promosmsTypeSpeed,Rs as proxyDescription,ce as pushOptionalParams,zt as pushbullet,Ht as pushover,Qt as pushoverDesc1,Zt as pushoverDesc2,xt as pushy,Tn as pushyAPIKey,kn as pushyToken,Eo as recent,Io as records,la as recurringInterval,ir as recurringIntervalMessage,vn as resendDisabled,An as resendEveryXTimes,h as resolverserverDescription,Re as respTime,s as retriesDescription,o as retryCheckEverySecond,g as rrtypeDescription,Ra as sameAsServerTimezone,ht as secureOptionNone,gt as secureOptionTLS,os as serwersms,ns as serwersmsAPIPassword,ss as serwersmsAPIUser,as as serwersmsPhoneNumber,rs as serwersmsSenderName,Is as setAsDefault,Ls as setAsDefaultProxyDescription,On as settingsCertificateExpiry,ts as shrinkDatabaseDescription,At as signal,wt as signalImportant,un as signedInDisp,mn as signedInDispDisabled,Rt as slack,mt as smtp,Dt as smtpBCC,yt as smtpCC,ds as smtpDkimDesc,us as smtpDkimDomain,gs as smtpDkimHashAlgo,ms as smtpDkimKeySelector,hs as smtpDkimPrivateKey,ls as smtpDkimSettings,Ss as smtpDkimheaderFieldNames,ys as smtpDkimskipFields,Wn as socket,ia as squadcast,is as stackfield,Na as startDateTime,$s as startOrEndWithOnly,_n as statusMaintenance,Ba as statusPageMaintenanceEndDate,tt as statusPageNothing,Va as statusPageRefreshIn,fo as steamApiKeyDescription,ya as strategyManual,Lo as successMessage,Uo as successMessageExplanation,it as supportTelegramChatID,Bn as tcp,Pt as teams,at as telegram,Ia as telegramMessageThreadID,fa as telegramMessageThreadIDDescription,Sa as telegramProtectContent,ja as telegramProtectContentDescription,ga as telegramSendSilently,za as telegramSendSilentlyDescription,pr as timeoutAfter,v as tokenValidSettingsMsg,Ro as topic,No as topicExplanation,qn as trustProxyDescription,A as twoFAVerifyLabel,nr as uninstall,ar as uninstalling,a as upsideDownModeDescription,Vo as warning,Da as warningTimezone,Mt as wayToCheckSignalURL,Pn as wayToGetClickSendSMSToken,sn as wayToGetCloudflaredURL,kt as wayToGetDiscordURL,ro as wayToGetLineChannelToken,bn as wayToGetLineNotifyToken,In as wayToGetPagerDutyKey,ha as wayToGetPagerTreeIntegrationURL,bt as wayToGetTeamsURL,ct as wayToGetTelegramChatID,rt as wayToGetTelegramToken,_a as wayToGetZohoCliqURL,dt as webhook,Zn as webhookAdditionalHeadersDesc,Qn as webhookAdditionalHeadersTitle,ut as webhookFormDataDesc,pt as webhookJsonDesc,Aa as weekdayShortFri,Ta as weekdayShortMon,va as weekdayShortSat,Ca as weekdayShortSun,ba as weekdayShortThu,ka as weekdayShortTue,Pa as weekdayShortWed};