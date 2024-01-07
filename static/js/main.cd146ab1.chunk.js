(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(4),o=n.n(c),a=(n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(5)),l=n.n(a),r=n(0),d=function(e){var t=e.type,n=e.size,s=void 0===n?"md":n,i=e.onClick,c=void 0===i?function(){}:i,o=e.disabled,a=void 0!==o&&o,d=e.children,j=e.className,b=void 0===j?"":j;return console.log(s),Object(r.jsx)("button",{className:l()("action_button ".concat(b),{"action_button--large":"lg"===s}),type:"anchor"===t?"button":"submit",disabled:a,onClick:c,children:d})},j=function(){return Object(r.jsxs)("header",{className:"navbar",children:[Object(r.jsx)("img",{src:"./Logo.svg",alt:"",className:"header_logo"}),Object(r.jsxs)("nav",{className:"navbar-nav nav",children:[Object(r.jsx)(d,{type:"anchor",children:"Users"}),Object(r.jsx)(d,{type:"anchor",children:"Sing up"})]})]})},b=(n(19),function(){return Object(r.jsxs)("section",{className:"header",children:[Object(r.jsx)("p",{className:"header_title",children:"Test assignment for front-end developer"}),Object(r.jsx)("p",{className:"header_text",children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\u2032ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(r.jsx)(d,{type:"anchor",children:"Sing Up"})]})}),u=(n(20),n(21),function(e){var t=e.user,n=e.className,s=void 0===n?"":n;return console.log(t),Object(r.jsxs)("article",{className:"card ".concat(s),children:[Object(r.jsx)("img",{src:"https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg",onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="./photo-cover.svg"},alt:"user_photo",className:"card_photo"}),Object(r.jsx)("p",{className:"card_info card_info--title",children:"Salvador Stewart Flynn Thomas Rachinsky"}),Object(r.jsx)("p",{className:"card_info",children:"Frontend Developer Frontend DEVELOPER"}),Object(r.jsx)("p",{className:"card_info",children:"frontend_develop@gmail.com"}),Object(r.jsx)("p",{className:"card_info",children:"+38 (098) 278 44 24"})]})}),h=function(){return Object(r.jsxs)("section",{className:"list",children:[Object(r.jsx)("h2",{className:"list_item list_item--title",children:"Working with GET request"}),Object(r.jsxs)("div",{className:"list_item list_item--container",children:[Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(r.jsx)(u,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}})]}),Object(r.jsx)(d,{type:"anchor",size:"lg",className:"list_item list_item--button",children:"Show more"})]})},m=(n(22),n(3),function(e){var t=e.label;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{htmlFor:"inputText",className:"field_label field_label--visible",children:t}),Object(r.jsx)("input",{id:"inputText",type:"text",className:"field_input field_input--default",placeholder:t}),Object(r.jsx)("p",{className:"field_info",children:"Info message"})]})}),p=(n(23),function(e){var t=e.name,n=e.value,s=e.checked,i=void 0!==s&&s;return Object(r.jsxs)("div",{className:"radio",children:[Object(r.jsx)("input",{type:"radio",id:n,name:t,value:n,defaultChecked:i,className:"radio_button"}),Object(r.jsx)("label",{htmlFor:n,className:"radio_label",children:n})]})}),f=function(e){var t=e.onSubmit,n=void 0===t?function(){}:t;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("button",{type:"button",className:"field_button",onClick:n,children:"Upload"}),Object(r.jsx)("input",{type:"text",className:"field_input field_input--upload",placeholder:"Upload your photo",readOnly:!0}),Object(r.jsx)("p",{className:"field_info field_info--hidden",children:"Error text"})]})},x=function(){return Object(r.jsxs)("section",{className:"form",children:[Object(r.jsx)("h2",{className:"form_title",children:"Working with POST request"}),Object(r.jsxs)("form",{action:"",className:"form_container",children:[Object(r.jsx)(m,{label:"Your name"}),Object(r.jsx)(m,{label:"Email"}),Object(r.jsx)(m,{label:"Phone"}),Object(r.jsxs)("div",{className:"form_radio_group",children:[Object(r.jsx)("p",{children:"Select your position"}),Object(r.jsx)(p,{name:"position",value:"Frontend developer",checked:!0}),Object(r.jsx)(p,{name:"position",value:"Backend developer"}),Object(r.jsx)(p,{name:"position",value:"Designer"}),Object(r.jsx)(p,{name:"position",value:"QA"})]}),Object(r.jsx)(f,{onSubmit:function(){}})]}),Object(r.jsx)(d,{type:"submit",className:"form_button",children:"Sing Up"})]})},O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b,{}),Object(r.jsx)(h,{}),Object(r.jsx)(x,{})]})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.cd146ab1.chunk.js.map