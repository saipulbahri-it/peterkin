import{J as ne,d as le,r,O as oe,a as ie,o as f,I as V,j as s,k as $,ab as ce,e as n,h as l,p as b,t as d,b as F,a3 as L,a0 as de,a4 as re,a5 as ue,V as N,$ as A,W as J,_ as pe,a1 as _e,K as me,L as ve,ac as fe,M as ge,x as xe,y as be,ad as he,z as ye}from"./index_549e0684.js";const h=ne.create({baseURL:"",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0}),R=g=>(xe("data-v-2546a924"),g=g(),be(),g),we={class:"float-end",style:{position:"absolute",right:"20px",top:"-20px"}},Ve={class:"d-flex"},ke=R(()=>n("div",{class:"d-lg-flex"},[n("div",null,[n("h5",{class:"mb-0"},"Pengguna/Pegawai"),n("p",{class:"text-sm mb-0"},"-")]),n("div",{class:"ms-auto my-auto d-flex gap-3 mt-lg-0 mt-4 align-items-center d-none"},[n("a",{href:"#",class:"btn bg-gradient-primary btn-sm mb-0"}," +  New ")])],-1)),Ce={class:"text-sm-center text-end float-none float-sm-none"},Be=["item-id","onClick"],Ue=R(()=>n("i",{class:"fas fa-user-edit","aria-hidden":"true"},null,-1)),Se=[Ue],Pe={class:"d-flex px-2 py-1 gap-2"},Ie={class:"d-flex flex-column justify-content-center"},$e={class:"mb-0 text-primary"},Fe={class:"text-xs text-secondary mb-0"},Le={class:"d-flex px-2 py-1 gap-2"},Ne={class:"d-flex flex-column justify-content-center"},Ae={class:"mb-0 text-xs"},Je={class:"text-xs text-secondary mb-0"},Re={class:"d-flex px-2 py-1 gap-2"},Te={class:"d-flex flex-column justify-content-center"},Ge={class:"mb-0 text-xs"},Ke={key:0,class:"text-xs text-secondary mb-0"},Me=["title"],Oe={class:"sticky-footer"},qe=le({__name:"ListView",setup(g){const T=[{key:"name",class:"align-middle",thStyle:{width:"350px"}},{key:"account",label:"username & email",class:"align-middle",thStyle:{width:"250px"}},{key:"unit",label:"Unit Keja & Jabatan",class:"align-middle"},{key:"action",class:"align-middle text-center",thStyle:{width:"115px"}}],_=r(10),c=r({page:1,per_page:_.value,current_page:1,from:0,to:0,total:0}),k=r([]),C=r([]),B=r([]),G=e=>({id:e==null?void 0:e.id,name:e==null?void 0:e.name}),m=r(),K=e=>{var t;_.value=e,(t=m.value)==null||t.refresh()},M=e=>{var t;c.value.current_page=e,(t=m.value)==null||t.refresh()},O=e=>{if(!e)return;const t=e.trim().split(" ");return t.reduce((u,p,v)=>((v===0||v===t.length-1)&&(u=`${u}${p.charAt(0).toUpperCase()}`),u),"")},q=async e=>{const t={page:e.currentPage,per_page:_.value},{data:i}=await h.get("/api/users",{params:t});return c.value=i.meta,k.value=i.data,i.data},D=async()=>{const{data:e}=await L.apiClient.get("/api/teams").then(({status:t,data:i})=>({status:t,data:i}));B.value=e.data},E=async()=>{const{data:e}=await L.apiClient.get("/api/positions").then(({status:t,data:i})=>({status:t,data:i}));C.value=e.data};oe(async()=>{D(),E()});const x=r(!1),U={name:"",number:void 0,position_id:void 0,current_team_id:void 0},o=ie({...U}),S=()=>{Object.assign(o,{},U),x.value=!1},W=()=>{o!=null&&o.id?h.put(`/api/users/${o.id}`,o).then(()=>{var e;S(),(e=m.value)==null||e.refresh()}):h.post("/api/users",o).then(()=>{var e;(e=m.value)==null||e.refresh()})},X=e=>{h.get(`/api/users/${e.id}`).then(({data:t})=>{Object.assign(o,t),x.value=!0})},j=e=>e;return(e,t)=>{const i=de,u=re,p=ue,v=N,P=A,z=J,H=pe,I=_e,Q=me,Y=ve,Z=A,y=N,ee=fe,te=J,ae=ge,se=he;return f(),V(ae,{fluid:""},{default:s(()=>[x.value?$((f(),V(I,{key:0,class:"mb-4 mt-5"},{default:s(()=>[n("span",we,[l(i,{variant:"dark",onClick:S},{default:s(()=>[b("x")]),_:1})]),l(H,{class:"gap-3"},{default:s(()=>[l(z,null,{default:s(()=>[l(v,{md:"4"},{default:s(()=>[l(p,{label:"Nama:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[l(u,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.name=a)},null,8,["modelValue"])]),_:1}),l(p,{label:"NIP:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[l(u,{modelValue:o.number,"onUpdate:modelValue":t[1]||(t[1]=a=>o.number=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(v,{md:"8"},{default:s(()=>[l(p,{label:"Unit Kerja:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[l(P,{modelValue:o.current_team_id,"onUpdate:modelValue":t[2]||(t[2]=a=>o.current_team_id=a),options:B.value,"value-field":"id","text-field":"name"},null,8,["modelValue","options"])]),_:1}),l(p,{label:"Jabatan:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[l(P,{modelValue:o.position_id,"onUpdate:modelValue":t[3]||(t[3]=a=>o.position_id=a),options:C.value,"value-field":"id","text-field":"name"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),n("div",Ve,[l(i,{variant:"primary",class:"ms-auto",onClick:W},{default:s(()=>[b(d(o!=null&&o.id?"Update":"Create"),1)]),_:1})])]),_:1})]),_:1},512)),[[ce,x.value]]):(f(),V(I,{key:1,"body-class":"p-0"},{header:s(()=>[ke]),footer:s(()=>[n("div",Oe,[l(te,{class:"align-items-center"},{default:s(()=>[l(y,{class:"col-auto"},{default:s(()=>[l(Z,{modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=a=>_.value=a),options:[5,10,15,25,100],class:"me-3",onChange:K},null,8,["modelValue"])]),_:1}),l(y,null,{default:s(()=>[b(" Showing "+d(c.value.from)+" to "+d(c.value.to)+" of "+d(c.value.total)+" items ",1)]),_:1}),l(y,{md:"6",class:"align-right"},{default:s(()=>[l(ee,{modelValue:c.value.current_page,"onUpdate:modelValue":t[5]||(t[5]=a=>c.value.current_page=a),pills:"","total-rows":c.value.total,"per-page":c.value.per_page,"aria-controls":"table",class:"my-0 justify-content-end",onChange:M},null,8,["modelValue","total-rows","per-page"])]),_:1})]),_:1})])]),default:s(()=>[l(Y,{id:"table",ref_key:"table",ref:m,items:k.value,provider:q,fields:T,hover:!0,"current-page":c.value.current_page,"table-busy":!1,"no-provider":[],"no-provider-paging":!1,tableClass:"text-xs w-100",small:!1,"show-empty":!0,align:"middle","table-classes":["text-xs"],responsive:!0,stacked:"md"},{"cell(action)":s(({item:a})=>[n("div",Ce,[n("a",{href:"javascript:;",class:"badge badge-sm bg-gradient-warning text-xs mx-2",title:"Edit","item-id":`${a.id}`,onClick:w=>X(a)},Se,8,Be)])]),"cell(name)":s(({item:a})=>[n("div",Pe,[l(Q,{text:O(a.name),rounded:"",variant:"light",class:"avatar avatar-md"},null,8,["text"]),n("div",Ie,[n("h6",$e,d(a.name),1),n("p",Fe,d(a.number),1)])])]),"cell(account)":s(({item:a})=>[n("div",Le,[n("div",Ne,[n("h6",Ae,d(a.username),1),n("p",Je,d(a.email),1)])])]),"cell(unit)":s(({item:a})=>{var w;return[n("div",Re,[n("div",Te,[n("h6",Ge,d(G(a.current_team).name),1),a.current_position?(f(),F("p",Ke,d((w=j(a.current_position))==null?void 0:w.name),1)):$((f(),F("i",{key:1,class:"text-xxs text-secondary mb-0 text-danger text-ellipsis cursor-pointer",title:`${a==null?void 0:a.position}`},[b(" Jabatan belum ditentukan. ")],8,Me)),[[se,void 0,void 0,{hover:!0,top:!0}]])])])]}),_:1},8,["items","current-page"])]),_:1}))]),_:1})}}});const Ee=ye(qe,[["__scopeId","data-v-2546a924"]]);export{Ee as default};
