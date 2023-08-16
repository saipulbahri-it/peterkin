import{B,z as S,Z as E,E as N,c as $,h as L,g as z,Q as D}from"./app-965da76e.js";import{f as U,k as g,o as Q,p as T,q as s,K as l,a as t,D as o,T as Z,G as q,z as r,a1 as A,a4 as G,a5 as K,_ as R}from"./index_79acbd29.js";const c=f=>(G("data-v-011ef1ac"),f=f(),K(),f),F={class:"d-lg-flex"},H=c(()=>t("div",null,[t("h5",{class:"mb-0"},"List Pegawai"),t("p",{class:"text-sm mb-0"},"-")],-1)),J={class:"ms-auto my-auto d-flex gap-3 mt-lg-0 mt-4 align-items-center"},M=c(()=>t("a",{href:"#",class:"btn bg-gradient-primary btn-sm mb-0"}," +  New ",-1)),O=c(()=>t("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-0","data-bs-toggle":"modal","data-bs-target":"#import"}," Import ",-1)),W=c(()=>t("div",{class:"text-center text-danger my-2"}," ItemsProvider error ",-1)),X={class:"text-sm"},Y=["item-id"],tt=c(()=>t("i",{class:"fas fa-eye text-secondary","aria-hidden":"true"},null,-1)),et=[tt],at=["item-id"],st=c(()=>t("i",{class:"fas fa-user-edit text-secondary","aria-hidden":"true"},null,-1)),ot=[st],nt=["item-id"],lt=c(()=>t("i",{class:"fas fa-trash text-secondary","aria-hidden":"true"},null,-1)),it=[lt],rt={class:"d-flex px-2 py-1 gap-2"},ct={class:"d-flex flex-column justify-content-center"},dt={class:"mb-0 text-xs"},_t={class:"text-xs text-secondary mb-0"},pt={class:"d-flex px-2 py-1 gap-2"},ut={class:"d-flex flex-column justify-content-center"},mt={class:"mb-0 text-xs"},gt={class:"text-xs text-secondary mb-0"},ft={class:"sticky-footer"},bt=U({__name:"ListView",setup(f){let y=[{key:"name",class:"align-middle"},{key:"account",label:"username & email",class:"align-middle"},{key:"position",label:"jabatan",class:"align-middle"},{key:"action",class:"align-middle text-center",thStyle:{width:"115px"}}],n=g({page:1,per_page:15,current_page:1,from:0,to:0,total:0}),x=g([]),d=g(15);const b=g(),w=i=>{var e;d.value=i,(e=b.value)==null||e.refresh()},P=i=>{var e;n.value.current_page=i,(e=b.value)==null||e.refresh()},V=i=>{const e=i.trim().split(" ");return e.reduce((p,u,m)=>((m===0||m===e.length-1)&&(p=`${p}${u.charAt(0).toUpperCase()}`),p),"")},v=async function(i){let e={page:i.currentPage,per_page:d.value};try{const{data:_,status:p}=await A.get("/api/user",{params:e});let u=_;return n.value=u.meta,x.value=u.data,_.data}catch{return[]}};v({currentPage:1});const h=g(!1);return(i,e)=>{const _=B,p=S,u=E,m=N,k=$,C=L,I=z,j=D;return Q(),T(j,{fluid:""},{default:s(()=>[l(I,{bodyClass:"p-0"},{header:s(()=>[t("div",F,[H,t("div",J,[M,O,t("button",{class:"btn btn-outline-primary btn-sm export btn-sm mb-0","data-type":"csv",type:"button",name:"button",onClick:e[0]||(e[0]=a=>h.value=!h.value)}," Export ")])])]),footer:s(()=>[t("div",ft,[l(C,{class:"align-items-center"},{default:s(()=>[l(m,{class:"col-auto"},{default:s(()=>[l(u,{modelValue:o(d),"onUpdate:modelValue":e[1]||(e[1]=a=>Z(d)?d.value=a:d=a),options:[5,10,15,25],class:"me-3",onChange:w},null,8,["modelValue"])]),_:1}),l(m,null,{default:s(()=>[q(" Showing "+r(o(n).from)+" to "+r(o(n).to)+" of "+r(o(n).total)+" items ",1)]),_:1}),l(m,{md:"6",class:"align-right"},{default:s(()=>[l(k,{modelValue:o(n).current_page,"onUpdate:modelValue":e[2]||(e[2]=a=>o(n).current_page=a),pills:"","total-rows":o(n).total,"per-page":o(n).per_page,end:!0,"aria-controls":"table",class:"my-0 justify-content-end",align:"right",onChange:P},null,8,["modelValue","total-rows","per-page"])]),_:1})]),_:1})])]),default:s(()=>[l(p,{ref_key:"table",ref:b,id:"table",items:o(x),provider:v,fields:o(y),busy:h.value,"current-page":o(n).current_page,"table-busy":!1,xperPage:"perPage",noProviderPaging:!1,tableClass:"text-xs",small:!0,responsive:"",showEmpty:"",align:"middle"},{empty:s(()=>[W]),"cell(action)":s(({item:a})=>[t("div",X,[t("a",{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-original-title":"Preview","item-id":`${a.id}`},et,8,Y),t("a",{href:"javascript:;",class:"mx-3","data-bs-toggle":"tooltip","data-bs-original-title":"Edit","item-id":`${a.id}`},ot,8,at),t("a",{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-original-title":"Delete","item-id":`${a.id}`},it,8,nt)])]),"cell(name)":s(({item:a})=>[t("div",rt,[l(_,{text:V(a.name),rounded:"",variant:"light",class:"avatar avatar-sm"},null,8,["text"]),t("div",ct,[t("h6",dt,r(a.name),1),t("p",_t,r(a.number),1)])])]),"cell(account)":s(({item:a})=>[t("div",pt,[t("div",ut,[t("h6",mt,r(a.username),1),t("p",gt,r(a.email),1)])])]),_:1},8,["items","fields","busy","current-page"])]),_:1})]),_:1})}}});const vt=R(bt,[["__scopeId","data-v-011ef1ac"]]);export{vt as default};
