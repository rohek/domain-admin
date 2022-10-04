import{_ as b,r as n,o as g,c as x,b as e,d as s,e as d,t as C,f,n as S,u as h,q as D}from"./index.84455971.js";const I={};function V(){let o=URL.createObjectURL(new Blob),t=o.toString();return URL.revokeObjectURL(o),t.substring(t.lastIndexOf("/")+1)}const w={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:I,form:{username:"",avatar_url:"",before_expire_days:"",email_list:""}}},computed:{},methods:{async getData(){const o=await this.$http.getUserInfo();if(o.code!=0)return;let t=o.data;this.form.username=t.username,this.form.avatar_url=t.avatar_url,this.form.before_expire_days=t.before_expire_days,this.form.email_list=t.email_list.join(`
`)},handleCancel(){this.$emit("on-cancel")},handleRandomAvatar(){let o=V();this.form.avatar_url="https://api.multiavatar.com/"+o+".png?apikey=mXMn18VQJxoH0P"},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),t={avatar_url:this.form.avatar_url,before_expire_days:this.form.before_expire_days,email_list:this.form.email_list.split(`
`)};console.log(t);const i=await this.$http.updateUserInfo(t);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg),this.$nextTick(()=>{o.close()})}},created(){this.getData()}},R=d("img",{src:"https://api.multiavatar.com/domain-admin.png"},null,-1),L={class:"text-center"};function O(o,t,i,y,a,l){const r=n("el-form-item"),c=n("el-avatar"),m=n("Refresh"),u=n("el-icon"),_=n("el-button"),v=n("el-input-number"),$=n("el-input"),k=n("el-form"),U=n("Select");return g(),x("div",null,[e(k,{ref:"form",model:a.form,rules:a.rules,"label-width":"160px"},{default:s(()=>[e(r,{label:"\u7528\u6237\u540D",prop:"username"},{default:s(()=>[d("span",null,C(a.form.username),1)]),_:1}),e(r,{label:"\u5934\u50CF",prop:"avatar_url"},{default:s(()=>[e(c,{src:a.form.avatar_url},{default:s(()=>[R]),_:1},8,["src"]),e(_,{class:"ml-md",onClick:l.handleRandomAvatar},{default:s(()=>[e(u,null,{default:s(()=>[e(m)]),_:1}),f("\u968F\u673A\u83B7\u53D6")]),_:1},8,["onClick"])]),_:1}),e(r,{label:"\u8FC7\u671F\u524D\u591A\u5C11\u5929\u63D0\u9192",prop:"before_expire_days"},{default:s(()=>[e(v,{modelValue:a.form.before_expire_days,"onUpdate:modelValue":t[0]||(t[0]=p=>a.form.before_expire_days=p),min:0,placeholder:"\u8BF7\u8F93\u5165\u8FC7\u671F\u524D\u591A\u5C11\u5929\u63D0\u9192"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u90AE\u7BB1\u5217\u8868",prop:"email_list"},{default:s(()=>[e($,{type:"textarea",rows:5,modelValue:a.form.email_list,"onUpdate:modelValue":t[1]||(t[1]=p=>a.form.email_list=p),placeholder:"\u90AE\u7BB1\u5217\u8868\uFF0C\u6BCF\u884C\u4E00\u4E2A"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),d("div",L,[e(_,{type:"primary",onClick:l.handleSubmit},{default:s(()=>[e(u,null,{default:s(()=>[e(U)]),_:1}),f("\u4FDD \u5B58")]),_:1},8,["onClick"])])])}const P=b(w,[["render",O]]),j={name:"user-edit",props:{},components:{DataForm:P},data(){return{id:null}},computed:{...S(h,{userInfo:"userInfo"})},methods:{...D(h,{updateUserInfo:"updateUserInfo"}),handleSuccess(){this.updateUserInfo()},async sendDomainInfoListEmail(){let o=this.$loading({fullscreen:!0});try{(await this.$http.sendDomainInfoListEmail()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{o.close()})}},async checkDomainCert(){let o=this.$loading({fullscreen:!0});try{(await this.$http.checkDomainCert()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{o.close()})}}},created(){this.id=this.$route.query.id}},B={class:"app-container"},E={class:"flex"};function T(o,t,i,y,a,l){const r=n("Position"),c=n("el-icon"),m=n("el-button"),u=n("Promotion"),_=n("DataForm");return g(),x("div",B,[d("div",E,[e(m,{class:"margin-left--auto",onClick:l.sendDomainInfoListEmail},{default:s(()=>[e(c,null,{default:s(()=>[e(r)]),_:1}),f("\u53D1\u9001\u90AE\u4EF6")]),_:1},8,["onClick"]),e(m,{class:"margin-left--auto",onClick:l.checkDomainCert},{default:s(()=>[e(c,null,{default:s(()=>[e(u)]),_:1}),f("\u8BC1\u4E66\u68C0\u67E5")]),_:1},8,["onClick"])]),e(_,{class:"mt-md",onOnSuccess:l.handleSuccess},null,8,["onOnSuccess"])])}const F=b(j,[["render",T]]);export{F as default};
