(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(4),o=n.n(c),a=(n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(0)),l=function(e){var t=e.type,n=e.onClick,s=void 0===n?function(){}:n,i=e.disabled,c=void 0!==i&&i,o=e.children,l=e.className,r=void 0===l?"":l;return Object(a.jsx)("button",{className:"action_button ".concat(r),type:"anchor"===t?"button":"submit",disabled:c,onClick:s,children:o})},r=function(){return Object(a.jsxs)("header",{className:"navbar",children:[Object(a.jsx)("img",{src:"/Logo.svg",alt:"",className:"header_logo"}),Object(a.jsxs)("nav",{className:"navbar-nav nav",children:[Object(a.jsx)(l,{type:"anchor",children:"Users"}),Object(a.jsx)(l,{type:"anchor",children:"Sing up"})]})]})},d=(n(18),function(){return Object(a.jsxs)("section",{className:"header",children:[Object(a.jsx)("p",{className:"header_title",children:"Test assignment for front-end developer"}),Object(a.jsx)("p",{className:"header_text",children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\u2032ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(a.jsx)(l,{type:"anchor",children:"Sing Up"})]})}),j=(n(19),n(20),function(e){var t=e.user,n=e.className,s=void 0===n?"":n;return console.log(t),Object(a.jsxs)("article",{className:"card ".concat(s),children:[Object(a.jsx)("img",{src:"https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg",onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="/photo-cover.svg"},alt:"user_photo",className:"card_photo"}),Object(a.jsx)("p",{className:"card_info card_info--title",children:"Salvador Stewart Flynn Thomas Rachinsky"}),Object(a.jsx)("p",{className:"card_info",children:"Frontend Developer Frontend DEVELOPER"}),Object(a.jsx)("p",{className:"card_info",children:"frontend_develop@gmail.com"}),Object(a.jsx)("p",{className:"card_info",children:"+38 (098) 278 44 24"})]})}),b=function(){return Object(a.jsxs)("section",{className:"list",children:[Object(a.jsx)("h2",{className:"list_item list_item--title",children:"Working with GET request"}),Object(a.jsxs)("div",{className:"list_item list_item--container",children:[Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}}),Object(a.jsx)(j,{user:{email:"",name:"",phone:"",photo:"",position:"",id:1}})]}),Object(a.jsx)(l,{type:"anchor",className:"list_item list_item--button",children:"Show more"})]})},h=(n(21),n(3),function(e){var t=e.label;return Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{htmlFor:"inputText",className:"field_label field_label--visible",children:t}),Object(a.jsx)("input",{id:"inputText",type:"text",className:"field_input field_input--default",placeholder:t}),Object(a.jsx)("p",{className:"field_info",children:"Info message"})]})}),u=(n(22),function(e){var t=e.name,n=e.value,s=e.checked,i=void 0!==s&&s;return Object(a.jsxs)("div",{className:"radio",children:[Object(a.jsx)("input",{type:"radio",id:n,name:t,value:n,defaultChecked:i,className:"radio_button"}),Object(a.jsx)("label",{htmlFor:n,className:"radio_label",children:n})]})}),m=function(e){var t=e.onSubmit,n=void 0===t?function(){}:t;return Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("button",{type:"button",className:"field_button",onClick:n,children:"Upload"}),Object(a.jsx)("input",{type:"text",className:"field_input field_input--upload",placeholder:"Upload your photo",readOnly:!0}),Object(a.jsx)("p",{className:"field_info field_info--hidden",children:"Error text"})]})},p=function(){return Object(a.jsxs)("section",{className:"form",children:[Object(a.jsx)("h2",{className:"form_title",children:"Working with POST request"}),Object(a.jsxs)("form",{action:"",className:"form_container",children:[Object(a.jsx)(h,{label:"Your name"}),Object(a.jsx)(h,{label:"Email"}),Object(a.jsx)(h,{label:"Phone"}),Object(a.jsxs)("div",{className:"form_radio_group",children:[Object(a.jsx)("p",{children:"Select your position"}),Object(a.jsx)(u,{name:"position",value:"Frontend developer",checked:!0}),Object(a.jsx)(u,{name:"position",value:"Backend developer"}),Object(a.jsx)(u,{name:"position",value:"Designer"}),Object(a.jsx)(u,{name:"position",value:"QA"})]}),Object(a.jsx)(m,{onSubmit:function(){}})]}),Object(a.jsx)(l,{type:"submit",className:"form_button",children:"Sing Up"})]})},f=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(d,{}),Object(a.jsx)(b,{}),Object(a.jsx)(p,{})]})]})};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a7cf30f0.chunk.js.map