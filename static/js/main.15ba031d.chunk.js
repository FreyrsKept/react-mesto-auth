(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(19),i=n.n(s),o=(n(32),n(8)),r=n(4),l=n(3);function u(e){return e.ok?e.json():Promise.reject(e.status)}var p="https://auth.nomoreparties.co";var d=n(9),j=n(10),b=new(function(){function e(t){Object(d.a)(this,e),this._serverUrl=t.baseUrl,this._headers=t.headers}return Object(j.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._serverUrl,"/users/me"),{headers:this._headers})}},{key:"sendUserInfo",value:function(e){return this._request("".concat(this._serverUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.profile_name,about:e.profile_job})})}},{key:"setUserAvatar",value:function(e){return this._request("".concat(this._serverUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar_link})})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._serverUrl,"/cards"),{headers:this._headers})}},{key:"sendNewCardInfo",value:function(e){return this._request("".concat(this._serverUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._serverUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"setCardLike",value:function(e){return this._request("".concat(this._serverUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteCardLike",value:function(e){return this._request("".concat(this._serverUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"22a80f01-2e20-4165-a510-fb1f75ebd7a5","Content-Type":"application/json"}}),m=n(12),h=n.p+"static/media/logo.03b78ada.svg",_=n(1);var f=function(e){return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("img",{className:"header__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}),Object(_.jsxs)("nav",{className:"header__auth",children:[Object(_.jsx)("p",{className:"header__text",children:e.mail}),Object(_.jsx)(m.b,{to:e.route,className:"header__link",type:"button",onClick:e.onClick,children:e.title})]})]})},O=c.a.createContext();var v=function(e){var t=c.a.useContext(O),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),s="cards__delete ".concat(n?"cards__delete_active":""),i="cards__like-button ".concat(a?"cards__like-button_active":"");return Object(_.jsxs)("div",{className:"cards__element",children:[Object(_.jsx)("button",{type:"button",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:s,onClick:function(){e.onCardDelete(e.card)}}),Object(_.jsx)("img",{className:"cards__image",src:e.link,alt:e.name,title:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0444\u043e\u0442\u043e",onClick:function(){e.onCardClick(e.card)}}),Object(_.jsxs)("div",{className:"cards__info",children:[Object(_.jsx)("h2",{className:"cards__title",children:e.name}),Object(_.jsxs)("div",{className:"cards__like-wrp",children:[Object(_.jsx)("button",{type:"button",title:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:i,onClick:function(){e.onCardLike(e.card)}}),Object(_.jsx)("p",{className:"cards__like-counter",children:e.likes})]})]})]})};var x=function(e){var t=c.a.useContext(O);return Object(_.jsxs)("main",{className:"main",children:[Object(_.jsxs)("section",{className:"profile",children:[Object(_.jsx)("button",{className:"profile__avatar-edit",type:"button",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClick:e.onEditAvatar,children:Object(_.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:t.name})}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsx)("h1",{className:"profile__name",children:t.name}),Object(_.jsx)("button",{className:"profile__name-edit",type:"button",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile}),Object(_.jsx)("p",{className:"profile__description",children:t.about})]}),Object(_.jsx)("button",{className:"profile__add",type:"button",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",onClick:e.onAddPlace})]}),Object(_.jsx)("section",{className:"cards",children:Object(_.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){return Object(_.jsx)(v,{id:t._id,card:t,link:t.link,name:t.name,likes:t.likes.length,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var g=function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("p",{className:"footer__description",children:"\xa9 2023 Mesto Russia"})})};var C=function(e){return Object(_.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:e.onCloseClick,children:Object(_.jsxs)("div",{className:"popup__container",children:[Object(_.jsxs)("form",{name:e.form,className:"popup__form",onSubmit:e.onSubmit,children:[Object(_.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(_.jsx)("button",{type:"submit",title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"popup__submit",children:e.buttonText})]}),Object(_.jsx)("button",{type:"button",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})};var k=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1],p=c.a.useContext(O);return c.a.useEffect((function(){e.isOpen&&(s(p.name),u(p.about))}),[e.isOpen,p]),Object(_.jsxs)(C,{isOpen:e.isOpen,onCloseClick:e.onCloseClick,onClose:e.onClose,name:"edit",form:"profileSettings",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onSubmit({profile_name:a,profile_job:l})},children:[Object(_.jsx)("input",{name:"name",id:"username-input",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input",minLength:"2",maxLength:"40",value:a,onChange:function(e){s(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"username-input-error popup__input-error"}),Object(_.jsx)("input",{name:"about",id:"description-input",type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",className:"popup__input",minLength:"2",maxLength:"200",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"description-input-error popup__input-error"})]})};var N=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return c.a.useEffect((function(){e.isOpen&&(s(""),u(""))}),[e.isOpen]),Object(_.jsxs)(C,{isOpen:e.isOpen,onCloseClick:e.onCloseClick,onClose:e.onClose,name:"add",form:"placeData",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onSubmit({name:a,link:l})},children:[Object(_.jsx)("input",{name:"name",id:"place-name-input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",className:"popup__input popup__input_image-name",minLength:"2",maxLength:"30",value:a,onChange:function(e){s(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"place-name-input-error popup__input-error"}),Object(_.jsx)("input",{name:"link",id:"place-image-input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"popup__input popup__input_image-link",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"place-image-input-error popup__input-error"})]})};var y=function(e){return Object(_.jsx)("div",{className:'popup popup_type_image-view " '.concat(e.card?"popup_opened":""),children:Object(_.jsxs)("figure",{className:"popup__figure",children:[Object(_.jsx)("img",{className:"popup__image",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),Object(_.jsx)("figcaption",{className:"popup__caption",children:e.card?e.card.name:""}),Object(_.jsx)("button",{type:"button",id:"popup__close-button_view_card",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})};var S=function(e){var t=c.a.useRef();return c.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(_.jsxs)(C,{isOpen:e.isOpen,onCloseClick:e.onCloseClick,onClose:e.onClose,name:"avatar",form:"avatarAdd",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onSubmit({avatar_link:t.current.value})},children:[Object(_.jsx)("input",{type:"url",name:"avatar",form:"avatar-edit",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_avatar-link",id:"avatar-link-input",ref:t}),Object(_.jsx)("span",{className:"avatar-link-input-error popup__input-error"})]})};var E=function(e){return Object(_.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),onClick:e.onCloseClick,children:Object(_.jsxs)("div",{className:"popup__info",children:[Object(_.jsx)("img",{className:"popup__status",src:e.image,alt:e.title}),Object(_.jsx)("h2",{className:"popup__message",children:e.title}),Object(_.jsx)("button",{className:"popup__close",type:"button",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})},L=n(26),T=n(27),q=["component"];var w=function(e){var t=e.component,n=Object(T.a)(e,q);return n.isLogged?Object(_.jsx)(t,Object(L.a)({},n)):Object(_.jsx)(l.a,{to:"/sign-in"})};var U=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return Object(_.jsxs)("section",{className:"login",children:[Object(_.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(_.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onLogin(c,l)},children:[Object(_.jsx)("input",{className:"login__input",type:"email",placeholder:"Email",value:c,onChange:function(e){s(e.target.value)},required:!0}),Object(_.jsx)("input",{className:"login__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,autoComplete:"on",onChange:function(e){u(e.target.value)},required:!0}),Object(_.jsx)("button",{className:"login__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var P=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return Object(_.jsxs)("section",{className:"login",children:[Object(_.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(_.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onRegister(c,l)},children:[Object(_.jsx)("input",{className:"login__input",type:"email",placeholder:"Email",value:c,onChange:function(e){s(e.target.value)},required:!0}),Object(_.jsx)("input",{className:"login__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,onChange:function(e){u(e.target.value)},autoComplete:"on",required:!0}),Object(_.jsx)("button",{className:"login__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(_.jsxs)("p",{className:"login__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(_.jsx)(m.b,{to:"/sign-in",className:"login__link",children:"\u0412\u043e\u0439\u0442\u0438"})," "]})]})},D=n.p+"static/media/resolve.8fdedbea.svg",I=n.p+"static/media/reject.df8eddf6.svg";var A=function(){var e=Object(l.p)(),t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!1),d=Object(r.a)(i,2),j=d[0],m=d[1],h=Object(a.useState)(!1),v=Object(r.a)(h,2),C=v[0],L=v[1],T=Object(a.useState)(null),q=Object(r.a)(T,2),A=q[0],F=q[1],J=Object(a.useState)({}),R=Object(r.a)(J,2),B=R[0],z=R[1],H=Object(a.useState)([]),M=Object(r.a)(H,2),G=M[0],K=M[1],Q=Object(a.useState)(!1),V=Object(r.a)(Q,2),W=V[0],X=V[1],Y=Object(a.useState)(null),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ne=Object(r.a)(te,2),ae=ne[0],ce=ne[1],se=Object(a.useState)(""),ie=Object(r.a)(se,2),oe=ie[0],re=ie[1],le=Object(a.useState)(!1),ue=Object(r.a)(le,2),pe=ue[0],de=ue[1];function je(){de(!0)}function be(){L(!1),s(!1),m(!1),F(null),de(!1)}return Object(a.useEffect)((function(){Promise.all([b.getUserInfo(),b.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];z(n),K(a)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){if(j||C||c||A){var e=function(e){"Escape"===e.key&&be()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[j,C,c,A]),Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(p,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(u)}(e).then((function(e){e&&(X(!0),ee(e.data.email))})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){!0===W&&e("/")}),[W,e]),Object(_.jsx)(O.Provider,{value:B,children:Object(_.jsx)("div",{className:"page",children:Object(_.jsxs)("div",{className:"page__content",children:[Object(_.jsxs)(l.d,{children:[Object(_.jsx)(l.b,{path:"/sign-in",element:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",route:"/sign-up"}),Object(_.jsx)(U,{onLogin:function(t,n){(function(e,t){return fetch("".concat(p,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(u)})(t,n).then((function(n){localStorage.setItem("jwt",n.token),X(!0),ee(t),e("/")})).catch((function(){ce(I),re("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),je()}))}})]})}),Object(_.jsx)(l.b,{path:"/sign-up",element:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f,{title:"\u0412\u043e\u0439\u0442\u0438",route:"/sign-in"}),Object(_.jsx)(P,{onRegister:function(t,n){(function(e,t){return fetch("".concat(p,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(u)})(t,n).then((function(){ce(D),re("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),e("/sign-in")})).catch((function(){ce(I),re("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")})).finally(je)}})]})}),Object(_.jsx)(l.b,{exact:!0,path:"/",element:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f,{title:"\u0412\u044b\u0439\u0442\u0438",mail:$,onClick:function(){X(!1),ee(null),e("/sign-in"),localStorage.removeItem("jwt")},route:""}),Object(_.jsx)(w,{component:x,isLogged:W,onEditAvatar:function(){L(!0)},onEditProfile:function(){s(!0)},onAddPlace:function(){m(!0)},onCardClick:function(e){F(e)},cards:G,onCardLike:function(e){e.likes.some((function(e){return e._id===B._id}))?b.deleteCardLike(e._id).then((function(t){K((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.error(e)})):b.setCardLike(e._id).then((function(t){K((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){b.deleteCard(e).then((function(){K((function(t){return t.filter((function(t){return t._id!==e._id&&t}))}))})).catch((function(e){console.error(e)}))}}),Object(_.jsx)(g,{})]})}),Object(_.jsx)(l.b,{path:"*",element:Object(_.jsx)(l.a,{to:W?"/":"/sign-in"})})]}),Object(_.jsx)(k,{isOpen:c,onClose:be,onSubmit:function(e){b.sendUserInfo(e).then((function(e){z(e),be()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(S,{isOpen:C,onClose:be,onSubmit:function(e){b.setUserAvatar(e).then((function(e){z(e),be()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(N,{isOpen:j,onClose:be,onSubmit:function(e){b.sendNewCardInfo(e).then((function(e){K([e].concat(Object(o.a)(G))),be()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(y,{card:A,onClose:be}),Object(_.jsx)(E,{image:ae,title:oe,isOpen:pe,onClose:be})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(m.a,{children:Object(_.jsx)(A,{})})}),document.getElementById("root")),F()}},[[34,1,2]]]);
//# sourceMappingURL=main.15ba031d.chunk.js.map