import{J as ae,d as se,r,O as le,a as ne,o as f,I as w,j as s,k as P,aa as oe,e as l,h as n,p as x,t as d,b as $,a3 as F,a0 as ie,a4 as ce,a5 as de,V as L,$ as N,W as A,_ as re,a1 as ue,K as pe,L as _e,ab as me,M as ve,x as fe,y as be,ac as ge,z as xe}from"./index_c330695b.js";const h=ae.create({baseURL:"",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0}),J=b=>(fe("data-v-835b6faa"),b=b(),be(),b),he={class:"float-end",style:{position:"absolute",right:"20px",top:"-20px"}},ye={class:"d-flex"},we=J(()=>l("div",{class:"d-lg-flex"},[l("div",null,[l("h5",{class:"mb-0"},"Pengguna/Pegawai"),l("p",{class:"text-sm mb-0"},"-")]),l("div",{class:"ms-auto my-auto d-flex gap-3 mt-lg-0 mt-4 align-items-center d-none"},[l("a",{href:"#",class:"btn bg-gradient-primary btn-sm mb-0"}," +  New ")])],-1)),Ve={class:"text-sm-center text-end float-none float-sm-none"},ke=["item-id","onClick"],Ce=J(()=>l("i",{class:"fas fa-user-edit","aria-hidden":"true"},null,-1)),Be=[Ce],Ue={class:"d-flex px-2 py-1 gap-2"},Se={class:"d-flex flex-column justify-content-center"},Ie={class:"mb-0 text-primary"},Pe={class:"text-xs text-secondary mb-0"},$e={class:"d-flex px-2 py-1 gap-2"},Fe={class:"d-flex flex-column justify-content-center"},Le={class:"mb-0 text-xs"},Ne={class:"text-xs text-secondary mb-0"},Ae={class:"d-flex px-2 py-1 gap-2"},Je={class:"d-flex flex-column justify-content-center"},Re={class:"mb-0 text-xs"},Te={key:0,class:"text-xs text-secondary mb-0"},Ge=["title"],Ke={class:"sticky-footer"},Me=se({__name:"ListView",setup(b){const R=[{key:"name",class:"align-middle",thStyle:{width:"350px"}},{key:"account",label:"username & email",class:"align-middle",thStyle:{width:"250px"}},{key:"unit",label:"Unit Keja & Jabatan",class:"align-middle"},{key:"action",class:"align-middle text-center",thStyle:{width:"115px"}}],_=r(10),c=r({page:1,per_page:_.value,current_page:1,from:0,to:0,total:0}),V=r([]),k=r([]),C=r([]),T=t=>({id:t==null?void 0:t.id,name:t==null?void 0:t.name}),m=r(),G=t=>{var e;_.value=t,(e=m.value)==null||e.refresh()},K=t=>{var e;c.value.current_page=t,(e=m.value)==null||e.refresh()},M=t=>{if(!t)return;const e=t.trim().split(" ");return e.reduce((u,p,v)=>((v===0||v===e.length-1)&&(u=`${u}${p.charAt(0).toUpperCase()}`),u),"")},O=async t=>{const e={page:t.currentPage,per_page:_.value},{data:i}=await h.get("/api/users",{params:e});return c.value=i.meta,V.value=i.data,i.data},q=async()=>{const{data:t}=await F.apiClient.get("/api/teams").then(({status:e,data:i})=>({status:e,data:i}));C.value=t.data},D=async()=>{const{data:t}=await F.apiClient.get("/api/positions").then(({status:e,data:i})=>({status:e,data:i}));k.value=t.data};le(async()=>{q(),D()});const g=r(!1),B={name:"",number:void 0,position_id:void 0,current_team_id:void 0},o=ne({...B}),U=()=>{Object.assign(o,{},B),g.value=!1},E=()=>{o!=null&&o.id?h.put(`/api/users/${o.id}`,o).then(()=>{var t;U(),(t=m.value)==null||t.refresh()}):h.post("/api/users",o).then(()=>{var t;(t=m.value)==null||t.refresh()})},W=t=>{h.get(`/api/users/${t.id}`).then(({data:e})=>{Object.assign(o,e),g.value=!0})};return(t,e)=>{const i=ie,u=ce,p=de,v=L,S=N,X=A,j=re,I=ue,z=pe,H=_e,Q=N,y=L,Y=me,Z=A,ee=ve,te=ge;return f(),w(ee,{fluid:""},{default:s(()=>[g.value?P((f(),w(I,{key:0,class:"mb-4 mt-5"},{default:s(()=>[l("span",he,[n(i,{variant:"dark",onClick:U},{default:s(()=>[x("x")]),_:1})]),n(j,{class:"gap-3"},{default:s(()=>[n(X,null,{default:s(()=>[n(v,{md:"4"},{default:s(()=>[n(p,{label:"Nama:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[n(u,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=a=>o.name=a)},null,8,["modelValue"])]),_:1}),n(p,{label:"NIP:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[n(u,{modelValue:o.number,"onUpdate:modelValue":e[1]||(e[1]=a=>o.number=a)},null,8,["modelValue"])]),_:1})]),_:1}),n(v,{md:"8"},{default:s(()=>[n(p,{label:"Unit Kerja:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[n(S,{modelValue:o.current_team_id,"onUpdate:modelValue":e[2]||(e[2]=a=>o.current_team_id=a),options:C.value,"value-field":"id","text-field":"name"},null,8,["modelValue","options"])]),_:1}),n(p,{label:"Jabatan:","label-class":"mb-0 pb-1",class:"mb-3"},{default:s(()=>[n(S,{modelValue:o.position_id,"onUpdate:modelValue":e[3]||(e[3]=a=>o.position_id=a),options:k.value,"value-field":"id","text-field":"name"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),l("div",ye,[n(i,{variant:"primary",class:"ms-auto",onClick:E},{default:s(()=>[x(d(o!=null&&o.id?"Update":"Create"),1)]),_:1})])]),_:1})]),_:1},512)),[[oe,g.value]]):(f(),w(I,{key:1,"body-class":"p-0"},{header:s(()=>[we]),footer:s(()=>[l("div",Ke,[n(Z,{class:"align-items-center"},{default:s(()=>[n(y,{class:"col-auto"},{default:s(()=>[n(Q,{modelValue:_.value,"onUpdate:modelValue":e[4]||(e[4]=a=>_.value=a),options:[5,10,15,25,100],class:"me-3",onChange:G},null,8,["modelValue"])]),_:1}),n(y,null,{default:s(()=>[x(" Showing "+d(c.value.from)+" to "+d(c.value.to)+" of "+d(c.value.total)+" items ",1)]),_:1}),n(y,{md:"6",class:"align-right"},{default:s(()=>[n(Y,{modelValue:c.value.current_page,"onUpdate:modelValue":e[5]||(e[5]=a=>c.value.current_page=a),pills:"","total-rows":c.value.total,"per-page":c.value.per_page,"aria-controls":"table",class:"my-0 justify-content-end",onChange:K},null,8,["modelValue","total-rows","per-page"])]),_:1})]),_:1})])]),default:s(()=>[n(H,{id:"table",ref_key:"table",ref:m,items:V.value,provider:O,fields:R,hover:!0,"current-page":c.value.current_page,"table-busy":!1,"no-provider":[],"no-provider-paging":!1,tableClass:"text-xs w-100",small:!1,"show-empty":!0,align:"middle","table-classes":["text-xs"],responsive:!0,"tbody-tr-class":()=>"position-relative",stacked:"md"},{"cell(action)":s(({item:a})=>[l("div",Ve,[l("a",{href:"javascript:;",class:"badge badge-sm bg-gradient-warning text-xs mx-2",title:"Edit","item-id":`${a.id}`,onClick:Oe=>W(a)},Be,8,ke)])]),"cell(name)":s(({item:a})=>[l("div",Ue,[n(z,{text:M(a.name),rounded:"",variant:"light",class:"avatar avatar-md"},null,8,["text"]),l("div",Se,[l("h6",Ie,d(a.name),1),l("p",Pe,d(a.number),1)])])]),"cell(account)":s(({item:a})=>[l("div",$e,[l("div",Fe,[l("h6",Le,d(a.username),1),l("p",Ne,d(a.email),1)])])]),"cell(unit)":s(({item:a})=>[l("div",Ae,[l("div",Je,[l("h6",Re,d(T(a.current_team).name),1),a.position_id?(f(),$("p",Te,d(a.position),1)):P((f(),$("i",{key:1,class:"text-xs text-secondary mb-0 text-danger text-ellipsis cursor-pointer",title:`${a==null?void 0:a.position}`},[x(" Jabatan belum ditentukan. ")],8,Ge)),[[te,void 0,void 0,{hover:!0,top:!0}]])])])]),_:1},8,["items","current-page"])]),_:1}))]),_:1})}}});const De=xe(Me,[["__scopeId","data-v-835b6faa"]]);export{De as default};
