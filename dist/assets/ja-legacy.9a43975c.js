System.register([],(function(e,t){"use strict";return{execute:function(){var t=e("languageName","日本語"),a=e("checkEverySecond","{0}秒ごとにチェックします"),o=e("retriesDescription","サービスがダウンとしてマークされ、通知が送信されるまでの最大リトライ数"),i=e("ignoreTLSError","HTTPS ウェブサイトの TLS/SSL エラーを無視する"),n=e("upsideDownModeDescription","ステータスの扱いを逆にします。サービスに到達可能な場合は、DOWNとなる。"),r=e("maxRedirectDescription","フォローするリダイレクトの最大数。リダイレクトを無効にするには0を設定する。"),s=e("acceptedStatusCodesDescription","成功した応答とみなされるステータスコードを選択する。"),l=e("passwordNotMatchMsg","繰り返しのパスワードが一致しません。"),c=e("notificationDescription","監視を機能させるには、監視に通知を割り当ててください。"),d=e("keywordDescription","プレーンHTMLまたはJSON応答でキーワードを検索し、大文字と小文字を区別します。"),p=e("pauseDashboardHome","一時停止"),u=e("deleteMonitorMsg","この監視を削除してよろしいですか？"),g=e("deleteNotificationMsg","全ての監視のこの通知を削除してよろしいですか？"),m=e("resolverserverDescription","Cloudflareがデフォルトのサーバーですが、いつでもリゾルバサーバーを変更できます。"),D=e("rrtypeDescription","監視するRRタイプを選択します"),y=e("pauseMonitorMsg","一時停止しますか？"),S=e("Settings","設定"),h=e("Dashboard","ダッシュボード"),T=e("Language","言語"),P=e("Appearance","外観"),k=e("Theme","テーマ"),C=e("General","全般的"),w=e("Version","バージョン"),A=e("List","一覧"),M=e("Add","追加"),f=e("Up","Up"),I=e("Down","Down"),b=e("Pending","中止"),R=e("Unknown","不明"),v=e("Pause","一時停止"),N=e("Name","名前"),U=e("Status","ステータス"),L=e("DateTime","日時"),E=e("Message","メッセージ"),x=e("Resume","再開"),H=e("Edit","編集"),G=e("Delete","削除"),O=e("Current","現在"),F=e("Uptime","起動時間"),B=e("day","日 | 日間"),K=e("hour","時間"),W=e("Response","レスポンス"),V=e("Ping","Ping"),z=e("Keyword","キーワード"),J=e("URL","URL"),X=e("Hostname","ホスト名"),Q=e("Port","ポート"),q=e("Retries","Retries"),j=e("Advanced","Advanced"),Y=e("Save","保存"),Z=e("Notifications","通知"),_=e("Light","Light"),$=e("Dark","Dark"),ee=e("Auto","Auto"),te=e("Normal","通常"),ae=e("Bottom","下部"),oe=e("None","なし"),ie=e("Timezone","タイムゾーン"),ne=e("Logout","ログアウト"),re=e("Leave","作業を中止する"),se=e("Confirm","確認"),le=e("Yes","はい"),ce=e("No","いいえ"),de=e("Username","ユーザー名"),pe=e("Password","パスワード"),ue=e("Login","ログイン"),ge=e("Email","Eメール"),me=e("Test","テスト"),De=e("respTime","応答時間 (ms)"),ye=e("notAvailableShort","N/A"),Se=e("Create","作成"),he=e("clearEventsMsg","この監視のすべての記録を削除してもよろしいですか？"),Te=e("clearHeartbeatsMsg","この監視のすべての異常記録を削除してもよろしいですか？"),Pe=e("confirmClearStatisticsMsg","すべての統計を削除してもよろしいですか？"),ke=e("Events","統計"),Ce=e("Heartbeats","異常記録"),we=e("enableDefaultNotificationDescription","監視を作成するごとに、この通知方法はデフォルトで有効になります。監視ごとに通知を無効にすることもできます。"),Ae=e("Export","エクスポート"),Me=e("Import","インポート"),fe=e("backupDescription","すべての監視と通知方法をJSONファイルにできます。"),Ie=e("backupDescription2","※ 履歴と統計のデータはバックアップされません。"),be=e("backupDescription3","通知に使用するトークンなどの機密データも含まれています。注意して扱ってください。"),Re=e("alertNoFile","インポートするファイルを選択してください。"),ve=e("alertWrongFileType","JSONファイルを選択してください。"),Ne=e("twoFAVerifyLabel","トークンを入力して、２段階認証を有効にします。"),Ue=e("tokenValidSettingsMsg","トークンの確認が完了しました！ 「保存」をしてください。"),Le=e("confirmEnableTwoFAMsg","２段階認証を「有効」にします。よろしいですか？"),Ee=e("confirmDisableTwoFAMsg","２段階認証を「無効」にします。よろしいですか？"),xe=e("retryCheckEverySecond","{0} 秒ごとにリトライします"),He=e("importHandleDescription","同じ名前のすべての監視または通知方法を上書きしない場合は、「既存のをスキップ」を選択します。 「上書きする」は、既存のすべてのモニターと通知を削除します。"),Ge=e("confirmImportMsg","バックアップをインポートしてもよろしいですか？希望するオプションを選択してください。"),Oe=e("Overwrite","上書きする"),Fe=e("Options","オプション"),Be=e("Tags","タグ"),Ke=e("color","色"),We=e("statusPageNothing","ここには何もありません。グループまたは監視を追加してください。"),Ve=e("Start","始める"),ze=e("Retry","リトライ"),Je=e("Orange","橙"),Xe=e("Game","ゲーム"),Qe=e("Help","ヘルプ"),qe=e("Maintenance","メンテナンス"),je=e("resendDisabled","再送信不可"),Ye=e("resendEveryXTimes","{0}回ごとに再送信"),Ze=e("markdownSupported","マークダウン構文がサポートされています"),_e=e("Monitor","モニター |モニター"),$e=e("needPushEvery","{0} 秒ごとにこの URL を呼び出す必要があります。"),et=e("pushOptionalParams","オプションのパラメーター: {0}"),tt=e("statusMaintenance","メンテナンス"),at=e("Security","セキュリティ"),ot=e("Default","デフォルト"),it=e("Title","タイトル"),nt=e("webhookAdditionalHeadersTitle","追加ヘッダー"),rt=e("Priority","優先順位"),st=e("Token","Token"),lt=e("Gray","灰色"),ct=e("Red","赤色"),dt=e("Green","緑色"),pt=e("Blue","青色"),ut=e("Indigo","藍色"),gt=e("Purple","紫色"),mt=e("Pink","ピンク"),Dt=e("Required","必須"),yt=e("webhookAdditionalHeadersDesc","Webhook で送信される追加ヘッダーを設定します。"),St=e("steamApiKeyDescription","Steam Game Server を監視するためには、Steam Web-API キーが必要です。APIキーの登録はこちらから行えます。 "),ht=e("clearDataOlderThan","監視履歴データを {0} 日間、保持します。"),Tt=e("PasswordsDoNotMatch","パスワードが一致していません。"),Pt=e("topic","トピック"),kt=e("Info","Info"),Ct=e("Content","内容"),wt=e("Unpin","ピンを外す"),At=e("Description","概要"),Mt=e("Services","サービス"),ft=e("Discard","破棄"),It=e("Cancel","キャンセル"),bt=e("Customize","カスタマイズ"),Rt=e("deleteStatusPageMsg","本当にこのステータスページを削除しますか？"),vt=e("Proxies","プロキシ"),Nt=e("enabled","有効"),Ut=e("setAsDefault","デフォルトに設定する"),Lt=e("deleteProxyMsg","本当にすべてのモニターからこのプロキシを削除しますか？"),Et=e("proxyDescription","プロキシはモニターに割り当てられていないと機能しません。"),xt=e("setAsDefaultProxyDescription","このプロキシは、新しいモニターに対してデフォルトで有効になっています。モニターごとに個別にプロキシを無効にすることができます。"),Ht=e("Stop","止める"),Gt=e("Next","次へ"),Ot=e("Authentication","認証"),Ft=e("Backup","バックアップ"),Bt=e("About","About"),Kt=e("cloudflareWebsite","Cloudflare Website"),Wt=e("Custom","カスタム"),Vt=e("Created","作成日時"),zt=e("webhookJsonDesc","{0}はExpress.jsのような最新のHTTPサーバに適しています"),Jt=e("webhookFormDataDesc","{multipart}はPHPに適しています。このJSONは{decodeFunction}でデコードする必要があります"),Xt=e("appriseInstalled","Appriseはインストール済みです。"),Qt=e("emojiCheatSheet","絵文字一覧: {0}"),qt=e("Inactive","無効"),jt=e("defaultNotificationName","{notification} 通知 ({number})"),Yt=e("Active","有効"),Zt=e("appriseNotInstalled","Apprise はインストールされていません。{0}"),_t=e("Method","方式"),$t=e("Body","ボディ"),ea=e("Headers","ヘッダー"),ta=e("PushUrl","Push URL"),aa=e("HeadersInvalidFormat","リクエストヘッダーのJSONが無効です: "),oa=e("BodyInvalidFormat","リクエストボディのJSONが無効です: "),ia=e("records","レコード"),na=e("topicExplanation","監視するMQTTトピック"),ra=e("successMessage","成功メッセージ"),sa=e("successMessageExplanation","成功したとみなされるMQTTメッセージ"),la=e("recent","直近"),ca=e("Done","完了"),da=e("Style","スタイル"),pa=e("info","情報"),ua=e("warning","警告"),ga=e("signedInDisp","{0}としてログイン中"),ma=e("RadiusSecret","Radius シークレット"),Da=e("RadiusSecretDescription","クライアントとサーバー間の共有シークレット"),ya=e("RadiusCalledStationId","Called Station Id"),Sa=e("RadiusCallingStationId","Calling Station Id"),ha=e("trustProxyDescription","ヘッダー「X-Forwarded-*」を信頼します。Uptime Kumaがリバースプロキシの中にあり、正しいクライアントIPを取得する場合は、有効化してください。"),Ta=e("Examples","例"),Pa=e("telegramMessageThreadID","(オプション) メッセージスレッドID"),ka=e("wayToGetLineNotifyToken","{0}からアクセストークンを入手できます"),Ca=e("critical","致命的エラー"),wa=e("signedInDispDisabled","認証が無効化されています。"),Aa=e("RadiusCalledStationIdDescription","着信側の識別子"),Ma=e("telegramProtectContent","転送や保存を制限"),fa=e("Workstation","ワークステーション"),Ia=e("wayToGetTelegramToken","{0}からトークンを入手できます。"),ba=e("telegramMessageThreadIDDescription","オプションとしてフォーラムのスレッド(話題)のIDを指定してメッセージを送信することができます。スーパーグループでのみ利用できます。"),Ra=e("telegramProtectContentDescription","有効な場合、Telegram上のボットのメッセージの転送や保存が制限されます。"),va=e("danger","危険"),Na=e("error","エラー"),Ua=e("primary","プライマリー"),La=e("light","ライト"),Ea=e("dark","ダーク"),xa=e("Post","Post"),Ha=e("shrinkDatabaseDescription","SQLiteデーターベースにVACUUMを実行します。データーベースがv1.10.0以降に作成されている場合、AUTO_VACUUMが既に有効なため実行する必要はありません。"),Ga=e("enableProxyDescription","このプロキシは有効化されない限り、監視リクエストには影響しません。無効化した場合、一時的にプロキシをすべての監視から無効化することができます。"),Oa=e("Valid","有効"),Fa=e("Invalid","無効"),Ba=e("User","ユーザー"),Ka=e("Installed","インストール済み"),Wa=e("Running","稼働中"),Va=e("Slug","スラッグ"),za=e("startOrEndWithOnly","{0}のみ最初と最後の文字として使用可能"),Ja=e("wayToGetCloudflaredURL","({0}からcloudflaredをダウンロード)"),Xa=e("RadiusCallingStationIdDescription","発信側の識別子"),Qa=e("Query","クエリ"),qa=e("settingsCertificateExpiry","TLS証明書の有効期限"),ja=e("certificationExpiryDescription","HTTPS監視のTLS証明書が以下の期限を迎えたときに通知を送信します。"),Ya=e("deleteDockerHostMsg","すべての監視のDocker ホストを削除してもよろしいですか?"),Za=e("socket","ソケット"),_a=e("tcp","TCP / HTTP"),$a=e("Domain","ドメイン"),eo=e("telegramSendSilently","通知せずに送信"),to=e("telegramSendSilentlyDescription","通知せずにメッセージを送信します。通知音がなりません。"),ao=e("supportTelegramChatID","チャットやグループ、チャンネルのチャットIDに対応"),oo=e("wayToGetTelegramChatID","ボットにメッセージを送信し、以下のURLを開くとチャットIDのchat_idを入手できます。"),io=e("chatIDNotFound","チャットIDが存在しません。最初にメッセージをボットに送信してください"),no=e("disableCloudflaredNoAuthMsg","認証が無効化されているため、パスワードは必要ありません。"),ro=e("Expiry","期限切れ"),so=e("deleteAPIKeyMsg","本当にこのAPIキーを削除しますか？"),lo=e("Generate","生成"),co=e("pauseMaintenanceMsg","本当に一時停止しますか？"),po=e("secureOptionNone","None / STARTTLS (25, 587)"),uo=e("smtp","Email (SMTP)"),go=e("endpoint","エンドポイント"),mo=e("or","または"),Do=e("promosmsPassword","APIパスワード"),yo=e("Clone","複製"),So=e("cloneOf","{0} の複製"),ho=e("affectedStatusPages","メンテナンスメッセージを選択したステータスページに表示する"),To=e("GoogleChat","Google Chat (Google Workspace 限定)"),Po=e("pushyToken","デバイストークン"),ko=e("smtpDkimDomain","ドメイン名"),Co=e("smtpDkimSettings","DKIM設定"),wo=e("strategyManual","手動で有効/無効を切り替える"),Ao=e("warningTimezone","サーバーのタイムゾーンを使用します"),Mo=e("weekdayShortMon","月"),fo=e("weekdayShortTue","火"),Io=e("weekdayShortWed","水"),bo=e("weekdayShortFri","金"),Ro=e("weekdayShortSat","土"),vo=e("weekdayShortSun","日"),No=e("dayOfWeek","曜日ごと"),Uo=e("dayOfMonth","日にちごと"),Lo=e("IconUrl","アイコンURL"),Eo=e("Enable","有効"),xo=e("Disable","無効"),Ho=e("loadingError","データを取得できません。後でもう一度試してください。"),Go=e("uninstall","アンインストール"),Oo=e("installing","インストール中"),Fo=e("smtpCC","CC"),Bo=e("secureOptionTLS","TLS (465)"),Ko=e("smtpBCC","BCC"),Wo=e("wayToCheckSignalURL","こちらから設定方法を確認できます:"),Vo=e("enableGRPCTls","TLS接続でgRPCリクエストを送信できるようにする"),zo=e("dnsPortDescription","DNSサーバーポートのデフォルトは53です。ポートはいつでも変更可能です。"),Jo=e("Device","デバイス"),Xo=e("here","こちら"),Qo=e("weekdayShortThu","木"),qo=e("plugin","プラグイン"),jo=e("dnsCacheDescription","一部のIPv6環境では動作しない場合があります。問題が発生した場合は無効にしてください。"),Yo=e("uninstalling","アンインストール中"),Zo=e("confirmUninstallPlugin","本当にこのプラグインをアンインストールしていいですか？"),_o=e("wayToGetDiscordURL","サーバー設定 -> 連携サービス -> ウェブフックを確認 -> 新しいウェブフック から新たに取得できます"),$o=e("wayToGetTeamsURL","ウェブフックの作成方法は {0}"),ei=e("wayToGetZohoCliqURL","ウェブフックの作成方法は {0}"),ti=e("confirmDeleteTagMsg","このタグを本当に削除してよろしいですか？このタグが付けられたモニターは削除されません。"),ai=e("deleteMaintenanceMsg","このメンテナンスを本当に削除していいですか？"),oi=e("promosmsLogin","APIログイン名"),ii=e("pushyAPIKey","シークレットAPI Key"),ni=e("Expires","有効期限"),ri=e("disableAPIKeyMsg","本当にこのAPIキーを無効化しますか？"),si=e("install","インストール"),li=e("affectedMonitorsDescription","メンテナンスによって影響を受けるモニターを選択してください"),ci=e("backupOutdatedWarning","非推奨:多くの機能が追加され、このバックアップ機能は少しメンテナンスされていないため、完全なバックアップの生成や復元はできません。"),di=e("backupRecommend","代わりにボリュームまたはデータフォルダ（./data/）を直接バックアップしてください。"),pi=e("recurringInterval","インターバル"),ui=e("Recurring","繰り返し"),gi=e("lineDevConsoleTo","Line Developers Console - {0}"),mi=e("Android","Android"),Di=e("Huawei","Huawei"),yi=e("recurringIntervalMessage","毎日1回実行する｜{0} 日に1回実行する"),Si=e("statusPageMaintenanceEndDate","終了日");e("default",{languageName:t,checkEverySecond:a,retriesDescription:o,ignoreTLSError:i,upsideDownModeDescription:n,maxRedirectDescription:r,acceptedStatusCodesDescription:s,passwordNotMatchMsg:l,notificationDescription:c,keywordDescription:d,pauseDashboardHome:p,deleteMonitorMsg:u,deleteNotificationMsg:g,resolverserverDescription:m,rrtypeDescription:D,pauseMonitorMsg:y,Settings:S,Dashboard:h,"New Update":"新しいアップデート",Language:T,Appearance:P,Theme:k,General:C,Version:w,"Check Update On GitHub":"GitHubでアップデートを確認する",List:A,Add:M,"Add New Monitor":"監視の追加","Quick Stats":"統計",Up:f,Down:I,Pending:b,Unknown:R,Pause:v,Name:N,Status:U,DateTime:L,Message:E,"No important events":"重要なイベントなし",Resume:x,Edit:H,Delete:G,Current:O,Uptime:F,"Cert Exp.":"証明書有効期限",day:B,"-day":"-日",hour:K,"-hour":"-時間",Response:W,Ping:V,"Monitor Type":"監視タイプ",Keyword:z,"Friendly Name":"分かりやすい名前",URL:J,Hostname:X,Port:Q,"Heartbeat Interval":"監視間隔",Retries:q,Advanced:j,"Upside Down Mode":"Upside Down Mode","Max. Redirects":"最大リダイレクト数","Accepted Status Codes":"正常なステータスコード",Save:Y,Notifications:Z,"Not available, please setup.":"利用できません。設定してください。","Setup Notification":"通知設定",Light:_,Dark:$,Auto:ee,"Theme - Heartbeat Bar":"Theme - Heartbeat Bar",Normal:te,Bottom:ae,None:oe,Timezone:ie,"Search Engine Visibility":"検索エンジンでの表示","Allow indexing":"インデックス作成を許可する","Discourage search engines from indexing site":"検索エンジンにインデックスさせないようにする","Change Password":"パスワード変更","Current Password":"現在のパスワード","New Password":"新しいパスワード","Repeat New Password":"確認のため新しいパスワードをもう一度","Update Password":"パスワードの更新","Disable Auth":"認証の無効化","Enable Auth":"認証の有効化",Logout:ne,Leave:re,"I understand, please disable":"理解した上で無効化する",Confirm:se,Yes:le,No:ce,Username:de,Password:pe,"Remember me":"パスワードを忘れた場合",Login:ue,"No Monitors, please":"監視がありません","add one":"add one","Notification Type":"通知タイプ",Email:ge,Test:me,"Certificate Info":"証明書情報","Resolver Server":"問い合わせ先DNSサーバ","Resource Record Type":"DNSレコード設定","Last Result":"最終結果","Create your admin account":"Adminアカウントの作成","Repeat Password":"パスワード確認",respTime:De,notAvailableShort:ye,Create:Se,clearEventsMsg:he,clearHeartbeatsMsg:Te,confirmClearStatisticsMsg:Pe,"Clear Data":"データを削除",Events:ke,Heartbeats:Ce,"Auto Get":"自動取得",enableDefaultNotificationDescription:we,"Default enabled":"デフォルトで有効にする","Also apply to existing monitors":"既存のモニターにも適用する",Export:Ae,Import:Me,backupDescription:fe,backupDescription2:Ie,backupDescription3:be,alertNoFile:Re,alertWrongFileType:ve,twoFAVerifyLabel:Ne,tokenValidSettingsMsg:Ue,confirmEnableTwoFAMsg:Le,confirmDisableTwoFAMsg:Ee,"Apply on all existing monitors":"既存のすべてのモニターに適用する","Verify Token":"認証する","Setup 2FA":"２段階認証の設定","Enable 2FA":"２段階認証を有効にする","Disable 2FA":"２段階認証を無効にする","2FA Settings":"２段階認証の設定","Two Factor Authentication":"２段階認証","Clear all statistics":"すべての記録を削除",retryCheckEverySecond:xe,importHandleDescription:He,confirmImportMsg:Ge,"Heartbeat Retry Interval":"異常検知後の再試行間隔","Import Backup":"バックアップのインポート","Export Backup":"バックアップのエクスポート","Skip existing":"既存のをスキップする",Overwrite:Oe,Options:Fe,"Keep both":"どちらも保持する",Tags:Be,"Add New below or Select...":"新規追加または選択…","Tag with this name already exist.":"この名前のタグはすでに存在しています。","Tag with this value already exist.":"この値のタグはすでに存在しています。",color:Ke,"value (optional)":"値 (optional)","Search...":"検索…","Avg. Ping":"平均Ping時間","Avg. Response":"平均応答時間","Entry Page":"エントリーページ",statusPageNothing:We,"No Services":"サービス無し","All Systems Operational":"すべてのサービスが稼働中","Partially Degraded Service":"部分的にサービスが停止中","Degraded Service":"サービスが停止中","Add Group":"グループの追加","Add a monitor":"監視の追加","Edit Status Page":"ステータスページ編集","Go to Dashboard":"ダッシュボード","Status Page":"ステータスページ","Status Pages":"ステータスページ","Shrink Database":"データベースの縮小",Start:Ve,Retry:ze,"Please read":"読んでください",Orange:Je,"Gateway Type":"ゲートウェイの種類",Game:Xe,Help:Qe,Maintenance:qe,resendDisabled:je,"Schedule maintenance":"メンテナンスのスケジュール","Affected Monitors":"影響を受けるモニター","Pick Affected Monitors...":"影響を受けるモニターを選択…","Start of maintenance":"メンテナンス開始","General Monitor Type":"汎用モニタータイプ",resendEveryXTimes:Ye,markdownSupported:Ze,"All Status Pages":"すべてのステータス ページ",Monitor:_e,"Resend Notification if Down X times consequently":"ダウンX回連続で通知再送","Push URL":"プッシュ URL",needPushEvery:$e,pushOptionalParams:et,"disableauth.message1":"<strong>認証を無効</strong>にしてもよろしいですか?","disableauth.message2":"これは、Cloudflare Access、Authelia、またはその他の認証メカニズムなど、Uptime Kuma の前に<strong>サードパーティ認証を実装するシナリオ向けに設計されています</strong>。","Please use this option carefully!":"このオプションは慎重に使用してください!","Primary Base URL":"プライマリ ベース URL",statusMaintenance:tt,"Passive Monitor Type":"パッシブモニタータイプ","Specific Monitor Type":"特定のモニターの種類",Security:at,"Steam API Key":"Steam API Key",Default:ot,Title:it,"No status pages":"ステータスページがありません",Proxy:"プロキシ","Date Created":"作成日","Content Type":"コンテンツタイプ",webhookAdditionalHeadersTitle:nt,"Server URL":"Server URL",Priority:rt,"Read more":"続きを読む","Show Tags":"タグを表示","Switch to Dark Theme":"ダークテーマに切り替える",Token:st,"Show URI":"URIを表示する",Gray:lt,Red:ct,Green:dt,Blue:pt,Indigo:ut,Purple:gt,Pink:mt,Required:Dt,"Select status pages...":"ステータスページを選択してください…",webhookAdditionalHeadersDesc:yt,"Webhook URL":"Webhook URL","Application Token":"Application Token",steamApiKeyDescription:St,"Monitor History":"監視履歴",clearDataOlderThan:ht,PasswordsDoNotMatch:Tt,"Current User":"現在のユーザー",topic:Pt,Info:kt,"Create Incident":"インシデントを作成",Content:Ct,"Please input title and content":"タイトルと内容を入力してください","Last Updated":"最終アップデート日時",Unpin:wt,"Switch to Light Theme":"ライトテーマに切り替える","Hide Tags":"タグを隠す",Description:At,"Untitled Group":"名前の無いグループ",Services:Mt,Discard:ft,Cancel:It,"Powered by":"Powered by",Customize:bt,"Custom Footer":"カスタムフッター","Custom CSS":"カスタム CSS",deleteStatusPageMsg:Rt,Proxies:vt,default:"デフォルト",enabled:Nt,setAsDefault:Ut,deleteProxyMsg:Lt,proxyDescription:Et,setAsDefaultProxyDescription:xt,"Remove Token":"Tokenを削除",Stop:Ht,"Add New Status Page":"新しいステータスページを追加",Next:Gt,"No Proxy":"プロキシなし",Authentication:Ot,"HTTP Basic Auth":"HTTPベーシック認証","New Status Page":"新しいステータスページ","Page Not Found":"ページが見つかりません","Reverse Proxy":"リバースプロキシ",Backup:Ft,About:Bt,cloudflareWebsite:Kt,"Don't know how to get the token? Please read the guide:":"トークンの取得方法が分かりませんか？ガイドをお読みください。",Custom:Wt,Created:Vt,"Resend Notification if Down X times consecutively":"X回連続でダウンしたら通知を再送する",webhookJsonDesc:zt,webhookFormDataDesc:Jt,appriseInstalled:Xt,emojiCheatSheet:Qt,Inactive:qt,defaultNotificationName:jt,"Post URL":"Post URL",Active:Yt,"Pick a RR-Type...":"RR-Typeを選択…","Pick Accepted Status Codes...":"正常なステータスコードを選択…",appriseNotInstalled:Zt,Method:_t,Body:$t,Headers:ea,PushUrl:ta,HeadersInvalidFormat:aa,BodyInvalidFormat:oa,records:ia,"One record":"レコード",topicExplanation:na,successMessage:ra,successMessageExplanation:sa,recent:la,Done:ca,"HTTP Options":"HTTPオプション",Style:da,info:pa,warning:ua,"Valid To:":"有効期限:","Days Remaining:":"残りの有効日数:","Issuer:":"発行者:","Fingerprint:":"フィンガープリント:","Domain Name Expiry Notification":"ドメイン名有効期限通知","Footer Text":"フッター文章","Show Powered By":"Powered Byを表示","Domain Names":"ドメイン名",signedInDisp:ga,RadiusSecret:ma,RadiusSecretDescription:Da,RadiusCalledStationId:ya,RadiusCallingStationId:Sa,"Subject:":"サブジェクト:",trustProxyDescription:ha,"Home Assistant URL":"ホームアシスタントURL",Examples:Ta,telegramMessageThreadID:Pa,wayToGetLineNotifyToken:ka,"Packet Size":"パケットサイズ","Bot Token":"ボットトークン","Chat ID":"チャットID",critical:Ca,signedInDispDisabled:wa,RadiusCalledStationIdDescription:Aa,telegramProtectContent:Ma,"YOUR BOT TOKEN HERE":"入手したボットトークン","API Key":"APIキー","Show update if available":"アップデートがあれば表示する","Using a Reverse Proxy?":"リバースプロキシを使用中ですか?","Go back to the previous page.":"前のページに戻る","Coming Soon":"近日公開予定",Workstation:fa,wayToGetTelegramToken:Ia,telegramMessageThreadIDDescription:ba,telegramProtectContentDescription:Ra,danger:va,error:Na,primary:Ua,light:La,dark:Ea,Post:xa,"No monitors available.":"監視対象がありません。","Add one":"追加","No Monitors":"監視対象なし",shrinkDatabaseDescription:Ha,enableProxyDescription:Ga,"Certificate Chain":"証明書チェーン",Valid:Oa,Invalid:Fa,User:Ba,Installed:Ka,"Not installed":"未インストール",Running:Wa,"Not running":"停止中",Slug:Va,"Accept characters:":"使用可能な文字:",startOrEndWithOnly:za,"No consecutive dashes":"連続したダッシュ記号は使用不可","The slug is already taken. Please choose another slug.":"指定されたスラグは既に使用されています。別のスラグを使用してください。",wayToGetCloudflaredURL:Ja,"Message:":"メッセージ:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"Cloudflare Tunnelを経由した接続が遮断される可能性があります。停止してもよろしいですか? 確認のため、現在のパスワードを入力してください。","HTTP Headers":"HTTPヘッダー","Trust Proxy":"信頼できるプロキシ","Other Software":"その他のソフトウェア","For example: nginx, Apache and Traefik.":"例: nginxやApache、Traefikなど",RadiusCallingStationIdDescription:Xa,"Certificate Expiry Notification":"証明書有効期限通知","API Username":"APIユーザー名","Also check beta release":"ベータ版も表示する","Check how to config it for WebSocket":"WebSocketの設定方法について","Steam Game Server":"Steamゲームサーバー","Most likely causes:":"最も考えられる原因:","There might be a typing error in the address.":"アドレスの入力ミスの可能性があります。","What you can try:":"対応方法:","Retype the address.":"アドレスを入力し直してください。","The resource is no longer available.":"存在しないページです。","Connection String":"接続文字列",Query:Qa,settingsCertificateExpiry:qa,certificationExpiryDescription:ja,"Setup Docker Host":"Docker ホストを設定","Connection Type":"接続タイプ","Docker Daemon":"Docker デーモン",deleteDockerHostMsg:Ya,socket:Za,tcp:_a,"Docker Container":"Docker コンテナー","Container Name / ID":"コンテナ名 / ID","Docker Host":"Docker ホスト","Docker Hosts":"Docker ホスト",Domain:$a,telegramSendSilently:eo,telegramSendSilentlyDescription:to,supportTelegramChatID:ao,wayToGetTelegramChatID:oo,chatIDNotFound:io,disableCloudflaredNoAuthMsg:no,"API Keys":"APIキー管理",Expiry:ro,"Expiry date":"有効期限","No API Keys":"API Keyがありません",deleteAPIKeyMsg:so,Generate:lo,pauseMaintenanceMsg:co,"maintenanceStatus-under-maintenance":"メンテナンス中",secureOptionNone:po,smtp:uo,"Bot Display Name":"BOTの表示名","Prefix Custom Message":"メッセージの先頭に送信する文章",endpoint:go,"Proxy Protocol":"Proxy Protocol","Google Analytics ID":"Google アナリティクス ID","Frontend Version do not match backend version!":"フロントエンドとバックエンドのバージョンが一致しません!",or:mo,"Frontend Version":"フロントエンドのバージョン",promosmsPassword:Do,"Notification Sound":"通知音","Clone Monitor":"監視の複製",Clone:yo,cloneOf:So,"Hello @everyone is...":"Hello {'@'}everyone is…","Icon URL":"アイコンURL",affectedStatusPages:ho,GoogleChat:To,pushyToken:Po,"SMS Type":"SMSタイプ","Proxy Server":"Proxy Server",smtpDkimDomain:ko,"Uptime Kuma URL":"Uptime Kuma URL","Channel Name":"チャンネル名",smtpDkimSettings:Co,"Server Address":"サーバーアドレス",strategyManual:wo,warningTimezone:Ao,weekdayShortMon:Mo,weekdayShortTue:fo,weekdayShortWed:Io,weekdayShortFri:bo,weekdayShortSat:Ro,weekdayShortSun:vo,dayOfWeek:No,dayOfMonth:Uo,"maintenanceStatus-inactive":"無効","maintenanceStatus-scheduled":"スケジュール済み","maintenanceStatus-ended":"終了済み","maintenanceStatus-unknown":"不明","Server Timezone":"サーバータイムゾーン",IconUrl:Lo,"Enable DNS Cache":"DNSキャッシュを有効にする",Enable:Eo,Disable:xo,"Schedule Maintenance":"スケジュールメンテナンス",loadingError:Ho,uninstall:Go,installing:Oo,"Ignore TLS Error":"TLSエラーを無視",smtpCC:Fo,secureOptionTLS:Bo,smtpBCC:Ko,"Discord Webhook URL":"Discord ウェブフック URL",wayToCheckSignalURL:Wo,Number:"Number","Line Developers Console":"Line Developers Console","Access Token":"アクセストークン","Channel access token":"チャンネルアクセストークン",enableGRPCTls:Vo,"Messaging API":"Messaging API",dnsPortDescription:zo,Device:Jo,"Event type:":"イベントタイプ:",here:Xo,weekdayShortThu:Qo,plugin:qo,"No Maintenance":"メンテナンスはありません",dnsCacheDescription:jo,uninstalling:Yo,confirmUninstallPlugin:Zo,wayToGetDiscordURL:_o,wayToGetTeamsURL:$o,wayToGetZohoCliqURL:ei,confirmDeleteTagMsg:ti,deleteMaintenanceMsg:ai,promosmsLogin:oi,pushyAPIKey:ii,"Message Title":"メッセージタイトル","Setup Proxy":"プロキシを設定する","Proxy server has authentication":"プロキシサーバーは認証が必要","Edit Tag":"タグを編集","Add API Key":"API Keyを追加",Expires:ni,disableAPIKeyMsg:ri,install:si,affectedMonitorsDescription:li,"default: notify all devices":"デフォルト：すべてのデバイスに通知する","Trigger type:":"トリガータイプ:","Event data:":"イベントデータ:",backupOutdatedWarning:ci,backupRecommend:di,recurringInterval:pi,Recurring:ui,lineDevConsoleTo:gi,"Basic Settings":"基本設定","User ID":"User ID",Android:mi,Huawei:Di,"Device Token":"デバイストークン",recurringIntervalMessage:yi,"Add New Tag":"新しいタグを追加",statusPageMaintenanceEndDate:Si})}}}));