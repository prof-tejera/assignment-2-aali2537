(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i,c,r,o,a,s,l,j,b=n(1),d=n.n(b),u=n(28),p=n.n(u),h=(n(37),n(2)),O=n(22),f=n(5),x=n(3),m=n(14),g=n(15),v=n(17),y=n(16),w=n(0),k=x.a.div(i||(i=Object(h.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),S=x.a.div(c||(c=Object(h.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),C=x.a.div(r||(r=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),z=x.a.div(o||(o=Object(h.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),T=x.a.table(a||(a=Object(h.a)([""]))),A=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(k,{children:[Object(w.jsx)(C,{children:this.props.title}),Object(w.jsxs)(S,{children:[Object(w.jsx)(z,{children:this.props.component}),Object(w.jsxs)(T,{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Prop"}),Object(w.jsx)("th",{children:"Description"}),Object(w.jsx)("th",{children:"Type"}),Object(w.jsx)("th",{children:"Default value"})]}),this.props.propDocs.map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.prop}),Object(w.jsx)("td",{children:e.description}),Object(w.jsx)("td",{children:e.type}),Object(w.jsx)("td",{children:Object(w.jsx)("code",{children:e.defaultValue})})]})}))]})]})]})}}]),n}(d.a.Component),N=A,R={small:10,medium:14,large:20},W=x.a.div(s||(s=Object(h.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),D=x.a.span(l||(l=Object(h.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),F=x.a.div(j||(j=Object(h.a)(["\n  display: flex;\n"]))),L=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){var e=R[this.props.size],t=this.props.color;return Object(w.jsxs)(W,{children:[Object(w.jsxs)(F,{children:[Object(w.jsx)(D,{size:e,color:t}),Object(w.jsx)(D,{size:e,color:t})]}),Object(w.jsxs)(F,{children:[Object(w.jsx)(D,{size:e,color:t}),Object(w.jsx)(D,{size:e,color:t})]})]})}}]),n}(d.a.Component);L.defaultProps={size:"medium",color:"#ffa2bf"};var E,Y,M,P=L,V=n(12),X=n(11),I=70,B="#0f242e",J={play:X.g,pause:X.f,"fast-forward":X.d,reset:X.j,setting:X.c,save:X.a},U={play:"#15cb61",reset:"#EF2D56",pause:"#ED7D3A","fast-forward":"#5398BE",setting:"#CB9173",save:"#15cb61"},G=Object(x.b)(E||(E=Object(h.a)(["\n  70% {\n    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  }\n"]))),q=x.a.div(Y||(Y=Object(h.a)(["\n  height: ","px;\n  width: ","px;\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.5s;\n  opacity: 1;\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);\n\n  button {\n    position: absolute;\n  }\n\n  &:active {\n    animation: ",';\n    animation-iteration-count: 1;\n    animation-duration: 0.2s;\n  }\n\n  &::before,\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    transition: all 0.25s ease;\n    border-radius: 50%;\n  }\n\n  &::after {\n    box-shadow: inset 0 0 0 1px ',";\n  }\n\n  &::before {\n    background: ",";\n    box-shadow: inset 0 0 0 ","px ",";\n  }\n\n  &:hover::before {\n    box-shadow: inset 0 0 0 1px ",";\n  }\n\n  svg {\n    position: relative;\n    font-size: ","px;\n    color: white;\n  }\n"])),I,I,G,(function(e){return U[e.icon]}),(function(e){return U[e.icon]}),I,B,B,35),H=x.a.div(M||(M=Object(h.a)(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  left: ","%;\n  top: ","%;\n  transition: ",";\n  margin-left: -35px;\n"])),I,I,(function(e){return e.left}),(function(e){return e.top}),"0.8s cubic-bezier(0.81, -0.21, 0.24, 1.09)"),K=function(e){var t=e.icon,n=e.onClick,i=e.left,c=e.top;return Object(w.jsx)(H,{top:c,left:i,children:Object(w.jsx)("div",{onClick:n,children:Object(w.jsx)(q,{icon:t,children:Object(w.jsx)(V.a,{icon:J[t]})})})})},Q=n(4),Z=n.n(Q);function $(e,t){return e/2-2*t}function _(e){return 2*e*Math.PI}function ee(e){return e.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}function te(e){var t=ee(e%1e3/10),n=ee(Math.floor(e/1e3%60)),i=ee(Math.floor(e/6e4%60));return"".concat(i,":").concat(n,":").concat(t)}var ne={Stopwatch:"0em",Countdown:"10em",XY:"20em",Tabata:"30em"};var ie,ce=n(6),re=d.a.createContext({}),oe=0,ae=20,se=5,le=30,je=10,be=function(e){var t=e.children,n=Object(b.useState)("Stopwatch"),i=Object(ce.a)(n,2),c=i[0],r=i[1],o=Object(b.useState)(0),a=Object(ce.a)(o,2),s=a[0],l=a[1],j=Object(b.useState)(0),d=Object(ce.a)(j,2),u=d[0],p=d[1],h=Object(b.useState)(1),O=Object(ce.a)(h,2),f=O[0],x=O[1],m=Object(b.useState)(se),g=Object(ce.a)(m,2),v=g[0],y=g[1],k=Object(b.useState)("Work"),S=Object(ce.a)(k,2),C=S[0],z=S[1],T=Object(b.useState)(le),A=Object(ce.a)(T,2),N=A[0],R=A[1],W=Object(b.useState)(je),D=Object(ce.a)(W,2),F=D[0],L=D[1],E=Object(b.useState)(oe),Y=Object(ce.a)(E,2),M=Y[0],P=Y[1],V=Object(b.useState)(ae),X=Object(ce.a)(V,2),I=X[0],B=X[1],J=Object(b.useState)("0em"),U=Object(ce.a)(J,2),G=U[0],q=U[1],H=Object(b.useState)("play"),K=Object(ce.a)(H,2),Q=K[0],Z=K[1],$=Object(b.useState)(!1),_=Object(ce.a)($,2),ee=_[0],te=_[1],ie=Object(b.useState)(!1),be=Object(ce.a)(ie,2),de=be[0],ue=be[1],pe=Object(b.useState)(!1),he=Object(ce.a)(pe,2),Oe=he[0],fe=he[1],xe=Object(b.useState)(20),me=Object(ce.a)(xe,2),ge=me[0],ve=me[1],ye=Object(b.useState)(!1),we=Object(ce.a)(ye,2),ke=we[0],Se=we[1],Ce=Object(b.useState)(!1),ze=Object(ce.a)(Ce,2),Te=ze[0],Ae=ze[1],Ne=Object(b.useState)(!1),Re=Object(ce.a)(Ne,2),We=Re[0],De=Re[1],Fe=Object(b.useState)(!0),Le=Object(ce.a)(Fe,2),Ee=Le[0],Ye=Le[1],Me=function(){return function(e,t,n,i,c,r){return"Stopwatch"===e||"Countdown"===e||"XY"===e?6e4*t+1e3*n:"Tabata"===e?"Work"===r?1e3*i:1e3*c:0}(c,M,I,N,F,C)},Pe=function(){"Countdown"===c||"XY"===c?(p(Me()),l(100)):(l(0),p(0))},Ve=function(){P(oe),B(ae),y(se),R(le),L(je),z("Work"),x(1),De(!1),ue(!1),fe(!1),Pe()},Xe=function(){te(!1),ue(!1),fe(!1),x(1),z("Work"),De(!1),Pe()},Ie=function(e,t,n){n?(z(n),"Rest"===C&&x(f+1)):x(f+1),ve(Me),l(t),p(e)},Be=function(){Xe(),De(!0),Ye(!0)};return Object(b.useEffect)((function(){ve(Me),Pe()}),[M,I,v,F,N]),Object(b.useEffect)((function(){Te&&(Xe(),Ae(!1),console.log("called"),Be())}),[Te]),Object(b.useEffect)((function(){ke&&(Ve(),Se(!1),Ye(!0))}),[ke,Ve]),Object(b.useEffect)((function(){if(de){Ye(!1);var e=setInterval((function(){p("Countdown"===c||"XY"===c?function(e){return e-50}:function(e){return e+50})}),50);return function(){clearInterval(e)}}}),[de]),Object(b.useEffect)((function(){Ve(),Ye(!0)}),[c]),Object(b.useEffect)((function(){de&&l(u/ge*100)}),[u,ge,de]),Object(b.useEffect)((function(){s>=100&&de?("Stopwatch"===c&&Be(),"Tabata"===c&&("Work"===C?Ie(0,0,"Rest"):f<v?Ie(0,0,"Work"):Be())):s<=0&&de&&("Countdown"===c&&Be(),"XY"===c&&(f<v?Ie(ge,100,null):Be()))}),[s]),Object(w.jsx)(re.Provider,{value:{timerType:c,selectTimer:function(e){r(e),q(ne[e])},percent:s,setPercent:l,currentTime:u,setCurrentTime:p,currentRound:f,setCurrentRound:x,maxRound:v,setMaxRound:y,roundType:C,setRoundType:z,tabPos:G,btn1:Q,setBtn1:Z,flipped:ee,setFlipped:te,workLength:N,setWorkLength:R,restLength:F,setRestLength:L,minuteSetting:M,setMinuteSetting:P,secondSetting:I,setSecondSetting:B,timerActive:de,setTimerActive:ue,btnActive:Oe,setBtnActive:fe,toggleTimer:function(){ue(!de),fe(!0),De(!1)},roundTime:ge,setResetFlag:Se,setFastForwardFlag:Ae,congratsFlag:We,showSettings:Ee},children:t})},de=x.a.circle(ie||(ie=Object(h.a)(["\n  stroke: ",";\n  fill: transparent;\n  cx: ","px;\n  cy: ","px;\n  stroke-dasharray: ",";\n  stroke-dashoffset: ",";\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n  transition: all 0.3s ease-out;\n"])),(function(e){return e.color}),(function(e){return e.c}),(function(e){return e.c}),(function(e){return _(e.r)}),(function(e){return function(e,t){var n=_(e);return n-n*t/100}(e.r,e.percent)})),ue=function(e){var t=e.size,n=e.strokeWidth,i=Object(b.useContext)(re).percent;return Object(w.jsxs)("svg",{width:t,height:t,children:[Object(w.jsx)(de,{r:$(t,n),c:t/2,strokeWidth:n,percent:100,color:"white"}),Object(w.jsx)(de,{r:$(t,n),c:t/2,strokeWidth:n+1,percent:i,color:"#a80874"})]})};ue.propType={size:Z.a.number,strokeWidth:Z.a.number},ue.defaultProps={size:450,strokeWidth:20};var pe,he,Oe,fe,xe,me,ge,ve,ye,we,ke,Se,Ce,ze,Te,Ae,Ne,Re,We,De,Fe,Le,Ee,Ye=ue,Me=x.a.div(pe||(pe=Object(h.a)(["\n  margin-top: 1em;\n  margin-bottom: 5em;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  background-color: #0f242e;\n  text-align: center;\n  padding-top: 3em;\n  padding-bottom: 3em;\n  border-radius: 1em;\n"]))),Pe=x.a.label(he||(he=Object(h.a)(["\n  color: white;\n  font-size: 2em;\n"]))),Ve=x.a.input(Oe||(Oe=Object(h.a)(["\n  width: 60%;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  color: #a80874;\n  border-radius: 2em;\n  padding: 1em;\n  font-family: Segoe UI;\n  font-weight: bold;\n  padding-right: 3em;\n  margin-right: 1em;\n  flex: 1;\n"]))),Xe=x.a.div(fe||(fe=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),Ie=x.a.div(xe||(xe=Object(h.a)(["\n  font-size: 2rem;\n"]))),Be=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(w.jsx)(Xe,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(Ie,{children:"Documentation"}),Object(w.jsx)(N,{title:"Loading spinner ",component:Object(w.jsx)(P,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(w.jsx)(N,{title:"Button ",component:Object(w.jsx)("div",{style:{position:"relative"},children:Object(w.jsx)(K,{icon:"play"})}),propDocs:[{prop:"icon",description:"Changes color and icon depending on input",type:"string",defaultValue:"N/A"},{prop:"left",description:"changes css left property for animation purposes",type:"number",defaultValue:"N/A"},{prop:"top",description:"Changes top position for animation purposes",type:"number",defaultValue:"N/A"}]}),Object(w.jsx)(N,{title:"Circle ",component:Object(w.jsx)(Ye,{size:100,strokeWidth:10}),propDocs:[{prop:"size",description:"Determines the width and height of the svg element",type:"int",defaultValue:"450"},{prop:"strokeWidth",description:"Determines the thickness of the progress bar",type:"int",defaultValue:"20"}]}),Object(w.jsx)(N,{title:"panel ",component:Object(w.jsx)(Me,{children:"Panel Content"}),propDocs:[{prop:"N/A",description:"Elevated div for paneling look",type:"N/A",defaultValue:"N/A"}]}),Object(w.jsx)(N,{title:"Label ",component:Object(w.jsx)(Pe,{children:"Label"}),propDocs:[{prop:"N/A",description:"White Styled Label",type:"N/A",defaultValue:"N/A"}]}),Object(w.jsx)(N,{title:"Label ",component:Object(w.jsx)(Ve,{}),propDocs:[{prop:"N/A",description:"Styled input for taking settings options",type:"N/A",defaultValue:"N/A"}]})]})})}}]),n}(d.a.Component),Je=Be,Ue=x.a.p(me||(me=Object(h.a)(["\n  position: absolute;\n  margin: 0;\n  color: white;\n  top: 45%;\n  left: 50%;\n  font-size: 3em;\n  transform: translate(-50%, -50%);\n"]))),Ge=Object(x.a)(Ue)(ge||(ge=Object(h.a)(["\n  top: 57%;\n  font-size: 1.5em;\n  font-weight: bold;\n"]))),qe=Object(x.a)(Ge)(ve||(ve=Object(h.a)(["\n  top: 67%;\n  font-size: 1.2em;\n"]))),He=function(){var e=Object(b.useContext)(re),t=e.timerType,n=e.currentTime,i=e.currentRound,c=e.roundType,r=e.congratsFlag,o="XY"===t||"Tabata"===t,a="Tabata"===t;return Object(w.jsxs)(w.Fragment,{children:[r&&Object(w.jsx)(Ue,{children:"Nice job!"}),!r&&Object(w.jsx)(Ue,{children:te(n)}),r&&Object(w.jsx)(Ge,{className:"fadeIn2",children:"Try Again?"}),o&&!r&&Object(w.jsxs)(Ge,{children:["Round ",i]}),a&&!r&&Object(w.jsx)(qe,{children:c})]})},Ke=x.a.div(ye||(ye=Object(h.a)(["\n  text-align: center;\n  height: 100%;\n"]))),Qe=Object(x.a)(Pe)(we||(we=Object(h.a)(["\n  font-size: 1em;\n  text-align: left;\n  margin-left: 1em;\n  flex: 0.5;\n"]))),Ze=x.a.div(ke||(ke=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]))),$e=function(){var e=Object(b.useContext)(re),t=e.flipped,n=e.setFlipped,i=e.minuteSetting,c=e.setMinuteSetting,r=e.secondSetting,o=e.setSecondSetting,a=e.maxRound,s=e.setMaxRound,l=e.workLength,j=e.setWorkLength,d=e.restLength,u=e.setRestLength,p=e.timerType,h="XY"===p||"Tabata"===p,O="Tabata"===p;return Object(w.jsxs)(Ke,{children:[Object(w.jsx)("div",{children:Object(w.jsx)(Pe,{children:"Settings"})}),!O&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Minutes: "}),Object(w.jsx)(Ve,{type:"text",name:"Minutes",placeholder:"Minutes",onChange:function(e){return c(e.target.value)},value:i})]}),!O&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Seconds: "}),Object(w.jsx)(Ve,{type:"text",name:"Seconds",placeholder:"Seconds",onChange:function(e){return o(e.target.value)},value:r})]}),h&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Rounds: "}),Object(w.jsx)(Ve,{type:"text",name:"Rounds",placeholder:"Total Rounds",value:a,onChange:function(e){return s(e.target.value)}})]}),O&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Work(seconds): "}),Object(w.jsx)(Ve,{type:"text",name:"Work",placeholder:"Work Period",value:l,onChange:function(e){return j(e.target.value)}})]}),O&&Object(w.jsxs)(Ze,{children:[Object(w.jsx)(Qe,{children:"Rest(seconds): "}),Object(w.jsx)(Ve,{type:"text",name:"Rest",placeholder:"Rest Period",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(w.jsx)(K,{icon:"save",top:80,left:50,onClick:function(){return n(!t)}})]})},_e=x.a.div(Se||(Se=Object(h.a)(["\n  position: relative;\n"]))),et=x.a.div(Ce||(Ce=Object(h.a)(["\n  margin-top: 1em;\n  margin-right: 1em;\n  position: relative;\n  height: 4.5em;\n"]))),tt=x.a.div(ze||(ze=Object(h.a)(["\n  height: 5em;\n  position: relative;\n  margin-top: 1em;\n  width: 100%;\n"]))),nt=x.a.div(Te||(Te=Object(h.a)(["\n  perspective: 1000px;\n"]))),it=Object(x.a)(Me)(Ae||(Ae=Object(h.a)(["\n  &.flip {\n    transform: rotateY(180deg);\n  }\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n  height: 38em;\n  width: 28.1em;\n"]))),ct=x.a.div(Ne||(Ne=Object(h.a)(["\n  backface-visibility: hidden;\n  transform-style: preserve-3d;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n"]))),rt=Object(x.a)(ct)(Re||(Re=Object(h.a)(["\n  background-color: #0f242e;\n  transform: rotateY(180deg);\n  height: 43em;\n  width: 28.1em;\n  border-radius: 1em;\n"]))),ot=function(){var e=Object(b.useContext)(re),t=e.flipped,n=e.setFlipped,i=e.btnActive,c=e.toggleTimer,r=e.timerActive,o=e.setFastForwardFlag,a=e.setResetFlag,s=e.showSettings;return Object(w.jsx)(nt,{children:Object(w.jsxs)(it,{className:t?"flip":"",children:[Object(w.jsxs)(ct,{children:[Object(w.jsx)(et,{children:s&&Object(w.jsx)(K,{icon:"setting",top:10,left:90,onClick:function(){return n(!t)}})}),Object(w.jsxs)(_e,{children:[Object(w.jsx)(Ye,{size:450,strokeWidth:20}),Object(w.jsx)(He,{})]}),Object(w.jsxs)(tt,{children:[Object(w.jsx)(K,{icon:"reset",left:i?20:50,top:40,onClick:function(){return a(!0)}}),Object(w.jsx)(K,{icon:"fast-forward",left:i?80:50,top:40,onClick:function(){return o(!0)}}),Object(w.jsx)(K,{icon:r?"pause":"play",left:50,top:40,onClick:function(){return c()}})]})]}),Object(w.jsx)(rt,{children:Object(w.jsx)($e,{})})]})})},at="0.8s cubic-bezier(0.81, -0.21, 0.24, 1.09)",st=Object(x.a)(Me)(We||(We=Object(h.a)(["\n  padding: 0;\n  width: 40em;\n  height: 4.05em;\n  position: relative;\n"]))),lt=x.a.ul(De||(De=Object(h.a)(["\n  list-style: none;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  z-index: 2;\n\n  .clock-icon,\n  .hour-glass-icon {\n    font-size: 0.87em;\n    margin-right: 0.5em;\n  }\n\n  .stopwatch-icon {\n    margin-right: 0.4em;\n  }\n\n  svg {\n    margin-right: 0.2em;\n  }\n"]))),jt=x.a.li(Fe||(Fe=Object(h.a)(["\n  color: white;\n  font-size: 1.2em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  border-radius: 0.6em;\n  flex: 1 0 25%;\n  transition: ",";\n\n  :hover {\n    cursor: pointer;\n  }\n\n  &&.selected {\n    color: #a80874 !important;\n    transition: ",";\n  }\n"])),at,at),bt=x.a.div(Le||(Le=Object(h.a)(["\n  position: absolute;\n  width: 10em;\n  height: 100%;\n  top: 0;\n  background-color: white;\n  border-radius: 0.5em;\n  z-index: 1;\n  left: ",";\n  transition: ",";\n"])),(function(e){return e.left}),at),dt=function(){var e=Object(b.useContext)(re),t=e.timerType,n=e.selectTimer,i=e.tabPos;return Object(w.jsxs)(st,{children:[Object(w.jsxs)(lt,{children:[Object(w.jsxs)(jt,{onClick:function(){return n("Stopwatch")},className:"Stopwatch"===t?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.h})," Stopwatch"]}),Object(w.jsxs)(jt,{onClick:function(){return n("Countdown")},className:"Countdown"===t?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.e,className:"hour-glass-icon"}),"Countdown"]}),Object(w.jsxs)(jt,{onClick:function(){return n("XY")},className:"XY"===t?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.b,className:"clock-icon"}),"X Y"]}),Object(w.jsxs)(jt,{onClick:function(){return n("Tabata")},className:"Tabata"===t?"selected":"",children:[Object(w.jsx)(V.a,{icon:X.i,className:"stopwatch-icon"}),"Tabata"]})]}),Object(w.jsx)(bt,{left:i})]})},ut=x.a.div(Ee||(Ee=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));var pt,ht,Ot=function(){return Object(w.jsx)(be,{children:Object(w.jsxs)(ut,{children:[Object(w.jsx)(dt,{}),Object(w.jsx)(ot,{})]})})},ft=x.a.div(pt||(pt=Object(h.a)(["\n  background-color: #186bf2;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.23);\n  margin-bottom: 3%;\n\n  ul {\n    margin-top: 0;\n    list-style: none;\n    padding: 1em;\n    display: flex;\n    justify-content: end;\n    color: white;\n  }\n\n  li {\n    margin-right: 1em;\n  }\n\n  li:first-child {\n    margin-right: auto;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #2b193d;\n  }\n"]))),xt=x.a.div(ht||(ht=Object(h.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"])));var mt=function(){return Object(w.jsx)(xt,{children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(ft,{children:Object(w.jsx)("nav",{children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Aali2537 Assignment 2"}),Object(w.jsx)("li",{children:Object(w.jsx)(O.b,{to:"/",children:"Timers"})}),Object(w.jsx)("li",{children:Object(w.jsx)(O.b,{to:"/docs",children:"Documentation"})})]})})}),Object(w.jsxs)(f.c,{children:[Object(w.jsx)(f.a,{path:"/docs",children:Object(w.jsx)(Je,{})}),Object(w.jsx)(f.a,{path:"/",children:Object(w.jsx)(Ot,{})})]})]})})};p.a.render(Object(w.jsx)(d.a.StrictMode,{children:Object(w.jsx)(mt,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.5111ed00.chunk.js.map