import{d as b,r as v,i as g,u as w,a as m,w as x,o as l,c as n,b as e,t as u,e as p,f as r,v as h,g as y,n as k,h as S,j as V,k as z,l as j,m as C,s as A,_ as E}from"./index_a8fcfeb5.js";const M={class:"main-content mt-0"},N={class:"page-header min-vh-100"},B={class:"container"},L={class:"row"},P={class:"col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"},R={class:"card card-plain"},T={class:"card-header pb-0 text-start"},U={class:"font-weight-bolder"},q={key:0,class:"mb-0 small"},D={class:"card-body"},H={role:"form","data-gtm-form-interact-id":"0"},I={class:"mb-3"},W=["disabled"],Y={class:"mb-3"},$=["disabled"],F={class:"form-check form-switch"},G=["disabled"],J=e("label",{class:"form-check-label",for:"rememberMe"},"Remember me",-1),K={class:"text-center"},O=["disabled"],Q={key:0,class:"fa fa-spin fa-spinner ml-auto"},X=e("div",{class:"card-footer text-center pt-0 px-lg-2 px-1"},null,-1),Z=V('<div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"><div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style="background-image:url(&#39;&#39;);background-size:cover;"><span class="mask bg-gradient-primary opacity-6"></span><h4 class="mt-5 text-white font-weight-bolder position-relative"> &quot;Attention is the new currency&quot; </h4><p class="text-white position-relative"> The more effortless the writing looks, the more effort the writer actually put into the process. </p></div></div>',1),ee=b({__name:"LoginView",setup(se){const i=v(g("authState",{authorized:!1,user:{}})),_=w(),t=m({email:"197306092009041001@acehprov.go.id",password:"password",remember:!1}),s=m(!1);x(i,d=>{d.authorized&&(window.location.href="/app/")});const f=async()=>{await _.dispatch("login",t.value),window.location.href="/app/"};return(d,o)=>(l(),n("main",M,[e("div",N,[e("div",B,[e("div",L,[e("div",P,[e("div",R,[e("div",T,[e("h4",U,u(i.authorized?"You're logged in ":"Sign In"),1),i.authorized?p("",!0):(l(),n("p",q," Enter your email/email and password to sign in "))]),e("div",D,[e("form",H,[e("div",I,[r(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>t.value.email=a),class:"form-control form-control-lg",placeholder:"email/Email","aria-label":"email/Email",disabled:s.value},null,8,W),[[h,t.value.email]])]),e("div",Y,[r(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=a=>t.value.password=a),class:"form-control form-control-lg",placeholder:"Password","aria-label":"Password",disabled:s.value},null,8,$),[[h,t.value.password]])]),e("div",F,[r(e("input",{class:"form-check-input",type:"checkbox",id:"rememberMe","onUpdate:modelValue":o[2]||(o[2]=a=>t.value.remember=a),"data-gtm-form-interact-field-id":"0",disabled:s.value},null,8,G),[[y,t.value.remember]]),J]),e("div",K,[e("button",{type:"button",class:k(["btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0 align-items-center justify-content-between px-4",{"d-flex text-white":s.value}]),disabled:s.value,onClick:f},[S(u(s.value?"Processing...":"Sign in")+" ",1),s.value?(l(),n("i",Q)):p("",!0)],10,O)])])]),X])]),Z])])])]))}}),te=z({history:j("/auth"),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:ee,meta:{titte:"Login"}},{path:"/:catchAll(.*)",redirect:"/login"}]}),c=C(E);c.use(te);c.use(A);c.mount("#app");
