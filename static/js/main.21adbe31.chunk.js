(this.webpackJsonpsecond_react=this.webpackJsonpsecond_react||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),a=n.n(o),s=(n(12),n(6)),u=n(2);var l=n(0),i=r.a.createContext();function d(e){var t=function(e,t){var n=r.a.useState(!0),c=Object(u.a)(n,2),o=c[0],a=c[1],s=r.a.useState(!1),l=Object(u.a)(s,2),i=l[0],d=l[1],j=r.a.useState(t),b=Object(u.a)(j,2),x=b[0],f=b[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=t),f(n),a(!1)}catch(r){d(r)}}),1e3)})),{currently_item:x,cnxItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),f(t)}catch(c){d(c)}},currently_loading:o,currently_error:i}}("keyOne",[]),n=t.currently_item,c=t.cnxItem,o=t.currently_loading,a=t.currently_error,d=r.a.useState(""),j=Object(u.a)(d,2),b=j[0],x=j[1],f=n.filter((function(e){return!!e.completed})).length,O=n.length,h=r.a.useState(!1),m=Object(u.a)(h,2),p=m[0],g=m[1],v=[];v=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(l.jsx)(i.Provider,{value:{currently_loading:o,currently_error:a,vTotalList:O,vCheckedList:f,currently_search:b,upgrate_search:x,aAux:v,vfAddList:function(e){var t=Object(s.a)(n);t.push({text:e,completed:!1}),c(t)},vfListCheck:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(s.a)(n);r[t].completed=!0,c(r)},vfListDelete:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(s.a)(n);r.splice(t,1),c(r)},currently_openModal:p,upgrate_openModal:g},children:e.children})}n(14);function j(){var e=r.a.useContext(i),t=e.vTotalList,n=e.vCheckedList;return Object(l.jsxs)("h2",{className:"cTitle",children:["Has Completado ",n," de ",t," Todos"]})}n(15);function b(e){return Object(l.jsxs)("li",{className:"cTodoItem",children:[Object(l.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onCompleted,children:"\u221a"}),Object(l.jsx)("p",{className:"cTodoItem-p ".concat(e.completed&&"cTodoItem-p--complete"),children:e.text}),Object(l.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDeleted,children:"X"})]})}n(16);function x(e){return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:e.children})})}n(17);function f(){var e=r.a.useContext(i),t=e.currently_search,n=e.upgrate_search;return Object(l.jsx)("input",{className:"cTodoSearch",placeholder:"Ingrese los Datos de su Busqueda",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(18);function O(e){return Object(l.jsx)("button",{className:"cCreateTodoButton",onClick:function(){e.upgrate_openModal((function(e){return!e}))},children:"+"})}n(19);function h(e){var t=e.children;return a.a.createPortal(Object(l.jsxs)("div",{className:"ModalBackground",children:[t,","]}),document.getElementById("modal"))}n(20);function m(){var e=r.a.useContext(i),t=e.vfAddList,n=e.upgrate_openModal,c=r.a.useState(""),o=Object(u.a)(c,2),a=o[0],s=o[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),n(!1)},children:[Object(l.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{value:a,onChange:function(e){s(e.target.value),console.log(e.target.value)},placeholder:"Ingrese una Tarea"}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{onClick:function(){n(!1)},type:"button",className:"TodoForm-button TodoForm-button-cancel",children:"Cancelar"}),Object(l.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",children:"A\xf1adir"})]})]})}function p(){return Object(l.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(21);function g(){return Object(l.jsxs)("div",{className:"LoadingTodo-container",children:[Object(l.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(l.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(l.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function v(){return Object(l.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}function C(){var e=r.a.useContext(i),t=e.currently_loading,n=e.currently_error,c=(e.currently_search,e.aAux),o=e.vfListCheck,a=e.vfListDelete,s=e.currently_openModal,u=e.upgrate_openModal;return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(f,{}),Object(l.jsxs)(x,{children:[n&&Object(l.jsx)(p,{}),t&&Object(l.jsx)(g,{}),!t&&!c.length&&Object(l.jsx)(v,{}),c.map((function(e){return Object(l.jsx)(b,{text:e.text,completed:e.completed,onCompleted:function(){return o(e.text)},onDeleted:function(){return a(e.text)}},e.text)})),s&&Object(l.jsx)(h,{children:Object(l.jsx)(m,{})})]}),Object(l.jsx)(O,{upgrate_openModal:u})]})}var y=function(){return[Object(l.jsx)(d,{children:Object(l.jsx)(C,{})})]};a.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.21adbe31.chunk.js.map