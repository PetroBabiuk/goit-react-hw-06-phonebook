(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(17),n(18),n(12)),i=n(4),u=n(2),l=n.n(u),b=(n(27),n(3)),m=n.n(b),j=n(0),d=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),b=u[0],d=u[1],f=l.a.generate(),O=l.a.generate(),h=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n?o(a):"number"===n&&d(a)},p=function(){o(""),d("")};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:b}),p()},className:m.a.form,children:[Object(j.jsx)("label",{className:m.a.label,htmlFor:f,children:"Name"}),Object(j.jsx)("input",{className:m.a.input,value:r,type:"text",name:"name",id:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:h}),Object(j.jsx)("label",{className:m.a.label,htmlFor:O,children:"Number"}),Object(j.jsx)("input",{className:m.a.input,value:b,type:"tel",name:"number",id:O,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:h}),Object(j.jsx)("button",{className:m.a.button,type:"submit",children:"Add contact"})]})},f=n(9),O=n.n(f),h=function(e){var t=e.value,n=e.onChange,a=l.a.generate(),c=l.a.generate();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:O.a.form,children:[Object(j.jsx)("label",{htmlFor:c,className:O.a.label,children:" Find contacts by name"}),Object(j.jsx)("input",{className:O.a.input,id:a,type:"text",value:t,onChange:n})]})})},p=n(8),x=n.n(p),_=function(e){var t=e.name,n=e.number,a=e.onDelete;return Object(j.jsxs)("li",{className:x.a.item,children:[Object(j.jsxs)("span",{children:[t,":"]}),Object(j.jsx)("span",{children:n}),Object(j.jsx)("button",{type:"button",onClick:a,children:"Delete"})]})},g=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:x.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsx)(_,{name:a,number:c,onDelete:function(){return n(t)}},t)}))})},v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(i.a)(r,2),u=o[0],b=o[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&b(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(u))}),[u]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text",children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(e){var t=e.name,n=e.number,a=u.map((function(e){return e.name.toLocaleLowerCase()})),c=t.toLocaleLowerCase();if(a.includes(c))return alert("".concat(t," is already in contacts"));var r={id:l.a.generate(),name:t,number:n};b((function(e){return[r].concat(Object(s.a)(e))}))}}),Object(j.jsx)("h2",{className:"text",children:"Contacts"}),Object(j.jsx)(h,{value:n,onChange:function(e){c(e.currentTarget.value)}}),Object(j.jsx)(g,{contacts:function(){var e=n.toLocaleLowerCase();return u.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}(),onDeleteContact:function(e){b((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},8:function(e,t,n){e.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK"}},9:function(e,t,n){e.exports={form:"Filter_form__2qyBI",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}}},[[29,1,2]]]);
//# sourceMappingURL=main.aa6cd184.chunk.js.map