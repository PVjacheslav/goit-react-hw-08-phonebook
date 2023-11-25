"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[203],{203:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,i,o,a,s,l,c,d,p,u,x,f,m=t(5705),h=t(828),b=t(9434),g=t(6916),j=function(n){return n.contactsBook.contacts.items},v=function(n){return n.contactsBook.contacts.isLoading},Z=function(n){return n.contactsBook.filter},y=(0,g.P1)([j,Z],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),w=t(3634),B=t(6727),k=t(168),P=t(5867),F=(0,P.ZP)(m.l0)(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  margin: auto;\n  background-color: #F0F011;\n  border: 4px solid #2450DB;\n  border-radius: 4px;\n  \n"]))),C=(0,P.ZP)(m.gN)(i||(i=(0,k.Z)(["\n  padding: 8px 12px;\n  font: inherit;\n  cursor: pointer;\n"]))),D=P.ZP.label(o||(o=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  color: #2450DB;\n  font-size: 20px;\n"]))),_=P.ZP.button(a||(a=(0,k.Z)(["\n  padding: 8px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 4px solid #2450DB;\n  color: #2450DB;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: #b9bcd3;\n  }\n"]))),L=(0,P.ZP)(m.Bc)(s||(s=(0,k.Z)(["\n    color: #F5530D;\n"]))),z=t(1686),I=t.n(z),N=t(184),S={name:"",number:""},T=B.Ry().shape({name:B.Z_().min(2,"Too short!"),number:B.Rx()}),q=function(){var n=(0,b.I0)(),e=(0,b.v9)(j);return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(m.J9,{initialValues:S,validationSchema:T,onSubmit:function(t,r){var i=r.resetForm;e.find((function(n){return n.name.toLowerCase().trim()===t.name.toLowerCase().trim()}))?I().Notify.failure("".concat(t.name," is already in contacts!"),{position:"left-top",distance:"12px"}):(n((0,w.el)({name:t.name,number:t.number})),i())},children:(0,N.jsxs)(F,{autoComplete:"off",children:[(0,N.jsxs)(D,{htmlFor:"name",children:["Name",(0,N.jsx)(C,{type:"text",name:"name",required:!0}),(0,N.jsx)(L,{name:"name"})]}),(0,N.jsxs)(D,{htmlFor:"number",children:["Number",(0,N.jsx)(C,{type:"tel",name:"number",required:!0}),(0,N.jsx)(L,{name:"number"})]}),(0,N.jsxs)(_,{type:"submit",children:[(0,N.jsx)(h.yAv,{fill:"#2450DB",width:"12",height:"12"}),"Add Contact"]})]})})})},A=t(7692),R=P.ZP.ul(l||(l=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  margin: 16px auto;\n  border-radius: 4px;\n  background-color: #F0F011 ;\n  border: 4px solid #2450DB ;\n  list-style: none;\n"]))),E=P.ZP.span(c||(c=(0,k.Z)(["\n  text-align: center;\n  font-size: 20px;\n  color: #777777;\n  margin-top: 10px;\n"]))),J=P.ZP.li(d||(d=(0,k.Z)(["\n  background-color: #ffffff;\n  border: 4px solid #2450DB ;\n  padding: 8px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n"]))),K=P.ZP.button(p||(p=(0,k.Z)(["\n  padding: 4px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px 8px;\n  border: 3px solid #2450DB;\n  display: flex;\n  align-items: center;\n"]))),V=function(){var n=(0,b.v9)(y),e=(0,b.v9)(Z),t=(0,b.v9)(j),r=(0,b.I0)();return(0,N.jsx)(R,{children:0===t.length?(0,N.jsx)(E,{children:"There are no contacts yet"}):(0,N.jsx)(N.Fragment,{children:n.map((function(n){var t=n.id,i=n.name,o=n.number;return(0,N.jsxs)(J,{children:[(0,N.jsx)(A.PKT,{fill:"#2450DB",size:25}),i," : ",o,(0,N.jsxs)(K,{type:"button",name:"delete",value:e,onClick:function(){return r((0,w._f)(t))},children:[(0,N.jsx)(h._51,{fill:"#000000",width:"20",height:"20"}),"delete"]})]},t)}))})})},Y=P.ZP.div(u||(u=(0,k.Z)(["\n  width: 400px;\n  margin: 16px auto;\n  position: relative;\n"]))),G=P.ZP.label(x||(x=(0,k.Z)(["\n  color: #2450DB;\n  font-size: 20px;\n"]))),H=P.ZP.input(f||(f=(0,k.Z)(["\n  width: 400px;\n  padding: 10px;\n  border-radius: 4px;\n  border: 4px solid #2450DB;\n"]))),M=t(1538),O=t(8881),Q={padding:"12px 64px",position:"absolute"};function U(){var n=(0,b.I0)(),e=(0,b.v9)(Z),t=(0,b.v9)(v);return(0,N.jsxs)(Y,{children:[(0,N.jsxs)(G,{children:["Find contacts by name",(0,N.jsx)(H,{type:"text",value:e,onChange:function(e){var t=e.target.value.toLowerCase().trim();n((0,M.T)(t))},name:"filter"})]}),t&&(0,N.jsx)(O.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{spinnerStyle:Q},wrapperClass:"dna-wrapper"})]})}var W=t(854),X=t(2791);function $(){var n=(0,b.I0)(),e=(0,b.v9)(v);return(0,X.useEffect)((function(){n((0,w.yF)())}),[n]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("title",{children:"Your contacts"}),(0,N.jsx)(q,{}),(0,N.jsx)(U,{}),(0,N.jsx)("div",{children:e&&(0,N.jsx)(W.a,{})}),(0,N.jsx)(V,{})]})}}}]);
//# sourceMappingURL=203.56a728be.chunk.js.map