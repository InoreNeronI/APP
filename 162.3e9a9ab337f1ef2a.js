"use strict";(self.webpackChunkAPP=self.webpackChunkAPP||[]).push([[162],{8162:(K,h,l)=>{l.r(h),l.d(h,{AuthModule:()=>x});var p=l(6575),e=l(8849),m=l(2225),u=l(7096),I=l(1670),C=l(2389),Z=l(3252),Q=l(553),r=l(9039),w=l(4860),E=l(7548);function N(t,a){1&t&&(r.TgZ(0,"small",18),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t&&(r.xp6(),r.Oqu(r.lcZ(2,1,"FIRST_NAME_REQUIRED")))}function U(t,a){1&t&&(r.TgZ(0,"small",18),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t&&(r.xp6(),r.Oqu(r.lcZ(2,1,"LAST_NAME_REQUIRED")))}function R(t,a){1&t&&(r.TgZ(0,"small",18),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t&&(r.xp6(),r.Oqu(r.lcZ(2,1,"EMAIL_REQUIRED")))}function L(t,a){1&t&&(r.TgZ(0,"small",18),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t&&(r.xp6(),r.Oqu(r.lcZ(2,1,"PASSWORD_REQUIRED")))}function M(t,a){1&t&&r._UZ(0,"img",19)}function D(t,a){1&t&&(r.TgZ(0,"div",20),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t&&(r.xp6(),r.Oqu(r.lcZ(2,1,"EMAIL_EXISTS")))}const c=t=>({"has-error":t}),T=()=>["/auth"];let q=(()=>{class t{constructor(n,A,o,s){this.http=n,this.router=A,this.toastr=o,this.translateService=s,this.form=new e.nJ({firstName:new e.p4("",e.kI.required),lastName:new e.p4("",e.kI.required),email:new e.p4("",[e.kI.email,e.kI.required]),password:new e.p4("",e.kI.required)}),this.loading=!0}ngOnInit(){this.loading=!1}register(){this.make(this.form.value)}make({firstName:n,lastName:A,email:o,password:s}){var i=this;return this.http.post(Q.N.api.user,{observe:"response",firstName:n,lastName:A,email:o,plainPassword:s}).pipe((0,C.K)(f=>(this.error=f.error,(0,Z._)(f)))).subscribe(function(){var f=(0,I.Z)(function*(g){g.hasOwnProperty("email")&&(i.loading=!0,i.toastr.info(i.translateService.instant("SIGNED_UP",{email:g.email})),yield i.router.navigate(["/auth"]))});return function(g){return f.apply(this,arguments)}}())}static#r=this.\u0275fac=function(A){return new(A||t)(r.Y36(w.eN),r.Y36(u.F0),r.Y36(E._W),r.Y36(m.sK))};static#o=this.\u0275cmp=r.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[r.jDz],decls:38,vars:43,consts:[[1,"container"],[1,"text-center"],["name","form","role","form",3,"formGroup","ngSubmit"],[1,"form-group",3,"ngClass"],["for","firstName","role","button"],["class","form-text position-absolute text-danger",4,"ngIf"],["type","text","name","firstName","formControlName","firstName","id","firstName","required","",1,"form-control",3,"placeholder"],["for","lastName","role","button"],["type","text","name","lastName","formControlName","lastName","id","lastName","required","",1,"form-control",3,"placeholder"],["for","email","role","button"],["type","text","name","email","id","email","formControlName","email","required","",1,"form-control",3,"placeholder"],["for","password","role","button"],["type","password","name","password","id","password","formControlName","password","required","",1,"form-control",3,"placeholder"],[1,"form-actions","mt-4","text-center"],["type","submit",1,"btn","btn-outline-primary","me-3",3,"disabled"],["alt","loading","src","data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==",4,"ngIf"],[1,"btn","btn-outline",3,"routerLink"],["class","alert alert-danger mb-0 mt-3 px-2 py-1","role","alert",4,"ngIf"],[1,"form-text","position-absolute","text-danger"],["alt","loading","src","data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="],["role","alert",1,"alert","alert-danger","mb-0","mt-3","px-2","py-1"]],template:function(A,o){1&A&&(r.TgZ(0,"div",0)(1,"h2",1),r._uU(2),r.ALo(3,"translate"),r.qZA(),r.TgZ(4,"form",2),r.NdJ("ngSubmit",function(){return o.register()}),r.TgZ(5,"div",3)(6,"label",4),r._uU(7,"\xa0"),r.qZA(),r.YNc(8,N,3,3,"small",5),r._UZ(9,"input",6),r.ALo(10,"translate"),r.qZA(),r.TgZ(11,"div",3)(12,"label",7),r._uU(13,"\xa0"),r.qZA(),r.YNc(14,U,3,3,"small",5),r._UZ(15,"input",8),r.ALo(16,"translate"),r.qZA(),r.TgZ(17,"div",3)(18,"label",9),r._uU(19,"\xa0"),r.qZA(),r.YNc(20,R,3,3,"small",5),r._UZ(21,"input",10),r.ALo(22,"translate"),r.qZA(),r.TgZ(23,"div",3)(24,"label",11),r._uU(25,"\xa0"),r.qZA(),r.YNc(26,L,3,3,"small",5),r._UZ(27,"input",12),r.ALo(28,"translate"),r.qZA(),r.TgZ(29,"div",13)(30,"button",14),r._uU(31),r.ALo(32,"translate"),r.qZA(),r.YNc(33,M,1,0,"img",15),r.TgZ(34,"button",16),r._uU(35),r.ALo(36,"translate"),r.qZA()(),r.YNc(37,D,3,3,"div",17),r.qZA()()),2&A&&(r.xp6(2),r.Oqu(r.lcZ(3,20,"REGISTER")),r.xp6(2),r.Q6J("formGroup",o.form),r.xp6(),r.Q6J("ngClass",r.VKq(34,c,o.form.controls.firstName.touched&&(null==o.form.controls.firstName.errors?null:o.form.controls.firstName.errors.required))),r.xp6(3),r.Q6J("ngIf",o.form.controls.firstName.touched&&(null==o.form.controls.firstName.errors?null:o.form.controls.firstName.errors.required)),r.xp6(),r.s9C("placeholder",r.lcZ(10,22,"FIRST_NAME")),r.xp6(2),r.Q6J("ngClass",r.VKq(36,c,o.form.controls.lastName.touched&&(null==o.form.controls.lastName.errors?null:o.form.controls.lastName.errors.required))),r.xp6(3),r.Q6J("ngIf",o.form.controls.lastName.touched&&(null==o.form.controls.lastName.errors?null:o.form.controls.lastName.errors.required)),r.xp6(),r.s9C("placeholder",r.lcZ(16,24,"LAST_NAME")),r.xp6(2),r.Q6J("ngClass",r.VKq(38,c,o.form.controls.email.touched&&(null==o.form.controls.email.errors?null:o.form.controls.email.errors.required))),r.xp6(3),r.Q6J("ngIf",o.form.controls.email.touched&&(null==o.form.controls.email.errors?null:o.form.controls.email.errors.required)),r.xp6(),r.s9C("placeholder",r.lcZ(22,26,"EMAIL")),r.xp6(2),r.Q6J("ngClass",r.VKq(40,c,o.form.controls.password.touched&&(null==o.form.controls.password.errors?null:o.form.controls.password.errors.required))),r.xp6(3),r.Q6J("ngIf",o.form.controls.password.touched&&(null==o.form.controls.password.errors?null:o.form.controls.password.errors.required)),r.xp6(),r.s9C("placeholder",r.lcZ(28,28,"PASSWORD")),r.xp6(3),r.Q6J("disabled",!o.form.valid&&!o.loading),r.xp6(),r.Oqu(r.lcZ(32,30,"REGISTER")),r.xp6(2),r.Q6J("ngIf",o.loading),r.xp6(),r.Q6J("routerLink",r.DdM(42,T)),r.xp6(),r.Oqu(r.lcZ(36,32,"CANCEL")),r.xp6(2),r.Q6J("ngIf",o.error))},dependencies:[e.u5,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.UX,e.sg,e.u,p.mk,p.O5,u.rH,m.aw,m.X$],encapsulation:2})}return t})();function G(t,a){1&t&&(r.TgZ(0,"small",13),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t&&(r.xp6(),r.Oqu(r.lcZ(2,1,"EMAIL_REQUIRED")))}function b(t,a){1&t&&(r.TgZ(0,"small",13),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t&&(r.xp6(),r.Oqu(r.lcZ(2,1,"PASSWORD_REQUIRED")))}function Y(t,a){if(1&t&&(r.TgZ(0,"div",14),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&t){const n=r.oxw();r.xp6(),r.Oqu(r.lcZ(2,1,n.error.error))}}const J=t=>({"has-error":t}),v=()=>["/auth/register"];let d=(()=>{class t{constructor(n,A,o,s){this.http=n,this.router=A,this.toastr=o,this.translateService=s,this.form=new e.nJ({email:new e.p4("",[e.kI.required,e.kI.email]),password:new e.p4("",e.kI.required)}),this.loading=!0}ngOnInit(){this.loading=!1}login(){this.make(this.form.value)}make({email:n,password:A}){var o=this;return this.http.post(Q.N.api.login,{observe:"response",email:n,password:A}).pipe((0,C.K)(s=>(this.error=s.error,(0,Z._)(s)))).subscribe(function(){var s=(0,I.Z)(function*(i){i.hasOwnProperty("roles")&&(o.loading=!0,localStorage.setItem("currentUser",n),localStorage.setItem("currentRole",JSON.parse(i.roles.content)[0]),o.toastr.info(o.translateService.instant("LOGGED_IN")),yield o.router.navigate(["/"]))});return function(i){return s.apply(this,arguments)}}())}static#r=this.\u0275fac=function(A){return new(A||t)(r.Y36(w.eN),r.Y36(u.F0),r.Y36(E._W),r.Y36(m.sK))};static#o=this.\u0275cmp=r.Xpm({type:t,selectors:[["app-auth"]],standalone:!0,features:[r.jDz],decls:25,vars:28,consts:[[1,"container"],[1,"text-center"],["name","form","role","form",3,"formGroup","ngSubmit"],[1,"form-group",3,"ngClass"],["for","email","role","button"],["class","form-text position-absolute text-danger",4,"ngIf"],["type","text","id","email","formControlName","email","required","",1,"form-control",3,"placeholder"],["for","password","role","button"],["type","password","id","password","formControlName","password","required","",1,"form-control",3,"placeholder"],["class","alert alert-danger mb-0 mt-3 px-2 py-1","role","alert",4,"ngIf"],[1,"form-actions","mt-4","text-center"],["type","submit","id","submit",1,"btn","btn-outline-primary","me-3",3,"disabled"],[1,"btn","btn-outline",3,"routerLink"],[1,"form-text","position-absolute","text-danger"],["role","alert",1,"alert","alert-danger","mb-0","mt-3","px-2","py-1"]],template:function(A,o){1&A&&(r.TgZ(0,"div",0)(1,"h2",1),r._uU(2),r.ALo(3,"translate"),r.qZA(),r.TgZ(4,"form",2),r.NdJ("ngSubmit",function(){return o.login()}),r.TgZ(5,"div",3)(6,"label",4),r._uU(7,"\xa0"),r.qZA(),r.YNc(8,G,3,3,"small",5),r._UZ(9,"input",6),r.ALo(10,"translate"),r.qZA(),r.TgZ(11,"div",3)(12,"label",7),r._uU(13,"\xa0"),r.qZA(),r.YNc(14,b,3,3,"small",5),r._UZ(15,"input",8),r.ALo(16,"translate"),r.qZA(),r.YNc(17,Y,3,3,"div",9),r.TgZ(18,"div",10)(19,"button",11),r._uU(20),r.ALo(21,"translate"),r.qZA(),r.TgZ(22,"button",12),r._uU(23),r.ALo(24,"translate"),r.qZA()()()()),2&A&&(r.xp6(2),r.Oqu(r.lcZ(3,13,"LOGIN")),r.xp6(2),r.Q6J("formGroup",o.form),r.xp6(),r.Q6J("ngClass",r.VKq(23,J,o.form.controls.email.touched&&(null==o.form.controls.email.errors?null:o.form.controls.email.errors.required))),r.xp6(3),r.Q6J("ngIf",o.form.controls.email.touched&&(null==o.form.controls.email.errors?null:o.form.controls.email.errors.required)),r.xp6(),r.s9C("placeholder",r.lcZ(10,15,"EMAIL")),r.xp6(2),r.Q6J("ngClass",r.VKq(25,J,o.form.controls.password.touched&&(null==o.form.controls.password.errors?null:o.form.controls.password.errors.required))),r.xp6(3),r.Q6J("ngIf",o.form.controls.password.touched&&(null==o.form.controls.password.errors?null:o.form.controls.password.errors.required)),r.xp6(),r.s9C("placeholder",r.lcZ(16,17,"PASSWORD")),r.xp6(2),r.Q6J("ngIf",o.error),r.xp6(2),r.Q6J("disabled",!o.form.valid&&!o.loading),r.xp6(),r.hij(" ",r.lcZ(21,19,"LOGIN")," "),r.xp6(2),r.Q6J("routerLink",r.DdM(27,v)),r.xp6(),r.Oqu(r.lcZ(24,21,"REGISTER")))},dependencies:[e.u5,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.UX,e.sg,e.u,p.mk,p.O5,u.rH,m.aw,m.X$],encapsulation:2})}return t})();const S=[{path:"register",component:q},{path:"login",component:d},{path:"",component:d}];let _=(()=>{class t{static#r=this.\u0275fac=function(A){return new(A||t)};static#o=this.\u0275mod=r.oAB({type:t});static#t=this.\u0275inj=r.cJS({imports:[u.Bz.forChild(S),u.Bz]})}return t})(),x=(()=>{class t{static#r=this.\u0275fac=function(A){return new(A||t)};static#o=this.\u0275mod=r.oAB({type:t});static#t=this.\u0275inj=r.cJS({imports:[p.ez,_,e.u5,e.UX,m.aw,d,q]})}return t})()}}]);
//# sourceMappingURL=162.3e9a9ab337f1ef2a.js.map