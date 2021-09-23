(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK"}},11:function(e,t,n){e.exports={form:"Filter_form__2qyBI",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),r=n.n(o),i=n(2),l=n(5),u=n(16),s=n(17),b={ADD:"phoneBook/addContact",DELETE:"phoneBook/deleteContact",CHANGE_FILTER:"phoneBook/changeFilter"},d=Object(l.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case b.ADD:var c=e.map((function(e){return e.name.toLocaleLowerCase()})),o=a.name.toLocaleLowerCase();return c.includes(o)?(alert("".concat(a.name," is already in contacts")),e):[a].concat(Object(s.a)(e));case b.DELETE:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case b.CHANGE_FILTER:return a;default:return e}}}),m=Object(l.combineReducers)({phoneBook:d}),j=Object(l.createStore)(m,Object(u.composeWithDevTools)()),h=(n(26),n(27),n(28),n(15)),f=n(3),p=n.n(f),O={addContact:function(e,t){return{type:b.ADD,payload:{id:p.a.generate(),name:e,number:t}}},deleteContact:function(e){return{type:b.DELETE,payload:e}},changeFilter:function(e){return{type:b.CHANGE_FILTER,payload:e}}},x=n(4),C=n.n(x),_=n(1),v=Object(i.b)(null,(function(e){return{onSubmit:function(t,n){return e(O.addContact(t,n))}}}))((function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(h.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)(""),l=Object(h.a)(i,2),u=l[0],s=l[1],b=p.a.generate(),d=p.a.generate(),m=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n?r(a):"number"===n&&s(a)},j=function(){r(""),s("")};return Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o,u),j()},className:C.a.form,children:[Object(_.jsx)("label",{className:C.a.label,htmlFor:b,children:"Name"}),Object(_.jsx)("input",{className:C.a.input,value:o,type:"text",name:"name",id:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m}),Object(_.jsx)("label",{className:C.a.label,htmlFor:d,children:"Number"}),Object(_.jsx)("input",{className:C.a.input,value:u,type:"tel",name:"number",id:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m}),Object(_.jsx)("button",{className:C.a.button,type:"submit",children:"Add contact"})]})})),g=n(11),y=n.n(g),D=Object(i.b)((function(e){return{value:e.phoneBook.filter}}),(function(e){return{onChange:function(t){return e(O.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange,a=p.a.generate(),c=p.a.generate();return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:y.a.form,children:[Object(_.jsx)("label",{htmlFor:c,className:y.a.label,children:" Find contacts by name"}),Object(_.jsx)("input",{className:y.a.input,id:a,type:"text",value:t,onChange:n})]})})})),F=n(10),N=n.n(F),L=function(e){var t=e.name,n=e.number,a=e.onDelete;return Object(_.jsxs)("li",{className:N.a.item,children:[Object(_.jsxs)("span",{children:[t,":"]}),Object(_.jsx)("span",{children:n}),Object(_.jsx)("button",{type:"button",onClick:a,children:"Delete"})]})},E=function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))},k=Object(i.b)((function(e){var t=e.phoneBook,n=t.contacts,a=t.filter;return{contacts:E(n,a)}}),(function(e){return{onDeleteContact:function(t){return e(O.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return t&&Object(_.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(_.jsx)(L,{name:a,number:c,onDelete:function(){return n(t)}},t)}))})})),A=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"text",children:"Phonebook"}),Object(_.jsx)(v,{}),Object(_.jsx)("h2",{className:"text",children:"Contacts"}),Object(_.jsx)(D,{}),Object(_.jsx)(k,{})]})};r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{store:j,children:Object(_.jsx)(A,{})})}),document.getElementById("root"))},4:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[38,1,2]]]);
//# sourceMappingURL=main.b1f9a20b.chunk.js.map