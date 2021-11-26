(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{37:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var i,c,r,o,s,a,l,j,d=t(1),b=t.n(d),u=t(28),p=t.n(u),h=(t(37),t(2)),f=t(22),O=t(5),x=t(3),m=t(14),g=t(15),v=t(17),y=t(16),w=t(0),k=x.a.div(i||(i=Object(h.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),S=x.a.div(c||(c=Object(h.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),C=x.a.div(r||(r=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),T=x.a.div(o||(o=Object(h.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),z=x.a.table(s||(s=Object(h.a)([""]))),A=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(w.jsxs)(k,{children:[Object(w.jsx)(C,{children:this.props.title}),Object(w.jsxs)(S,{children:[Object(w.jsx)(T,{children:this.props.component}),Object(w.jsxs)(z,{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Prop"}),Object(w.jsx)("th",{children:"Description"}),Object(w.jsx)("th",{children:"Type"}),Object(w.jsx)("th",{children:"Default value"})]}),this.props.propDocs.map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.prop}),Object(w.jsx)("td",{children:e.description}),Object(w.jsx)("td",{children:e.type}),Object(w.jsx)("td",{children:Object(w.jsx)("code",{children:e.defaultValue})})]})}))]})]})]})}}]),t}(b.a.Component),N=A,R={small:10,medium:14,large:20},W=x.a.div(a||(a=Object(h.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),D=x.a.span(l||(l=Object(h.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),L=x.a.div(j||(j=Object(h.a)(["\n  display: flex;\n"]))),P=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=R[this.props.size],n=this.props.color;return Object(w.jsxs)(W,{children:[Object(w.jsxs)(L,{children:[Object(w.jsx)(D,{size:e,color:n}),Object(w.jsx)(D,{size:e,color:n})]}),Object(w.jsxs)(L,{children:[Object(w.jsx)(D,{size:e,color:n}),Object(w.jsx)(D,{size:e,color:n})]})]})}}]),t}(b.a.Component);P.defaultProps={size:"medium",color:"#ffa2bf"};var F,E,Y,M=P,V=t(12),X=t(11),I=70,B="#0f242e",K={play:X.g,pause:X.f,"fast-forward":X.d,reset:X.j,setting:X.c,save:X.a},J={play:"#15cb61",reset:"#EF2D56",pause:"#ED7D3A","fast-forward":"#5398BE",setting:"#CB9173",save:"#15cb61"},U=x.a.div(F||(F=Object(h.a)(["\n  height: ","px;\n  width: ",'px;\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.5s;\n  opacity: 1;\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);\n\n  button {\n    position: absolute;\n  }\n  &::before,\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    transition: all 0.25s ease;\n    border-radius: 50%;\n  }\n\n  &::after {\n    box-shadow: inset 0 0 0 1px ',";\n  }\n\n  &::before {\n    background: ",";\n    box-shadow: inset 0 0 0 ","px ",";\n  }\n\n  &:hover::before {\n    box-shadow: inset 0 0 0 1px ",";\n  }\n\n  svg {\n    position: relative;\n    font-size: ","px;\n    color: white;\n  }\n"])),I,I,(function(e){return J[e.icon]}),(function(e){return J[e.icon]}),I,B,B,35),G=Object(x.b)(E||(E=Object(h.a)(["\n  70% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  }\n"]))),q=x.a.div(Y||(Y=Object(h.a)(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  left: ","%;\n  top: ","%;\n  transition: ",";\n  margin-left: -35px;\n\n  .pulse {\n      animation: ",";\n      animation-iteration-count: 1;\n      animation-duration: 0.5s;\n    }\n  & > div {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, .7);\n    border-radius: 50%;\n  }\n  }\n"])),I,I,(function(e){return e.left}),(function(e){return e.top}),"0.8s cubic-bezier(0.81, -0.21, 0.24, 1.09)",G),H=function(e){var n=e.icon,t=e.onClick,i=e.left,c=e.top;return Object(w.jsx)(q,{top:c,left:i,children:Object(w.jsx)("div",{onClick:function(e){return function(e){e.currentTarget.classList.add("pulse")}(e)},onAnimationEnd:function(e){return function(e){e.currentTarget.classList.remove("pulse")}(e)},children:Object(w.jsx)("div",{onClick:t,children:Object(w.jsx)(U,{icon:n,children:Object(w.jsx)(V.a,{icon:K[n]})})})})})},Q=t(4),Z=t.n(Q);function $(e,n){return e/2-2*n}function _(e){return 2*e*Math.PI}function ee(e){return e.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}function ne(e){var n=ee(e%1e3/10),t=ee(Math.floor(e/1e3%60)),i=ee(Math.floor(e/6e4%60));return"".concat(i,":").concat(t,":").concat(n)}var te={Stopwatch:"0em",Countdown:"10em",XY:"20em",Tabata:"30em"};var ie,ce=t(6),re=b.a.createContext({}),oe=0,se=20,ae=5,le=30,je=10,de=function(e){var n=e.children,t=Object(d.useState)("Stopwatch"),i=Object(ce.a)(t,2),c=i[0],r=i[1],o=Object(d.useState)(0),s=Object(ce.a)(o,2),a=s[0],l=s[1],j=Object(d.useState)(0),b=Object(ce.a)(j,2),u=b[0],p=b[1],h=Object(d.useState)(1),f=Object(ce.a)(h,2),O=f[0],x=f[1],m=Object(d.useState)(ae),g=Object(ce.a)(m,2),v=g[0],y=g[1],k=Object(d.useState)("Work"),S=Object(ce.a)(k,2),C=S[0],T=S[1],z=Object(d.useState)(le),A=Object(ce.a)(z,2),N=A[0],R=A[1],W=Object(d.useState)(je),D=Object(ce.a)(W,2),L=D[0],P=D[1],F=Object(d.useState)(oe),E=Object(ce.a)(F,2),Y=E[0],M=E[1],V=Object(d.useState)(se),X=Object(ce.a)(V,2),I=X[0],B=X[1],K=Object(d.useState)("0em"),J=Object(ce.a)(K,2),U=J[0],G=J[1],q=Object(d.useState)("play"),H=Object(ce.a)(q,2),Q=H[0],Z=H[1],$=Object(d.useState)(!1),_=Object(ce.a)($,2),ee=_[0],ne=_[1],ie=Object(d.useState)(!1),de=Object(ce.a)(ie,2),be=de[0],ue=de[1],pe=Object(d.useState)(!1),he=Object(ce.a)(pe,2),fe=he[0],Oe=he[1],xe=Object(d.useState)(20),me=Object(ce.a)(xe,2),ge=me[0],ve=me[1],ye=Object(d.useState)(!1),we=Object(ce.a)(ye,2),ke=we[0],Se=we[1],Ce=Object(d.useState)(!1),Te=Object(ce.a)(Ce,2),ze=Te[0],Ae=Te[1],Ne=Object(d.useState)(!1),Re=Object(ce.a)(Ne,2),We=Re[0],De=Re[1],Le=Object(d.useState)(!0),Pe=Object(ce.a)(Le,2),Fe=Pe[0],Ee=Pe[1],Ye=function(){return function(e,n,t,i,c,r){return"Stopwatch"===e||"Countdown"===e||"XY"===e?6e4*n+1e3*t:"Tabata"===e?"Work"===r?1e3*i:1e3*c:0}(c,Y,I,N,L,C)},Me=function(){"Countdown"===c||"XY"===c?(p(Ye()),l(100)):(l(0),p(0))},Ve=function(){M(oe),B(se),y(ae),R(le),P(je),T("Work"),x(1),De(!1),ue(!1),Oe(!1),Me()},Xe=function(){ne(!1),ue(!1),Oe(!1),x(1),T("Work"),De(!1),Me()},Ie=function(e,n,t){t?(T(t),"Rest"===C&&x(O+1)):x(O+1),ve(Ye),l(n),p(e)},Be=function(){Xe(),De(!0),Ee(!0)};return Object(d.useEffect)((function(){ve(Ye),Me()}),[Y,I,v,L,N]),Object(d.useEffect)((function(){ze&&(Xe(),Ae(!1),Be())}),[ze]),Object(d.useEffect)((function(){ke&&(Ve(),Se(!1),Ee(!0))}),[ke,Ve]),Object(d.useEffect)((function(){if(be){Ee(!1);var e=setInterval((function(){p("Countdown"===c||"XY"===c?function(e){return e-50}:function(e){return e+50})}),50);return function(){clearInterval(e)}}}),[be]),Object(d.useEffect)((function(){Ve(),Ee(!0)}),[c]),Object(d.useEffect)((function(){be&&(l(u/ge*100),ve(Ye()))}),[u,ge,be]),Object(d.useEffect)((function(){a>=100&&be?("Stopwatch"===c&&Be(),"Tabata"===c&&("Work"===C?Ie(0,0,"Rest"):O<v?Ie(0,0,"Work"):Be())):a<=0&&be&&("Countdown"===c&&Be(),"XY"===c&&(O<v?Ie(ge,100,null):Be()))}),[a]),Object(w.jsx)(re.Provider,{value:{timerType:c,selectTimer:function(e){r(e),G(te[e])},percent:a,setPercent:l,currentTime:u,setCurrentTime:p,currentRound:O,setCurrentRound:x,maxRound:v,setMaxRound:y,roundType:C,setRoundType:T,tabPos:U,btn1:Q,setBtn1:Z,flipped:ee,setFlipped:ne,workLength:N,setWorkLength:R,restLength:L,setRestLength:P,minuteSetting:Y,setMinuteSetting:M,secondSetting:I,setSecondSetting:B,timerActive:be,setTimerActive:ue,btnActive:fe,setBtnActive:Oe,toggleTimer:function(){ue(!be),Oe(!0),De(!1)},roundTime:ge,setResetFlag:Se,setFastForwardFlag:Ae,congratsFlag:We,showSettings:Fe},children:n})},be=x.a.circle(ie||(ie=Object(h.a)(["\n  stroke: ",";\n  fill: transparent;\n  cx: ","px;\n  cy: ","px;\n  stroke-dasharray: ",";\n  stroke-dashoffset: ",";\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n  transition: all 0.3s ease-out;\n"])),(function(e){return e.color}),(function(e){return e.c}),(function(e){return e.c}),(function(e){return _(e.r)}),(function(e){return function(e,n){var t=_(e);return t-t*n/100}(e.r,e.percent)})),ue=function(e){var n=e.size,t=e.strokeWidth,i=Object(d.useContext)(re).percent;return Object(w.jsxs)("svg",{width:n,height:n,children:[Object(w.jsx)(be,{r:$(n,t),c:n/2,strokeWidth:t,percent:100,color:"white"}),Object(w.jsx)(be,{r:$(n,t),c:n/2,strokeWidth:t+1,percent:i,color:"#a80874"})]})};ue.propType={size:Z.a.number,strokeWidth:Z.a.number},ue.defaultProps={size:450,strokeWidth:20};var pe,he,fe,Oe,xe,me,ge,ve,ye,we,ke,Se,Ce,Te,ze,Ae,Ne,Re,We,De,Le,Pe,Fe,Ee=ue,Ye=x.a.div(pe||(pe=Object(h.a)(["\n  margin-top: 1em;\n  margin-bottom: 5em;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  background-color: #0f242e;\n  text-align: center;\n  padding-top: 3em;\n  padding-bottom: 3em;\n  border-radius: 1em;\n"]))),Me=x.a.label(he||(he=Object(h.a)(["\n  color: white;\n  font-size: 2em;\n"]))),Ve=x.a.input(fe||(fe=Object(h.a)(["\n  width: 60%;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  color: #a80874;\n  border-radius: 2em;\n  padding: 1em;\n  font-family: Segoe UI;\n  font-weight: bold;\n  padding-right: 3em;\n  margin-right: 1em;\n  flex: 1;\n"]))),Xe=x.a.div(Oe||(Oe=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),Ie=x.a.div(xe||(xe=Object(h.a)(["\n  font-size: 2rem;\n"]))),Be=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(w.jsx)(Xe,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(Ie,{children:"Documentation"}),Object(w.jsx)(N,{title:"Loading spinner ",component:Object(w.jsx)(M,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(w.jsx)(N,{title:"Button ",component:Object(w.jsx)("div",{style:{position:"relative"},children:Object(w.jsx)(H,{icon:"play"})}),propDocs:[{prop:"icon",description:"Changes color and icon depending on input",type:"string",defaultValue:"N/A"},{prop:"left",description:"changes css left property for animation purposes",type:"number",defaultValue:"N/A"},{prop:"top",description:"Changes top position for animation purposes",type:"number",defaultValue:"N/A"}]}),Object(w.jsx)(N,{title:"Circle ",component:Object(w.jsx)(Ee,{size:100,strokeWidth:10}),propDocs:[{prop:"size",description:"Determines the width and height of the svg element",type:"int",defaultValue:"450"},{prop:"strokeWidth",description:"Determines the thickness of the progress bar",type:"int",defaultValue:"20"}]}),Object(w.jsx)(N,{title:"panel ",component:Object(w.jsx)(Ye,{children:"Panel Content"}),propDocs:[{prop:"N/A",description:"Elevated div for paneling look",type:"N/A",defaultValue:"N/A"}]}),Object(w.jsx)(N,{title:"Label ",component:Object(w.jsx)(Me,{children:"Label"}),propDocs:[{prop:"N/A",description:"White Styled Label",type:"N/A",defaultValue:"N/A"}]}),Object(w.jsx)(N,{title:"Label ",component:Object(w.jsx)(Ve,{}),propDocs:[{prop:"N/A",description:"Styled input for taking settings options",type:"N/A",defaultValue:"N/A"}]})]})})}}]),t}(b.a.Component),Ke=Be,Je=x.a.p(me||(me=Object(h.a)(["\n  position: absolute;\n  margin: 0;\n  color: white;\n  top: 45%;\n  left: 50%;\n  font-size: 3em;\n  transform: translate(-50%, -50%);\n"]))),Ue=Object(x.a)(Je)(ge||(ge=Object(h.a)(["\n  top: 57%;\n  font-size: 1.5em;\n  font-weight: bold;\n"]))),Ge=Object(x.a)(Ue)(ve||(ve=Object(h.a)(["\n  top: 67%;\n  font-size: 1.2em;\n"]))),qe=function(){var e=Object(d.useContext)(re),n=e.timerType,t=e.currentTime,i=e.currentRound,c=e.roundType,r=e.congratsFlag,o="XY"===n||"Tabata"===n,s="Tabata"===n;return Object(w.jsxs)(w.Fragment,{children:[r&&Object(w.jsx)(Je,{children:"Nice job!"}),!r&&Object(w.jsx)(Je,{children:ne(t)}),r&&Object(w.jsx)(Ue,{className:"fadeIn2",children:"Try Again?"}),o&&!r&&Object(w.jsxs)(Ue,{children:["Round ",i]}),s&&!r&&Object(w.jsx)(Ge,{children:c})]})},He=x.a.div(ye||(ye=Object(h.a)(["\n  text-align: center;\n  height: 100%;\n"]))),Qe=Object(x.a)(Me)(we||(we=Object(h.a)(["\n  font-size: 1em;\n  text-align: left;\n  margin-left: 1em;\n  flex: 0.5;\n"]))),Ze=x.a.div(ke||(ke=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]))),$e=function(){var e=Object(d.useContext)(re),n=e.flipped,t=e.setFlipped,i=e.minuteSetting,c=e.setMinuteSetting,r=e.secondSetting,o=e.setSecondSetting,s=e.maxRound,a=e.setMaxRound,l=e.workLength,j=e.setWorkLength,b=e.restLength,u=e.setRestLength,p=e.timerType,h="XY"===p||"Tabata"===p,f="Tabata"===p,O=function(e){/[0-9]/.test(e.key)||e.preventDefault()};return Object(w.jsxs)(He,{children:[Object(w.jsx)("div",{children:Object(w.jsx)(Me,{children:"Settings"})}),!f&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Minutes: "}),Object(w.jsx)(Ve,{type:"text",name:"Minutes",placeholder:"Minutes",onKeyPress:function(e){return O(e)},onChange:function(e){return c(e.target.value)},value:i})]}),!f&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Seconds: "}),Object(w.jsx)(Ve,{type:"text",name:"Seconds",placeholder:"Seconds",onKeyPress:function(e){return O(e)},onChange:function(e){return o(e.target.value)},value:r})]}),h&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Rounds: "}),Object(w.jsx)(Ve,{type:"text",name:"Rounds",placeholder:"Total Rounds",onKeyPress:function(e){return O(e)},onChange:function(e){return a(e.target.value)},value:s})]}),f&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Work(seconds): "}),Object(w.jsx)(Ve,{type:"text",name:"Work",placeholder:"Work Period",onKeyPress:function(e){return O(e)},onChange:function(e){return j(e.target.value)},value:l})]}),f&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Rest(seconds): "}),Object(w.jsx)(Ve,{type:"text",name:"Rest",placeholder:"Rest Period",onKeyPress:function(e){return O(e)},onChange:function(e){return u(e.target.value)},value:b})]}),Object(w.jsx)(H,{icon:"save",top:80,left:50,onClick:function(){return t(!n)}})]})},_e=x.a.div(Se||(Se=Object(h.a)(["\n  position: relative;\n"]))),en=x.a.div(Ce||(Ce=Object(h.a)(["\n  margin-top: 1em;\n  margin-right: 1em;\n  position: relative;\n  height: 4.5em;\n"]))),nn=x.a.div(Te||(Te=Object(h.a)(["\n  height: 5em;\n  position: relative;\n  margin-top: 1em;\n  width: 100%;\n"]))),tn=x.a.div(ze||(ze=Object(h.a)(["\n  perspective: 1000px;\n"]))),cn=Object(x.a)(Ye)(Ae||(Ae=Object(h.a)(["\n  &.flip {\n    transform: rotateY(180deg);\n  }\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n  height: 38em;\n  width: 28.1em;\n"]))),rn=x.a.div(Ne||(Ne=Object(h.a)(["\n  -webkit-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  background-color: #0f242e;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 1em;\n  height: 44em;\n"]))),on=Object(x.a)(rn)(Re||(Re=Object(h.a)(["\n  background-color: #0f242e;\n  transform: rotateY(180deg);\n  height: 44em;\n  width: 28.1em;\n  overflow: hidden;\n  border-radius: 1em;\n"]))),sn=function(){var e=Object(d.useContext)(re),n=e.flipped,t=e.setFlipped,i=e.btnActive,c=e.toggleTimer,r=e.timerActive,o=e.setFastForwardFlag,s=e.setResetFlag,a=e.showSettings;return Object(w.jsx)(tn,{children:Object(w.jsxs)(cn,{className:n?"flip":"",children:[Object(w.jsxs)(rn,{children:[Object(w.jsx)(en,{children:a&&Object(w.jsx)(H,{icon:"setting",top:10,left:90,onClick:function(){return t(!n)}})}),Object(w.jsxs)(_e,{children:[Object(w.jsx)(Ee,{size:450,strokeWidth:20}),Object(w.jsx)(qe,{})]}),Object(w.jsxs)(nn,{children:[Object(w.jsx)(H,{icon:"reset",left:i?20:50,top:40,onClick:function(){return s(!0)}}),Object(w.jsx)(H,{icon:"fast-forward",left:i?80:50,top:40,onClick:function(){return o(!0)}}),Object(w.jsx)(H,{icon:r?"pause":"play",left:50,top:40,onClick:function(){return c()}})]})]}),Object(w.jsx)(on,{children:Object(w.jsx)($e,{})})]})})},an="0.8s cubic-bezier(0.81, -0.21, 0.24, 1.09)",ln=Object(x.a)(Ye)(We||(We=Object(h.a)(["\n  padding: 0;\n  width: 40em;\n  height: 4.05em;\n  position: relative;\n"]))),jn=x.a.ul(De||(De=Object(h.a)(["\n  list-style: none;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  z-index: 2;\n\n  .clock-icon,\n  .hour-glass-icon {\n    font-size: 0.87em;\n    margin-right: 0.5em;\n  }\n\n  .stopwatch-icon {\n    margin-right: 0.4em;\n  }\n\n  svg {\n    margin-right: 0.2em;\n  }\n"]))),dn=x.a.li(Le||(Le=Object(h.a)(["\n  color: white;\n  font-size: 1.2em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  border-radius: 0.6em;\n  flex: 1 0 25%;\n  transition: ",";\n\n  :hover {\n    cursor: pointer;\n  }\n\n  &&.selected {\n    color: #a80874 !important;\n    transition: ",";\n  }\n"])),an,an),bn=x.a.div(Pe||(Pe=Object(h.a)(["\n  position: absolute;\n  width: 10em;\n  height: 100%;\n  top: 0;\n  background-color: white;\n  border-radius: 0.5em;\n  z-index: 1;\n  left: ",";\n  transition: ",";\n"])),(function(e){return e.left}),an),un=function(){var e=Object(d.useContext)(re),n=e.timerType,t=e.selectTimer,i=e.tabPos;return Object(w.jsxs)(ln,{children:[Object(w.jsxs)(jn,{children:[Object(w.jsxs)(dn,{onClick:function(){return t("Stopwatch")},className:"Stopwatch"===n?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.h})," Stopwatch"]}),Object(w.jsxs)(dn,{onClick:function(){return t("Countdown")},className:"Countdown"===n?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.e,className:"hour-glass-icon"}),"Countdown"]}),Object(w.jsxs)(dn,{onClick:function(){return t("XY")},className:"XY"===n?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.b,className:"clock-icon"}),"X Y"]}),Object(w.jsxs)(dn,{onClick:function(){return t("Tabata")},className:"Tabata"===n?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.i,className:"stopwatch-icon"}),"Tabata"]})]}),Object(w.jsx)(bn,{left:i})]})},pn=x.a.div(Fe||(Fe=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));var hn,fn,On=function(){return Object(w.jsx)(de,{children:Object(w.jsxs)(pn,{children:[Object(w.jsx)(un,{}),Object(w.jsx)(sn,{})]})})},xn=x.a.div(hn||(hn=Object(h.a)(["\n  background-color: #186bf2;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.23);\n  margin-bottom: 3%;\n\n  ul {\n    margin-top: 0;\n    list-style: none;\n    padding: 1em;\n    display: flex;\n    justify-content: end;\n    color: white;\n  }\n\n  li {\n    margin-right: 1em;\n  }\n\n  li:first-child {\n    margin-right: auto;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #2b193d;\n  }\n"]))),mn=x.a.div(fn||(fn=Object(h.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"])));var gn=function(){return Object(w.jsx)(mn,{children:Object(w.jsxs)(f.a,{children:[Object(w.jsx)(xn,{children:Object(w.jsx)("nav",{children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Aali2537 Assignment 2"}),Object(w.jsx)("li",{children:Object(w.jsx)(f.b,{to:"/",children:"Timers"})}),Object(w.jsx)("li",{children:Object(w.jsx)(f.b,{to:"/docs",children:"Documentation"})})]})})}),Object(w.jsxs)(O.c,{children:[Object(w.jsx)(O.a,{path:"/docs",children:Object(w.jsx)(Ke,{})}),Object(w.jsx)(O.a,{path:"/",children:Object(w.jsx)(On,{})})]})]})})};p.a.render(Object(w.jsx)(b.a.StrictMode,{children:Object(w.jsx)(gn,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.66052067.chunk.js.map