"use strict";(self.webpackChunkAPP=self.webpackChunkAPP||[]).push([[153],{7153:(R,E,a)=>{a.r(E),a.d(E,{HomeModule:()=>S});var h=a(6575),m=a(451),t=a(9039),A=a(729),p=a(8222);function C(o,u){if(1&o&&(t.TgZ(0,"p",12),t._uU(1),t.qZA()),2&o){const i=t.oxw().$implicit;t.xp6(),t.Oqu(i.desc)}}function g(o,u){if(1&o&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"img",7),t.TgZ(3,"div",8)(4,"h5",9),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"uppercase"),t.qZA(),t.YNc(8,C,2,1,"p",10),t.TgZ(9,"a",11),t._uU(10),t.ALo(11,"translate"),t.qZA()()()()),2&o){const i=u.$implicit;t.xp6(2),t.Q6J("src","assets/images/"+i.name+".jpg",t.LSH)("alt",i.name),t.xp6(3),t.Oqu(t.lcZ(6,6,t.lcZ(7,8,i.name))),t.xp6(3),t.Q6J("ngIf",i.desc),t.xp6(),t.Q6J("routerLink","subject/"+i.name),t.xp6(),t.Oqu(t.lcZ(11,10,"LEARN"))}}function I(o,u){if(1&o&&(t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,g,12,12,"div",4),t.qZA()()),2&o){const i=t.oxw();t.xp6(2),t.Q6J("ngForOf",i.subjects["hydra:member"])}}const T=[{path:"",component:(()=>{class o{constructor(i,e,n){this.document=i,this.subjectService=e,this.translate=n,this.QUANTITY=100,this.PARTICLE_SIZE=10,this.window=this.document.defaultView}ngOnInit(){this.subjectService.get().subscribe(i=>{this.subjects=i}),this.CONTAINER=this.document.querySelector("section"),this.SCREEN_WIDTH=this.CONTAINER.offsetWidth,this.SCREEN_HEIGHT=this.CONTAINER.offsetHeight,this.CANVAS=this.document.querySelector(".canvas-background"),this.CANVAS&&this.CANVAS.getContext&&(this.context=this.CANVAS.getContext("2d"),this.context.globalCompositeOperation="destination-over",this.window.addEventListener("resize",()=>this.windowResizeHandler(),!1),this.windowResizeHandler(),this.createParticles(),this.loop())}windowResizeHandler(){this.SCREEN_WIDTH=this.CONTAINER.offsetWidth,this.SCREEN_HEIGHT=this.CONTAINER.offsetHeight,this.CANVAS.width=this.SCREEN_WIDTH,this.CANVAS.height=this.SCREEN_HEIGHT}createParticles(){this.particles=[];for(let e=0;e<this.QUANTITY;e++){const n=this.PARTICLE_SIZE/2+Math.random()*(this.CONTAINER.offsetWidth-this.PARTICLE_SIZE/2),r=this.PARTICLE_SIZE/2+Math.random()*(this.CONTAINER.offsetHeight-this.PARTICLE_SIZE/2),c=2,d=-c+Math.random()*c*2,s=-c+Math.random()*c*2;this.particles.push({position:{x:n,y:r},size:this.PARTICLE_SIZE,directionX:d,directionY:s,speed:c,targetX:n,targetY:r,depth:0,index:e,fillColor:`#${(60159*Math.random()+16711680|0).toString(16)}`})}}loop(){const i=this.document.documentElement.getAttribute("data-bs-theme");this.context.fillStyle="dark"===i?"rgba(33, 37, 41, 0.2)":"rgba(248, 249, 250, 0.2)",this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height);let e=0,n=0,r=0,c=0;for(let d=0;d<this.particles.length;d++){const s=this.particles[d],x={x:s.position.x,y:s.position.y};(s.position.x<=s.size/2||s.position.x>=this.SCREEN_WIDTH-this.PARTICLE_SIZE/2)&&(s.directionX*=-1),(s.position.y<=s.size/2||s.position.y>=this.SCREEN_HEIGHT-this.PARTICLE_SIZE/2)&&(s.directionY*=-1);for(let f=0;f<this.particles.length;f++){const l=this.particles[f];l.index!==s.index&&(e=this.PARTICLE_SIZE,n=Math.abs(l.position.x-s.position.x),r=Math.abs(l.position.y-s.position.y),c=Math.sqrt(n**2+r**2),c<e&&(this.randomiseDirection(s),this.randomiseDirection(l)))}s.position.x-=s.directionX,s.position.y-=s.directionY,this.context.beginPath(),this.context.fillStyle=s.fillColor,this.context.lineWidth=s.size,this.context.moveTo(x.x,x.y),this.context.arc(s.position.x,s.position.y,s.size/2,0,2*Math.PI,!0),this.context.closePath(),this.context.fill()}this.window.requestAnimationFrame(()=>this.loop())}randomiseDirection(i){let e=0;for(;0===e||90===e||180===e||360===e;)e=Math.floor(360*Math.random());const n=180*e/Math.PI;i.directionX=Math.sin(n)*i.speed,i.directionY=Math.cos(n)*i.speed}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(h.K0),t.Y36(A._),t.Y36(p.sK))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:2,vars:1,consts:[[1,"canvas-background"],["class","container",4,"ngIf"],[1,"container"],[1,"row","align-items-center","justify-content-around"],["class","col-md-6 col-sm-12 my-2",4,"ngFor","ngForOf"],[1,"col-md-6","col-sm-12","my-2"],[1,"card"],[1,"card-img-top","img-fluid",3,"src","alt"],[1,"card-body","text-center"],[1,"card-title"],["class","card-text",4,"ngIf"],[1,"btn","btn-outline-primary",3,"routerLink"],[1,"card-text"]],template:function(e,n){1&e&&(t._UZ(0,"canvas",0),t.YNc(1,I,3,1,"div",1)),2&e&&(t.xp6(),t.Q6J("ngIf",n.subjects))},dependencies:[h.sg,h.O5,m.rH,h.gd,p.X$],encapsulation:2})}return o})()}];let N=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#i=this.\u0275mod=t.oAB({type:o});static#s=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(T),m.Bz]})}return o})(),S=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#i=this.\u0275mod=t.oAB({type:o});static#s=this.\u0275inj=t.cJS({imports:[h.ez,N,p.aw]})}return o})()}}]);
//# sourceMappingURL=153.874bfb4491b3c16d.js.map