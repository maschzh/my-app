(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),i=a.n(c),s=(a(14),a(9)),h=a(2),j=a(3),o=a(5),b=a(4),l=(a.p,a(15),a(0)),u=function(){return Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:" Name "}),Object(l.jsx)("th",{children:" Job "}),Object(l.jsx)("th",{children:" Remove "})]})})},d=function(e){var t=e.characterData.map((function(t,a){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.job}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){e.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(l.jsx)("tbody",{children:t})},m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return Object(l.jsxs)("table",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(d,{characterData:t,removeCharacter:a})]})}}]),a}(n.Component),O=a(8),p=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(O.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),Object(l.jsx)("label",{htmlFor:"job",children:"Job"}),Object(l.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(l.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[{name:"Charlie",job:"Janitor"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis",job:"Bartender"}]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(s.a)(e.state.characters),[t])})},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"React App"}),Object(l.jsx)("div",{children:"Add a character with a name and a job to the table"}),Object(l.jsx)(m,{characterData:this.state.characters,removeCharacter:this.removeCharacter}),Object(l.jsx)("h1",{children:"Add New"}),Object(l.jsx)(p,{handleSubmit:this.handleSubmit})]})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.3c222da2.chunk.js.map