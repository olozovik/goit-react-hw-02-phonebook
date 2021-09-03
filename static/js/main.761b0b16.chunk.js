(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),s=n.n(c),i=(n(15),n(9)),o=n(2),u=n(3),d=n(5),l=n(4),h=n(8),b=n(18),j=n(0),m=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=Object(b.a)(),t.numberInputId=Object(b.a)(),t.handleOnChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.handleOnSubmit=function(e){e.preventDefault();var n={id:Object(b.a)(),name:t.state.name,number:t.state.number};t.props.addContact(n),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{autoComplete:"off",onSubmit:this.handleOnSubmit,children:[Object(j.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(j.jsx)("input",{id:this.nameInputId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleOnChange})]}),Object(j.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(j.jsx)("input",{id:this.numberInputId,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleOnChange})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);function p(t){var e=t.contacts,n=t.filteredContacts,a=t.filterValue,r=n.length>0?n:e;return!a||a&&n.length>0?Object(j.jsx)("ul",{children:r.map((function(t){return Object(j.jsxs)("li",{children:[t.name,": ",t.number]},t.name)}))}):Object(j.jsx)("p",{children:"Error!!!!"})}function O(t){var e=t.inputValue,n=t.findContacts,a=Object(b.a)();return Object(j.jsxs)("label",{htmlFor:"inputId",children:["Find contacts by name",Object(j.jsx)("input",{id:a,type:"text",value:e,onChange:n})]})}var f=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{name:"John Walsh",id:5,number:"555-55-54"},{name:"Sofie Terner",id:6,number:"555-55-55"}],filter:""},t.addContact=function(e){t.setState((function(t){var n=Object(i.a)(t.contacts);return n.push(e),{contacts:n}}))},t.filteredContacts=[],t.findContacts=function(e){var n=e.target.value;t.setState({filter:n}),t.filteredContacts=t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{addContact:this.addContact,contacts:this.state.contacts}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{inputValue:this.state.filter,findContacts:this.findContacts}),Object(j.jsx)(p,{contacts:this.state.contacts,filteredContacts:this.filteredContacts})]})}}]),n}(a.Component);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.761b0b16.chunk.js.map