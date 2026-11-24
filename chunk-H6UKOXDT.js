import{a as Z,b as ee}from"./chunk-2YJATOBA.js";import{b as te,c as ie,d as ne,e as re}from"./chunk-2MPEU7CD.js";import{b as $,c as v,e as V,f as A,l as q,m as G,o as H,q as W,s as J,t as K}from"./chunk-RQFMJ57E.js";import"./chunk-NUFON3IH.js";import{d as Q,e as X}from"./chunk-ZMM727P3.js";import{s as Y}from"./chunk-FXGVM4H5.js";import{c as z}from"./chunk-VVO344T5.js";import{Ca as S,Dc as U,Fa as a,Fd as C,Gb as p,Hb as E,Ib as I,Jb as d,Jd as M,Kb as x,Lb as k,O as f,Qa as P,Qb as R,Rb as j,U as y,V as _,Va as h,Xd as L,bb as O,cb as D,ea as m,fb as T,gb as N,hb as g,ib as n,jb as r,kb as l,rb as w,tb as c,tc as B,vb as b,wc as F}from"./chunk-BMOK6NN5.js";var ae=()=>({width:"430px",maxWidth:"92vw"}),de=(s,i)=>i._id;function le(s,i){if(s&1&&(n(0,"span",60),l(1,"i",61),d(2),r()),s&2){let t=i.ngIf;a(2),k("/US/dr/",t," ")}}function se(s,i){if(s&1){let t=w();n(0,"button",62),c("click",function(){y(t);let o=b();return _(o.confirmDelete())}),l(1,"i",63),d(2,"Delete "),r()}}function ce(s,i){s&1&&(n(0,"span",71),d(1,"ACTIVE"),r())}function pe(s,i){if(s&1){let t=w();n(0,"div",64),c("click",function(){let o=y(t).$implicit,u=b();return _(u.selectNode(o._id))}),n(1,"div",65),l(2,"i",66),n(3,"div",67)(4,"span",68),d(5),r(),n(6,"span",69),d(7),r()()(),h(8,ce,2,0,"span",70),r()}if(s&2){let t=i.$implicit,e=b();p("active-file",e.activeNodeId()===t._id),a(2),p("text-pink-400",e.activeNodeId()===t._id),a(3),x(t.nodeId),a(2),x(t.title),a(),g("ngIf",e.activeNodeId()===t._id)}}function me(s,i){if(s&1&&l(0,"iframe",57),s&2){let t=b();g("src",t.previewUrl(),S)}}function ge(s,i){s&1&&(n(0,"div",58),l(1,"i",72),d(2,"Compiling sandbox memory... "),r())}var oe=class s{fb=f(H);http=f(U);sanitizer=f(z);confirmationService=f(C);messageService=f(M);apiBase=`${L.apiBase||"http://localhost:5000"}/api/love/dynamic-renders`;nodes=m([]);activeNodeId=m(null);isLoading=m(!1);isSubmitting=m(!1);activeCodeTab=m("html");previewDevice=m("desktop");activeBlobUrl=null;previewUrl=m(null);editorForm=this.fb.group({nodeId:["",[v.required,v.pattern(/^[a-z0-9-]+$/)]],title:["",v.required],html:["",v.required],css:[""],js:[""]});ngOnInit(){this.fetchNodes()}ngOnDestroy(){this.revokeBlob()}fetchNodes(){this.isLoading.set(!0),this.http.get(this.apiBase).subscribe({next:i=>{i.success&&Array.isArray(i.data)&&(this.nodes.set(i.data),i.data.length>0&&!this.activeNodeId()&&this.selectNode(i.data[0]._id)),this.isLoading.set(!1)},error:()=>{this.isLoading.set(!1),this.messageService.add({severity:"error",summary:"Fetch Error",detail:"Failed to retrieve dynamic render modules from server."})}})}selectNode(i){this.isLoading.set(!0),this.http.get(`${this.apiBase}/${i}`).subscribe({next:t=>{t.success&&t.data&&(this.activeNodeId.set(i),this.editorForm.patchValue({nodeId:t.data.nodeId,title:t.data.title,html:t.data.html||"",css:t.data.css||"",js:t.data.js||""}),this.recompilePreview()),this.isLoading.set(!1)},error:()=>this.isLoading.set(!1)})}recompilePreview(){this.revokeBlob();let i=this.editorForm.get("html")?.value||"",t=this.editorForm.get("css")?.value||"",e=this.editorForm.get("js")?.value||"",o=`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      ${t}
    </style>
  </head>
  <body>
    ${i}
    <script>
      window.onerror = function(msg, url, line) {
        console.warn("Dynamic Sandbox Error: " + msg + " at line " + line);
        return false;
      };

      // User JS executes in global window scope
      ${e}
    <\/script>
  </body>
  </html>`,u=new Blob([o],{type:"text/html;charset=utf-8"});this.activeBlobUrl=URL.createObjectURL(u),this.previewUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.activeBlobUrl))}revokeBlob(){this.activeBlobUrl&&(URL.revokeObjectURL(this.activeBlobUrl),this.activeBlobUrl=null)}loadPreset(i){i==="starmap"?this.editorForm.patchValue({html:`<div class="sky-container">
  <div class="glass-dialog">
    <span class="station-tag">COORDINATES // 13\xB004'N 80\xB014'E</span>
    <h2>The Night We Met</h2>
    <p>Every single star aligned exactly right on this coordinate.</p>
    <button id="revealBtn">Read Hidden Message</button>
    <div id="hidden-box" class="secret-text" style="display: none;">
      Forever wasn't long enough until you.
    </div>
  </div>
</div>`,css:`body {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #1b1035 0%, #06050e 100%);
  color: #fff;
  font-family: system-ui, -apple-system, sans-serif;
  overflow: hidden;
}
.glass-dialog {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(244, 114, 182, 0.3);
  padding: 2.5rem;
  border-radius: 24px;
  backdrop-filter: blur(16px);
  text-align: center;
  box-shadow: 0 0 40px rgba(236, 72, 153, 0.25);
  max-width: 400px;
}
.station-tag { font-size: 0.65rem; color: #a78bfa; letter-spacing: 0.15em; font-family: monospace; display: block; margin-bottom: 0.5rem; }
h2 { margin: 0 0 0.8rem; font-size: 1.6rem; color: #fff; }
p { font-size: 0.9rem; color: #cbd5e1; line-height: 1.5; }
button {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  color: #fff;
  border: none;
  padding: 0.65rem 1.4rem;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;
}
.secret-text {
  margin-top: 1rem;
  color: #f472b6;
  font-weight: bold;
}`,js:`const btn = document.getElementById('revealBtn');
const box = document.getElementById('hidden-box');

if (btn && box) {
  btn.addEventListener('click', function() {
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  });
}`}):i==="polaroid"&&this.editorForm.patchValue({html:`<div class="polaroid-wrapper">
  <div class="polaroid-card" id="polaroidCard">
    <div class="photo-placeholder">\u{1F4F8}</div>
    <div class="caption">Our First Coffee Date \u2615</div>
  </div>
</div>`,css:`body {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09090b;
}
.polaroid-card {
  background: #fbf7ee;
  padding: 1.25rem 1.25rem 2rem;
  border-radius: 6px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.6);
  transform: rotate(-3deg);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.polaroid-card:hover { transform: rotate(0deg) scale(1.05); }
.photo-placeholder {
  width: 240px;
  height: 240px;
  background: #18181b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 4px;
}
.caption { margin-top: 1rem; color: #27272a; font-family: cursive, sans-serif; font-size: 1.2rem; }`,js:`const card = document.getElementById('polaroidCard');
if (card) {
  card.addEventListener('click', function() {
    alert('Every day with you is special.');
  });
}`}),this.recompilePreview()}createNewNodeTemplate(){this.activeNodeId.set(null),this.editorForm.reset({nodeId:`secret-${Date.now().toString().slice(-4)}`,title:"New Surprise Canvas",html:`<div class="vault-surprise-box">
  <h2>\u2728 Under the Same Sky \u2728</h2>
  <p>Tap below to decrypt this hidden memory coordinate.</p>
  <button id="actionBtn" class="action-btn">Reveal Memory</button>
  <div id="secret-target" class="hidden-note" style="display: none;">
    Every second spent with you is my favorite memory.
  </div>
</div>`,css:`body {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #1b1338 0%, #070712 100%);
  color: #fff;
  font-family: system-ui, sans-serif;
  text-align: center;
}
.vault-surprise-box {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(244, 114, 182, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(16px);
  box-shadow: 0 0 35px rgba(236, 72, 153, 0.2);
}
.action-btn {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  color: #fff;
  border: none;
  padding: 0.65rem 1.4rem;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;
}
.hidden-note {
  margin-top: 1.25rem;
  color: #f472b6;
  font-size: 1.1rem;
  font-weight: 500;
}`,js:`// Expose directly to window or attach listener safely
const btn = document.getElementById('actionBtn');
const target = document.getElementById('secret-target');

if (btn && target) {
  btn.onclick = function() {
    target.style.display = target.style.display === 'none' ? 'block' : 'none';
  };
}`}),this.activeCodeTab.set("html"),this.recompilePreview()}saveNode(){if(this.editorForm.invalid){this.editorForm.markAllAsTouched();return}let i=this.editorForm.value,t=this.activeNodeId();if(t){this.confirmationService.confirm({header:"Confirm Payload Update",message:`Are you sure you want to sync and overwrite "/US/dr/${i.nodeId}" (${i.title})?`,icon:"pi pi-cloud-upload",acceptLabel:"Yes, Sync Changes",rejectLabel:"Cancel",acceptButtonStyleClass:"p-button-sm confirm-edit-btn",rejectButtonStyleClass:"p-button-text p-button-sm text-secondary",accept:()=>this.executeSaveNode(i,t)});return}this.executeSaveNode(i,null)}executeSaveNode(i,t){this.isSubmitting.set(!0),(t?this.http.put(`${this.apiBase}/${t}`,i):this.http.post(this.apiBase,i)).subscribe({next:o=>{this.isSubmitting.set(!1),this.messageService.add({severity:"success",summary:t?"Payload Synced":"Node Initialized",detail:`Node "/US/dr/${i.nodeId}" committed successfully.`}),!t&&o.data?._id&&this.activeNodeId.set(o.data._id),this.fetchNodes()},error:o=>{this.isSubmitting.set(!1);let u=o.status===409?"Node slug identifier already exists.":"Failed to save node.";this.messageService.add({severity:"error",summary:"Save Error",detail:u})}})}confirmDelete(){let i=this.activeNodeId();if(!i)return;let t=this.editorForm.get("nodeId")?.value;this.confirmationService.confirm({message:`Permanently delete secret node "/US/dr/${t}"? Linked buttons in timeline and letters will point to empty routes.`,header:"Delete Dynamic Render Payload",icon:"pi pi-exclamation-triangle",acceptLabel:"Yes, Delete",rejectLabel:"Cancel",acceptButtonStyleClass:"p-button-danger p-button-sm",rejectButtonStyleClass:"p-button-text p-button-sm text-secondary",accept:()=>{this.http.delete(`${this.apiBase}/${i}`).subscribe({next:()=>{this.messageService.add({severity:"info",summary:"Node Purged",detail:`Node "${t}" deleted.`}),this.activeNodeId.set(null),this.fetchNodes()},error:()=>{this.messageService.add({severity:"error",summary:"Delete Failed",detail:"Server rejected deletion request."})}})}})}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=P({type:s,selectors:[["app-dynamic-render-manager"]],features:[R([C,M])],decls:84,vars:30,consts:[["position","top-right"],[1,"ide-workspace-layout","pb-4"],[1,"ide-top-ribbon","d-flex","justify-content-between","align-items-center","flex-wrap","gap-2","mb-3","px-3","py-2"],[1,"d-flex","align-items-center","gap-3"],[1,"terminal-dots","d-flex","gap-1"],[1,"dot-red"],[1,"dot-yellow"],[1,"dot-green"],[1,"d-flex","align-items-center","gap-2"],[1,"ide-brand","font-monospace"],["class","route-slug-pill font-monospace",4,"ngIf"],[1,"preset-dropdown-group","d-flex","align-items-center","gap-1"],[1,"font-monospace","small","text-muted","me-1"],["type","button","pTooltip","Load Star Map Surprise",1,"preset-chip",3,"click"],["type","button","pTooltip","Load Polaroid Photo Surprise",1,"preset-chip",3,"click"],["type","button","class","ide-btn-danger","pTooltip","Erase this secret node",3,"click",4,"ngIf"],["type","button","pTooltip","Create a new secret payload",1,"ide-btn-new",3,"click"],[1,"pi","pi-plus","me-1"],["type","button",1,"ide-btn-deploy",3,"click","disabled"],[1,"me-1"],[1,"ide-workbench-grid"],[1,"ide-file-tree"],[1,"file-tree-header","d-flex","justify-content-between","align-items-center","px-3","py-2"],[1,"tree-title","font-monospace"],[1,"pi","pi-folder-open","me-2","text-pink-400"],[1,"tree-node-list"],[1,"tree-node-row","d-flex","align-items-center","justify-content-between","px-3","py-2",3,"active-file"],[1,"ide-code-matrix",3,"formGroup"],[1,"editor-meta-strip","px-3","py-2","d-flex","gap-2","align-items-center"],[1,"flex-grow-1"],["type","text","pInputText","","formControlName","title","placeholder","Surprise Title (e.g. Constellation Night Map)",1,"meta-input","title-field"],[1,"slug-wrap","d-flex","align-items-center"],[1,"slug-prefix","font-monospace"],["type","text","pInputText","","formControlName","nodeId","placeholder","slug-name",1,"meta-input","slug-field","font-monospace"],[1,"code-tab-bar","d-flex","justify-content-between","align-items-center","px-3"],[1,"d-flex","align-items-center"],["type","button",1,"code-tab-btn",3,"click"],[1,"pi","pi-code","me-1","text-orange-400"],[1,"pi","pi-palette","me-1","text-cyan-400"],[1,"pi","pi-bolt","me-1","text-yellow-400"],["type","button","pTooltip","Recompile Sandbox",1,"btn-quick-run","font-monospace",3,"click"],[1,"pi","pi-refresh","me-1"],[1,"editor-viewport","position-relative"],[1,"code-block","h-100"],["pTextarea","","formControlName","html","placeholder","<!-- Write standard HTML markup here -->","spellcheck","false",1,"code-textarea","font-monospace",3,"input"],["pTextarea","","formControlName","css","placeholder","/* Write scoped CSS styles here */","spellcheck","false",1,"code-textarea","font-monospace",3,"input"],["pTextarea","","formControlName","js","placeholder","// Write interactive client JavaScript here","spellcheck","false",1,"code-textarea","font-monospace",3,"input"],[1,"ide-preview-dock"],[1,"preview-header-bar","d-flex","justify-content-between","align-items-center","px-3","py-2"],[1,"runtime-pulse-dot"],[1,"font-monospace","small","fw-bold","text-white"],[1,"device-switcher","d-flex","gap-1","p-1"],["type","button","pTooltip","Desktop View",1,"device-btn",3,"click"],[1,"pi","pi-desktop"],["type","button","pTooltip","Mobile Viewport",1,"device-btn",3,"click"],[1,"pi","pi-mobile"],[1,"preview-frame-container"],["sandbox","allow-scripts allow-modals",1,"sandboxed-preview-iframe",3,"src"],[1,"d-flex","align-items-center","justify-content-center","h-100","text-muted","font-monospace","small"],["styleClass","cyber-confirm-dialog"],[1,"route-slug-pill","font-monospace"],[1,"pi","pi-link","me-1"],["type","button","pTooltip","Erase this secret node",1,"ide-btn-danger",3,"click"],[1,"pi","pi-trash","me-1"],[1,"tree-node-row","d-flex","align-items-center","justify-content-between","px-3","py-2",3,"click"],[1,"d-flex","align-items-center","gap-2","text-truncate","me-2"],[1,"pi","pi-code","file-icon"],[1,"text-truncate"],[1,"node-slug-title","d-block","text-truncate","font-monospace"],[1,"node-meta-title","small","text-muted","text-truncate","d-block"],["class","badge-active-indicator",4,"ngIf"],[1,"badge-active-indicator"],[1,"pi","pi-spin","pi-spinner","me-2"]],template:function(t,e){if(t&1&&(l(0,"p-toast",0),n(1,"div",1)(2,"header",2)(3,"div",3)(4,"div",4),l(5,"span",5)(6,"span",6)(7,"span",7),r(),n(8,"div",8)(9,"span",9),d(10,"DYNAMIC RENDER STUDIO"),r(),h(11,le,3,1,"span",10),r()(),n(12,"div",8)(13,"div",11)(14,"span",12),d(15,"PRESETS:"),r(),n(16,"button",13),c("click",function(){return e.loadPreset("starmap")}),d(17,"\u2728 Star Map"),r(),n(18,"button",14),c("click",function(){return e.loadPreset("polaroid")}),d(19,"\u{1F4F8} Polaroid"),r()(),h(20,se,3,0,"button",15),n(21,"button",16),c("click",function(){return e.createNewNodeTemplate()}),l(22,"i",17),d(23,"New Payload "),r(),n(24,"button",18),c("click",function(){return e.saveNode()}),l(25,"i",19),n(26,"span"),d(27),r()()()(),n(28,"div",20)(29,"aside",21)(30,"div",22)(31,"span",23),l(32,"i",24),d(33),r()(),n(34,"div",25),T(35,pe,9,7,"div",26,de),r()(),n(37,"section",27)(38,"div",28)(39,"div",29),l(40,"input",30),r(),n(41,"div",31)(42,"span",32),d(43,"/US/dr/"),r(),l(44,"input",33),r()(),n(45,"div",34)(46,"div",35)(47,"button",36),c("click",function(){return e.activeCodeTab.set("html")}),l(48,"i",37),d(49,"HTML Markup "),r(),n(50,"button",36),c("click",function(){return e.activeCodeTab.set("css")}),l(51,"i",38),d(52,"CSS Style "),r(),n(53,"button",36),c("click",function(){return e.activeCodeTab.set("js")}),l(54,"i",39),d(55,"JS Interactions "),r()(),n(56,"button",40),c("click",function(){return e.recompilePreview()}),l(57,"i",41),d(58,"Run Preview "),r()(),n(59,"div",42)(60,"div",43)(61,"textarea",44),c("input",function(){return e.recompilePreview()}),d(62,"          "),r()(),n(63,"div",43)(64,"textarea",45),c("input",function(){return e.recompilePreview()}),d(65,"          "),r()(),n(66,"div",43)(67,"textarea",46),c("input",function(){return e.recompilePreview()}),d(68,"          "),r()()()(),n(69,"aside",47)(70,"div",48)(71,"div",8),l(72,"span",49),n(73,"span",50),d(74,"ISOLATED BLOB RUNTIME"),r()(),n(75,"div",51)(76,"button",52),c("click",function(){return e.previewDevice.set("desktop")}),l(77,"i",53),r(),n(78,"button",54),c("click",function(){return e.previewDevice.set("mobile")}),l(79,"i",55),r()()(),n(80,"div",56),O(81,me,1,1,"iframe",57)(82,ge,3,0,"div",58),r()()(),l(83,"p-confirmDialog",59),r()),t&2){let o;a(11),g("ngIf",(o=e.editorForm.get("nodeId"))==null?null:o.value),a(9),g("ngIf",e.activeNodeId()),a(4),g("disabled",e.isSubmitting()),a(),I(e.isSubmitting()?"pi pi-spin pi-spinner":"pi pi-cloud-upload"),a(2),x(e.activeNodeId()?"Sync Changes":"Deploy Payload"),a(6),k("NODE CLUSTERS (",e.nodes().length,")"),a(2),N(e.nodes()),a(2),g("formGroup",e.editorForm),a(10),p("active",e.activeCodeTab()==="html"),a(3),p("active",e.activeCodeTab()==="css"),a(3),p("active",e.activeCodeTab()==="js"),a(7),p("d-none",e.activeCodeTab()!=="html"),a(3),p("d-none",e.activeCodeTab()!=="css"),a(3),p("d-none",e.activeCodeTab()!=="js"),a(10),p("active",e.previewDevice()==="desktop"),a(2),p("active",e.previewDevice()==="mobile"),a(2),p("mobile-simulation",e.previewDevice()==="mobile"),a(),D(e.previewUrl()?81:82),a(2),E(j(29,ae))}},dependencies:[F,B,W,$,V,A,G,q,Y,K,J,ee,Z,ie,te,re,ne,X,Q],styles:["[_nghost-%COMP%]{display:block;font-family:system-ui,-apple-system,sans-serif;color:#e2e8f0}.ide-workspace-layout[_ngcontent-%COMP%]{width:100%}.ide-top-ribbon[_ngcontent-%COMP%]{background:#0f0e20;border:1px solid rgba(255,255,255,.08);border-radius:14px}.terminal-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:10px;height:10px;border-radius:50%}.dot-red[_ngcontent-%COMP%]{background:#ef4444}.dot-yellow[_ngcontent-%COMP%]{background:#f59e0b}.dot-green[_ngcontent-%COMP%]{background:#10b981}.ide-brand[_ngcontent-%COMP%]{font-size:.72rem;letter-spacing:.12em;color:#a78bfa}.route-slug-pill[_ngcontent-%COMP%]{font-size:.72rem;background:#ec489926;border:1px solid rgba(236,72,153,.35);color:#f472b6;padding:.2rem .6rem;border-radius:6px}.preset-chip[_ngcontent-%COMP%]{background:#ffffff0a;border:1px solid rgba(255,255,255,.1);color:#cbd5e1;font-size:.68rem;padding:.25rem .55rem;border-radius:6px;cursor:pointer;transition:all .2s ease}.preset-chip[_ngcontent-%COMP%]:hover{background:#ec489933;border-color:#ec4899;color:#fff}.ide-btn-new[_ngcontent-%COMP%], .ide-btn-deploy[_ngcontent-%COMP%], .ide-btn-danger[_ngcontent-%COMP%]{border:none;font-size:.78rem;font-weight:600;padding:.42rem .85rem;border-radius:8px;cursor:pointer;transition:all .2s ease;display:inline-flex;align-items:center}.ide-btn-new[_ngcontent-%COMP%]{background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#cbd5e1}.ide-btn-new[_ngcontent-%COMP%]:hover{background:#ffffff1f;color:#fff}.ide-btn-danger[_ngcontent-%COMP%]{background:#ef44441f;border:1px solid rgba(239,68,68,.3);color:#fb7185}.ide-btn-danger[_ngcontent-%COMP%]:hover{background:#ef444440;color:#fff}.ide-btn-deploy[_ngcontent-%COMP%]{background:linear-gradient(135deg,#a855f7,#ec4899);color:#fff;box-shadow:0 0 15px #ec489959}.ide-btn-deploy[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 0 20px #ec48998c}.ide-workbench-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:240px 1.1fr 1fr;height:calc(100vh - 170px);min-height:600px;background:#0d0c1c;border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden}.ide-file-tree[_ngcontent-%COMP%]{background:#0f0e22;border-right:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;overflow:hidden}.tree-title[_ngcontent-%COMP%]{font-size:.68rem;letter-spacing:.14em;color:#94a3b8}.tree-node-list[_ngcontent-%COMP%]{overflow-y:auto;flex:1}.tree-node-row[_ngcontent-%COMP%]{cursor:pointer;border-bottom:1px solid rgba(255,255,255,.03);transition:background .15s ease}.tree-node-row[_ngcontent-%COMP%]:hover{background:#ffffff08}.tree-node-row.active-file[_ngcontent-%COMP%]{background:#ec48991f;border-left:3px solid #ec4899}.node-slug-title[_ngcontent-%COMP%]{font-size:.8rem;color:#e2e8f0}.node-meta-title[_ngcontent-%COMP%]{font-size:.68rem;max-width:140px}.badge-active-indicator[_ngcontent-%COMP%]{font-size:.55rem;font-family:ui-monospace,monospace;padding:.15rem .35rem;background:#ec4899;color:#fff;border-radius:4px}.ide-code-matrix[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-right:1px solid rgba(255,255,255,.08);background:#080812}.editor-meta-strip[_ngcontent-%COMP%]{background:#111024;border-bottom:1px solid rgba(255,255,255,.08)}.meta-input[_ngcontent-%COMP%]{background:transparent!important;border:1px solid transparent!important;color:#fff!important;font-size:.85rem!important;padding:.3rem .5rem!important;border-radius:6px!important;transition:all .2s ease}.meta-input[_ngcontent-%COMP%]:focus{background:#ffffff0d!important;border-color:#ec489966!important}.title-field[_ngcontent-%COMP%]{font-weight:600;width:100%}.slug-wrap[_ngcontent-%COMP%]{background:#ffffff0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:0 .4rem}.slug-prefix[_ngcontent-%COMP%]{font-size:.7rem;color:#94a3b8}.slug-field[_ngcontent-%COMP%]{max-width:140px;color:#f472b6!important}.code-tab-bar[_ngcontent-%COMP%]{background:#0d0c1b;border-bottom:1px solid rgba(255,255,255,.06)}.code-tab-btn[_ngcontent-%COMP%]{background:none;border:none;border-bottom:2px solid transparent;color:#94a3b8;font-size:.75rem;font-family:ui-monospace,monospace;font-weight:600;padding:.65rem .9rem;cursor:pointer;transition:all .2s ease}.code-tab-btn[_ngcontent-%COMP%]:hover{color:#fff}.code-tab-btn.active[_ngcontent-%COMP%]{color:#fff;border-bottom-color:#ec4899;background:#ffffff05}.btn-quick-run[_ngcontent-%COMP%]{background:none;border:none;color:#a78bfa;font-size:.7rem;cursor:pointer}.btn-quick-run[_ngcontent-%COMP%]:hover{color:#f472b6}.editor-viewport[_ngcontent-%COMP%]{flex:1;overflow:hidden}.code-textarea[_ngcontent-%COMP%]{width:100%!important;height:100%!important;background:transparent!important;border:none!important;color:#f1f5f9!important;font-size:.84rem!important;line-height:1.6!important;padding:1rem 1.25rem!important;resize:none!important;box-shadow:none!important}.ide-preview-dock[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#06060c}.preview-header-bar[_ngcontent-%COMP%]{background:#0d0c1b;border-bottom:1px solid rgba(255,255,255,.08)}.runtime-pulse-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981}.device-switcher[_ngcontent-%COMP%]{background:#ffffff0a;border-radius:6px}.device-btn[_ngcontent-%COMP%]{background:none;border:none;color:#64748b;font-size:.8rem;padding:.2rem .45rem;border-radius:4px;cursor:pointer}.device-btn.active[_ngcontent-%COMP%]{background:#ec489940;color:#f472b6}.preview-frame-container[_ngcontent-%COMP%]{flex:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#000;overflow:hidden;transition:all .3s ease}.sandboxed-preview-iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:none;background:#09090b}.preview-frame-container.mobile-simulation[_ngcontent-%COMP%]{background:#111024;padding:1.5rem}.preview-frame-container.mobile-simulation[_ngcontent-%COMP%]   .sandboxed-preview-iframe[_ngcontent-%COMP%]{width:375px;height:667px;max-height:100%;border-radius:24px;border:2px solid rgba(255,255,255,.15);box-shadow:0 0 40px #000000e6}  .cyber-confirm-dialog .p-dialog-header{background:#14132b!important;border-bottom:1px solid rgba(255,255,255,.08)!important;color:#fff!important;padding:1.1rem 1.4rem!important}  .cyber-confirm-dialog .p-dialog-content{background:#0f0e20!important;color:#cbd5e1!important;padding:1.35rem 1.4rem!important;font-size:.92rem}  .cyber-confirm-dialog .p-confirm-dialog-icon{color:#f472b6!important;font-size:1.4rem!important}  .cyber-confirm-dialog .p-dialog-footer{background:#121126!important;border-top:1px solid rgba(255,255,255,.06)!important;padding:.9rem 1.4rem!important;display:flex;justify-content:flex-end;gap:.5rem}  .confirm-edit-btn.p-button{background:linear-gradient(135deg,#a855f7,#ec4899)!important;border:none!important;color:#fff!important;font-weight:600;border-radius:9999px!important}@media(max-width:1100px){.ide-workbench-grid[_ngcontent-%COMP%]{grid-template-columns:200px 1fr;grid-template-rows:1fr 1fr;height:auto}.ide-preview-dock[_ngcontent-%COMP%]{grid-column:1 / -1;min-height:420px}}@media(max-width:768px){.ide-workbench-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.ide-file-tree[_ngcontent-%COMP%]{max-height:180px}}"]})};export{oe as DynamicRenderManager};
