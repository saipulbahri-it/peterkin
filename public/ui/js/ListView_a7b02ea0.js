import{d as K,r as h,a4 as M,a as P,a5 as X,o as m,G as b,j as o,h as c,e,f as n,p as f,g as w,t as u,q as A,k as F,b as V,a2 as Q,H as v,a6 as W,a7 as Y,a8 as Z,a9 as ee,_ as te,aa as ae,J as se,$ as oe,K as ie,X as x,ab as ne}from"./index_1ce841cd.js";import{u as le,r as re,m as de}from"./index_7ef850cc.js";const ce={class:"form-position-component-wrap"},me={class:"form-header align-items-center"},ue={class:"float-end ms-auto top-2 right-5"},_e={class:"form-title mb-0"},fe={class:"form-description text-xs"},pe={class:"form-body"},he={class:"d-flex"},be={class:"card-header-wrap"},ve={class:"ms-auto my-auto d-flex gap-3 mt-lg-0 align-items-center float-end"},xe=e("div",null,[e("h5",{class:"mb-0"},"Jabatan & Tupoksi"),e("p",{class:"text-xs mb-0"},"daftar list jabatan")],-1),ge={class:"text-sm"},ye=["item-id","onClick"],ke=e("i",{class:"fas fa-user-edit text-secondary","aria-hidden":"true"},null,-1),$e=[ke],we=["item-id","onClick"],Fe=e("i",{class:"fas fa-trash text-secondary","aria-hidden":"true"},null,-1),Ve=[Fe],Ce={class:"d-flex px-2 py-1 gap-3 ps-3"},Be={class:"d-flex flex-column justify-content-center"},Je={class:"mb-0 text-primary text-sm"},Se={class:"text-xs text-secondary mb-0"},Te=K({__name:"ListView",setup(je){const C=[{key:"name",label:"Jabatan",class:"align-middle"},{key:"action",class:"align-middle text-center",thStyle:{width:"115px"}}],B=h([]),J=async function(){try{const{data:i}=await Q.apiClient.get("/api/position");return i.data}catch{return[]}},l=h(!1),g=M(),y={id:"",name:"",description:"",summary_tasks:""},S=i=>{Object.assign(a,i)};function j(i){l.value=!0,S(i)}function E(){l.value=!0}function N(){l.value=!1,p()}const T={form:{name:{required:re,min:de(8)}}},a=P({...y}),r=le(T,{form:a},{$lazy:!0});function p(){r.value.$reset(),Object.assign(a,y)}const _=h(),z=async()=>{await r.value.$validate()&&(a.id?v.put(`/api/position/${a.id}`,a).then(({status:s})=>{var d;s===200&&(l.value=!1,(d=_.value)==null||d.refresh(),p())}):v.post("/api/position",a).then(({status:s})=>{var d;s===201&&(l.value=!1,(d=_.value)==null||d.refresh(),p())}))},D=i=>{v.delete(`/api/position/${i.id}`).then(({status:s})=>{var d;s===200&&((d=_.value)==null||d.refresh())})};return X(l,i=>{i===!0?g.push({hash:"#form"}):g.push({hash:""})}),(i,s)=>{const d=W,G=Y,k=Z,R=ee,U=te,I=ae,q=se,H=oe,L=ie,$=ne;return m(),b(L,{fluid:""},{default:o(()=>[c(I,{modalClass:"bottom-",hideHeader:!0,hideFooter:!0,size:"lg","dialog-class":"modal-dialog-centered align-items-end-",modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=t=>l.value=t),"body-class":"p-4",class:"mb-4"},{default:o(()=>[e("div",ce,[e("div",me,[e("span",ue,[l.value?(m(),b(n(x),{key:0,variant:"outline-info",size:"sm",class:"mb-0 px-3",onClick:N},{default:o(()=>[f(" x ")]),_:1})):w("",!0)]),e("h5",_e,u(a!=null&&a.id?"Edit Jabatan":" Jabatan Baru"),1),e("p",fe,"Form "+u(a!=null&&a.id?"Edit ":" Tambah")+" Jabatan",1)]),e("div",pe,[c(U,{id:"form-postion-component",floating:!0,onSubmit:A(z,["prevent"])},{default:o(()=>[c(k,{id:"fieldset-1",label:"Nama Jabatan","label-for":"input-floating-1","label-class":"ps-2",state:n(r).form.name.$dirty?!n(r).form.name.$invalid:void 0,floating:"",class:"mb-3"},{default:o(()=>[c(d,{id:"input-floating-1",modelValue:n(r).form.name.$model,"onUpdate:modelValue":s[0]||(s[0]=t=>n(r).form.name.$model=t),state:n(r).form.name.$dirty?!n(r).form.name.$invalid:void 0,placeholder:"Enter name please",trim:""},null,8,["modelValue","state"]),c(G,{class:"text-xxs"},{default:o(()=>{var t;return[f(u((t=n(r).form.name.$errors[0])==null?void 0:t.$message),1)]}),_:1})]),_:1},8,["state"]),c(k,{id:"fieldset-2",label:"Ringkasan Tugas","label-for":"textarea","label-class":"ps-2",state:!0,class:"mb-3",floating:""},{default:o(()=>[c(R,{id:"textarea",modelValue:a.summary_tasks,"onUpdate:modelValue":s[1]||(s[1]=t=>a.summary_tasks=t),placeholder:"Ringkasan Tugas",rows:"3","max-rows":"4"},null,8,["modelValue"])]),_:1}),e("div",he,[c(n(x),{type:"submit",variant:"info",size:"sm",class:"btn-gradient-info ms-auto",disabled:n(r).form.$invalid},{default:o(()=>[f(" Submit ")]),_:1},8,["disabled"])])]),_:1},8,["onSubmit"])])])]),_:1},8,["modelValue"]),c(H,{vshow:"!showForm","body-class":"p-0"},{header:o(()=>[e("div",be,[e("div",ve,[l.value?w("",!0):(m(),b(n(x),{key:0,class:"bg-gradient-primary btn-sm mb-0 px-3",onClick:E},{default:o(()=>[f(" +  New ")]),_:1}))]),xe])]),default:o(()=>[c(q,{id:"table",ref_key:"table",ref:_,"table-class":"text-xs",align:"middle",provider:J,items:B.value,fields:C,small:!0,responsive:!0,hover:!0},{"cell(action)":o(({item:t})=>[e("div",ge,[F((m(),V("a",{href:"#form",class:"mx-3",title:"Edit","item-id":`${t.id}`,onClick:O=>j(t)},$e,8,ye)),[[$,void 0,void 0,{hover:!0,top:!0}]]),F((m(),V("a",{href:"javascript:;",title:"Delete","item-id":`${t.id}`,onClick:O=>D(t)},Ve,8,we)),[[$,void 0,void 0,{hover:!0,top:!0}]])])]),"cell(name)":o(({item:t})=>[e("div",Ce,[e("div",Be,[e("h6",Je,u(t.name),1),e("p",Se,[e("i",null,u(t.summary_tasks),1)])])])]),_:1},8,["items"])]),_:1})]),_:1})}}});export{Te as default};
