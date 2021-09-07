(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{24:function(n,t,e){"use strict";e.r(t);var a,r,o,i=e(1),c=e.n(i),s=e(9),d=e.n(s),l=(e(19),e(12)),u=e(4),b=e(5),p=e(7),h=e(6),m=e(10),x=e(25),j=e(2),f=e(3),g=f.a.form(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  margin-bottom: 30px;\n  padding: 10px 15px;\n  border: 1px solid #000;\n  & label {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 5px;\n    margin-bottom: 15px;\n\n    & input {\n      width: 175px;\n      border: 1px solid grey;\n      border-radius: 2px;\n      outline: none;\n      transition: box-shaddow 200ms linear;\n\n      &:focus {\n        box-shadow: 0 0 2px 2px #87baf4;\n        border: 1px solid #87baf4;\n      }\n    }\n  }\n\n  & button {\n    margin-top: 10px;\n    width: max-content;\n    padding: 2px 15px;\n    font-weight: 700;\n    border: 1px solid lightgray;\n    border-radius: 5px;\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n      background-image: linear-gradient(\n        to top,\n        rgba(67, 109, 216, 1) 50%,\n        rgba(94, 152, 247, 1) 100%\n      );\n      border-color: transparent;\n    }\n  }\n"]))),O=e(0),v=function(n){Object(p.a)(e,n);var t=Object(h.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.nameInputId=Object(x.a)(),n.numberInputId=Object(x.a)(),n.handleOnChange=function(t){n.setState(Object(m.a)({},t.target.name,t.target.value))},n.handleOnSubmit=function(t){if(t.preventDefault(),n.props.contacts.find((function(t){return t.name.toLowerCase()===n.state.name.toLowerCase()})))alert("".concat(n.state.name," is already in contacts."));else{var e={id:Object(x.a)(),name:n.state.name,number:n.state.number};n.props.addContact(e),n.setState({name:"",number:""})}},n}return Object(b.a)(e,[{key:"render",value:function(){return Object(O.jsxs)(g,{autoComplete:"off",onSubmit:this.handleOnSubmit,children:[Object(O.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(O.jsx)("input",{id:this.nameInputId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleOnChange})]}),Object(O.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(O.jsx)("input",{id:this.numberInputId,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleOnChange})]}),Object(O.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),e}(i.Component),C=f.a.ul(r||(r=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 5px;\n\n  & button {\n    margin-left: 10px;\n    width: max-content;\n    padding: 2px 15px;\n    font-size: 12px;\n    font-weight: 700;\n    border: 1px solid lightgray;\n    border-radius: 5px;\n    cursor: pointer;\n    background-color: transparent;\n\n    &:hover,\n    &:focus {\n      background-image: linear-gradient(\n        to top,\n        rgba(67, 109, 216, 1) 50%,\n        rgba(94, 152, 247, 1) 100%\n      );\n      border-color: transparent;\n    }\n  }\n"])));function w(n){var t=n.contacts,e=n.deleteContact;return Object(O.jsx)(C,{children:t.map((function(n){var t=n.name,a=n.number;return Object(O.jsxs)("li",{children:[t,": ",a,Object(O.jsx)("button",{type:"button","data-name":t,onClick:e,children:"Delete"})]},t)}))})}var y,I=f.a.label(o||(o=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 5px;\n\n  & input {\n    width: 175px;\n    border: 1px solid grey;\n    border-radius: 2px;\n    outline: none;\n    transition: box-shaddow 200ms linear;\n\n    &:focus {\n      border: 1px solid #87baf4;\n      box-shadow: 0 0 2px 2px #87baf4;\n    }\n  }\n"])));function k(n){var t=n.filterValue,e=n.findContacts,a=Object(x.a)();return Object(O.jsxs)(I,{htmlFor:"inputId",children:["Find contacts by name",Object(O.jsx)("input",{id:a,type:"text",value:t,onChange:e})]})}var S=f.a.div(y||(y=Object(j.a)(["\n  padding: 20px 100px;\n"])));function A(n){var t=n.children;return Object(O.jsx)(S,{children:t})}var z=function(n){Object(p.a)(e,n);var t=Object(h.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{name:"John Walsh",id:"5",number:"555-55-54"},{name:"Sofie Terner",id:"6",number:"555-55-55"}],filter:""},n.addContact=function(t){n.setState((function(n){var e=Object(l.a)(n.contacts);return e.push(t),{contacts:e}}))},n.deleteContact=function(t){var e=n.state.contacts.filter((function(n){return n.name!==t.target.dataset.name}));n.setState({contacts:e})},n.findContacts=function(t){var e=t.target.value;n.setState({filter:e})},n}return Object(b.a)(e,[{key:"render",value:function(){var n=this.state,t=n.contacts,e=n.filter,a=this.addContact,r=this.findContacts,o=this.deleteContact,i=t;return e&&(i=t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))),Object(O.jsxs)(A,{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(v,{addContact:a,contacts:t}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(k,{filterValue:e,findContacts:r}),Object(O.jsx)(w,{contacts:i,filterValue:e,deleteContact:o}),e&&0===i.length&&Object(O.jsx)("p",{children:"There are no contacts with this name."}),!e&&0===i.length&&Object(O.jsx)("p",{children:"There are no contacts here."})]})}}]),e}(i.Component);d.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1dc6a095.chunk.js.map