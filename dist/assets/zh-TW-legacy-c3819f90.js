System.register([],(function(e,o){"use strict";return{execute:function(){var o=e("languageName","繁體中文 (台灣)"),t=e("checkEverySecond","每 {0} 秒檢查一次"),a=e("retryCheckEverySecond","每 {0} 秒重試一次"),s=e("resendEveryXTimes","每 {0} 次便重新傳送"),r=e("resendDisabled","重新傳送已停用"),n=e("retriesDescription","在服務被標記為離線並傳送通知前的最大重試次數"),i=e("ignoreTLSError","忽略 HTTPS 網站的 TLS/SSL 錯誤"),c=e("upsideDownModeDescription","反轉顯示狀態。若服務可以連線，將顯示離線。"),l=e("maxRedirectDescription","最大重新導向跟隨次數。設為 0 將停用重新導向。"),d=e("enableGRPCTls","允許以 TLS 連線傳送 gRPC 要求"),p=e("grpcMethodDescription","方法名稱將轉換至駝峰式命名，如 sayHello、check 等。"),u=e("acceptedStatusCodesDescription","選擇視為成功回應的狀態碼。"),m=e("Maintenance","維護"),g=e("statusMaintenance","維護"),h=e("recurringIntervalMessage","每日執行 | 每 {0} 天執行"),S=e("affectedMonitorsDescription","選擇受目前維護影響的監測器"),y=e("affectedStatusPages","在已選取的狀態頁中顯示此維護訊息"),D=e("atLeastOneMonitor","至少選擇一個受影響的監測器"),T=e("passwordNotMatchMsg","密碼不相符。"),P=e("notificationDescription","必須將通知指派給監測器才能運作。"),k=e("keywordDescription","HTML 或 JSON 回應的搜尋關鍵字。區分大小寫。"),A=e("pauseDashboardHome","暫停"),M=e("deleteMonitorMsg","您確定要刪除此監測器嗎？"),b=e("deleteMaintenanceMsg","您確定要刪除此維護嗎？"),I=e("deleteNotificationMsg","您確定要為所有監測器刪除此通知嗎？"),v=e("dnsPortDescription","DNS 伺服器連接埠。預設為 53。您可以隨時變更連接埠。"),w=e("resolverserverDescription","Cloudflare 為預設伺服器。您可以隨時更換解析伺服器。"),C=e("rrtypeDescription","選擇您想要監測的資源記錄類型"),f=e("pauseMonitorMsg","您確定要暫停嗎？"),R=e("enableDefaultNotificationDescription","預設情況下，新監測器將啟用此通知。您仍可分別停用各監測器的通知。"),N=e("clearEventsMsg","您確定要刪除此監測器的所有事件嗎？"),L=e("clearHeartbeatsMsg","您確定要刪除此監測器的所有心跳嗎？"),E=e("confirmClearStatisticsMsg","您確定要刪除所有統計資料嗎？"),x=e("importHandleDescription","若您想跳過所有相同名稱的監測器或通知，請選擇 '略過現有'。選擇 '覆寫' 將刪除所有現有的監測器及通知。"),U=e("confirmImportMsg","您確定要匯入備份嗎？請確認是否選擇正確的匯入設定。"),H=e("twoFAVerifyLabel","請輸入權杖以驗證雙步驟驗證："),G=e("tokenValidSettingsMsg","權杖有效！您可以儲存雙步驟驗證設定了。"),K=e("confirmEnableTwoFAMsg","您確定要啟用雙步驟驗證嗎？"),O=e("confirmDisableTwoFAMsg","您確定要停用雙步驟驗證嗎？"),F=e("Settings","設定"),W=e("Dashboard","儀表板"),B=e("Language","語言"),V=e("Appearance","外觀"),z=e("Theme","主題"),j=e("General","一般"),J=e("Version","版本"),q=e("List","清單"),Q=e("Add","新增"),X=e("Up","正常"),Y=e("Down","離線"),Z=e("Pending","等待中"),_=e("Unknown","未知"),$=e("Pause","暫停"),ee=e("Name","名稱"),oe=e("Status","狀態"),te=e("DateTime","日期時間"),ae=e("Message","訊息"),se=e("Resume","繼續"),re=e("Edit","編輯"),ne=e("Delete","刪除"),ie=e("Current","目前"),ce=e("Uptime","運作率"),le=e("day","天"),de=e("hour","小時"),pe=e("Response","回應"),ue=e("Ping","Ping"),me=e("Keyword","關鍵字"),ge=e("URL","網址"),he=e("Hostname","主機名稱"),Se=e("Port","連接埠"),ye=e("Retries","重試次數"),De=e("Advanced","進階"),Te=e("needPushEvery","您應每 {0} 秒呼叫此網址。"),Pe=e("pushOptionalParams","選填參數：{0}"),ke=e("Save","儲存"),Ae=e("Notifications","通知"),Me=e("Light","亮色"),be=e("Dark","深色"),Ie=e("Auto","自動"),ve=e("Normal","正常"),we=e("Bottom","下方"),Ce=e("None","無"),fe=e("Timezone","時區"),Re=e("Logout","登出"),Ne=e("Leave","離開"),Le=e("Confirm","確認"),Ee=e("Yes","是"),xe=e("No","否"),Ue=e("Username","使用者名稱"),He=e("Password","密碼"),Ge=e("Login","登入"),Ke=e("Email","電子郵件"),Oe=e("Test","測試"),Fe=e("Export","匯出"),We=e("Import","匯入"),Be=e("respTime","回應時間 (毫秒)"),Ve=e("notAvailableShort","N/A"),ze=e("Create","建立"),je=e("Events","活動"),Je=e("Heartbeats","心跳"),qe=e("backupDescription","您可以將所有監測器及通知備份成一個 JSON 檔案。"),Qe=e("backupDescription2","提醒：不包含歷史紀錄及活動紀錄。"),Xe=e("backupDescription3","如通知權杖等機密資料也會一同匯出。請妥善保存。"),Ye=e("alertNoFile","請選擇要匯入的檔案。"),Ze=e("alertWrongFileType","請選擇 JSON 檔案。"),_e=e("Overwrite","覆寫"),$e=e("Options","選項"),eo=e("Active","啟用"),oo=e("Inactive","停用"),to=e("Token","權杖"),ao=e("Tags","標籤"),so=e("color","顏色"),ro=e("Gray","灰色"),no=e("Red","紅色"),io=e("Orange","橘色"),co=e("Green","綠色"),lo=e("Blue","藍色"),po=e("Indigo","靛色"),uo=e("Purple","紫色"),mo=e("Pink","粉色"),go=e("statusPageNothing","空空如也，請新增群組或監測器。"),ho=e("defaultNotificationName","我的 {notification} 通知 ({number})"),So=e("here","此處"),yo=e("Required","必填"),Do=e("telegram","Telegram"),To=e("wayToGetTelegramToken","您可以從 {0} 取得權杖。"),Po=e("supportTelegramChatID","支援 對話/群組/頻道的聊天 ID"),ko=e("wayToGetTelegramChatID","傳送訊息給機器人，並前往以下網址以取得您的 chat ID："),Ao=e("chatIDNotFound","找不到 Chat ID；請先傳送訊息給機器人"),Mo=e("webhook","Webhook"),bo=e("webhookJsonDesc","{0} 適合任何現代的 HTTP 伺服器，如 Express.js"),Io=e("webhookFormDataDesc","{multipart} 適合 PHP。 JSON 必須先經由 {decodeFunction} 剖析。"),vo=e("webhookAdditionalHeadersTitle","額外標頭"),wo=e("webhookAdditionalHeadersDesc","設定與 webhook 一同傳送的額外標頭。"),Co=e("smtp","Email (SMTP)"),fo=e("secureOptionNone","無 / STARTTLS (25, 587)"),Ro=e("secureOptionTLS","TLS (465)"),No=e("emailCustomSubject","自訂主旨"),Lo=e("smtpCC","CC"),Eo=e("smtpBCC","BCC"),xo=e("discord","Discord"),Uo=e("wayToGetDiscordURL","您可以前往伺服器設定 (Server Settings) -> 整合 (Integrations) -> 檢視 Webhooks (View Webhooks) -> 新 Webhook (New Webhook) 以取得新的 Webhook"),Ho=e("teams","Microsoft Teams"),Go=e("wayToGetTeamsURL","您可以前往此頁面以了解如何建立 Webhook 網址 {0}。"),Ko=e("signal","Signal"),Oo=e("Recipients","收件者"),Fo=e("needSignalAPI","您需要有 REST API 的 Signal 客戶端。"),Wo=e("wayToCheckSignalURL","您可以前往下列網址以了解如何設定："),Bo=e("signalImportant","注意: 不得混合收件者的群組和號碼！"),Vo=e("gotify","Gotify"),zo=e("Priority","優先度"),jo=e("slack","Slack"),Jo=e("aboutWebhooks","更多關於 Webhook 的資訊: {0}"),qo=e("aboutChannelName","如果您不想使用 Webhook 頻道，請在 {0} 頻道名稱欄位填入您想使用的頻道。例如: #其他頻道"),Qo=e("aboutKumaURL","如果您未填入 Uptime Kuma 網址。將預設使用專案 Github 頁面。"),Xo=e("emojiCheatSheet","Emoji 一覽表: {0}"),Yo=e("pushover","Pushover"),Zo=e("pushy","Pushy"),_o=e("PushByTechulus","Push by Techulus"),$o=e("octopush","Octopush"),et=e("promosms","PromoSMS"),ot=e("clicksendsms","ClickSend SMS"),tt=e("lunasea","LunaSea"),at=e("apprise","Apprise (支援 50 種以上的通知服務)"),st=e("GoogleChat","Google Chat (僅限 Google Workspace)"),rt=e("pushbullet","Pushbullet"),nt=e("line","Line Messenger"),it=e("mattermost","Mattermost"),ct=e("Device","裝置"),lt=e("pushoverDesc1","緊急優先度 (2) 的重試間隔為 30 秒並且會在 1 小時後過期。"),dt=e("pushoverDesc2","如果您想要傳送通知到不同裝置，請填寫裝置欄位。"),pt=e("octopushTypePremium","Premium (快速 - 建議用於警報)"),ut=e("octopushTypeLowCost","Low Cost (緩慢 - 有時會被營運商阻擋)"),mt=e("checkPrice","查看 {0} 價格："),gt=e("apiCredentials","API 認證"),ht=e("octopushLegacyHint","您使用的是舊版的 Octopush (2011-2020) 還是新版？"),St=e("octopushPhoneNumber","電話號碼 (intl 格式，例如：+33612345678) "),yt=e("octopushSMSSender","簡訊寄件人名稱：3-11位英數字元及空白 (a-zA-Z0-9)"),Dt=e("appriseInstalled","已安裝 Apprise。"),Tt=e("appriseNotInstalled","尚未安裝 Apprise。{0}"),Pt=e("lineDevConsoleTo","Line 開發者控制台 - {0}"),kt=e("wayToGetLineChannelToken","首先，前往 {0}，建立 provider 和 channel (Messaging API)。接著您就可以從上面提到的選單項目中取得頻道存取權杖及使用者 ID。"),At=e("aboutIconURL",'您可以在 "圖示網址" 中提供圖片網址以覆蓋預設個人檔案圖片。若已設定 Emoji 圖示，將忽略此設定。'),Mt=e("aboutMattermostChannelName",'您可以在 "頻道名稱" 欄位中填寫頻道名稱以覆蓋 Webhook 的預設頻道。必須在 Mattermost 的 Webhook 設定中啟用。例如：#其他頻道'),bt=e("matrix","Matrix"),It=e("promosmsTypeEco","SMS ECO - 便宜，但是很慢且經常過載。僅限位於波蘭的收件者。"),vt=e("promosmsTypeFlash","SMS FLASH - 訊息會自動在收件者的裝置上顯示。僅限位於波蘭的收件者。"),wt=e("promosmsTypeFull","SMS FULL - 高級版，您可以使用您的寄件人名稱 (必須先註冊名稱。對於警報來說十分可靠。"),Ct=e("promosmsTypeSpeed","SMS SPEED - 系統中的最高優先度。快速、可靠，但昂貴 (約 SMS FULL 的兩倍價格)。"),ft=e("promosmsPhoneNumber","電話號碼 (若收件者位於波蘭則無需輸入區域代碼)"),Rt=e("promosmsSMSSender","簡訊寄件人名稱：預先註冊的名稱或以下的預設名稱：InfoSMS、SMS Info、MaxSMS、INFO、SMS"),Nt=e("matrixHomeserverURL","Homeserver 網址 (開頭為 http(s)://，結尾可能帶連接埠)"),Lt=e("matrixDesc1","您可以在 Matrix 客戶端的房間設定中的進階選項找到 internal room ID。應該看起來像 !QMdRCpUIfLwsfjxye6:home.server。"),Et=e("matrixDesc2","使用您自己的 Matrix 使用者存取權杖將賦予存取您的帳號和您加入的房間的完整權限。建議建立新使用者，並邀請至您想要接收通知的房間中。您可以執行 {0} 以取得存取權杖"),xt=e("Method","方法"),Ut=e("Body","主體"),Ht=e("Headers","標頭"),Gt=e("PushUrl","Push 網址"),Kt=e("HeadersInvalidFormat","要求標頭不是有效的 JSON："),Ot=e("BodyInvalidFormat","要求主體不是有效的 JSON："),Ft=e("clearDataOlderThan","保留 {0} 天內的監測器歷史紀錄。"),Wt=e("PasswordsDoNotMatch","密碼不相符。"),Bt=e("records","記錄"),Vt=e("steamApiKeyDescription","若要監測 Steam 遊戲伺服器，您將需要 Steam Web-API 金鑰。您可以在此註冊您的 API 金鑰："),zt=e("topic","Topic"),jt=e("topicExplanation","要監測的 MQTT Topic"),Jt=e("successMessage","成功訊息"),qt=e("successMessageExplanation","視為成功的 MQTT 訊息"),Qt=e("recent","最近"),Xt=e("Done","完成"),Yt=e("Info","資訊"),Zt=e("Security","安全性"),_t=e("Default","預設"),$t=e("Title","標題"),ea=e("Content","內容"),oa=e("Style","樣式"),ta=e("info","資訊"),aa=e("warning","警告"),sa=e("danger","危險"),ra=e("error","錯誤"),na=e("critical","嚴重"),ia=e("primary","主要"),ca=e("light","淺色"),la=e("dark","暗色"),da=e("Post","發佈"),pa=e("Created","建立"),ua=e("Unpin","取消釘選"),ma=e("Description","說明"),ga=e("Services","服務"),ha=e("Discard","捨棄"),Sa=e("Cancel","取消"),ya=e("shrinkDatabaseDescription","觸發 SQLite 的資料庫清理 (VACUUM)。如果您的資料庫是在 1.10.0 版本後建立，AUTO_VACUUM 已自動啟用，則無需此操作。"),Da=e("serwersms","SerwerSMS.pl"),Ta=e("serwersmsAPIUser","API 使用者名稱 (包括 webapi_ 前綴)"),Pa=e("serwersmsAPIPassword","API 密碼"),ka=e("serwersmsPhoneNumber","電話號碼"),Aa=e("serwersmsSenderName","SMS 寄件人名稱 (由客戶入口網站註冊)"),Ma=e("smseagle","SMSEagle"),ba=e("smseagleTo","電話號碼"),Ia=e("smseagleGroup","電話簿群組名稱"),va=e("smseagleContact","電話簿聯絡人名稱"),wa=e("smseagleRecipientType","收件者類型"),Ca=e("smseagleRecipient","收件者 (用逗號分隔)"),fa=e("smseagleToken","API 存取權杖"),Ra=e("smseagleUrl","您的 SMSEagle 裝置網址"),Na=e("smseagleEncoding","以 Unicode 傳送"),La=e("smseaglePriority","訊息優先度 (0-9，預設 = 0)"),Ea=e("stackfield","Stackfield"),xa=e("Customize","自訂"),Ua=e("smtpDkimSettings","DKIM 設定"),Ha=e("smtpDkimDesc","請參考 Nodemailer DKIM {0} 使用方式。"),Ga=e("documentation","文件"),Ka=e("smtpDkimDomain","網域名稱"),Oa=e("smtpDkimKeySelector","DKIM 選取器"),Fa=e("smtpDkimPrivateKey","私密金鑰"),Wa=e("smtpDkimHashAlgo","雜湊演算法 (選填)"),Ba=e("smtpDkimheaderFieldNames","要簽署的郵件標頭 (選填)"),Va=e("smtpDkimskipFields","不簽署的郵件標頭 (選填)"),za=e("wayToGetPagerDutyKey",'您可以前往服務 -> 服務目錄 -> (選取服務) -> 整合 -> 新增整合以取得。您可以搜尋 "Events API V2"。詳細資訊 {0}'),ja=e("gorush","Gorush"),Ja=e("alerta","Alerta"),qa=e("alertaApiEndpoint","API 端點"),Qa=e("alertaEnvironment","環境"),Xa=e("alertaApiKey","API 金鑰"),Ya=e("alertaAlertState","警示狀態"),Za=e("alertaRecoverState","恢復狀態"),_a=e("deleteStatusPageMsg","您確定要刪除此狀態頁嗎？"),$a=e("Proxies","代理伺服器"),es=e("enabled","啟用"),os=e("setAsDefault","設為預設"),ts=e("deleteProxyMsg","您確定要為所有監測器刪除此代理伺服器嗎？"),as=e("proxyDescription","必須將代理伺服器指派給監測器才能運作。"),ss=e("enableProxyDescription","此代理伺服器在啟用前不會在監測器上生效，您可以藉由控制啟用狀態來暫時對所有的監測器停用代理伺服器。"),rs=e("setAsDefaultProxyDescription","預設情況下，新監測器將啟用此代理伺服器。您仍可分別停用各監測器的代理伺服器。"),ns=e("Valid","有效"),is=e("Invalid","無效"),cs=e("AccessKeyId","AccessKey ID"),ls=e("SecretAccessKey","AccessKey 密碼"),ds=e("PhoneNumbers","PhoneNumbers"),ps=e("TemplateCode","TemplateCode"),us=e("SignName","SignName"),ms=e("WebHookUrl","WebHookUrl"),gs=e("SecretKey","SecretKey"),hs=e("Platform","平台"),Ss=e("Huawei","華為"),ys=e("High","高"),Ds=e("Retry","重試"),Ts=e("Topic","Topic"),Ps=e("User","使用者"),ks=e("Installed","已安裝"),As=e("Running","執行中"),Ms=e("Start","開始"),bs=e("Stop","停止"),Is=e("Slug","Slug"),vs=e("startOrEndWithOnly","僅能使用 {0} 開頭或結尾"),ws=e("Next","下一步"),Cs=e("Authentication","驗證"),fs=e("Backup","備份"),Rs=e("About","關於"),Ns=e("wayToGetCloudflaredURL","(從 {0} 下載 cloudflared)"),Ls=e("cloudflareWebsite","Cloudflare 網站"),Es=e("HomeAssistant","Home Assistant"),xs=e("onebotHttpAddress","OneBot HTTP 位址"),Us=e("onebotMessageType","OneBot 訊息類型"),Hs=e("onebotGroupMessage","群組"),Gs=e("onebotPrivateMessage","私人"),Ks=e("onebotUserOrGroupId","群組/使用者 ID"),Os=e("onebotSafetyTips","為了安全起見，必須設置存取權杖"),Fs=e("signedInDisp","以 {0} 身分登入"),Ws=e("signedInDispDisabled","驗證已停用。"),Bs=e("RadiusSecret","Radius Secret"),Vs=e("RadiusSecretDescription","客戶端與伺服器端的共享機密"),zs=e("RadiusCalledStationId","被叫站 Id"),js=e("RadiusCalledStationIdDescription","被呼叫裝置的識別碼"),Js=e("RadiusCallingStationId","呼叫站 Id"),qs=e("RadiusCallingStationIdDescription","呼叫裝置的識別碼"),Qs=e("endpoint","端"),Xs=e("octopushAPIKey",'在控制台的 HTTP API 憑證取得的 "API 金鑰"'),Ys=e("octopushLogin",'在控制台的 HTTP API 憑證取得的 "Login"'),Zs=e("promosmsLogin","API 登入名稱"),_s=e("promosmsPassword","API 密碼"),$s=e("pushyAPIKey","API 密鑰"),er=e("pushyToken","裝置權杖"),or=e("wayToGetClickSendSMSToken","您可以從 {0} 取得 API 使用者名稱和金鑰。"),tr=e("Query","查詢"),ar=e("settingsCertificateExpiry","TLS 憑證到期"),sr=e("certificationExpiryDescription","TLS 將於 X 天後到期時觸發 HTTPS 監測器通知："),rr=e("deleteDockerHostMsg","您確定要為所有監測器刪除此 Docker 主機嗎？"),nr=e("socket","通訊端"),ir=e("tcp","TCP / HTTP"),cr=e("Domain","網域"),lr=e("Workstation","工作站"),dr=e("disableCloudflaredNoAuthMsg","您處於無驗證模式。無須輸入密碼。"),pr=e("trustProxyDescription","信任 'X-Forwarded-*' 標頭。如果您想要取得正確的客戶端 IP，且您的 Uptime Kuma 架設於 Nginx 或 Apache 後方，您應啟用此選項。"),ur=e("wayToGetLineNotifyToken","您可以從 {0} 取得存取權杖"),mr=e("Examples","範例"),gr=e("goAlertInfo","GoAlert 是用於待命排程、升級自動化，以及通知 (如簡訊或語音通話) 的開源應用程式。自動在正確的時間、用洽當的方法、聯絡合適的人！ {0}"),hr=e("goAlertIntegrationKeyInfo",'取得服務的通用 API 整合金鑰，格式為 "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"。通常是已複製的網址的權杖參數值。'),Sr=e("goAlert","GoAlert"),yr=e("backupOutdatedWarning","即將棄用：由於專案新增了大量新功能，且備份功能未被妥善維護，故此功能無法產生或復原完整備份。"),Dr=e("backupRecommend","請直接備份磁碟區或 ./data/ 資料夾。"),Tr=e("Optional","選填"),Pr=e("squadcast","Squadcast"),kr=e("SendKey","SendKey"),Ar=e("SMSManager","SMSManager"),Mr=e("or","或是"),br=e("recurringInterval","間隔"),Ir=e("Recurring","週期性"),vr=e("strategyManual","手動切換使用中/非使用中"),wr=e("warningTimezone","正在使用伺服器的時區"),Cr=e("weekdayShortMon","一"),fr=e("weekdayShortTue","二"),Rr=e("weekdayShortWed","三"),Nr=e("weekdayShortThu","四"),Lr=e("weekdayShortFri","五"),Er=e("weekdayShortSat","六"),xr=e("weekdayShortSun","日"),Ur=e("dayOfWeek","每周特定一天"),Hr=e("dayOfMonth","每月特定一天"),Gr=e("lastDay","最後一天"),Kr=e("lastDay1","每月的最後一天"),Or=e("lastDay2","每月的倒數第二天"),Fr=e("lastDay3","每月的倒數第三天"),Wr=e("lastDay4","每月的倒數第四天"),Br=e("pauseMaintenanceMsg","您確定要暫停嗎？"),Vr=e("statusPageMaintenanceEndDate","結束"),zr=e("IconUrl","圖示網址"),jr=e("Enable","啟用"),Jr=e("Disable","停用"),qr=e("dnsCacheDescription","在某些 IPv6 環境可能會無法運作，如果您遇到任何問題，請停用。"),Qr=e("Strategy","策略"),Xr=e("Economy","節約"),Yr=e("Lowcost","低費率"),Zr=e("high","高"),_r=e("plugin","插件 | 插件"),$r=e("install","安裝"),en=e("Game","遊戲"),on=e("Help","幫助"),tn=e("Monitor","監測器 | 監測器"),an=e("Custom","自訂"),sn=e("sameAsServerTimezone","使用服務器時區"),rn=e("cronExpression","Cron 表達式"),nn=e("telegramSendSilently","悄悄的發送"),cn=e("telegramSendSilentlyDescription","悄悄的發送訊息。使用者會收到通知，但是是無聲的。"),ln=e("pagertreeDoNothing","什麼都不做"),dn=e("telegramMessageThreadIDDescription","(可選) Telegram 話題描述"),pn=e("telegramMessageThreadID","(選填) Telegram 話題 ID"),un=e("startDateTime","開始日期/時間"),mn=e("endDateTime","結束日期/時間"),gn=e("cronSchedule","計劃： "),hn=e("invalidCronExpression","無效的 Cron 表達式：{0}"),Sn=e("telegramProtectContent","阻止轉發/保存"),yn=e("telegramProtectContentDescription","如果啟用，Telegram 中的機器人訊息將受到保護，不會被轉發和保存。"),Dn=e("installing","安裝中"),Tn=e("uninstall","卸載"),Pn=e("loadingError","無法獲取數據, 請重試"),kn=e("markdownSupported","支援 Markdown 語法"),An=e("statusPageRefreshIn","將於 {0} 後刷新"),Mn=e("confirmUninstallPlugin","是否要卸載這個插件?"),bn=e("Clone","複製"),In=e("cloneOf","從 {0} 複製"),vn=e("uninstalling","移除中"),wn=e("notificationRegional","地區限定"),Cn=e("wayToGetZohoCliqURL","您可以前往此頁面以了解如何建立 webhook 網址 {0}。"),fn=e("wayToGetKookBotToken","到 {0} 創建應用程式並取得 bot token"),Rn=e("dataRetentionTimeError","保留期限必須為 0 或正數"),Nn=e("infiniteRetention","設定為 0 以作無限期保留。"),Ln=e("confirmDeleteTagMsg","你確定你要刪除此標籤？相關的監測器不會被刪除。"),En=e("twilioAuthToken","認證 Token"),xn=e("twilioAccountSID","帳號 SID"),Un=e("ntfyUsernameAndPassword","使用者名稱和密碼"),Hn=e("ntfyAuthenticationMethod","認證類型"),Gn=e("Expiry","到期"),Kn=e("Continue","繼續"),On=e("Generate","產生"),Fn=e("lunaseaTarget","目標"),Wn=e("lunaseaDeviceID","裝置 ID"),Bn=e("lunaseaUserID","使用者 ID"),Vn=e("deleteAPIKeyMsg","您確定要刪除這個 API 金鑰?"),zn=e("pagertreeMedium","中"),jn=e("pagertreeHigh","高"),Jn=e("pagertreeResolve","自動解決"),qn=e("pagertreeLow","低"),Qn=e("pushoverMessageTtl","Message TTL (秒)"),Xn=e("apiKeyAddedMsg","您的 API 金鑰已建立。金鑰不會再次顯示，請將它放在安全的地方。"),Yn=e("Expires","過期"),Zn=e("disableAPIKeyMsg","您確定要停用這個 API 金鑰?"),_n=e("chromeExecutableDescription","如果您使用 Docker 且未安裝 Chromium，可能要花數分鐘安裝後才能顯示測試結果。安裝會使用 1GB 的硬碟空間。"),$n=e("promosmsAllowLongSMS","允許長 SMS 訊息"),ei=e("Home","首頁"),oi=e("chromeExecutable","Chrome/Chromium 執行檔"),ti=e("chromeExecutableAutoDetect","自動偵測"),ai=e("pagertreeCritical","緊急");e("default",{languageName:o,checkEverySecond:t,retryCheckEverySecond:a,resendEveryXTimes:s,resendDisabled:r,retriesDescription:n,ignoreTLSError:i,upsideDownModeDescription:c,maxRedirectDescription:l,enableGRPCTls:d,grpcMethodDescription:p,acceptedStatusCodesDescription:u,Maintenance:m,statusMaintenance:g,"Schedule maintenance":"排程維護","Affected Monitors":"受影響的監測器","Pick Affected Monitors...":"挑選受影響的監測器…","Start of maintenance":"維護起始","All Status Pages":"所有狀態頁","Select status pages...":"選擇狀態頁…",recurringIntervalMessage:h,affectedMonitorsDescription:S,affectedStatusPages:y,atLeastOneMonitor:D,passwordNotMatchMsg:T,notificationDescription:P,keywordDescription:k,pauseDashboardHome:A,deleteMonitorMsg:M,deleteMaintenanceMsg:b,deleteNotificationMsg:I,dnsPortDescription:v,resolverserverDescription:w,rrtypeDescription:C,pauseMonitorMsg:f,enableDefaultNotificationDescription:R,clearEventsMsg:N,clearHeartbeatsMsg:L,confirmClearStatisticsMsg:E,importHandleDescription:x,confirmImportMsg:U,twoFAVerifyLabel:H,tokenValidSettingsMsg:G,confirmEnableTwoFAMsg:K,confirmDisableTwoFAMsg:O,Settings:F,Dashboard:W,"New Update":"新版本",Language:B,Appearance:V,Theme:z,General:j,"Primary Base URL":"主要基底網址",Version:J,"Check Update On GitHub":"在 GitHub 檢查更新",List:q,Add:Q,"Add New Monitor":"新增監測器","Quick Stats":"狀態概覽",Up:X,Down:Y,Pending:Z,Unknown:_,Pause:$,Name:ee,Status:oe,DateTime:te,Message:ae,"No important events":"無重要事件",Resume:se,Edit:re,Delete:ne,Current:ie,Uptime:ce,"Cert Exp.":"憑證期限",day:le,"-day":"天",hour:de,"-hour":"小時",Response:pe,Ping:ue,"Monitor Type":"監測器類型",Keyword:me,"Friendly Name":"易記名稱",URL:ge,Hostname:he,Port:Se,"Heartbeat Interval":"心跳間隔",Retries:ye,"Heartbeat Retry Interval":"心跳重試間隔","Resend Notification if Down X times consecutively":"若 X 次心跳皆離線，重新傳送通知",Advanced:De,"Upside Down Mode":"顛倒模式","Max. Redirects":"最大重新導向次數","Accepted Status Codes":"可接受的狀態碼","Push URL":"推送網址",needPushEvery:Te,pushOptionalParams:Pe,Save:ke,Notifications:Ae,"Not available, please setup.":"無法使用，請先設定。","Setup Notification":"設定通知",Light:Me,Dark:be,Auto:Ie,"Theme - Heartbeat Bar":"主題 - 心跳條",Normal:ve,Bottom:we,None:Ce,Timezone:fe,"Search Engine Visibility":"搜尋引擎可見度","Allow indexing":"允許索引","Discourage search engines from indexing site":"不建議搜尋引擎索引網頁","Change Password":"修改密碼","Current Password":"目前密碼","New Password":"新密碼","Repeat New Password":"確認新密碼","Update Password":"更新密碼","Disable Auth":"停用驗證","Enable Auth":"啟用驗證","disableauth.message1":">你是否要<strong>取消登入驗證</strong>？","disableauth.message2":"此功能是設計給已有<strong>第三方認證</strong>的使用者，例如 Cloudflare Access。","Please use this option carefully!":"請謹慎使用。",Logout:Re,Leave:Ne,"I understand, please disable":"我了解了，請停用",Confirm:Le,Yes:Ee,No:xe,Username:Ue,Password:He,"Remember me":"記住我",Login:Ge,"No Monitors, please":"沒有監測器，請","add one":"新增","Notification Type":"通知類型",Email:Ke,Test:Oe,"Certificate Info":"憑證資訊","Resolver Server":"解析伺服器","Resource Record Type":"資源記錄類型","Last Result":"最後結果","Create your admin account":"建立您的管理員帳號","Repeat Password":"確認密碼","Import Backup":"匯入備份","Export Backup":"匯出備份",Export:Fe,Import:We,respTime:Be,notAvailableShort:Ve,"Default enabled":"啟用預設","Apply on all existing monitors":"套用到目前所有的監測器",Create:ze,"Clear Data":"清除資料",Events:je,Heartbeats:Je,"Auto Get":"自動取得",backupDescription:qe,backupDescription2:Qe,backupDescription3:Xe,alertNoFile:Ye,alertWrongFileType:Ze,"Clear all statistics":"清除所有統計資料","Skip existing":"略過現有",Overwrite:_e,Options:$e,"Keep both":"保留兩者","Verify Token":"認證權杖","Setup 2FA":"設置雙步驟驗證","Enable 2FA":"啟用雙步驟驗證","Disable 2FA":"停用雙步驟驗證","2FA Settings":"雙步驟驗證設定","Two Factor Authentication":"雙步驟驗證",Active:eo,Inactive:oo,Token:to,"Show URI":"顯示 URI",Tags:ao,"Add New below or Select...":"在下方新增或選取…","Tag with this name already exist.":"已存在相同名稱的標籤。","Tag with this value already exist.":"已存在相同數值的標籤。",color:so,"value (optional)":"數值 (選填)",Gray:ro,Red:no,Orange:io,Green:co,Blue:lo,Indigo:po,Purple:uo,Pink:mo,"Search...":"搜尋…","Avg. Ping":"平均 Ping","Avg. Response":"平均回應","Entry Page":"入口頁面",statusPageNothing:go,"No Services":"無服務","All Systems Operational":"所有系統正常運作","Partially Degraded Service":"部分服務效能降低","Degraded Service":"服務效能降低","Add Group":"新增群組","Add a monitor":"加入監測器","Edit Status Page":"編輯狀態頁","Go to Dashboard":"前往儀表板","Status Page":"狀態頁","Status Pages":"狀態頁",defaultNotificationName:ho,here:So,Required:yo,telegram:Do,"Bot Token":"機器人權杖",wayToGetTelegramToken:To,"Chat ID":"聊天 ID",supportTelegramChatID:Po,wayToGetTelegramChatID:ko,"YOUR BOT TOKEN HERE":"在此填入您的機器人權杖",chatIDNotFound:Ao,webhook:Mo,"Post URL":"Post 網址","Content Type":"內容類型",webhookJsonDesc:bo,webhookFormDataDesc:Io,webhookAdditionalHeadersTitle:vo,webhookAdditionalHeadersDesc:wo,smtp:Co,secureOptionNone:fo,secureOptionTLS:Ro,"Ignore TLS Error":"忽略 TLS 錯誤","From Email":"寄件人",emailCustomSubject:No,"To Email":"收件者",smtpCC:Lo,smtpBCC:Eo,discord:xo,"Discord Webhook URL":"Discord Webhook 網址",wayToGetDiscordURL:Uo,"Bot Display Name":"機器人顯示名稱","Prefix Custom Message":"前綴自訂訊息","Hello @everyone is...":"Hello {'@'}everyone is…",teams:Ho,"Webhook URL":"Webhook 網址",wayToGetTeamsURL:Go,signal:Ko,Number:"號碼",Recipients:Oo,needSignalAPI:Fo,wayToCheckSignalURL:Wo,signalImportant:Bo,gotify:Vo,"Application Token":"應用程式權杖","Server URL":"伺服器網址",Priority:zo,slack:jo,"Icon Emoji":"Emoji 圖示","Channel Name":"頻道名稱","Uptime Kuma URL":"Uptime Kuma 網址",aboutWebhooks:Jo,aboutChannelName:qo,aboutKumaURL:Qo,emojiCheatSheet:Xo,"rocket.chat":"Rocket.Chat",pushover:Yo,pushy:Zo,PushByTechulus:_o,octopush:$o,promosms:et,clicksendsms:ot,lunasea:tt,apprise:at,GoogleChat:st,pushbullet:rt,line:nt,mattermost:it,"User Key":"使用者金鑰",Device:ct,"Message Title":"訊息標題","Notification Sound":"通知音效","More info on:":"更多資訊: {0}",pushoverDesc1:lt,pushoverDesc2:dt,"SMS Type":"簡訊類型",octopushTypePremium:pt,octopushTypeLowCost:ut,checkPrice:mt,apiCredentials:gt,octopushLegacyHint:ht,"Check octopush prices":"查看 octopush 價格 {0}。",octopushPhoneNumber:St,octopushSMSSender:yt,"LunaSea Device ID":"LunaSea 裝置 ID","Apprise URL":"Apprise 網址","Example:":"範例：{0}","Read more:":"深入瞭解：{0}","Status:":"狀態：{0}","Read more":"深入瞭解",appriseInstalled:Dt,appriseNotInstalled:Tt,"Access Token":"存取權杖","Channel access token":"頻道存取權杖","Line Developers Console":"Line 開發者控制台",lineDevConsoleTo:Pt,"Basic Settings":"基本設定","User ID":"使用者 ID","Messaging API":"Messaging API",wayToGetLineChannelToken:kt,"Icon URL":"圖示網址",aboutIconURL:At,aboutMattermostChannelName:Mt,matrix:bt,promosmsTypeEco:It,promosmsTypeFlash:vt,promosmsTypeFull:wt,promosmsTypeSpeed:Ct,promosmsPhoneNumber:ft,promosmsSMSSender:Rt,"Feishu WebHookUrl":"飛書 WebHook 網址",matrixHomeserverURL:Nt,"Internal Room Id":"Internal Room ID",matrixDesc1:Lt,matrixDesc2:Et,Method:xt,Body:Ut,Headers:Ht,PushUrl:Gt,HeadersInvalidFormat:Kt,BodyInvalidFormat:Ot,"Monitor History":"監測器歷史紀錄",clearDataOlderThan:Ft,PasswordsDoNotMatch:Wt,records:Bt,"One record":"一項記錄",steamApiKeyDescription:Vt,"Current User":"目前使用者",topic:zt,topicExplanation:jt,successMessage:Jt,successMessageExplanation:qt,recent:Qt,Done:Xt,Info:Yt,Security:Zt,"Steam API Key":"Steam API 金鑰","Shrink Database":"壓縮資料庫","Pick a RR-Type...":"選擇資源記錄類型…","Pick Accepted Status Codes...":"選擇可接受的狀態碼…",Default:_t,"HTTP Options":"HTTP 選項","Create Incident":"建立事件",Title:$t,Content:ea,Style:oa,info:ta,warning:aa,danger:sa,error:ra,critical:na,primary:ia,light:ca,dark:la,Post:da,"Please input title and content":"請輸入標題及內容",Created:pa,"Last Updated":"最後更新",Unpin:ua,"Switch to Light Theme":"切換至淺色佈景主題","Switch to Dark Theme":"切換至深色佈景主題","Show Tags":"顯示標籤","Hide Tags":"隱藏標籤",Description:ma,"No monitors available.":"沒有可用的監測器。","Add one":"新增一個","No Monitors":"無監測器","Untitled Group":"未命名群組",Services:ga,Discard:ha,Cancel:Sa,"Powered by":"技術支援",shrinkDatabaseDescription:ya,serwersms:Da,serwersmsAPIUser:Ta,serwersmsAPIPassword:Pa,serwersmsPhoneNumber:ka,serwersmsSenderName:Aa,smseagle:Ma,smseagleTo:ba,smseagleGroup:Ia,smseagleContact:va,smseagleRecipientType:wa,smseagleRecipient:Ca,smseagleToken:fa,smseagleUrl:Ra,smseagleEncoding:Na,smseaglePriority:La,stackfield:Ea,Customize:xa,"Custom Footer":"自訂頁尾","Custom CSS":"自訂 CSS",smtpDkimSettings:Ua,smtpDkimDesc:Ha,documentation:Ga,smtpDkimDomain:Ka,smtpDkimKeySelector:Oa,smtpDkimPrivateKey:Fa,smtpDkimHashAlgo:Wa,smtpDkimheaderFieldNames:Ba,smtpDkimskipFields:Va,wayToGetPagerDutyKey:za,"Integration Key":"整合金鑰","Integration URL":"整合網址","Auto resolve or acknowledged":"自動解決或認可","do nothing":"不進行任何操作","auto acknowledged":"自動認可","auto resolve":"自動解決",gorush:ja,alerta:Ja,alertaApiEndpoint:qa,alertaEnvironment:Qa,alertaApiKey:Xa,alertaAlertState:Ya,alertaRecoverState:Za,deleteStatusPageMsg:_a,Proxies:$a,default:"預設",enabled:es,setAsDefault:os,deleteProxyMsg:ts,proxyDescription:as,enableProxyDescription:ss,setAsDefaultProxyDescription:rs,"Certificate Chain":"憑證鏈結",Valid:ns,Invalid:is,AccessKeyId:cs,SecretAccessKey:ls,PhoneNumbers:ds,TemplateCode:ps,SignName:us,"Sms template must contain parameters: ":"Sms 範本必須包含參數：","Bark Endpoint":"Bark 端點","Bark Group":"Bark 群組","Bark Sound":"Bark 鈴聲",WebHookUrl:ms,SecretKey:gs,"For safety, must use secret key":"為了安全起見，必須使用秘密金鑰","Device Token":"裝置權杖",Platform:hs,Huawei:Ss,High:ys,Retry:Ds,Topic:Ts,"WeCom Bot Key":"WeCom 機器人金鑰","Setup Proxy":"設置 Proxy","Proxy Protocol":"Proxy 通訊協定","Proxy Server":"Proxy 伺服器","Proxy server has authentication":"Proxy 伺服器啟用了驗證功能",User:Ps,Installed:ks,"Not installed":"未安裝",Running:As,"Not running":"未執行","Remove Token":"移除權杖",Start:Ms,Stop:bs,"Uptime Kuma":"Uptime Kuma","Add New Status Page":"新增狀態頁",Slug:Is,"Accept characters:":"可用字元：",startOrEndWithOnly:vs,"No consecutive dashes":"不得連續使用破折號",Next:ws,"The slug is already taken. Please choose another slug.":"此 slug 已被使用。請選擇其他 slug。","No Proxy":"無 Proxy",Authentication:Cs,"HTTP Basic Auth":"HTTP 基本驗證","New Status Page":"新狀態頁","Page Not Found":"找不到頁面","Reverse Proxy":"反向代理",Backup:fs,About:Rs,wayToGetCloudflaredURL:Ns,cloudflareWebsite:Ls,"Message:":"訊息：","Don't know how to get the token? Please read the guide:":"不知道如何取得權杖嗎？請閱讀指南：","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"如果您目前正透過 Cloudflare Tunnel 連線，可能會導致連線中斷。您確定要停止嗎？請輸入密碼以確認。","HTTP Headers":"HTTP 標頭","Trust Proxy":"信任的 Proxy","Other Software":"其他軟體","For example: nginx, Apache and Traefik.":"例如 nginx、Apache 和 Traefik。","Please read":"請閱覽","Subject:":"簽發給：","Valid To:":"有效期限：","Days Remaining:":"剩餘天數：","Issuer:":"簽發者：","Fingerprint:":"指紋：","No status pages":"無狀態頁","Domain Name Expiry Notification":"網域名稱到期通知",Proxy:"Proxy","Date Created":"建立日期",HomeAssistant:Es,onebotHttpAddress:xs,onebotMessageType:Us,onebotGroupMessage:Hs,onebotPrivateMessage:Gs,onebotUserOrGroupId:Ks,onebotSafetyTips:Os,"PushDeer Key":"PushDeer 金鑰","Footer Text":"頁尾文字","Show Powered By":"顯示技術支援文字","Domain Names":"網域名稱",signedInDisp:Fs,signedInDispDisabled:Ws,RadiusSecret:Bs,RadiusSecretDescription:Vs,RadiusCalledStationId:zs,RadiusCalledStationIdDescription:js,RadiusCallingStationId:Js,RadiusCallingStationIdDescription:qs,"Certificate Expiry Notification":"憑證到期通知","API Username":"API 使用者名稱","API Key":"API 金鑰","Recipient Number":"收件者號碼","From Name/Number":"來自名字/號碼","Leave blank to use a shared sender number.":"留空以使用共享寄件人號碼。","Octopush API Version":"Octopush API 版本","Legacy Octopush-DM":"舊版 Octopush-DM",endpoint:Qs,octopushAPIKey:Xs,octopushLogin:Ys,promosmsLogin:Zs,promosmsPassword:_s,"pushoversounds pushover":"Pushover (預設)","pushoversounds bike":"車鈴","pushoversounds bugle":"號角","pushoversounds cashregister":"收銀機","pushoversounds classical":"古典","pushoversounds cosmic":"宇宙","pushoversounds falling":"下落","pushoversounds gamelan":"甘美朗","pushoversounds incoming":"來電","pushoversounds intermission":"中場休息","pushoversounds magic":"魔法","pushoversounds mechanical":"機械","pushoversounds pianobar":"鋼琴酒吧","pushoversounds siren":"警鈴","pushoversounds spacealarm":"太空鬧鐘","pushoversounds tugboat":"汽笛","pushoversounds alien":"外星鬧鐘 (長)","pushoversounds climb":"爬升 (長)","pushoversounds persistent":"持續 (長)","pushoversounds echo":"Pushover 回音 (長)","pushoversounds updown":"上下 (長)","pushoversounds vibrate":"僅震動","pushoversounds none":"無 (靜音)",pushyAPIKey:$s,pushyToken:er,"Show update if available":"顯示可用更新","Also check beta release":"檢查 Beta 版","Using a Reverse Proxy?":"正在使用反向代理？","Check how to config it for WebSocket":"查看如何為 WebSocket 設定","Steam Game Server":"Steam 遊戲伺服器","Most likely causes:":"可能原因：","The resource is no longer available.":"資源已不可用。","There might be a typing error in the address.":"網址可能有誤。","What you can try:":"您可以嘗試：","Retype the address.":"重新輸入網址。","Go back to the previous page.":"返回上一頁。","Coming Soon":"即將推出",wayToGetClickSendSMSToken:or,"Connection String":"連線字串",Query:tr,settingsCertificateExpiry:ar,certificationExpiryDescription:sr,"Setup Docker Host":"設定 Docker 主機","Connection Type":"連線類型","Docker Daemon":"Docker 精靈",deleteDockerHostMsg:rr,socket:nr,tcp:ir,"Docker Container":"Docker 容器","Container Name / ID":"容器名稱 / ID","Docker Host":"Docker 主機","Docker Hosts":"Docker 主機","ntfy Topic":"ntfy 主題",Domain:cr,Workstation:lr,disableCloudflaredNoAuthMsg:dr,trustProxyDescription:pr,wayToGetLineNotifyToken:ur,Examples:mr,"Home Assistant URL":"Home Assistant 網址","Long-Lived Access Token":"長期有效存取權杖","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":"若要建立長期有效存取權杖，請點擊您的個人檔案名稱 (左下角)，捲動至最下方，然後點擊建立權杖。","Notification Service":"通知服務","default: notify all devices":"預設：通知所有服務",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'您可以在 Home Assistant 中查看通知服務的列表，在"開發者工具 > 服務"下搜尋"通知"來找到您的裝置/手機的名稱。',"Automations can optionally be triggered in Home Assistant:":"可以選擇在 Home Assistant 中觸發自動化程序：","Trigger type:":"觸發器類型：","Event type:":"事件類型：","Event data:":"事件資料：","Then choose an action, for example switch the scene to where an RGB light is red.":"然後選擇動作，例如切換至 RGB 燈為紅色的場景。","Frontend Version":"前端版本","Frontend Version do not match backend version!":"前端版本與後端版本不符！","Base URL":"基底網址",goAlertInfo:gr,goAlertIntegrationKeyInfo:hr,goAlert:Sr,backupOutdatedWarning:yr,backupRecommend:Dr,Optional:Tr,squadcast:Pr,SendKey:kr,"SMSManager API Docs":"SMSManager API 文件 ","Gateway Type":"閘道類型",SMSManager:Ar,"You can divide numbers with":"若要除數，您可以使用",or:Mr,recurringInterval:br,Recurring:Ir,strategyManual:vr,warningTimezone:wr,weekdayShortMon:Cr,weekdayShortTue:fr,weekdayShortWed:Rr,weekdayShortThu:Nr,weekdayShortFri:Lr,weekdayShortSat:Er,weekdayShortSun:xr,dayOfWeek:Ur,dayOfMonth:Hr,lastDay:Gr,lastDay1:Kr,lastDay2:Or,lastDay3:Fr,lastDay4:Wr,"No Maintenance":"無維護",pauseMaintenanceMsg:Br,"maintenanceStatus-under-maintenance":"維護中","maintenanceStatus-inactive":"非使用中","maintenanceStatus-scheduled":"已排程","maintenanceStatus-ended":"已結束","maintenanceStatus-unknown":"未知","Display Timezone":"顯示時區","Server Timezone":"伺服器時區",statusPageMaintenanceEndDate:Vr,IconUrl:zr,"Enable DNS Cache":"啟用 DNS 快取",Enable:jr,Disable:Jr,dnsCacheDescription:qr,"Single Maintenance Window":"單一維護時段","Maintenance Time Window of a Day":"每日的維護時段","Effective Date Range":"有效的日期範圍（可選）","Schedule Maintenance":"排程維護","Date and Time":"時間和日期","DateTime Range":"DateTime 範圍",Strategy:Qr,"Free Mobile User Identifier":"Free Mobile User Identifier","Free Mobile API Key":"Free Mobile API 金鑰","Enable TLS":"啟用 TLS","Proto Service Name":"Proto 服務名稱","Proto Method":"Proto 方式","Proto Content":"Proto 內容",Economy:Xr,Lowcost:Yr,high:Zr,"General Monitor Type":"一般監測器類型","Passive Monitor Type":"被動監測器類型","Specific Monitor Type":"指定監測器類型",plugin:_r,install:$r,Game:en,Help:on,Monitor:tn,Custom:an,sameAsServerTimezone:sn,cronExpression:rn,telegramSendSilently:nn,telegramSendSilentlyDescription:cn,pagertreeDoNothing:ln,"Add New Tag":"添加新標籤",telegramMessageThreadIDDescription:dn,telegramMessageThreadID:pn,startDateTime:un,endDateTime:mn,cronSchedule:gn,invalidCronExpression:hn,telegramProtectContent:Sn,telegramProtectContentDescription:yn,installing:Dn,uninstall:Tn,loadingError:Pn,markdownSupported:kn,"Packet Size":"數據包大小",statusPageRefreshIn:An,confirmUninstallPlugin:Mn,"Key Added":"已創建金鑰","Clone Monitor":"複製監控項目",Clone:bn,cloneOf:In,uninstalling:vn,notificationRegional:wn,wayToGetZohoCliqURL:Cn,wayToGetKookBotToken:fn,dataRetentionTimeError:Rn,infiniteRetention:Nn,confirmDeleteTagMsg:Ln,twilioAuthToken:En,twilioAccountSID:xn,ntfyUsernameAndPassword:Un,ntfyAuthenticationMethod:Hn,"API Keys":"API 金鑰",Expiry:Gn,"apiKey-inactive":"無效","apiKey-expired":"過期","Reconnecting...":"重新連線...","Expiry date":"到期時間","Don't expire":"不要過期",Continue:Kn,"Add Another":"新增作者","Add API Key":"新增 API 金鑰",Generate:On,lunaseaTarget:Fn,lunaseaDeviceID:Wn,lunaseaUserID:Bn,"Cannot connect to the socket server":"無法連線到 Socket 伺服器","Edit Maintenance":"編輯維護",deleteAPIKeyMsg:Vn,"Custom Monitor Type":"自訂監視器類型","Google Analytics ID":"Google Analytics ID","Server Address":"伺服器位置","Edit Tag":"編輯標籤",pagertreeMedium:zn,pagertreeHigh:jn,pagertreeResolve:Jn,pagertreeLow:qn,"Learn More":"閱讀更多",pushoverMessageTtl:Qn,apiKeyAddedMsg:Xn,"No API Keys":"無 API 金鑰","apiKey-active":"活躍",Expires:Yn,disableAPIKeyMsg:Zn,"Monitor Setting":"{0} 的監視器設定","Guild ID":"Guild ID",chromeExecutableDescription:_n,promosmsAllowLongSMS:$n,Home:ei,chromeExecutable:oi,chromeExecutableAutoDetect:ti,pagertreeCritical:ai})}}}));