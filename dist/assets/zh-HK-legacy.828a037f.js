System.register([],(function(e,o){"use strict";return{execute:function(){var o=e("languageName","繁體中文 (香港)"),t=e("Settings","設定"),a=e("Dashboard","主控台"),s=e("Language","語言"),n=e("Appearance","外觀"),r=e("Theme","主題"),i=e("General","一般"),l=e("Version","版本"),c=e("List","列表"),d=e("Add","新增"),p=e("Up","上線"),u=e("Down","離線"),m=e("Pending","待定"),g=e("Unknown","不明"),h=e("Pause","暫停"),y=e("pauseDashboardHome","暫停"),S=e("Name","名稱"),D=e("Status","狀態"),T=e("DateTime","日期時間"),P=e("Message","內容"),k=e("Resume","恢復"),A=e("Edit","編輯"),M=e("Delete","刪除"),b=e("Current","目前"),I=e("Uptime","上線率"),v=e("day","日"),C=e("hour","小時"),w=e("checkEverySecond","每 {0} 秒檢查一次"),f=e("Response","反應時間"),R=e("Ping","反應時間"),N=e("Keyword","關鍵字"),L=e("URL","網址 URL"),E=e("Hostname","Hostname"),x=e("Port","Port"),U=e("Retries","重試數次確定為離線"),H=e("retriesDescription","重試多少次後才判定為離線及傳送通知。如數值為 0 會即判定為離線及傳送通知。"),K=e("Advanced","進階"),F=e("ignoreTLSError","忽略 TLS/SSL 錯誤"),G=e("upsideDownModeDescription","反轉狀態，如網址是可正常瀏覽，會被判定為 '離線/DOWN'"),O=e("maxRedirectDescription","設為 0 即不跟蹤"),B=e("acceptedStatusCodesDescription","可多選"),W=e("Save","儲存"),V=e("Notifications","通知"),z=e("Light","明亮"),j=e("Dark","暗黑"),q=e("Auto","自動"),Q=e("Normal","一般"),J=e("Bottom","下方"),X=e("None","沒有"),Z=e("Timezone","時區"),Y=e("passwordNotMatchMsg","密碼不一致"),_=e("Logout","登出"),$=e("notificationDescription","新增後，你需要在監測器裡啟用。"),ee=e("Leave","離開"),oe=e("Confirm","確認"),te=e("Yes","是"),ae=e("No","否"),se=e("Username","帳號"),ne=e("Password","密碼"),re=e("Login","登入"),ie=e("Email","電郵"),le=e("Test","測試"),ce=e("keywordDescription","搜索 HTML 或 JSON 裡是否有出現關鍵字（注意英文大細階）"),de=e("deleteMonitorMsg","是否確定刪除這個監測器？"),pe=e("deleteNotificationMsg","是否確定刪除這個通知設定？如監測器啟用了這個通知，將會收不到通知。"),ue=e("resolverserverDescription","預設為 Cloudflare DNS 伺服器，你可以轉用其他 DNS 伺服器。"),me=e("rrtypeDescription","請選擇 DNS 記錄類型"),ge=e("pauseMonitorMsg","是否確定要暫停？"),he=e("respTime","反應時間 (ms)"),ye=e("notAvailableShort","N/A"),Se=e("Create","建立"),De=e("clearEventsMsg","是否確定刪除這個監測器的所有事件？"),Te=e("clearHeartbeatsMsg","是否確定刪除這個監測器的所有脈搏資料？"),Pe=e("confirmClearStatisticsMsg","是否確定刪除所有監測器的脈搏資料？（您的監測器會繼續正常運作）"),ke=e("Events","事件"),Ae=e("Heartbeats","脈搏"),Me=e("enableDefaultNotificationDescription","新增監測器時這個通知會預設啟用，當然每個監測器亦可分別控制開關。"),be=e("Export","匯出"),Ie=e("Import","匯入"),ve=e("backupDescription","您可以備份所有監測器及所有通知。"),Ce=e("backupDescription2","註：此備份不包括歷史記錄。"),we=e("backupDescription3","此備份可能包含了一些敏感資料如通知裡的 Token，請小心保存備份。"),fe=e("alertNoFile","請選擇一個檔案"),Re=e("alertWrongFileType","請選擇 JSON 檔案"),Ne=e("twoFAVerifyLabel","請輸入 Token 以確認 2FA："),Le=e("tokenValidSettingsMsg","Token 有效！您現在可以儲存 2FA 設定。"),Ee=e("confirmEnableTwoFAMsg","您確定要啟用 2FA 嗎？"),xe=e("confirmDisableTwoFAMsg","您確定要停用 2FA 嗎？"),Ue=e("Active","生效"),He=e("Inactive","未生效"),Ke=e("Token","Token"),Fe=e("retryCheckEverySecond","Retry every {0} seconds."),Ge=e("importHandleDescription","\"略過已存在的\" 會跳過所有相同名稱的監測器或通知。 '覆蓋' 將刪除所有現有的監測器及通知。"),Oe=e("confirmImportMsg","您確定要匯入備份嗎？請確認你已選擇正確的匯入設定。"),Be=e("Overwrite","覆蓋"),We=e("Options","選項"),Ve=e("Tags","標籤"),ze=e("color","顏色"),je=e("Gray","灰"),qe=e("Red","紅"),Qe=e("Orange","橙"),Je=e("Green","綠"),Xe=e("Blue","藍"),Ze=e("Indigo","靛"),Ye=e("Purple","紫"),_e=e("Pink","粉紅"),$e=e("statusPageNothing","Nothing here, please add a group or a monitor."),eo=e("telegram","Telegram"),oo=e("webhook","Webhook"),to=e("smtp","電郵 (SMTP)"),ao=e("discord","Discord"),so=e("teams","Microsoft Teams"),no=e("signal","Signal"),ro=e("gotify","Gotify"),io=e("slack","Slack"),lo=e("pushover","Pushover"),co=e("pushy","Pushy"),po=e("octopush","Octopush"),uo=e("promosms","PromoSMS"),mo=e("lunasea","LunaSea"),go=e("apprise","Apprise (支援 50 多種通知)"),ho=e("pushbullet","Pushbullet"),yo=e("line","Line Messenger"),So=e("mattermost","Mattermost"),Do=e("deleteStatusPageMsg","是否確定刪除這個 Status Page？"),To=e("needPushEvery","您應每 {0} 秒呼叫此網址。"),Po=e("pushOptionalParams","選填參數：{0}"),ko=e("defaultNotificationName","我的 {notification} 通知 ({number})"),Ao=e("here","此處"),Mo=e("Required","必填"),bo=e("wayToGetTelegramToken","您可以從 {0} 取得 Token。"),Io=e("supportTelegramChatID","支援 對話/群組/頻道的聊天 ID"),vo=e("wayToGetTelegramChatID","傳送訊息給機器人，並前往以下網址以取得您的 chat ID："),Co=e("chatIDNotFound","找不到 Chat ID；請先傳送訊息給機器人"),wo=e("webhookJsonDesc","{0} 適合任何現代的 HTTP 伺服器，如 Express.js"),fo=e("webhookFormDataDesc","{multipart} 適合 PHP。 JSON 必須先經由 {decodeFunction} 剖析。"),Ro=e("secureOptionNone","無 / STARTTLS (25, 587)"),No=e("secureOptionTLS","TLS (465)"),Lo=e("emailCustomSubject","自訂主旨"),Eo=e("smtpCC","CC"),xo=e("smtpBCC","BCC"),Uo=e("wayToGetDiscordURL","您可以前往 伺服器設定 -> 整合 -> Webhook -> 新 Webhook 以取得"),Ho=e("wayToGetTeamsURL","您可以前往此頁面以了解如何建立 Webhook 網址 {0}。"),Ko=e("Recipients","收件人"),Fo=e("needSignalAPI","您需要有 REST API 的 Signal 客戶端。"),Go=e("wayToCheckSignalURL","您可以前往下列網址以了解如何設定："),Oo=e("signalImportant","注意: 不得混合收件人的群組和號碼！"),Bo=e("Priority","優先度"),Wo=e("aboutWebhooks","更多關於 Webhook 的資訊: {0}"),Vo=e("aboutChannelName","如果您不想使用 Webhook 頻道，請在 {0} 頻道名稱欄位填入您想使用的頻道。例如: #其他頻道"),zo=e("aboutKumaURL","如果您未填入 Uptime Kuma 網址。將預設使用專案 Github 頁面。"),jo=e("emojiCheatSheet","Emoji 一覽表: {0}"),qo=e("PushByTechulus","Push by Techulus"),Qo=e("clicksendsms","ClickSend SMS"),Jo=e("GoogleChat","Google Chat (僅限 Google Workspace)"),Xo=e("Device","裝置"),Zo=e("pushoverDesc1","緊急優先度 (2) 的重試間隔為 30 秒並且會在 1 小時後過期。"),Yo=e("pushoverDesc2","如果您想要傳送通知到不同裝置，請填寫裝置欄位。"),_o=e("octopushTypePremium","Premium (快速 - 建議用於警報)"),$o=e("octopushTypeLowCost","Low Cost (緩慢 - 有時會被營運商阻擋)"),et=e("checkPrice","查看 {0} 價格："),ot=e("apiCredentials","API 認證"),tt=e("octopushLegacyHint","您使用的是舊版的 Octopush (2011-2020) 還是新版？"),at=e("octopushPhoneNumber","電話號碼 (intl 格式，例如：+33612345678) "),st=e("octopushSMSSender","簡訊寄件人名稱：3-11位英數字元及空白 (a-zA-Z0-9)"),nt=e("appriseInstalled","已安裝 Apprise。"),rt=e("appriseNotInstalled","尚未安裝 Apprise。{0}"),it=e("lineDevConsoleTo","Line 開發者控制台 - {0}"),lt=e("wayToGetLineChannelToken","首先，前往 {0}，建立 provider 和 channel (Messaging API)。接著您就可以從上面提到的選單項目中取得頻道存取權杖及使用者 ID。"),ct=e("aboutIconURL",'您可以在 "圖示網址" 中提供圖片網址以覆蓋預設個人檔案圖片。若已設定 Emoji 圖示，將忽略此設定。'),dt=e("aboutMattermostChannelName",'您可以在 "頻道名稱" 欄位中填寫頻道名稱以覆蓋 Webhook 的預設頻道。必須在 Mattermost 的 Webhook 設定中啟用。例如：#其他頻道'),pt=e("matrix","Matrix"),ut=e("promosmsTypeEco","SMS ECO - 便宜，但是很慢且經常過載。僅限位於波蘭的收件人。"),mt=e("promosmsTypeFlash","SMS FLASH - 訊息會自動在收件人的裝置上顯示。僅限位於波蘭的收件人。"),gt=e("promosmsTypeFull","SMS FULL - 高級版，您可以使用您的寄件人名稱 (必須先註冊名稱。對於警報來說十分可靠。"),ht=e("promosmsTypeSpeed","SMS SPEED - 系統中的最高優先度。快速、可靠，但昂貴 (約 SMS FULL 的兩倍價格)。"),yt=e("promosmsPhoneNumber","電話號碼 (若收件人位於波蘭則無需輸入區域代碼)"),St=e("promosmsSMSSender","簡訊寄件人名稱：預先註冊的名稱或以下的預設名稱：InfoSMS、SMS Info、MaxSMS、INFO、SMS"),Dt=e("matrixHomeserverURL","Homeserver 網址 (開頭為 http(s)://，結尾可能帶連接埠)"),Tt=e("matrixDesc1","您可以在 Matrix 客戶端的房間設定中的進階選項找到 internal room ID。應該看起來像 !QMdRCpUIfLwsfjxye6:home.server。"),Pt=e("matrixDesc2","使用您自己的 Matrix 使用者存取權杖將賦予存取您的帳號和您加入的房間的完整權限。建議建立新使用者，並邀請至您想要接收通知的房間中。您可以執行 {0} 以取得存取權杖"),kt=e("Method","方法"),At=e("Body","主體"),Mt=e("Headers","標頭"),bt=e("PushUrl","Push URL"),It=e("HeadersInvalidFormat","要求標頭不是有效的 JSON："),vt=e("BodyInvalidFormat","請求主體不是有效的 JSON："),Ct=e("clearDataOlderThan","保留 {0} 天內的監測器歷史紀錄。"),wt=e("PasswordsDoNotMatch","密碼不相符。"),ft=e("records","記錄"),Rt=e("steamApiKeyDescription","若要監測 Steam 遊戲伺服器，您將需要 Steam Web-API 金鑰。您可以在此註冊您的 API 金鑰："),Nt=e("recent","最近"),Lt=e("Done","完成"),Et=e("Info","資訊"),xt=e("Security","安全性"),Ut=e("Default","預設"),Ht=e("Title","標題"),Kt=e("Content","內容"),Ft=e("Style","樣式"),Gt=e("info","資訊"),Ot=e("warning","警告"),Bt=e("danger","危險"),Wt=e("primary","主要"),Vt=e("light","淺色"),zt=e("dark","暗色"),jt=e("Post","發佈"),qt=e("Created","建立"),Qt=e("Unpin","取消釘選"),Jt=e("Description","描述"),Xt=e("Services","服務"),Zt=e("Discard","捨棄"),Yt=e("Cancel","取消"),_t=e("shrinkDatabaseDescription","觸發 SQLite 的資料庫清理 (VACUUM)。如果您的資料庫是在 1.10.0 版本後建立，AUTO_VACUUM 已自動啟用，則無需此操作。"),$t=e("serwersms","SerwerSMS.pl"),ea=e("serwersmsAPIUser","API 使用者名稱 (包括 webapi_ 前綴)"),oa=e("serwersmsAPIPassword","API 密碼"),ta=e("serwersmsPhoneNumber","電話號碼"),aa=e("serwersmsSenderName","SMS 寄件人名稱 (由客戶入口網站註冊)"),sa=e("stackfield","Stackfield"),na=e("smtpDkimSettings","DKIM 設定"),ra=e("smtpDkimDesc","請參考 Nodemailer DKIM {0} 使用方式。"),ia=e("documentation","文件"),la=e("smtpDkimDomain","網域名稱"),ca=e("smtpDkimKeySelector","Key Selector"),da=e("smtpDkimPrivateKey","私密金鑰"),pa=e("smtpDkimHashAlgo","雜湊演算法 (選填)"),ua=e("smtpDkimheaderFieldNames","要簽署的郵件標頭 (選填)"),ma=e("smtpDkimskipFields","不簽署的郵件標頭 (選填)"),ga=e("gorush","Gorush"),ha=e("alerta","Alerta"),ya=e("alertaApiEndpoint","API Endpoint"),Sa=e("alertaEnvironment","環境"),Da=e("alertaApiKey","API 金鑰"),Ta=e("alertaAlertState","警示狀態"),Pa=e("alertaRecoverState","恢復狀態"),ka=e("Proxies","代理伺服器"),Aa=e("enabled","啟用"),Ma=e("setAsDefault","設為預設"),ba=e("deleteProxyMsg","您確定要為所有監測器刪除此 Proxy 嗎？"),Ia=e("proxyDescription","必須將 Proxy 指派給監測器才能運作。"),va=e("enableProxyDescription","此 Proxy 在啟用前不會在監測器上生效，您可以藉由控制啟用狀態來暫時對所有的監測器停用 Proxy。"),Ca=e("setAsDefaultProxyDescription","預設情況下，新監測器將啟用此 Proxy。您仍可分別停用各監測器的 Proxy。"),wa=e("Maintenance","維護"),fa=e("statusMaintenance","維護中"),Ra=e("Enable","啟用"),Na=e("Disable","停用"),La=e("Help","幫助"),Ea=e("resendEveryXTimes","每 {0} 次便重新傳送"),xa=e("resendDisabled","重新傳送已停用"),Ua=e("enableGRPCTls","允許以 TLS 連線傳送 gRPC 要求"),Ha=e("recurringIntervalMessage","每天一次 | 每 {0} 天一次"),Ka=e("affectedMonitorsDescription","選擇受目前維護影響的監測器"),Fa=e("affectedStatusPages","在已選取的狀態頁中顯示此維護訊息"),Ga=e("Game","遊戲"),Oa=e("Monitor","監測器 | 監測器"),Ba=e("webhookAdditionalHeadersTitle","額外 Header"),Wa=e("successMessage","成功訊息"),Va=e("error","錯誤"),za=e("critical","嚴重"),ja=e("Customize","自定義"),qa=e("Valid","有效"),Qa=e("Invalid","無效"),Ja=e("Installed","已安裝"),Xa=e("Running","執行中"),Za=e("Stop","停止"),Ya=e("Next","下一步"),_a=e("Backup","備份"),$a=e("Custom","自訂"),es=e("Start","開始"),os=e("User","使用者"),ts=e("trustProxyDescription","信任 'X-Forwarded-*' 的 Header。如果您想取得正確的 Client IP，且您的 Uptime Kuma 架設於 Nginx 或 Apache Proxy 之後，您應啟用此選項。"),as=e("loadingError","未能取得數據，請重新再試。"),ss=e("uninstall","解除安裝"),ns=e("wayToGetZohoCliqURL","您可以前往此頁面以了解如何建立 Webhook 網址 {0}。"),rs=e("webhookAdditionalHeadersDesc","設定傳送 Webhook 時使用的額外 Header。"),is=e("topic","Topic"),ls=e("topicExplanation","監測 MQTT 中的一個 Topic"),cs=e("successMessageExplanation","MQTT 中收到視為成功的訊息"),ds=e("Slug","Slug"),ps=e("startOrEndWithOnly","只能使用 {0} 開頭或結尾"),us=e("Authentication","驗證"),ms=e("About","關於"),gs=e("wayToGetCloudflaredURL","(到 {0} 下載 cloudflared)"),hs=e("cloudflareWebsite","Cloudflare 網頁"),ys=e("signedInDisp","登入為 {0}"),Ss=e("signedInDispDisabled","驗證已停用。"),Ds=e("RadiusSecret","Radius Secret"),Ts=e("RadiusSecretDescription","Client 與 Server 之間的共享 Secret"),Ps=e("RadiusCalledStationId","Called Station Id"),ks=e("RadiusCallingStationId","Calling Station Id"),As=e("Query","Query"),Ms=e("settingsCertificateExpiry","TLS 証書到期"),bs=e("certificationExpiryDescription","証書將於 X 天後到期時觸發 HTTPS 監測器通知："),Is=e("deleteDockerHostMsg","您確定要為所有監測器刪除此 Docker 主機嗎？"),vs=e("socket","Socket"),Cs=e("tcp","TCP / HTTP"),ws=e("Domain","Domain"),fs=e("Workstation","Workstation"),Rs=e("ZohoCliq","ZohoCliq"),Ns=e("disableCloudflaredNoAuthMsg","您處於無驗證模式。無須輸入密碼。"),Ls=e("wayToGetLineNotifyToken","您可以從 {0} 取得 Access Token。"),Es=e("Examples","例子"),xs=e("backupRecommend","請直接備份 Docker Volume 或 ./data/ 資料夾。"),Us=e("squadcast","Squadcast"),Hs=e("or","或"),Ks=e("recurringInterval","間隔"),Fs=e("Recurring","重複性"),Gs=e("strategyManual","手動啟用/停用"),Os=e("warningTimezone","正在使用 Server 的時區"),Bs=e("weekdayShortMon","一"),Ws=e("weekdayShortTue","二"),Vs=e("weekdayShortWed","三"),zs=e("weekdayShortThu","四"),js=e("weekdayShortFri","五"),qs=e("weekdayShortSat","六"),Qs=e("weekdayShortSun","日"),Js=e("dayOfWeek","每周特定一天"),Xs=e("dayOfMonth","每月特定一天"),Zs=e("lastDay","最後一天"),Ys=e("lastDay1","每月最後一天"),_s=e("plugin","插件 | 插件"),$s=e("install","安裝"),en=e("installing","正在安装"),on=e("uninstalling","正在解除安裝"),tn=e("confirmUninstallPlugin","你確定要解除安裝？"),an=e("dataRetentionTimeError","保留限期必需為 0 或正數"),sn=e("infiniteRetention","設定為 0 以作無限期保留。"),nn=e("lastDay2","每月倒數第二天"),rn=e("lastDay3","每月倒數第三天"),ln=e("lastDay4","每月倒數第四天"),cn=e("pauseMaintenanceMsg","您確定要暫停嗎？"),dn=e("statusPageMaintenanceEndDate","結束"),pn=e("IconUrl","Icon 網址"),un=e("dnsCacheDescription","在某些情況 IPv6 可能會出現異常，如果您遇到任何問題，請停用。"),mn=e("backupOutdatedWarning","過時：由於備份功能未顧及新功能的增加，因此備份功能無法產生或復原完整的備份。"),gn=e("Optional","可選填"),hn=e("markdownSupported","支援 Markdown"),yn=e("confirmDeleteTagMsg","你確定你要刪除此標籤？相關的監測器不會被刪除。"),Sn=e("pushyToken","裝置 Token"),Dn=e("onebotHttpAddress","OneBot HTTP 地址"),Tn=e("HomeAssistant","Home Assistant"),Pn=e("wayToGetPagerDutyKey",'您可以前往 Service -> Service Directory -> (Select a service) -> Integrations -> Add integration 以取得。您可以搜尋 "Events API V2"。詳細資訊 {0}'),kn=e("Kook","Kook"),An=e("wayToGetKookBotToken","到 {0} 創建應用並取得 Bot Token"),Mn=e("grpcMethodDescription","Method 名稱將被轉換成 cammelCase 命名，如 sayHello、check 等。"),bn=e("deleteMaintenanceMsg","您確定要刪除此維護嗎？"),In=e("dnsPortDescription","DNS 伺服器 port。預設為 53。您可以隨時變更 port。"),vn=e("atLeastOneMonitor","選擇至少一個受影響的監測器"),Cn=e("endpoint","endpoint"),wn=e("octopushAPIKey",'在控制台的 HTTP API 憑證取得的 "API Key"'),fn=e("octopushLogin",'在控制台的 HTTP API 憑證取得的 "Login"'),Rn=e("promosmsLogin","API 登入名稱"),Nn=e("promosmsPassword","API 密碼"),Ln=e("pushyAPIKey","Secret API Key"),En=e("Strategy","策略"),xn=e("onebotGroupMessage","群組"),Un=e("onebotMessageType","OneBot 訊息類型"),Hn=e("smseaglePriority","訊息優先度 (0-9，預設 = 0)"),Kn=e("smseagleEncoding","以 Unicode 傳送"),Fn=e("smseagleUrl","您的 SMSEagle 裝置 URL"),Gn=e("smseagleToken","API 存取 Token"),On=e("smseagleRecipient","收件者 (以逗號分隔)"),Bn=e("smseagleRecipientType","收件者類型"),Wn=e("smseagleContact","聯絡人名稱"),Vn=e("smseagleGroup","群組名稱"),zn=e("smseagleTo","電話號碼"),jn=e("smseagle","SMSEagle"),qn=e("wayToGetClickSendSMSToken","您可以到 {0} 取得 API 使用者名稱和 API Key。"),Qn=e("onebotSafetyTips","為了安全起見，必須設置存取 Token"),Jn=e("onebotUserOrGroupId","群組/使用者 ID"),Xn=e("onebotPrivateMessage","私人"),Zn=e("notificationRegional","地區性"),Yn=e("RadiusCalledStationIdDescription","Called Device 識別碼"),_n=e("telegramSendSilently","靜音發送"),$n=e("telegramMessageThreadID","(選填) Message Thread ID"),er=e("RadiusCallingStationIdDescription","Calling Device 識別碼"),or=e("deleteAPIKeyMsg","你確定要刪除此 API Key?"),tr=e("disableAPIKeyMsg","你確定要停用此 API Key?"),ar=e("Expires","失效時間"),sr=e("Continue","繼續"),nr=e("Generate","產生"),rr=e("apiKeyAddedMsg","你的 API Key 已被產生。此頁只會顯示一次，請適當保存。"),ir=e("Expiry","過期"),lr=e("telegramSendSilentlyDescription","選擇以靜音發送。用戶會收到無聲通知。"),cr=e("Clone","複製"),dr=e("cloneOf","複製的 {0}"),pr=e("Topic","Topic"),ur=e("Retry","重試"),mr=e("High","高"),gr=e("Huawei","華為"),hr=e("Android","Android"),yr=e("SecretKey","SecretKey"),Sr=e("WebHookUrl","WebHookUrl"),Dr=e("Platform","平台"),Tr=e("telegramProtectContent","禁止轉發/儲存"),Pr=e("telegramProtectContentDescription","如果選擇，用戶將不能轉發/儲存收到的信息。"),kr=e("Economy","經濟"),Ar=e("Lowcost","平價"),Mr=e("high","高價"),br=e("statusPageRefreshIn","將於 {0} 後重新整理"),Ir=e("SendKey","SendKey"),vr=e("startDateTime","開始時間"),Cr=e("pagertreeLow","低"),wr=e("endDateTime","結束時間"),fr=e("cronExpression","Cron 表達式"),Rr=e("cronSchedule","排程： "),Nr=e("invalidCronExpression","無效 Cron 表達式：{0}"),Lr=e("sameAsServerTimezone","使用伺服器時區"),Er=e("pagertreeMedium","中"),xr=e("pagertreeHigh","高");e("default",{languageName:o,Settings:t,Dashboard:a,"New Update":"有更新",Language:s,Appearance:n,Theme:r,General:i,Version:l,"Check Update On GitHub":"到 Github 查看更新",List:c,Add:d,"Add New Monitor":"新增監測器","Quick Stats":"綜合數據",Up:p,Down:u,Pending:m,Unknown:g,Pause:h,pauseDashboardHome:y,Name:S,Status:D,DateTime:T,Message:P,"No important events":"沒有重要事件",Resume:k,Edit:A,Delete:M,Current:b,Uptime:I,"Cert Exp.":"証書期限",day:v,"-day":"日",hour:C,"-hour":"小時",checkEverySecond:w,Response:f,Ping:R,"Monitor Type":"監測器類型",Keyword:N,"Friendly Name":"名稱",URL:L,Hostname:E,Port:x,"Heartbeat Interval":"檢查間距",Retries:U,retriesDescription:H,Advanced:K,ignoreTLSError:F,"Upside Down Mode":"反轉模式",upsideDownModeDescription:G,"Max. Redirects":"跟隨重新導向 (Redirect) 的次數",maxRedirectDescription:O,"Accepted Status Codes":"接受為上線的 HTTP 狀態碼",acceptedStatusCodesDescription:B,Save:W,Notifications:V,"Not available, please setup.":"無法使用，需要設定","Setup Notification":"設定通知",Light:z,Dark:j,Auto:q,"Theme - Heartbeat Bar":"監測器列表 狀態條外觀",Normal:Q,Bottom:J,None:X,Timezone:Z,"Search Engine Visibility":"是否允許搜尋器索引","Allow indexing":"允許索引","Discourage search engines from indexing site":"不建議搜尋器索引","Change Password":"變更密碼","Current Password":"目前密碼","New Password":"新密碼","Repeat New Password":"確認新密碼",passwordNotMatchMsg:Y,"Update Password":"更新密碼","Disable Auth":"取消登入認証","Enable Auth":"開啟登入認証","disableauth.message1":"你是否確認<strong>取消登入認証</strong>？","disableauth.message2":"這個功能是設計給已有<strong>第三方認証</strong>的用家，例如 Cloudflare Access。","Please use this option carefully!":"請小心使用。",Logout:_,notificationDescription:$,Leave:ee,"I understand, please disable":"我明白，請取消登入認証",Confirm:oe,Yes:te,No:ae,Username:se,Password:ne,"Remember me":"記住我",Login:re,"No Monitors, please":"沒有監測器，請","add one":"新增","Notification Type":"通知類型",Email:ie,Test:le,keywordDescription:ce,"Certificate Info":"憑證詳細資料",deleteMonitorMsg:de,deleteNotificationMsg:pe,"Resolver Server":"DNS 伺服器","Resource Record Type":"DNS 記錄類型",resolverserverDescription:ue,rrtypeDescription:me,pauseMonitorMsg:ge,"Last Result":"最後結果","Create your admin account":"建立管理員帳號","Repeat Password":"重複密碼",respTime:he,notAvailableShort:ye,Create:Se,clearEventsMsg:De,clearHeartbeatsMsg:Te,confirmClearStatisticsMsg:Pe,"Clear Data":"清除資料",Events:ke,Heartbeats:Ae,"Auto Get":"自動獲取",enableDefaultNotificationDescription:Me,"Default enabled":"預設通知","Also apply to existing monitors":"同時取用至目前所有監測器",Export:be,Import:Ie,backupDescription:ve,backupDescription2:Ce,backupDescription3:we,alertNoFile:fe,alertWrongFileType:Re,twoFAVerifyLabel:Ne,tokenValidSettingsMsg:Le,confirmEnableTwoFAMsg:Ee,confirmDisableTwoFAMsg:xe,"Apply on all existing monitors":"套用至目前所有監測器","Verify Token":"驗証 Token","Setup 2FA":"設定 2FA","Enable 2FA":"開啟 2FA","Disable 2FA":"關閉 2FA","2FA Settings":"2FA 設定","Two Factor Authentication":"雙重認證",Active:Ue,Inactive:He,Token:Ke,"Show URI":"顯示 URI","Clear all statistics":"清除所有歷史記錄",retryCheckEverySecond:Fe,importHandleDescription:Ge,confirmImportMsg:Oe,"Heartbeat Retry Interval":"Heartbeat Retry Interval","Import Backup":"匯入備份","Export Backup":"匯出備份","Skip existing":"略過已存在的",Overwrite:Be,Options:We,"Keep both":"兩者並存",Tags:Ve,"Add New below or Select...":"在下方新增或選取…","Tag with this name already exist.":"Tag with this name already exist.","Tag with this value already exist.":"Tag with this value already exist.",color:ze,"value (optional)":"值 (非必需)",Gray:je,Red:qe,Orange:Qe,Green:Je,Blue:Xe,Indigo:Ze,Purple:Ye,Pink:_e,"Search...":"搜尋…","Avg. Ping":"平均反應時間","Avg. Response":"平均反應時間","Entry Page":"Entry Page",statusPageNothing:$e,"No Services":"沒有服務","All Systems Operational":"一切正常","Partially Degraded Service":"部份服務受阻","Degraded Service":"服務受阻","Add Group":"新增群組","Add a monitor":"新增監測器","Edit Status Page":"編輯 Status Page","Go to Dashboard":"前往主控台","Status Page":"Status Page","Status Pages":"Status Pages",telegram:eo,webhook:oo,smtp:to,discord:ao,teams:so,signal:no,gotify:ro,slack:io,"rocket.chat":"Rocket.chat",pushover:lo,pushy:co,octopush:po,promosms:uo,lunasea:mo,apprise:go,pushbullet:ho,line:yo,mattermost:So,deleteStatusPageMsg:Do,"Push URL":"推送網址",needPushEvery:To,pushOptionalParams:Po,defaultNotificationName:ko,here:Ao,Required:Mo,"Bot Token":"機器人權杖",wayToGetTelegramToken:bo,"Chat ID":"聊天 ID",supportTelegramChatID:Io,wayToGetTelegramChatID:vo,"YOUR BOT TOKEN HERE":"在此填入您的機器人權杖",chatIDNotFound:Co,"Post URL":"Post 網址","Content Type":"Content Type",webhookJsonDesc:wo,webhookFormDataDesc:fo,secureOptionNone:Ro,secureOptionTLS:No,"Ignore TLS Error":"忽略 TLS 錯誤","From Email":"寄件人",emailCustomSubject:Lo,"To Email":"收件人",smtpCC:Eo,smtpBCC:xo,"Discord Webhook URL":"Discord Webhook 網址",wayToGetDiscordURL:Uo,"Bot Display Name":"機器人顯示名稱","Prefix Custom Message":"前綴自訂訊息","Webhook URL":"Webhook 網址",wayToGetTeamsURL:Ho,Number:"號碼",Recipients:Ko,needSignalAPI:Fo,wayToCheckSignalURL:Go,signalImportant:Oo,"Application Token":"應用程式權杖","Server URL":"伺服器網址",Priority:Bo,"Icon Emoji":"Emoji 圖示","Channel Name":"頻道名稱","Uptime Kuma URL":"Uptime Kuma 網址",aboutWebhooks:Wo,aboutChannelName:Vo,aboutKumaURL:zo,emojiCheatSheet:jo,PushByTechulus:qo,clicksendsms:Qo,GoogleChat:Jo,"User Key":"使用者金鑰",Device:Xo,"Message Title":"訊息標題","Notification Sound":"通知音效","More info on:":"更多資訊: {0}",pushoverDesc1:Zo,pushoverDesc2:Yo,"SMS Type":"簡訊類型",octopushTypePremium:_o,octopushTypeLowCost:$o,checkPrice:et,apiCredentials:ot,octopushLegacyHint:tt,"Check octopush prices":"查看 octopush 價格 {0}。",octopushPhoneNumber:at,octopushSMSSender:st,"LunaSea Device ID":"LunaSea 裝置 ID","Apprise URL":"Apprise 網址","Example:":"範例：{0}","Read more:":"深入瞭解：{0}","Status:":"狀態：{0}","Read more":"深入瞭解",appriseInstalled:nt,appriseNotInstalled:rt,"Access Token":"存取權杖","Channel access token":"頻道存取權杖","Line Developers Console":"Line 開發者控制台",lineDevConsoleTo:it,"Basic Settings":"基本設定","User ID":"使用者 ID","Messaging API":"Messaging API",wayToGetLineChannelToken:lt,"Icon URL":"圖示網址",aboutIconURL:ct,aboutMattermostChannelName:dt,matrix:pt,promosmsTypeEco:ut,promosmsTypeFlash:mt,promosmsTypeFull:gt,promosmsTypeSpeed:ht,promosmsPhoneNumber:yt,promosmsSMSSender:St,"Feishu WebHookUrl":"飛書 WebHook 網址",matrixHomeserverURL:Dt,"Internal Room Id":"Internal Room ID",matrixDesc1:Tt,matrixDesc2:Pt,Method:kt,Body:At,Headers:Mt,PushUrl:bt,HeadersInvalidFormat:It,BodyInvalidFormat:vt,"Monitor History":"監測器歷史紀錄",clearDataOlderThan:Ct,PasswordsDoNotMatch:wt,records:ft,"One record":"一項記錄","Showing {from} to {to} of {count} records":"正在顯示 {count} 項記錄中的 {from} 至 {to} 項",steamApiKeyDescription:Rt,"Current User":"目前使用者",recent:Nt,Done:Lt,Info:Et,Security:xt,"Steam API Key":"Steam API Key","Shrink Database":"壓縮資料庫","Pick a RR-Type...":"選擇資源記錄類型…","Pick Accepted Status Codes...":"選擇可接受的狀態碼…",Default:Ut,"HTTP Options":"HTTP 選項","Create Incident":"建立事件",Title:Ht,Content:Kt,Style:Ft,info:Gt,warning:Ot,danger:Bt,primary:Wt,light:Vt,dark:zt,Post:jt,"Please input title and content":"請輸入標題及內容",Created:qt,"Last Updated":"最後更新",Unpin:Qt,"Switch to Light Theme":"切換至淺色佈景主題","Switch to Dark Theme":"切換至深色佈景主題","Show Tags":"顯示標籤","Hide Tags":"隱藏標籤",Description:Jt,"No monitors available.":"沒有可用的監測器。","Add one":"新增一個","No Monitors":"無監測器","Untitled Group":"未命名群組",Services:Xt,Discard:Zt,Cancel:Yt,shrinkDatabaseDescription:_t,serwersms:$t,serwersmsAPIUser:ea,serwersmsAPIPassword:oa,serwersmsPhoneNumber:ta,serwersmsSenderName:aa,stackfield:sa,smtpDkimSettings:na,smtpDkimDesc:ra,documentation:ia,smtpDkimDomain:la,smtpDkimKeySelector:ca,smtpDkimPrivateKey:da,smtpDkimHashAlgo:pa,smtpDkimheaderFieldNames:ua,smtpDkimskipFields:ma,gorush:ga,alerta:ha,alertaApiEndpoint:ya,alertaEnvironment:Sa,alertaApiKey:Da,alertaAlertState:Ta,alertaRecoverState:Pa,Proxies:ka,default:"預設",enabled:Aa,setAsDefault:Ma,deleteProxyMsg:ba,proxyDescription:Ia,enableProxyDescription:va,setAsDefaultProxyDescription:Ca,Maintenance:wa,statusMaintenance:fa,"Enable DNS Cache":"啟用 DNS 快取",Enable:Ra,Disable:Na,"Schedule maintenance":"計劃維護",Help:La,"Valid To:":"有效期至：","Date Created":"新增日期",resendEveryXTimes:Ea,resendDisabled:xa,enableGRPCTls:Ua,recurringIntervalMessage:Ha,affectedMonitorsDescription:Ka,affectedStatusPages:Fa,"Primary Base URL":"主要 Base URL","Passive Monitor Type":"被動監測器類型","Resend Notification if Down X times consecutively":"每 X 次心跳皆離線，重新傳送通知",Game:Ga,"Specific Monitor Type":"特定監測器類型",Monitor:Oa,"General Monitor Type":"一般監測器類型","Affected Monitors":"受影響的監測器","Powered by":"技術支持：","Add New Status Page":"新增 Status Page","Page Not Found":"找不到頁面","Start of maintenance":"維護開始時間","All Status Pages":"所有 Status Page",webhookAdditionalHeadersTitle:Ba,successMessage:Wa,error:Va,critical:za,Customize:ja,"Custom Footer":"自訂 Footer","Custom CSS":"自訂 CSS",Valid:qa,Invalid:Qa,Installed:Ja,"Not installed":"未安裝",Running:Xa,Stop:Za,Next:Ya,"No Proxy":"無 Proxy",Backup:_a,"Pick Affected Monitors...":"挑選受影響的監測器…",Custom:$a,"Not running":"未執行","Remove Token":"移除 Token",Start:es,User:os,trustProxyDescription:ts,"Reverse Proxy":"反向 Proxy","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":"若要取得長期有效 Access Token，請按您的個人檔案名稱 (左下角)，捲動至最下方，然後按建立 Token。 ",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'您可以在 Home Assistant 中查看通知服務的列表，在"開發者工具 > 服務"下搜尋"通知"來找到您的裝置/手機的名稱。',loadingError:as,uninstall:ss,wayToGetZohoCliqURL:ns,"Select status pages...":"選擇 Status Page…",webhookAdditionalHeadersDesc:rs,topic:is,topicExplanation:ls,successMessageExplanation:cs,"Certificate Chain":"証書信任鏈",Slug:ds,"Accept characters:":"可用字元：",startOrEndWithOnly:ps,"No consecutive dashes":"不得連續使用破折號","The slug is already taken. Please choose another slug.":"此 slug 已被使用。請選擇其他 slug。",Authentication:us,"HTTP Basic Auth":"HTTP Basic Auth","New Status Page":"新 Status Page","Docker Daemon":"Docker Daemon",About:ms,wayToGetCloudflaredURL:gs,cloudflareWebsite:hs,"Message:":"訊息：","Don't know how to get the token? Please read the guide:":"不知道如何取得權杖？請閱讀指南：","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"如果您正透過 Cloudflare Tunnel 連線，可能會導致連線中斷。您確定要停止嗎？請輸入密碼以確認。","HTTP Headers":"HTTP Headers","Trust Proxy":"信任 Proxy","Other Software":"其他軟件","For example: nginx, Apache and Traefik.":"例如 nginx、Apache 和 Traefik。","Please read":"請閱覽","Subject:":"標題：","Days Remaining:":"餘下日數：","Issuer:":"簽發者：","Fingerprint:":"指紋：","No status pages":"無 Status Page","Domain Name Expiry Notification":"Domain 到期通知","Footer Text":"Footer 文字","Show Powered By":'顯示 "Powered By"',"Domain Names":"Domain",signedInDisp:ys,signedInDispDisabled:Ss,RadiusSecret:Ds,RadiusSecretDescription:Ts,RadiusCalledStationId:Ps,RadiusCallingStationId:ks,"Certificate Expiry Notification":"証書過期通知","API Username":"API 使用者名稱","API Key":"API Key","Show update if available":"有更新時顯示","Also check beta release":"檢查 Beta 版本","Using a Reverse Proxy?":"正在使用反向代理 (Reverse Proxy)？","Check how to config it for WebSocket":"查看如何加入 WebSocket 設定","Steam Game Server":"Steam 遊戲 Server","Most likely causes:":"最可能原因：","The resource is no longer available.":"資源已不能存取。","There might be a typing error in the address.":"網址可能輸入錯誤。","What you can try:":"您可以嘗試：","Retype the address.":"重新輸入網址。","Go back to the previous page.":"返回上一頁。","Coming Soon":"即將推出","Connection String":"Connection String",Query:As,settingsCertificateExpiry:Ms,certificationExpiryDescription:bs,"Setup Docker Host":"設定 Docker 主機","Connection Type":"連線方式",deleteDockerHostMsg:Is,socket:vs,tcp:Cs,"Docker Container":"Docker Container","Container Name / ID":"Container 名稱 / ID","Docker Host":"Docker 主機","Docker Hosts":"Docker 主機",Domain:ws,Workstation:fs,ZohoCliq:Rs,disableCloudflaredNoAuthMsg:Ns,wayToGetLineNotifyToken:Ls,Examples:Es,"Home Assistant URL":"Home Assistant 網址","Long-Lived Access Token":"長期有效 Access Token","Notification Service":"通知服務","default: notify all devices":"預設：通知所有服務","Automations can optionally be triggered in Home Assistant:":"可以選擇在 Home Assistant 中觸發自動程序：","Trigger type:":"觸發類型：",backupRecommend:xs,squadcast:Us,or:Hs,recurringInterval:Ks,Recurring:Fs,strategyManual:Gs,warningTimezone:Os,weekdayShortMon:Bs,weekdayShortTue:Ws,weekdayShortWed:Vs,weekdayShortThu:zs,weekdayShortFri:js,weekdayShortSat:qs,weekdayShortSun:Qs,dayOfWeek:Js,dayOfMonth:Xs,lastDay:Zs,lastDay1:Ys,"maintenanceStatus-ended":"已結束","maintenanceStatus-unknown":"未知","Display Timezone":"顯示時區","Schedule Maintenance":"排程維護","Date and Time":"日期與時間","DateTime Range":"日期與時間範圍",plugin:_s,install:$s,installing:en,uninstalling:on,confirmUninstallPlugin:tn,dataRetentionTimeError:an,infiniteRetention:sn,"Effective Date Range":"有效日期範圍 (可選)","Hello @everyone is...":"Hello {'@'}everyone is…","Packet Size":"Packet 大小","Event type:":"事件類型：","Event data:":"事件資料：","Then choose an action, for example switch the scene to where an RGB light is red.":"然後選擇操作，例如切換至 RGB 燈為紅色的場景。","Frontend Version":"前端版本","Frontend Version do not match backend version!":"前端版本與後端版本不符！",lastDay2:nn,lastDay3:rn,lastDay4:ln,"No Maintenance":"無維護",pauseMaintenanceMsg:cn,"maintenanceStatus-under-maintenance":"維護中","maintenanceStatus-inactive":"已停用","maintenanceStatus-scheduled":"已排程","Server Timezone":"伺服器時區",statusPageMaintenanceEndDate:dn,IconUrl:pn,dnsCacheDescription:un,"Single Maintenance Window":"單一維護時段","Maintenance Time Window of a Day":"每日維護時段",Proxy:"Proxy",backupOutdatedWarning:mn,Optional:gn,markdownSupported:hn,"Custom Monitor Type":"自訂監測器","Google Analytics ID":"Google Analytics ID","Learn More":"了解更多","Server Address":"Server 地址","Edit Tag":"編輯標籤",confirmDeleteTagMsg:yn,"pushoversounds pushover":"Pushover (預設)","pushoversounds tugboat":"Tug Boat",pushyToken:Sn,"Proto Content":"Proto 內容",onebotHttpAddress:Dn,HomeAssistant:Tn,"Leave blank to use a shared sender number.":"留空以使用平台共享的發送人號碼。","auto acknowledged":"自動標記已讀",wayToGetPagerDutyKey:Pn,Kook:kn,wayToGetKookBotToken:An,grpcMethodDescription:Mn,deleteMaintenanceMsg:bn,dnsPortDescription:In,atLeastOneMonitor:vn,endpoint:Cn,octopushAPIKey:wn,octopushLogin:fn,promosmsLogin:Rn,promosmsPassword:Nn,"pushoversounds bike":"Bike","pushoversounds bugle":"Bugle","pushoversounds cashregister":"Cash Register","pushoversounds classical":"Classical","pushoversounds cosmic":"Cosmic","pushoversounds falling":"Falling","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"Incoming","pushoversounds intermission":"Intermission","pushoversounds magic":"Magic","pushoversounds mechanical":"Mechanical","pushoversounds pianobar":"Piano Bar","pushoversounds siren":"Siren","pushoversounds spacealarm":"Space Alarm","pushoversounds alien":"Alien Alarm (long)","pushoversounds climb":"Climb (long)","pushoversounds persistent":"Persistent (long)","pushoversounds echo":"Pushover Echo (long)","pushoversounds updown":"Up Down (long)","pushoversounds vibrate":"Vibrate Only","pushoversounds none":"None (silent)",pushyAPIKey:Ln,"Guild ID":"Guild ID",Strategy:En,"Free Mobile User Identifier":"Free Mobile User Identifier","Free Mobile API Key":"Free Mobile API Key","Enable TLS":"使用 TLS","Proto Service Name":"Proto 服務名稱","Proto Method":"Proto 方式",onebotGroupMessage:xn,onebotMessageType:Un,"ntfy Topic":"ntfy Topic","Legacy Octopush-DM":"舊版 Octopush-DM","Octopush API Version":"Octopush API 版本","From Name/Number":"發送人名稱/號碼","Recipient Number":"收件人號碼",smseaglePriority:Hn,smseagleEncoding:Kn,smseagleUrl:Fn,smseagleToken:Gn,smseagleRecipient:On,smseagleRecipientType:Bn,smseagleContact:Wn,smseagleGroup:Vn,smseagleTo:zn,smseagle:jn,"auto resolve":"自動解決","do nothing":"不進行任何操作","Auto resolve or acknowledged":"自動解決或標記已讀","Integration URL":"Integration URL","Integration Key":"Integration Key",wayToGetClickSendSMSToken:qn,"PushDeer Key":"PushDeer Key",onebotSafetyTips:Qn,onebotUserOrGroupId:Jn,onebotPrivateMessage:Xn,notificationRegional:Zn,RadiusCalledStationIdDescription:Yn,telegramSendSilently:_n,telegramMessageThreadID:$n,RadiusCallingStationIdDescription:er,"Body Encoding":"Body Encoding","API Keys":"API Keys",deleteAPIKeyMsg:or,disableAPIKeyMsg:tr,"apiKey-inactive":"已停用","apiKey-active":"有效","No API Keys":"沒有 API Keys","Add API Key":"新增 API Key","Expiry date":"失效時間","Don't expire":"不會失效","apiKey-expired":"已失效",Expires:ar,"Key Added":"API Key 已產生","Add Another":"加另一個",Continue:sr,Generate:nr,apiKeyAddedMsg:rr,Expiry:ir,telegramSendSilentlyDescription:lr,"Clone Monitor":"複製監察器",Clone:cr,cloneOf:dr,"Proxy server has authentication":"Proxy 伺服器啟用了驗證功能","Proxy Server":"Proxy 伺服器","Proxy Protocol":"Proxy 通訊協定","Setup Proxy":"設定 Proxy",Topic:pr,Retry:ur,High:mr,Huawei:gr,Android:hr,"For safety, must use secret key":"為安全起見，必須使用 Secret Key",SecretKey:yr,WebHookUrl:Sr,"Bark Sound":"Bark 鈴聲","Bark Group":"Bark 群組","Bark Endpoint":"Bark Endpoint",Platform:Dr,"Device Token":"裝置 Token",telegramProtectContent:Tr,telegramProtectContentDescription:Pr,"Add New Tag":"加新標籤",Economy:kr,Lowcost:Ar,high:Mr,statusPageRefreshIn:br,SendKey:Ir,"SMSManager API Docs":"SMSManager API 文件 ",startDateTime:vr,pagertreeLow:Cr,endDateTime:wr,cronExpression:fr,cronSchedule:Rr,invalidCronExpression:Nr,sameAsServerTimezone:Lr,"WeCom Bot Key":"WeCom 機器人 Key",pagertreeMedium:Er,pagertreeHigh:xr})}}}));