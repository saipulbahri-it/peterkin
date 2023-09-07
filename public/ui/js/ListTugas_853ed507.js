import{d as da,G as ua,i as ca,r as k,P as ra,a as pa,a3 as _a,a4 as ma,a5 as O,o as i,b as c,h as o,j as n,e as a,t as b,p as d,g as x,I as ba,f as S,F as P,l as A,n as E,k as ha,a6 as ga,a7 as I,J as T,a1 as va,N as fa,a0 as ka,a8 as xa,a9 as ya,aa as wa,ab as Ta,ac as Ca,M as Va,ad as ja,ae as Ba,V as Da,af as Sa}from"./index_0548d9d2.js";const $a={class:"col-12 gap-3 d-flex"},Fa={class:"mb-4 text-white"},Ua={class:"ms-auto d-flex gap-3"},La=a("i",{class:"fas fa-plus","aria-hidden":"true"},null,-1),Oa={class:"row my-4"},Pa={class:"col-12"},Ia={class:"float-end",style:{position:"absolute",right:"10px",top:"-20px"}},Na={class:"pt-3"},Ja={key:0},za={key:0,class:"text-xs list-group list-group-numbered"},Ga={"data-v-1986abaa":"",class:"list-group-item d-flex align-items-start py-2 pe-2"},Ra={"data-v-1986abaa":"",class:"ms-2 w-100 d-flex"},Aa={"data-v-1986abaa":"",class:"fw-bold"},Ea={key:1,class:"alert alert-warning"},Ma={key:1,class:"alert alert-warning text-white"},Ha={key:1,class:"card mb-4"},Ka={class:"card-body p-3"},Qa={class:"float-end",style:{position:"absolute",right:"10px",top:"-20px"}},qa={key:0,class:"mb-4 d-block"},Wa=a("hr",{class:"horizontal dark mt-4 mb-4"},null,-1),Xa={class:"d-flex"},Ya={class:"card"},Za={key:0,class:"card-header"},as=a("div",{class:"nav-wrapper position-relative end-0"},[a("ul",{class:"nav nav-pills nav-fill p-1",role:"tablist"},[a("li",{class:"nav-item"},[a("a",{class:"nav-link mb-0 px-0 py-1 active","data-bs-toggle":"tab",href:"#",role:"tab","aria-controls":"profile","aria-selected":"true"}," Tugas Saya ")]),a("li",{class:"nav-item"},[a("a",{class:"nav-link mb-0 px-0 py-1","data-bs-toggle":"tab",href:"#assignment",role:"tab","aria-controls":"dashboard","aria-selected":"false"}," Tugas Bawahan ")])])],-1),ss=[as],ts={class:"card-body p-3"},es={class:"list-group list-group-flush list-group-numbered-","data-toggle":"checklist"},os={class:"list-group-item border-0 flex-column align-items-start px-0 py-0 mb-3"},ls={class:"checklist-item checklist-item-warning ps-0 ms-0"},ns=a("i",{class:"fa fs-6 fa-ellipsis-v",title:"...","aria-hidden":"true"},null,-1),is=a("i",{class:"fa fa-edit me-1"},null,-1),ds=a("i",{class:"fa fa-trash me-1"},null,-1),us={class:"d-flex align-items-center"},cs={class:"mb-0 text-dark font-weight-bold text-sm"},rs={class:"text-xxs mb-1"},ps={class:"d-flex justify-content-between align-items-center mt-0"},_s=a("span",{class:"text-xs me-1 text-secondary font-weight-bold"},"Sumber : ",-1),ms={class:"text-xs font-weight-bolder"},bs={class:"ms-auto text-end"},hs=a("span",{class:"text-xs text-secondary font-weight-bold me-1"}," Status : ",-1),gs=a("hr",{class:"horizontal dark mt-4 mb-0"},null,-1),vs={key:0,class:"list-group-item border-0 flex-column align-items-start ps-0 py-0 mb-3"},fs=a("strong",null,"Tupoksi",-1),ks=a("br",null,null,-1),xs=a("div",{class:"fixed-plugin"},[a("a",{class:"fixed-plugin-button text-dark position-fixed px-3 py-2"},[a("i",{class:"fa fa-cog py-2","aria-hidden":"true"})])],-1),Vs=da({__name:"ListTugas",setup(ys){var J;const p=(J=ua(ca("user")))==null?void 0:J.value,r=k(!1),g=k(!1),$=k([]),M=k([]),C=k([]),y=async()=>{const{status:l,data:s}=await I.apiClient.get("/api/task").then(({status:u,data:h})=>({status:u,data:h}));$.value=s.data},H=async()=>{const{status:l,data:s}=await I.apiClient.get("/api/team").then(({status:u,data:h})=>({status:u,data:h}));M.value=s.data},K=async l=>{const{status:s,summary_tasks:u,job_descs:h}=await I.apiClient.get(`/api/position/${l}`).then(({status:V,data:m})=>{let j=m.job_descs,B=m.summary_tasks;return{status:V,summary_tasks:B,job_descs:j}});C.value=h};ra(()=>{y()});const _={id:void 0,job_desc_id:void 0,title:"",description:"",task_source:""},t=pa({..._}),Q=()=>{r.value=!0,g.value=!r.value,_.job_desc_id=void 0,_.description="",_.task_source="Lainnya",Object.assign(t,{},_),N()},N=()=>{p!=null&&p.position_id&&K(p==null?void 0:p.position_id)},q=l=>{g.value=!(r.value=!0),_.job_desc_id=l.id,_.description=l.title,_.task_source="Tupoksi",Object.assign(t,{},_)},W=()=>{g.value=!1},F=()=>{Object.assign(t,{},_),r.value=!1},X=()=>{t!=null&&t.id?T.put(`/api/task/${t.id}`,t).then(({status:l,data:s})=>{F(),y()}):T.post("/api/task",t).then(({status:l,data:s})=>{F(),y()})},Y=l=>{T.get(`/api/task/${l.id}`).then(({status:s,data:u})=>{Object.assign(t,u),r.value=!0,g.value=!1})},U=(l,s)=>{T.post(`/api/task/${l.id}/setStatus`,{task_status:s}).then(({status:u,data:h})=>{y()})},Z=l=>{T.delete(`/api/task/${l.id}`).then(({status:s,data:u})=>{y()})},aa=l=>{let s;switch(l){case"Done":s="bg-gradient-success";break;case"In-Progress":s="bg-gradient-warning";break;case"To-Do":s="bg-gradient-secondary";break;default:s="bg-gradient-dark";break}return s},w=_a(),sa=ma(),ta=async()=>{r.value=!1,g.value=!1};O(g,l=>{l===!0?w.push({hash:"#/form"}):!l&&r.value?w.push({hash:"#/form"}):w.push({hash:""})}),O(r,l=>{l===!0?w.push({hash:"#/form"}):w.push({hash:""})}),O(()=>sa.hash,async l=>{l||ta()});const f=k(!1);return(l,s)=>{const u=va,h=fa,V=ka,m=xa,j=ya,B=wa,ea=Ta,oa=Ca,L=ja,la=Ba,z=Da,na=Sa,ia=Va;return i(),c(P,null,[o(ia,{fluid:"xl"},{default:n(()=>{var G,R;return[a("div",$a,[a("h3",Fa,b(r.value?t!=null&&t.id?"Edit Tugas":"Buat Tugas Baru":"Daftar Tugas"),1),a("span",Ua,[r.value?x("",!0):(i(),c("a",{key:0,class:"btn bg-gradient-dark mb-4 ms-auto",href:"javascript:;",onClick:Q},[La,d("   Tugas Baru ")]))])]),a("div",Oa,[a("div",Pa,[g.value?(i(),ba(h,{key:0,class:"mb-4"},{default:n(()=>{var e,D;return[a("span",Ia,[o(u,{variant:"dark",onClick:W},{default:n(()=>[d("x")]),_:1})]),a("div",Na,[(e=S(p))!=null&&e.position_id?(i(),c("div",Ja,[C.value.length>0?(i(),c("ol",za,[(i(!0),c(P,null,A(C.value,(v,ws)=>(i(),c("li",Ga,[a("div",Ra,[a("div",Aa,b(v.title),1),o(u,{variant:"info",size:"sm",class:"btn badge-sm bg-gradient-info ms-auto d-flex align-self-center",onClick:Ts=>q(v)},{default:n(()=>[d(" Pilih ")]),_:2},1032,["onClick"])])]))),256))])):(i(),c("div",Ea,[d(" Tupoksi tidak tersedia pada jabatan "),a("strong",null,b((D=S(p))==null?void 0:D.position),1)]))])):(i(),c("div",Ma," Tupoksi tidak tersedia karena user ini belum ditentukan jabatan "))])]}),_:1})):x("",!0),r.value?(i(),c("div",Ha,[a("div",Ka,[a("span",Qa,[o(u,{variant:"info",onClick:F},{default:n(()=>[d("x")]),_:1})]),o(m,{label:"Tupoksi:","label-class":"mb-0 pb-0",class:"mb-3"},{default:n(()=>[o(V,{modelValue:t.job_desc_id,"onUpdate:modelValue":s[0]||(s[0]=e=>t.job_desc_id=e),"value-field":"id","text-field":"title",options:C.value,onClick:N},null,8,["modelValue","options"])]),_:1}),o(m,{label:"Judul Tugas:","label-class":"mb-0 pb-0",class:"mb-2"},{default:n(()=>[o(j,{modelValue:t.title,"onUpdate:modelValue":s[1]||(s[1]=e=>t.title=e),placeholder:"judul tugas anda"},null,8,["modelValue"])]),_:1}),o(m,{label:"Deskripsi Tugas:","label-class":"mb-0 pb-0",class:"mb-3"},{default:n(()=>[o(B,{modelValue:t.description,"onUpdate:modelValue":s[2]||(s[2]=e=>t.description=e),placeholder:"deskripsi atau uraian tugas anda"},null,8,["modelValue"])]),_:1}),o(ea,{modelValue:t.task_source,"onUpdate:modelValue":s[3]||(s[3]=e=>t.task_source=e),options:[{value:"Tupoksi",text:"Tupoksi"},{value:"Atasan",text:"Perintah Atasan"},{value:"Lainnya",text:"Lainnya"}]},null,8,["modelValue"]),(G=S(p))!=null&&G.isTeamOwner?(i(),c("div",qa,[Wa,o(u,{class:E(f.value?"bg-gradient-info":"collapsed"),"aria-expanded":f.value?"true":"false","aria-controls":"collapse-4",onClick:s[4]||(s[4]=e=>f.value=!f.value)},{default:n(()=>[d(" Beri Tugas kepada bawahan ")]),_:1},8,["class","aria-expanded"]),o(oa,{id:"collapse-4",modelValue:f.value,"onUpdate:modelValue":s[7]||(s[7]=e=>f.value=e),class:"mt-2"},{default:n(()=>[o(m,{label:"Kepada:","label-class":"mb-0 pb-0",class:"mb-2"},{default:n(()=>[o(V,{onClick:H})]),_:1}),o(m,{label:"Judul Tugas:","label-class":"mb-0 pb-0",class:"mb-2"},{default:n(()=>[o(j,{modelValue:t.title,"onUpdate:modelValue":s[5]||(s[5]=e=>t.title=e),placeholder:"judul tugas bawahan"},null,8,["modelValue"])]),_:1}),o(m,{label:"Deskripsi Tugas:","label-class":"mb-0 pb-0",class:"mb-3"},{default:n(()=>[o(B,{modelValue:t.description,"onUpdate:modelValue":s[6]||(s[6]=e=>t.description=e),placeholder:"deskripsi atau uraian tugas Bawahan"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])])):x("",!0),a("div",Xa,[o(u,{variant:"primary",class:"ms-auto",onClick:X},{default:n(()=>[d(b(t!=null&&t.id?"Update":"Submit"),1)]),_:1})])])])):x("",!0),ha(a("div",Ya,[(R=S(p))!=null&&R.isTeamOwner?(i(),c("div",Za,ss)):x("",!0),a("div",ts,[a("ul",es,[(i(!0),c(P,null,A($.value,(e,D)=>(i(),c("li",os,[a("div",ls,[o(na,{"no-caret":!0,"menu-class":"dropdown-menu-end px-2 py-2 top-4 me-sm-n3 me-n3","toggle-class":"px-1 btn-xs actions",variant:"link",class:"dropdown float-end ms-auto pe-0"},{"button-content":n(()=>[ns]),default:n(()=>[o(L,{variant:"secondary",onClick:v=>U(e,"To-Do")},{default:n(()=>[d(" To-Do")]),_:2},1032,["onClick"]),o(L,{variant:"warning",onClick:v=>U(e,"In-Progress")},{default:n(()=>[d(" In-Progress")]),_:2},1032,["onClick"]),o(L,{variant:"success",onClick:v=>U(e,"Done")},{default:n(()=>[d(" Done ")]),_:2},1032,["onClick"]),o(la),o(z,{class:"border-radius-md text-warning",onClick:v=>Y(e)},{default:n(()=>[is,d("Edit ")]),_:2},1032,["onClick"]),o(z,{variant:"danger",class:"border-radius-md",onClick:v=>Z(e)},{default:n(()=>[ds,d(" Hapus ")]),_:2},1032,["onClick"])]),_:2},1024),a("div",us,[a("h6",cs,b(D+1)+". "+b(e.title),1)]),a("p",rs,b(e.description),1),a("div",ps,[a("div",null,[_s,a("span",ms,b(e.task_source),1)]),a("div",bs,[hs,a("span",{class:E(["badge badge-sm text-xxs",aa(e.task_status)])},b(e.task_status),3)])])]),gs]))),256)),$.value.length===0?(i(),c("li",vs,[d(" Tugas hari ini tidak tersedia. silahkan buat tugas harian anda dengan memilih daftar "),fs,d(" : atau "),ks,d(" tambah tugas baru jika tugas anda tidak ada dalam Tupoksi jabatan anda. ")])):x("",!0)])])],512),[[ga,!r.value]])])])]}),_:1}),xs],64)}}});export{Vs as default};