import{_ as g,r as d,o as a,c as l,e as $,k as v,f as i,a as u,N,t as o,F as _,g as b,b as D,p as x,l as k}from"./index-093df667.js";const E={props:{modelValue:{type:String,default:""},enabled:{type:Boolean,default:!0},placeholder:{type:String,default:""},icon:{type:String,required:!0},type:{type:String,default:"text"},action:{type:Function,default:()=>{}},actionAriaLabel:{type:String,required:!0}},emits:["update:modelValue"],computed:{model:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}},I={class:"input-group mb-3"},S=["type","placeholder","disabled"],w=["aria-label"];function V(t,e,s,y,p,r){const f=d("font-awesome-icon");return a(),l("div",I,[$(i("input",{ref:"input","onUpdate:modelValue":e[0]||(e[0]=c=>r.model=c),class:"form-control",type:s.type,placeholder:s.placeholder,disabled:!s.enabled},null,8,S),[[v,r.model]]),i("button",{type:"button",class:"btn btn-outline-primary","aria-label":s.actionAriaLabel,onClick:e[1]||(e[1]=c=>s.action())},[u(f,{icon:s.icon},null,8,["icon"])],8,w)])}const C=g(E,[["render",V]]);const L={components:{NotificationDialog:N,ActionInput:C},data(){return{expiryNotifInput:null}},computed:{settings(){return this.$parent.$parent.$parent.settings},saveSettings(){return this.$parent.$parent.$parent.saveSettings},settingsLoaded(){return this.$parent.$parent.$parent.settingsLoaded}},methods:{removeExpiryNotifDay(t){this.settings.tlsExpiryNotifyDays=this.settings.tlsExpiryNotifyDays.filter(e=>e!==t)},addExpiryNotifDay(t){if(t!=null&&t!==""){const e=parseInt(t);e!=null&&!isNaN(e)&&e>0&&(this.settings.tlsExpiryNotifyDays.includes(e)||(this.settings.tlsExpiryNotifyDays.push(parseInt(t)),this.settings.tlsExpiryNotifyDays.sort((s,y)=>s-y),this.expiryNotifInput=null))}}}},A=t=>(x("data-v-95e6423f"),t=t(),k(),t),B={class:"notification-list my-4"},F={key:0},q={key:1},U={class:"list-group mb-3",style:{"border-radius":"1rem"}},j=A(()=>i("br",null,null,-1)),M=["onClick"],R={class:"my-4 pt-4"},T={class:"my-4 settings-subheading"},z={class:"mt-1 mb-3 ps-2 cert-exp-days col-12 col-xl-6"},G=["aria-label","onClick"],H={class:"col-12 col-xl-6"};function J(t,e,s,y,p,r){const f=d("font-awesome-icon"),c=d("ActionInput"),h=d("NotificationDialog");return a(),l("div",null,[i("div",B,[t.$root.notificationList.length===0?(a(),l("p",F,o(t.$t("Not available, please setup.")),1)):(a(),l("p",q,o(t.$t("notificationDescription")),1)),i("ul",U,[(a(!0),l(_,null,b(t.$root.notificationList,(n,m)=>(a(),l("li",{key:m,class:"list-group-item"},[D(o(n.name),1),j,i("a",{href:"#",onClick:K=>t.$refs.notificationDialog.show(n.id)},o(t.$t("Edit")),9,M)]))),128))]),i("button",{class:"btn btn-primary me-2",type:"button",onClick:e[0]||(e[0]=n=>t.$refs.notificationDialog.show())},o(t.$t("Setup Notification")),1)]),i("div",R,[i("h5",T,o(t.$t("settingsCertificateExpiry")),1),i("p",null,o(t.$t("certificationExpiryDescription")),1),i("p",null,o(t.$t("notificationDescription")),1),i("div",z,[(a(!0),l(_,null,b(r.settings.tlsExpiryNotifyDays,n=>(a(),l("div",{key:n,class:"d-flex align-items-center justify-content-between cert-exp-day-row py-2"},[i("span",null,o(n)+" "+o(t.$tc("day",n)),1),i("button",{type:"button",class:"btn-rm-expiry btn btn-outline-danger ms-2 py-1","aria-label":t.$t("Remove the expiry notification"),onClick:m=>r.removeExpiryNotifDay(n)},[u(f,{icon:"times"})],8,G)]))),128))]),i("div",H,[u(c,{modelValue:p.expiryNotifInput,"onUpdate:modelValue":e[1]||(e[1]=n=>p.expiryNotifInput=n),type:"number",placeholder:t.$t("day"),icon:"plus",action:()=>r.addExpiryNotifDay(p.expiryNotifInput),"action-aria-label":t.$t("Add a new expiry notification day")},null,8,["modelValue","placeholder","action","action-aria-label"])]),i("div",null,[i("button",{class:"btn btn-primary",type:"button",onClick:e[2]||(e[2]=n=>r.saveSettings())},o(t.$t("Save")),1)])]),u(h,{ref:"notificationDialog"},null,512)])}const P=g(L,[["render",J],["__scopeId","data-v-95e6423f"]]);export{P as default};
