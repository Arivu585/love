import{a as de,b as ge}from"./chunk-MTIFGBCJ.js";import{b as re,c as le,i as M,o as me,p as pe,q as ce,s as se}from"./chunk-FXGVM4H5.js";import{d as ie}from"./chunk-RV2MUK3O.js";import"./chunk-VVO344T5.js";import{Ab as b,Ba as L,Bb as y,Dc as ne,Eb as G,Fa as o,Ib as g,J as B,Jb as d,K as F,Kb as C,Lb as J,M as D,Nd as P,O as x,Od as S,Qa as T,Qb as K,Ra as A,Sb as w,Ta as $,U as R,Ua as V,Ud as oe,V as j,Va as v,Xd as ae,Zb as W,_a as u,ac as X,bb as h,cb as _,ea as E,ha as I,hb as p,ib as a,jb as r,kb as c,ob as Q,pb as U,qb as k,rb as q,sc as Z,tb as H,tc as ee,vb as s,vc as te,wc as O,yb as Y}from"./chunk-BMOK6NN5.js";var fe=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var be=["content"],ye=["opposite"],Ce=["marker"],N=e=>({$implicit:e});function Me(e,n){e&1&&k(0)}function Te(e,n){e&1&&k(0)}function ke(e,n){if(e&1&&(Q(0),v(1,Te,1,0,"ng-container",3),U()),e&2){let t=s().$implicit,l=s();o(),p("ngTemplateOutlet",l.markerTemplate||l._markerTemplate)("ngTemplateOutletContext",w(2,N,t))}}function we(e,n){if(e&1&&c(0,"div",2),e&2){let t=s(2);g(t.cx("eventMarker")),p("pBind",t.ptm("eventMarker")),u("data-p",t.dataP)}}function Oe(e,n){if(e&1&&c(0,"div",2),e&2){let t=s(2);g(t.cx("eventConnector")),p("pBind",t.ptm("eventConnector")),u("data-p",t.dataP)}}function Pe(e,n){e&1&&k(0)}function Se(e,n){if(e&1&&(a(0,"div",2)(1,"div",2),v(2,Me,1,0,"ng-container",3),r(),a(3,"div",2),v(4,ke,2,4,"ng-container",4)(5,we,1,4,"ng-template",null,0,W)(7,Oe,1,4,"div",5),r(),a(8,"div",2),v(9,Pe,1,0,"ng-container",3),r()()),e&2){let t=n.$implicit,l=n.last,m=G(6),i=s();g(i.cx("event")),p("pBind",i.ptm("event")),u("data-p",i.dataP),o(),g(i.cx("eventOpposite")),p("pBind",i.ptm("eventOpposite")),u("data-p",i.dataP),o(),p("ngTemplateOutlet",i.oppositeTemplate||i._oppositeTemplate)("ngTemplateOutletContext",w(23,N,t)),o(),g(i.cx("eventSeparator")),p("pBind",i.ptm("eventSeparator")),u("data-p",i.dataP),o(),p("ngIf",i.markerTemplate||i._markerTemplate)("ngIfElse",m),o(3),p("ngIf",!l),o(),g(i.cx("eventContent")),p("pBind",i.ptm("eventContent")),u("data-p",i.dataP),o(),p("ngTemplateOutlet",i.contentTemplate||i._contentTemplate)("ngTemplateOutletContext",w(25,N,t))}}var Ee={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},ve=(()=>{class e extends oe{name="timeline";style=fe;classes=Ee;static \u0275fac=(()=>{let t;return function(m){return(t||(t=I(e)))(m||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var ue=new D("TIMELINE_INSTANCE"),z=(()=>{class e extends le{componentName="Timeline";bindDirectiveInstance=x(M,{self:!0});$pcTimeline=x(ue,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=x(ve);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}get dataP(){return this.cn({[this.layout]:this.layout,[this.align]:this.align})}static \u0275fac=(()=>{let t;return function(m){return(t||(t=I(e)))(m||e)}})();static \u0275cmp=T({type:e,selectors:[["p-timeline"]],contentQueries:function(l,m,i){if(l&1&&Y(i,be,4)(i,ye,4)(i,Ce,4)(i,P,4),l&2){let f;b(f=y())&&(m.contentTemplate=f.first),b(f=y())&&(m.oppositeTemplate=f.first),b(f=y())&&(m.markerTemplate=f.first),b(f=y())&&(m.templates=f)}},hostVars:3,hostBindings:function(l,m){l&2&&(u("data-p",m.dataP),g(m.cn(m.cx("root"),m.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[K([ve,{provide:ue,useExisting:e},{provide:re,useExisting:e}]),$([M]),V],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(l,m){l&1&&v(0,Se,10,27,"div",1),l&2&&p("ngForOf",m.value)},dependencies:[O,Z,ee,te,S,M],encapsulation:2,changeDetection:0})}return e})(),xe=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=A({type:e});static \u0275inj=F({imports:[z,S,S]})}return e})();function Ne(e,n){e&1&&(a(0,"div",6),c(1,"i",8),a(2,"span",9),d(3,"SYNCING CONSTELLATION NODES..."),r()())}function ze(e,n){e&1&&(a(0,"div",6),c(1,"i",10),a(2,"h4",11),d(3,"Orbit Ready"),r(),a(4,"p",12),d(5,"No memory nodes have been charted yet."),r()())}function Be(e,n){if(e&1&&(a(0,"div",17),c(1,"div",18),a(2,"div",19),c(3,"i"),r()()),e&2){let t=n.$implicit;o(3),g(t.icon||"pi pi-heart")}}function Fe(e,n){if(e&1&&(a(0,"div",20)(1,"span",21),d(2),r()()),e&2){let t=n.$implicit;o(2),C(t.date)}}function De(e,n){if(e&1&&(a(0,"div",23),c(1,"img",32)(2,"div",33),r()),e&2){let t=s().$implicit;o(),p("src",t.imageUrl,L)("alt",t.title)}}function Re(e,n){if(e&1&&(a(0,"span",28),c(1,"i",34),d(2),r()),e&2){let t=s().$implicit;o(2),J("",t.location," ")}}function je(e,n){if(e&1){let t=q();a(0,"div",31)(1,"button",35),H("click",function(){R(t);let m=s().$implicit,i=s(2);return j(i.openSecretPayload(m.dynamicRenderId))}),r()()}}function Le(e,n){if(e&1&&(a(0,"article",22),h(1,De,3,2,"div",23),a(2,"div",24)(3,"div",25)(4,"div",26)(5,"span",27),d(6),r(),h(7,Re,3,1,"span",28),r(),c(8,"p-tag",29),r(),a(9,"h3",30),d(10),r(),a(11,"p",12),d(12),r(),h(13,je,2,0,"div",31),r()()),e&2){let t=n.$implicit;o(),_(t.imageUrl?1:-1),o(5),C(t.date),o(),_(t.location?7:-1),o(),p("value",t.tag||"Moment"),o(2),C(t.title),o(2),C(t.description),o(),_(t.dynamicRenderId?13:-1)}}function Ae(e,n){if(e&1&&(a(0,"div",7)(1,"p-timeline",13),v(2,Be,4,2,"ng-template",14)(3,Fe,3,1,"ng-template",15)(4,Le,14,7,"ng-template",16),r()()),e&2){let t=s();o(),p("value",t.sortedMemories())}}var he=class e{router=x(ie);http=x(ne);apiBase=`${ae.apiBase||"http://localhost:5000"}/api/love/memories`;memories=E([]);isLoading=E(!0);sortedMemories=X(()=>[...this.memories()].sort((n,t)=>(n.orderIndex??0)-(t.orderIndex??0)));ngOnInit(){this.fetchMemories()}fetchMemories(){this.isLoading.set(!0),this.http.get(this.apiBase).subscribe({next:n=>{let t=Array.isArray(n)?n:n?.data||[];this.memories.set(t),this.isLoading.set(!1)},error:n=>{console.error("Failed to load memories from orbit:",n),this.isLoading.set(!1)}})}openSecretPayload(n){n&&this.router.navigate(["/US/dr",n])}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=T({type:e,selectors:[["app-memory-timeline"]],decls:13,vars:3,consts:[[1,"memory-stage"],[1,"memory-header","text-center","mb-5"],[1,"constellation-badge","mb-2"],[1,"pi","pi-sparkles","me-1","text-pink-400"],[1,"memory-title"],[1,"memory-subtitle"],[1,"memory-capsule","text-center","p-5","mx-auto","state-card"],[1,"timeline-container"],[1,"pi","pi-spin","pi-spinner","text-pink-400","fs-3","mb-3","d-block"],[1,"font-monospace","small","text-muted"],[1,"pi","pi-heart","text-pink-400","fs-3","mb-3","d-block"],[1,"capsule-title","mb-1"],[1,"capsule-text"],["align","alternate","styleClass","cosmic-timeline",3,"value"],["pTemplate","marker"],["pTemplate","opposite"],["pTemplate","content"],[1,"cosmic-node"],[1,"node-halo"],[1,"node-core"],[1,"node-timestamp"],[1,"timestamp-pill"],[1,"memory-capsule"],[1,"capsule-visual"],[1,"capsule-interior"],[1,"capsule-meta","mb-2"],[1,"meta-left"],[1,"timestamp-pill","d-md-none","me-2"],[1,"location-chip"],["styleClass","cosmic-pill-tag",3,"value"],[1,"capsule-title"],[1,"capsule-secret-action","pt-3","mt-3","border-top-glow"],["loading","lazy",1,"capsule-img",3,"src","alt"],[1,"visual-gradient-shim"],[1,"pi","pi-map-marker","me-1","text-pink-400"],["pButton","","pRipple","","type","button","icon","pi pi-sparkles","label","View Secret Node",1,"p-button-sm","p-button-rounded","secret-launch-btn","w-100",3,"click"]],template:function(t,l){t&1&&(a(0,"section",0)(1,"header",1)(2,"div",2),c(3,"i",3),a(4,"span"),d(5,"LIVING ARCHIVE"),r()(),a(6,"h1",4),d(7,"Moments in Orbit"),r(),a(8,"p",5),d(9,"Every milestone, inside joke, and memory locked in our private constellation."),r()(),h(10,Ne,4,0,"div",6),h(11,ze,6,0,"div",6),h(12,Ae,5,1,"div",7),r()),t&2&&(o(10),_(l.isLoading()?10:-1),o(),_(!l.isLoading()&&l.sortedMemories().length===0?11:-1),o(),_(!l.isLoading()&&l.sortedMemories().length>0?12:-1))},dependencies:[O,xe,z,P,se,ce,pe,me,ge,de],styles:[".memory-stage[_ngcontent-%COMP%]{max-width:1000px;margin:0 auto;padding:1.5rem 0 6rem}.constellation-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.72rem;letter-spacing:.18em;color:#c084fc;padding:.3rem .85rem;background:#a855f714;border:1px solid rgba(168,85,247,.25);border-radius:9999px}.memory-title[_ngcontent-%COMP%]{font-size:2.25rem;font-weight:800;letter-spacing:-.02em;background:linear-gradient(135deg,#f472b6,#c084fc,#60a5fa);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:.5rem 0}.memory-subtitle[_ngcontent-%COMP%]{color:#94a3b8;font-size:.95rem;max-width:500px;margin:0 auto}.state-card[_ngcontent-%COMP%]{max-width:460px}  .cosmic-timeline .p-timeline-event{display:flex;align-items:stretch;position:relative}  .cosmic-timeline .p-timeline-event-opposite,   .cosmic-timeline .p-timeline-event-content{flex:1 1 0%!important;min-width:0!important}  .cosmic-timeline .p-timeline-event-separator{flex:0 0 42px!important;display:flex;flex-direction:column;align-items:center}  .cosmic-timeline .p-timeline-event-connector{background:linear-gradient(to bottom,#ec4899,#a855f7 65%,#3b82f640)!important;width:2px!important;flex-grow:1;box-shadow:0 0 10px #ec489959}@media(min-width:769px){  .cosmic-timeline .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{display:flex;justify-content:flex-end;align-items:flex-start;padding:0 1.5rem 0 0!important}  .cosmic-timeline .p-timeline-event:nth-child(odd) .p-timeline-event-content{padding:0 0 2.75rem 1.5rem!important;text-align:left!important}  .cosmic-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{display:flex;justify-content:flex-start;align-items:flex-start;padding:0 0 0 1.5rem!important}  .cosmic-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{padding:0 1.5rem 2.75rem 0!important;text-align:left!important}}.cosmic-node[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:42px;height:42px;flex-shrink:0}.node-halo[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:50%;background:#ec489940;animation:_ngcontent-%COMP%_pulseNode 3s infinite ease-in-out}.node-core[_ngcontent-%COMP%]{position:relative;width:34px;height:34px;background:#0d0e1e;border:1px solid rgba(244,114,182,.65);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#f472b6;font-size:.9rem;box-shadow:0 0 12px #ec489973}@keyframes _ngcontent-%COMP%_pulseNode{0%,to{transform:scale(1);opacity:.4}50%{transform:scale(1.35);opacity:.8}}.node-timestamp[_ngcontent-%COMP%]{height:42px;display:inline-flex;align-items:center}.timestamp-pill[_ngcontent-%COMP%]{display:inline-block;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.76rem;letter-spacing:.06em;color:#e2e8f0;background:#ffffff0d;padding:.35rem .85rem;border-radius:9999px;border:1px solid rgba(255,255,255,.1);white-space:nowrap}.memory-capsule[_ngcontent-%COMP%]{width:100%;background:#121124a6;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.09);border-radius:22px;overflow:hidden;box-shadow:0 20px 40px -15px #0009;transition:transform .3s cubic-bezier(.16,1,.3,1),border-color .3s ease,box-shadow .3s ease}.memory-capsule[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#ec489961;box-shadow:0 25px 50px -12px #000000bf,0 0 25px #ec489924}.capsule-visual[_ngcontent-%COMP%]{position:relative;width:100%;height:210px;overflow:hidden}.capsule-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease}.memory-capsule[_ngcontent-%COMP%]:hover   .capsule-img[_ngcontent-%COMP%]{transform:scale(1.05)}.visual-gradient-shim[_ngcontent-%COMP%]{position:absolute;inset:0;background:linear-gradient(to top,rgba(18,17,36,.95) 0%,transparent 60%);pointer-events:none}.capsule-interior[_ngcontent-%COMP%]{padding:1.4rem 1.5rem;text-align:left}.capsule-meta[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem;flex-wrap:wrap}.meta-left[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.35rem}.location-chip[_ngcontent-%COMP%]{font-size:.78rem;color:#94a3b8;display:inline-flex;align-items:center}.capsule-title[_ngcontent-%COMP%]{font-size:1.22rem;font-weight:700;color:#fff;margin-bottom:.45rem;line-height:1.3}.capsule-text[_ngcontent-%COMP%]{text-align:justify;font-size:.9rem;line-height:1.65;color:#cbd5e1;white-space:pre-line;margin:0}  .cosmic-pill-tag.p-tag{background:#f472b61f!important;color:#f472b6!important;border:1px solid rgba(244,114,182,.28)!important;font-size:.68rem!important;letter-spacing:.05em;padding:.22rem .65rem!important;flex-shrink:0}.border-top-glow[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.08)}  .secret-launch-btn.p-button{background:linear-gradient(135deg,#a855f740,#ec489940)!important;border:1px solid rgba(236,72,153,.45)!important;color:#f8fafc!important;font-weight:600;font-size:.82rem!important;transition:all .25s ease!important}  .secret-launch-btn.p-button:hover{background:linear-gradient(135deg,#a855f7,#ec4899)!important;box-shadow:0 0 18px #ec489980!important;transform:translateY(-2px)}@media(max-width:768px){  .cosmic-timeline .p-timeline-event-opposite{display:none!important}  .cosmic-timeline .p-timeline-event,   .cosmic-timeline .p-timeline-event:nth-child(2n){flex-direction:row!important}  .cosmic-timeline .p-timeline-event-separator{flex:0 0 34px!important}  .cosmic-timeline .p-timeline-event-content,   .cosmic-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{padding:0 0 1.75rem .9rem!important;text-align:left!important}.cosmic-node[_ngcontent-%COMP%]{width:34px;height:34px}.node-core[_ngcontent-%COMP%]{width:28px;height:28px;font-size:.78rem}.capsule-visual[_ngcontent-%COMP%]{height:165px}.capsule-interior[_ngcontent-%COMP%]{padding:1.15rem}.timestamp-pill[_ngcontent-%COMP%]{font-size:.7rem;padding:.22rem .65rem}}"]})};export{he as MemoryTimeline};
