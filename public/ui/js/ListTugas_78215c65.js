import{d as rs,G as _s,i as ps,r as f,P as ms,a as bs,a3 as hs,a4 as gs,a5 as P,o as i,b as d,h as o,j as l,e as s,t as m,f as T,p as c,I as Q,g as k,F as I,l as q,k as vs,a6 as fs,a7 as N,J as C,a8 as ks,a9 as W,a1 as xs,N as ys,a0 as ws,aa as Ts,ab as Cs,ac as Vs,ad as js,M as Bs,n as Ds,ae as Ss,V as $s}from"./index_953b622b.js";const Fs={class:"col-12 gap-3 d-flex"},Os={class:"mb-4 text-white"},Us={key:0,class:"ms-auto d-flex gap-3"},Ls=s("i",{class:"fas fa-plus","aria-hidden":"true"},null,-1),Ps={class:"row my-4"},Is={class:"col-12"},Ns={class:"float-end",style:{position:"absolute",right:"10px",top:"-20px"}},As={class:"pt-3"},Js={key:0},Gs={key:0,class:"text-xs list-group list-group-numbered"},Rs={"data-v-1986abaa":"",class:"list-group-item d-flex align-items-start py-2 pe-2"},zs={"data-v-1986abaa":"",class:"ms-2 w-100 d-flex"},Es={"data-v-1986abaa":"",class:"fw-bold"},Ms={key:1,class:"alert alert-warning"},Hs={key:1,class:"alert alert-warning text-white"},Ks={key:1,class:"card mb-4"},Qs={class:"card-body p-3"},qs={class:"float-end",style:{position:"absolute",right:"10px",top:"-20px"}},Ws={key:0},Xs={key:1},Ys={key:0,class:"mb-4 d-block"},Zs={class:"d-flex"},sa={class:"card"},aa={key:0,class:"card-header d-none"},ta=s("div",{class:"nav-wrapper position-relative end-0"},[s("ul",{class:"nav nav-pills nav-fill p-1",role:"tablist"},[s("li",{class:"nav-item"},[s("a",{class:"nav-link mb-0 px-0 py-1 active","data-bs-toggle":"tab",href:"#",role:"tab","aria-controls":"profile","aria-selected":"true"}," Tugas Saya ")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link mb-0 px-0 py-1","data-bs-toggle":"tab",href:"#assignment",role:"tab","aria-controls":"dashboard","aria-selected":"false"}," Tugas Bawahan ")])])],-1),ea=[ta],oa={class:"card-body p-3"},na={class:"list-group list-group-flush list-group-numbered-","data-toggle":"checklist"},la={class:"list-group-item border-0 flex-column align-items-start px-0 py-0 mb-3"},ia={class:"checklist-item checklist-item-warning ps-0 ms-0"},da=s("i",{class:"fa fs-6 fa-ellipsis-v",title:"...","aria-hidden":"true"},null,-1),ua=s("i",{class:"fa fa-edit me-1"},null,-1),ca=s("i",{class:"fa fa-trash me-1"},null,-1),ra={class:"d-flex align-items-center"},_a={class:"mb-0 text-dark font-weight-bold text-sm"},pa={class:"text-xxs mb-1"},ma={class:"d-flex justify-content-between align-items-center mt-0"},ba=s("span",{class:"text-xs me-1 text-secondary font-weight-bold"},"Sumber : ",-1),ha={class:"text-xs font-weight-bolder"},ga={key:0,class:"mx-auto"},va=s("p",{class:"text-xs mb-0 text-secondary font-weight-bold"},"Assigned To:",-1),fa={class:"text-xs font-weight-bolder"},ka={class:"ms-auto text-end"},xa=s("span",{class:"text-xs text-secondary font-weight-bold me-1"}," Status : ",-1),ya=s("hr",{class:"horizontal dark mt-4 mb-0"},null,-1),wa={key:0,class:"list-group-item border-0 flex-column align-items-start ps-0 py-0 mb-3"},Ta=s("strong",null,"Tupoksi",-1),Ca=s("br",null,null,-1),Va=s("div",{class:"fixed-plugin"},[s("a",{class:"fixed-plugin-button text-dark position-fixed px-3 py-2"},[s("i",{class:"fa fa-cog py-2","aria-hidden":"true"})])],-1),$a=rs({__name:"ListTugas",setup(ja){var G;const p=(G=_s(ps("user")))==null?void 0:G.value,r=f(!1),b=f(!1),$=f(!1),F=f([]),A=f([]),V=f([]),y=async()=>{const{status:n,data:e}=await N.apiClient.get("/api/task").then(({status:_,data:h})=>({status:_,data:h}));F.value=e.data},O=async()=>{const{status:n,data:e}=await N.apiClient.get("/api/teamwork/owned-teams/member").then(({status:_,data:h})=>({status:_,data:h}));A.value=e},X=async n=>{const{status:e,summary_tasks:_,job_descs:h}=await N.apiClient.get(`/api/position/${n}`).then(({status:x,data:B})=>{let D=B.job_descs,g=B.summary_tasks;return{status:x,summary_tasks:g,job_descs:D}});V.value=h};ms(()=>{y()});const u={id:void 0,job_desc_id:void 0,title:"",description:"",task_source:""},a=bs({...u}),J=()=>{$.value=!1,r.value=!0,b.value=!r.value,u.job_desc_id=void 0,u.description="",u.task_source="Lainnya",u.assigned_to=null,Object.assign(a,{},u),j(),O()},Y=()=>{$.value=!0,r.value=!0,b.value=!r.value,u.job_desc_id=void 0,u.description="",u.task_source="Atasan",Object.assign(a,{},u),j(),O()},j=()=>{p!=null&&p.position_id&&X(p==null?void 0:p.position_id)},Z=n=>{b.value=!(r.value=!0),u.job_desc_id=n.id,u.description=n.title,u.task_source="Tupoksi",Object.assign(a,{},u)},ss=()=>{b.value=!1},U=()=>{u.assigned_to=null,Object.assign(a,{},u),r.value=!1},as=()=>{a!=null&&a.id?C.put(`/api/task/${a.id}`,a).then(({status:n,data:e})=>{U(),y()}):C.post("/api/task",a).then(({status:n,data:e})=>{U(),y()})},ts=n=>{j(),C.get(`/api/task/${n.id}`).then(({status:e,data:_})=>{Object.assign(a,_),r.value=!0,b.value=!1})},L=(n,e)=>{C.post(`/api/task/${n.id}/setStatus`,{task_status:e}).then(({status:_,data:h})=>{y()})},es=n=>{C.delete(`/api/task/${n.id}`).then(({status:e,data:_})=>{y()})},os=n=>{let e;switch(n){case"Done":e="bg-gradient-success";break;case"In-Progress":e="bg-gradient-warning";break;case"To-Do":e="bg-gradient-secondary";break;default:e="bg-gradient-dark";break}return e},w=hs(),ns=gs(),ls=async()=>{r.value=!1,b.value=!1};return P(b,n=>{n===!0?w.push({hash:"#/form"}):!n&&r.value?w.push({hash:"#/form"}):w.push({hash:""})}),P(r,n=>{n===!0?w.push({hash:"#/form"}):w.push({hash:""})}),P(()=>ns.hash,async n=>{n||ls()}),f(!1),(n,e)=>{const _=ks,h=W,x=xs,B=ys,D=ws,g=Ts,R=Cs,z=Vs,is=js,ds=Ss,E=$s,us=W,cs=Bs;return i(),d(I,null,[o(cs,{fluid:"xl"},{default:l(()=>{var M,H,K;return[s("div",Fs,[s("h3",Os,m(r.value?a!=null&&a.id?"Edit Tugas":"Buat Tugas Baru":"Daftar Tugas"),1),r.value?k("",!0):(i(),d("span",Us,[(M=T(p))!=null&&M.isTeamOwner?(i(),Q(h,{key:1,text:"Buat Tugas",variant:"primary",class:"d-block"},{default:l(()=>[o(_,{onClick:J},{default:l(()=>[c("Tugas Saya")]),_:1}),o(_,{onClick:Y},{default:l(()=>[c("Tugas Bawahan")]),_:1})]),_:1})):(i(),d("a",{key:0,class:"btn bg-gradient-dark mb-4 ms-auto",href:"javascript:;",onClick:J},[Ls,c("   Tugas Baru ")]))]))]),s("div",Ps,[s("div",Is,[b.value?(i(),Q(B,{key:0,class:"mb-4"},{default:l(()=>{var t,S;return[s("span",Ns,[o(x,{variant:"dark",onClick:ss},{default:l(()=>[c("x")]),_:1})]),s("div",As,[(t=T(p))!=null&&t.position_id?(i(),d("div",Js,[V.value.length>0?(i(),d("ol",Gs,[(i(!0),d(I,null,q(V.value,(v,Ba)=>(i(),d("li",Rs,[s("div",zs,[s("div",Es,m(v.title),1),o(x,{variant:"info",size:"sm",class:"btn badge-sm bg-gradient-info ms-auto d-flex align-self-center",onClick:Da=>Z(v)},{default:l(()=>[c(" Pilih ")]),_:2},1032,["onClick"])])]))),256))])):(i(),d("div",Ms,[c(" Tupoksi tidak tersedia pada jabatan "),s("strong",null,m((S=T(p))==null?void 0:S.position),1)]))])):(i(),d("div",Hs," Tupoksi tidak tersedia karena user ini belum ditentukan jabatan "))])]}),_:1})):k("",!0),r.value?(i(),d("div",Ks,[s("div",Qs,[s("span",qs,[o(x,{variant:"info",onClick:U},{default:l(()=>[c("x")]),_:1})]),$.value?(i(),d("div",Xs,[(H=T(p))!=null&&H.isTeamOwner&&!(a!=null&&a.id)?(i(),d("div",Ys,[o(g,{label:"Kepada:","label-class":"mb-0 pb-0",class:"mb-2"},{default:l(()=>[o(D,{modelValue:a.assigned_to,"onUpdate:modelValue":e[4]||(e[4]=t=>a.assigned_to=t),"value-field":"id","text-field":"name",onClick:O,options:A.value},null,8,["modelValue","options"])]),_:1}),o(g,{label:"Judul Tugas:","label-class":"mb-0 pb-0",class:"mb-2"},{default:l(()=>[o(R,{modelValue:a.title,"onUpdate:modelValue":e[5]||(e[5]=t=>a.title=t),placeholder:"judul tugas bawahan"},null,8,["modelValue"])]),_:1}),o(g,{label:"Deskripsi Tugas:","label-class":"mb-0 pb-0",class:"mb-3"},{default:l(()=>[o(z,{modelValue:a.description,"onUpdate:modelValue":e[6]||(e[6]=t=>a.description=t),placeholder:"deskripsi atau uraian tugas Bawahan"},null,8,["modelValue"])]),_:1})])):k("",!0)])):(i(),d("div",Ws,[o(g,{label:"Tupoksi:","label-class":"mb-0 pb-0",class:"mb-3"},{default:l(()=>[o(D,{modelValue:a.job_desc_id,"onUpdate:modelValue":e[0]||(e[0]=t=>a.job_desc_id=t),"value-field":"id","text-field":"title",options:V.value,onClick:j},null,8,["modelValue","options"])]),_:1}),o(g,{label:"Judul Tugas:","label-class":"mb-0 pb-0",class:"mb-2"},{default:l(()=>[o(R,{modelValue:a.title,"onUpdate:modelValue":e[1]||(e[1]=t=>a.title=t),placeholder:"judul tugas anda"},null,8,["modelValue"])]),_:1}),o(g,{label:"Deskripsi Tugas:","label-class":"mb-0 pb-0",class:"mb-3"},{default:l(()=>[o(z,{modelValue:a.description,"onUpdate:modelValue":e[2]||(e[2]=t=>a.description=t),placeholder:"deskripsi atau uraian tugas anda"},null,8,["modelValue"])]),_:1}),o(is,{modelValue:a.task_source,"onUpdate:modelValue":e[3]||(e[3]=t=>a.task_source=t),options:[{value:"Tupoksi",text:"Tupoksi"},{value:"Atasan",text:"Perintah Atasan"},{value:"Lainnya",text:"Lainnya"}]},null,8,["modelValue"])])),s("div",Zs,[o(x,{variant:"primary",class:"ms-auto",onClick:as},{default:l(()=>[c(m(a!=null&&a.id?"Update":"Submit"),1)]),_:1})])])])):k("",!0),vs(s("div",sa,[(K=T(p))!=null&&K.isTeamOwner?(i(),d("div",aa,ea)):k("",!0),s("div",oa,[s("ul",na,[(i(!0),d(I,null,q(F.value,(t,S)=>(i(),d("li",la,[s("div",ia,[o(us,{"no-caret":!0,"menu-class":"dropdown-menu-end px-2 py-2 top-4 me-sm-n3 me-n3","toggle-class":"px-1 btn-xs actions",variant:"link",class:"dropdown float-end ms-auto pe-0"},{"button-content":l(()=>[da]),default:l(()=>[o(_,{variant:"secondary",onClick:v=>L(t,"To-Do")},{default:l(()=>[c(" To-Do")]),_:2},1032,["onClick"]),o(_,{variant:"warning",onClick:v=>L(t,"In-Progress")},{default:l(()=>[c(" In-Progress")]),_:2},1032,["onClick"]),o(_,{variant:"success",onClick:v=>L(t,"Done")},{default:l(()=>[c(" Done ")]),_:2},1032,["onClick"]),o(ds),o(E,{class:"border-radius-md text-warning",onClick:v=>ts(t)},{default:l(()=>[ua,c("Edit ")]),_:2},1032,["onClick"]),o(E,{variant:"danger",class:"border-radius-md",onClick:v=>es(t)},{default:l(()=>[ca,c(" Hapus ")]),_:2},1032,["onClick"])]),_:2},1024),s("div",ra,[s("h6",_a,m(S+1)+". "+m(t.title),1)]),s("p",pa,m(t.description),1),s("div",ma,[s("div",null,[ba,s("span",ha,m(t.task_source),1)]),t!=null&&t.assigned_to?(i(),d("div",ga,[va,s("span",fa,m(t==null?void 0:t.assigned_to.name),1)])):k("",!0),s("div",ka,[xa,s("span",{class:Ds(["badge badge-sm text-xxs",os(t.task_status)])},m(t.task_status),3)])])]),ya]))),256)),F.value.length===0?(i(),d("li",wa,[c(" Tugas hari ini tidak tersedia. silahkan buat tugas harian anda dengan memilih daftar "),Ta,c(" : atau "),Ca,c(" tambah tugas baru jika tugas anda tidak ada dalam Tupoksi jabatan anda. ")])):k("",!0)])])],512),[[fs,!r.value]])])])]}),_:1}),Va],64)}}});export{$a as default};