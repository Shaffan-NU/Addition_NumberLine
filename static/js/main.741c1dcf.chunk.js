(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=new URLSearchParams(window.location.search),o=i.get("limit"),s=i.get("dif"),c=0,l=[],u=function(){console.log(l[c]);var e=0;l[c].attemptedAnswer==l[c].corectAnswer&&(e=1);var t=i.get("limit"),n=i.get("cid"),a=i.get("crcid"),o=i.get("sid"),u=i.get("uid"),m=i.get("id"),d=i.get("type");r.a.ajax({url:"https://nano-softs.com/adaptive/api.php?prb="+l[c].problem+"&aa="+l[c].attemptedAnswer+"&ca="+l[c].corectAnswer+"&tt="+l[c].timeTaken+"&st="+e+"&tkn=f6083658c798db3c3c3227aa5a813c601da7c196fb0871feb0e23bc2528ca35a9253ef957e37d1d7a25e4360a12652ba5493963207def560cd9cab32db8fe0db6602bc278fcfc5be790fb520811d59236734c52e8e25b8dabdece79b16e1815a15bffd16ef0c5e1d46aa9571d6d687d304724f71aa1b06f929ca2b4da5d5add11efa614b69f83ad544bbf2b41c0afe4689c6457f99006d5943affd31ea6f49d3&limit="+t+"&cid="+n+"&crcid="+a+"&sid="+o+"&dif="+s+"&uid="+u+"&id="+m+"&type="+d+"&gt=a",type:"post",data:"",success:function(e){console.log(e),alert("hit")},error:function(e){}})};t.a={setData:function(e,t,n){l.push({index:c,problem:e,attemptedAnswer:t,corectAnswer:n,timeTaken:null})},setDataTime:function(e){l[c].timeTaken=e,u(),c+=1},sendData:u,limit:o,dif:s}},,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/movingFishR.212c4bcb.gif"},,,function(e,t,n){e.exports=n.p+"static/media/movingFishL.48d2eef0.gif"},function(e,t,n){e.exports=n.p+"static/media/more.a989d2c6.png"},function(e,t,n){e.exports=n.p+"static/media/less.6f40b925.png"},function(e,t,n){e.exports=n.p+"static/media/background.5f1c1125.gif"},function(e,t,n){e.exports=n.p+"static/media/sound.7360a269.png"},,function(module,__webpack_exports__,__webpack_require__){"use strict";var _sessionData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),PRIMES_NUMBERS=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],getRandomSymbol=function(){var e=["+","-","/","*","+"],t=e.length-1;return e[Math.round(Math.random()*(+t-0)+0)]},evaluate=function(e,t){return function(){return getRandomNumber(5)}},getRandomNumber=function(e){var t,n=1;return null==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif||"b"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=5,n=1,t=(Math.random()*(e-n)+1).toFixed()):"i"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=30,n=10,t=(Math.random()*(e-n)+n).toFixed()):"m"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif&&(e=50,n=15,t=(Math.random()*(e-n)+n).toFixed()),t},generateProblem=function(e){var t=getRandomNumber(),n=t,a=getRandomSymbol(),r=evaluate(a,t)()||0;return{problem:n+=" ".concat(a," ").concat(r),firstNumber:t,secondNumber:r,symbol:a}},generateAdditionProblem=function(e){var t=getRandomNumber(),n=getRandomNumber(),a=t;return{problem:a+=" ".concat("+"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"+"}},generateSubtractionProblem=function(e){var t=getRandomNumber();console.log(t),0==t&&(t=1);var n=getRandomNumber();if(console.log(n),0==n&&(n=1),t<n){var a=t;t=n,n=a}var r=t;return{problem:r+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},compare=function(e,t){return solve(e)===Number(t)},getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},solve=function solve(expression){var result=eval(expression);return result.toString().includes(".")?Number(result.toFixed(2)):result};__webpack_exports__.a={generateProblem:generateProblem,compare:compare,solve:solve,generateAdditionProblem:generateAdditionProblem,generateSubtractionProblem:generateSubtractionProblem,getRandomInt:getRandomInt}},,,,function(e,t,n){e.exports=n.p+"static/media/tostartpressbutton.424d1898.mp3"},function(e,t,n){e.exports=n.p+"static/media/321go.8efff185.mp3"},function(e,t,n){e.exports=n.p+"static/media/rightAnswer.09b0b7bb.mp3"},function(e,t,n){e.exports=n.p+"static/media/wrongAnswer.ddcbc59b.mp3"},function(e,t,n){e.exports=n.p+"static/media/_1.40d8e09c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_2.65a6b97d.mp3"},function(e,t,n){e.exports=n.p+"static/media/_3.6bd41911.mp3"},function(e,t,n){e.exports=n.p+"static/media/_4.ae5c58d7.mp3"},function(e,t,n){e.exports=n.p+"static/media/_5.fa32eb88.mp3"},function(e,t,n){e.exports=n.p+"static/media/_6.639f363f.mp3"},function(e,t,n){e.exports=n.p+"static/media/_7.7fc04555.mp3"},function(e,t,n){e.exports=n.p+"static/media/_8.9c9b9bcb.mp3"},function(e,t,n){e.exports=n.p+"static/media/_9.fc30493c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_10.594c0b0e.mp3"},function(e,t,n){e.exports=n.p+"static/media/numberLine.d9e39853.png"},function(e,t,n){e.exports=n.p+"static/media/numberLine2.ca415882.png"},,,function(e,t,n){e.exports=n.p+"static/media/instructions.59843b2d.gif"},function(e,t,n){e.exports=n.p+"static/media/grocerySound.a0d6b138.mp3"},function(e,t,n){e.exports=n.p+"static/media/mute.f02ac89a.png"},function(e,t,n){e.exports=n(96)},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),s=n(17),c=n(12),l=n(30),u={points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1},m=Object(c.c)(Object(c.a)(l.a))(c.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GAIN_POINTS":var n=e.points+t.payload;return Object.assign({},e,{points:n});case"SET_TIME":return Object.assign({},e,{seconds:t.payload});case"CORRECT_ANSWER":var a={points:e.points+t.payload.points,level:e.level+t.payload.level};return Object.assign({},e,a);case"REMOVE_LIVE":var r=e.lifes-t.payload.lives;return Object.assign({},e,{level:e.level-t.payload.level,lifes:r});case"FINISH_GAME":return Object.assign({},e,{isFinished:t.payload});case"RESTART_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1});case"START_GAME":return Object.assign({},e,{isStarted:!0});case"EARN_LIFE":return Object.assign({},e,{lifes:e.lifes+1});case"REBOOT_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1});default:return e}}),d=(n(60),n(2)),f=n(3),p=n(5),h=n(4),b=n(6),v=function(e){return function(t){t(e?{type:"FINISH_GAME",payload:!0}:{type:"RESTART_GAME",payload:!0})}};var g=function(e){var t=e.children,n=e.isClicked;return r.a.createElement("button",{className:"App-link",onClick:n},t)},E={set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},y={set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)}},w=(n(61),n(31)),_=n.n(w),O=n(32),S=n.n(O),x=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={player:"player",startGameSound:new Audio(_.a),countDownSound:new Audio(S.a)},n.setNameOfPlayer=function(e){n.setState({player:e.target.value})},n.clicked=function(){y.set("onlinePlayer",n.state.player),n.state.startGameSound.pause(),n.state.countDownSound.play(),n.props.startPressed()},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.startGameSound.play(),r.a.createElement("div",null,r.a.createElement("div",{className:"App-brandname"},r.a.createElement("i",{className:"fas fa-graduation-cap"}),r.a.createElement("br",null)),r.a.createElement("p",null,"Press to start the game"),r.a.createElement(g,{isClicked:this.clicked},"Start"))}}]),t}(r.a.Component),A=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={msg:3},n.handleCount=function(e){return 1===e.msg?{msg:"GO"}:"GO"===e.msg?{msg:void 0}:{msg:e.msg-1}},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalRef=setInterval(function(){return e.setState(e.handleCount)},1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return void 0!==t.msg||(clearInterval(this.intervalRef),this.props.isComplete(),!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," GET READY..."),r.a.createElement("h1",null,this.state.msg))}}]),t}(r.a.Component),k={yellow:"#d8b600",lightBlue:"#61dafb",darkGray:"#999ea7",midGray:"#424855",lightGray:"#f5f5f5",darkBg:"#282c34",red:"#ff6572",green:"#31cd61"},j=n(33),N=n.n(j),R=n(34),C=n.n(R);function P(e){var t=e.text,n=e.type,a=new Audio(N.a),i=new Audio(C.a);return"success"===n?a.play():i.play(),r.a.createElement("span",null,t&&"success"===n&&r.a.createElement("h4",{style:{color:k.green}},t),t&&"success"!==n&&r.a.createElement("h4",{style:{color:k.midGray}},"Answer:  ",r.a.createElement("span",{style:{color:k.lightGray}},t)))}var M=function(e){var t=e.type,n=e.text,a="success"===t?{class:"correct-answer",el:r.a.createElement("i",{className:"fas fa-check"})}:{class:"wrong-answer",el:r.a.createElement("i",{className:"fas fa-times-circle"})};return r.a.createElement("section",null,r.a.createElement("div",{className:"answer  ".concat(a.class)},r.a.createElement("h2",null," ",a.el," ")),r.a.createElement(P,{type:t,text:n}))},I=n(27),T=(n(88),n(1)),L=(n(89),n(10)),D=(n(90),n(35)),G=n.n(D),W=n(36),F=n.n(W),B=n(37),U=n.n(B),H=n(38),z=n.n(H),K=n(39),V=n.n(K),J=n(40),Y=n.n(J),q=n(41),$=n.n(q),Q=n(42),X=n.n(Q),Z=n(43),ee=n.n(Z),te=n(44),ne=n.n(te),ae=n(45),re=n.n(ae),ie=n(46),oe=n.n(ie),se=n(18),ce=n.n(se),le=n(21),ue=n.n(le),me=n(22),de=n.n(me),fe=n(23),pe=n.n(fe),he=(n(91),function(e){var t=r.a.useState(0),n=Object(L.a)(t,2),i=n[0],o=n[1],s=r.a.useState(0),c=Object(L.a)(s,2),l=c[0],u=c[1],m=r.a.useState(0),d=Object(L.a)(m,2),f=d[0],p=d[1],h=r.a.useState(0),b=Object(L.a)(h,2),v=b[0],g=b[1],E=r.a.useState(0),y=Object(L.a)(E,2),w=y[0],_=y[1],O=r.a.useState(),S=Object(L.a)(O,2),x=S[0],A=S[1],k=r.a.useRef(),j=r.a.useRef(),N=r.a.useRef(),R=r.a.useRef(),C="b"==T.a.dif,P=r.a.useState(0),M=Object(L.a)(P,2),I=M[0],D=M[1],W=(T.a.dif,r.a.useState([new Audio(G.a),new Audio(F.a),new Audio(U.a),new Audio(z.a),new Audio(V.a),new Audio(Y.a),new Audio($.a),new Audio(X.a),new Audio(ee.a),new Audio(ne.a)])),B=Object(L.a)(W,1)[0],H={move:{position:"relative",float:"left",left:i+"px",top:f+"px"}},K={move:{position:"relative",float:"left",left:l+"px",top:f+"px"}},J=function(){var e=k.current.offsetWidth/11;o(v*e)},q=function(){var e=j.current.offsetWidth/11;u(w*e)};Object(a.useEffect)(function(){A(ce.a),o(k.current.offsetLeft),p(0)},[]),Object(a.useEffect)(function(){return window.addEventListener("resize",J),function(){window.removeEventListener("resize",J)}},[v]),"b"!=T.a.dif&&Object(a.useEffect)(function(){return window.addEventListener("resize",q),function(){window.removeEventListener("resize",q)}},[w]);return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:"nline",style:{marginTop:"10vh",marginBottom:"25vh"}},r.a.createElement("div",{style:{display:"flex",marginLeft:"20px",marginRight:"20px"}},r.a.createElement("div",null,r.a.createElement("img",{src:pe.a,alt:"less",onClick:function(){if(10-v<10){var t=k.current.offsetWidth/11;o(i-t),g(v-1),A(ue.a),D(I-1),e.decCount(1)}},style:{maxWidth:"50px",width:"100%"},ref:N})),r.a.createElement("div",null,r.a.createElement("img",{src:de.a,alt:"more",onClick:function(){if(v<10){var t=k.current.offsetWidth/11;o(i+t),A(ce.a),g(v+1),e.incCount(1),D(I+1),"b"==T.a.dif&&B[I].play()}},style:{maxWidth:"50px",width:"100%"},ref:R})),r.a.createElement("div",{className:"parentImage"},r.a.createElement("img",{src:x,className:"fish",alt:"movingFish",style:H.move}),r.a.createElement("img",{src:re.a,className:"NumberLine",alt:"numberLine",name:"numberLine",style:{maxWidth:"1000px",width:"100%"},ref:k}))),!C&&r.a.createElement("div",{style:{display:"flex",marginLeft:"20px",marginRight:"30px"}},r.a.createElement("div",null,r.a.createElement("img",{src:pe.a,alt:"less",onClick:function(){if(10-w<10){var t=j.current.offsetWidth/11;u(l-t),_(w-1),A(ue.a),e.decCount(10)}},style:{maxWidth:"50px",width:"100%"},ref:N})),r.a.createElement("div",null,r.a.createElement("img",{src:de.a,alt:"more",onClick:function(){if(w<10){var t=j.current.offsetWidth/11;u(l+t),A(ce.a),_(w+1),e.incCount(10)}},style:{maxWidth:"50px",width:"100%"},ref:R})),r.a.createElement("div",{className:"parentImage"},r.a.createElement("img",{src:x,className:"fish",name:"fish",alt:"movingFish",style:K.move}),r.a.createElement("img",{src:oe.a,className:"NumberLine",alt:"numberLine",name:"numberLine",style:{maxWidth:"1000px",width:"100%"},ref:j})))))}),be=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i))))._isMounted=!1,n.state={problem:"",firstNumber:0,secondNumber:0,symbol:"",answer:0,modal:"",modalShowing:!1,streaks:0,randomImage:"",data:[],totalProblems:1},n.earnLife=function(){n.props.onEarnLife(),n.showModal("success","STREAK!! You won a life \u2665"),n.setState({streaks:0})},n.correctAnswer=function(){n.state.streaks>2?n.earnLife():n.showModal("success"),n._isMounted&&n.props.onCorretAnswer(),n.setState(function(e){return{streaks:e.streaks+1}}),n.nextProblem()},n.wrongAnswer=function(){n._isMounted&&n.props.onWrongAnswer(),n.setState({streaks:0}),n.showModal("error",I.a.solve(n.state.problem).toString()),n.nextProblem()},n.nextProblem=function(){setTimeout(function(){n.getProblem(),n._isMounted&&n.setState({modalShowing:!1,answer:0,totalProblems:n.state.totalProblems+1}),n.props.lifes>0&&n.answerInput&&n.answerInput.focus()},2500)},n.evaluateProblem=function(){var e=I.a.solve(n.state.problem),t=n.state.answer,a=n.state.firstNumber+"!"+n.state.secondNumber;return T.a.setData(a,t,e),I.a.compare(n.state.problem,n.state.answer)?n.correctAnswer():n.wrongAnswer()},n.keyingUp=function(e){"Enter"===e.key&&n.evaluateProblem();var t=e.target.value;n.setState({answer:Number(t.match(/((-?)\d+)/g))})},n.showModal=function(e,t){n.setState({modal:r.a.createElement(M,{type:e,text:t}),modalShowing:!0})},n.getProblem=function(){var e=I.a.generateAdditionProblem(n.props.points);n._isMounted&&n.setState({problem:e.problem,firstNumber:e.firstNumber,secondNumber:e.secondNumber,symbol:e.symbol})},n.populateHover=function(){for(var e=[],t=0;t<n.state.firstNumber;t++)e.push(!1);n.setState({hover:e})},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getProblem(),this.populateHover()}},{key:"shouldComponentUpdate",value:function(e){return this.props.lifes<1?(this.props.onEndGame(this.state.points),!1):e.lifes>-1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(){this.state.totalProblems>T.a.limit&&this.props.onEndGame(this.state.points)}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"show-up",style:{width:"100%",height:"100vh"}},r.a.createElement("div",null,this.state.modalShowing?this.state.modal:r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{style:{fontSize:"3.5em"}}," ",this.state.problem," "),r.a.createElement(he,{incCount:function(t){e.setState({answer:e.state.answer+t})},decCount:function(t){e.setState({answer:e.state.answer-t})},count:this.state.answer})),r.a.createElement("button",{className:"btn fourth answerButton",onClick:this.evaluateProblem}," ",this.state.answer," "))))}}]),t}(r.a.Component),ve={fontSize:"1.5em",color:"black",fontFamily:"fantasy",cursor:"pointer"},ge={height:0,border:"0.5px solid #61dafb"},Ee={color:"black",fontWeight:"bold"},ye=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=ge,t=ve,n=Ee;return r.a.createElement("div",null,r.a.createElement("h1",null,"GAME OVER"),r.a.createElement("hr",{style:e}),r.a.createElement("h3",null,"FINAL SCORE ",r.a.createElement("b",{style:n},this.props.points)),r.a.createElement("br",null),r.a.createElement("h3",{style:t,onClick:this.props.retryGame},"RETRY"),this.children)}}]),t}(r.a.Component),we=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={seconds:n.props.seconds,level:n.props.level,limit:0,totalProblems:1},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:this.props.seconds,limit:T.a.limit}),this._secondsIntervalRef=setInterval(function(){return e.setState(function(e){return{seconds:--e.seconds}})},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.level!==this.state.level&&(T.a.setDataTime(300-this.state.seconds),this.setState(function(t){return{level:e.props.level,totalProblems:e.state.totalProblems+1,seconds:300}}),this.props.setTimeChanged(this.state.seconds))}},{key:"componentWillUnmount",value:function(){clearInterval(this._secondsIntervalRef)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("b",null," ",this.state.totalProblems,"/",this.state.limit," "))}},{key:"timeTaken",value:function(){return 20-this.state.seconds}}]),t}(r.a.Component);we.defaultProps={level:0};var _e=we;var Oe=function(e){var t=e.lifes,n=[];if(t<5)for(var a=0;a<t;a++)n.push(r.a.createElement("i",{key:a,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));else n.push(r.a.createElement("i",{key:t,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));return r.a.createElement("span",{style:{color:k.red}},t>4&&r.a.createElement("b",null,"".concat(t,"x")),n)};function Se(e){var t=e.points;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star",style:{color:k.yellow}})," ",t)}n(92);var xe=n(47),Ae={container:{display:"flex",justifyContent:"space-around"},el:{flex:1},title:{margin:"0.6em auto"},divider:{border:"0.5px solid ".concat(k.midGray)},timeCol:{flex:1,padding:"0.3em 0em",fontSize:"0.6em",color:k.darkGray},sectionContainer:{textAlign:"left",padding:"0.15em 0em"}};function ke(e){var t=e.player;return r.a.createElement("div",{style:Ae.sectionContainer},r.a.createElement("h5",{style:Ae.title},t.name),r.a.createElement("div",{style:Ae.container},r.a.createElement("small",{style:Ae.timeCol},r.a.createElement("i",{className:"fas fa-clock"})," "+xe(new Date(t.time)).fromNow()),r.a.createElement("small",{style:Ae.el},r.a.createElement("i",{className:"fas fa-star",style:{color:k.yellow}})," ",t.points)),r.a.createElement("hr",{style:Ae.divider}))}function je(e){var t=e.points,n=y.get("onlinePlayer"),a=JSON.parse(E.get("scoreTable"))||[];return a.push({name:n,points:t,time:Date.now()}),a=a.sort(function(e,t){return t.points-e.points}).slice(0,4),E.set("scoreTable",JSON.stringify(a)),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(ke,{player:e,key:t})}))}n(94);var Ne=n(48),Re=n(49),Ce=n.n(Re),Pe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).wrapperRef=r.a.createRef(),n.state={problemHint:[{problem:"2+3",Hint:"\u0639\u0644\u06cc \u0646\u06d2 \u0622\u067e \u06a9\u0648 3 \u0631\u0648\u067e\u06d2 \u0627\u0648\u0631 \u0627\u0633\u0627\u0645\u06c1 \u0646\u06d2 \u0622\u067e \u06a9\u0648 2 \u0631\u0648\u067e\u06d2 \u062f\u06cc\u06d2\u06d4 \u062a\u0648 \u0622\u067e \u06a9\u06d2 \u067e\u0627\u0633 \u06a9\u0644 \u06a9\u062a\u0646\u06d2 \u0631\u0648\u067e\u06d2 \u06c1\u06cc\u06ba\u061f"}],showHint:!0,currentProblem:null},n.handleClickOutside=function(){n.setState({showHint:!1})},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"toggleHint",value:function(e){this.setState({showHint:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("i",{onClick:function(){e.toggleHint(!e.state.showHint)},className:"fas fa-info"}),r.a.createElement("div",null,this.state.showHint&&r.a.createElement("div",{class:"thought ",onClick:function(){e.toggleHint(!e.state.showHint)},style:{top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.9)",color:"red",zIndex:5}},r.a.createElement("img",{src:Ce.a,style:{top:0,left:0,right:0,bottom:0,margin:"auto",maxWidth:"800px",width:"60%",position:"absolute"}}))))}}]),t}(r.a.Component),Me=Object(Ne.a)(Pe),Ie=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isBeginningDone:!1,lastPoints:0},n.retryGame=function(){n.setState({isBeginningDone:!1}),n.props.onRetryGame()},n.completeBeginning=function(){n.setState({isBeginningDone:!0})},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.isFinished?r.a.createElement(ye,Object.assign({},this.props,{retryGame:this.retryGame}),r.a.createElement(je,this.props)):r.a.createElement("div",null,this.state.isBeginningDone?r.a.createElement("div",{className:"noselect "},r.a.createElement("div",{className:"App-header-bar"},r.a.createElement(_e,this.props),r.a.createElement(Oe,this.props),r.a.createElement(Se,this.props),r.a.createElement(Me,null)),r.a.createElement("div",null,r.a.createElement(be,this.props))):r.a.createElement(A,{isComplete:this.completeBeginning}))}}]),t}(r.a.Component),Te=(n(95),n(24)),Le=n.n(Te);var De=n(50),Ge=n.n(De),We=n(25),Fe=n.n(We),Be=n(51),Ue=n.n(Be),He=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={img:Fe.a,sound:new Audio(Ge.a)},n.gameStart=function(){n.props.onStartGame()},n.handleSoundClick=function(){n.state.sound.paused?n.state.sound.paused&&(n.state.sound.play(),n.setState({img:Fe.a})):(n.state.sound.pause(),n.setState({img:Ue.a}))},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"handleURL",value:function(){}},{key:"componentDidMount",value:function(){this.state.sound.play()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},(T.a.dif,r.a.createElement("img",{src:Le.a,id:"bg",alt:""})),r.a.createElement("div",null,r.a.createElement("img",{alt:"mute",src:this.state.img,style:{position:"absolute",top:"20px",left:"20px",maxWidth:"40px",width:"100%",zIndex:4},onClick:this.handleSoundClick})),this.props.isStarted?r.a.createElement(Ie,Object.assign({},this.props,{gameStart:this.gameStart})):r.a.createElement(x,{startPressed:this.gameStart})))}}]),t}(a.Component),ze=Object(s.b)(function(e){return{points:e.points,lifes:e.lifes,seconds:e.seconds,level:e.level,isFinished:e.isFinished,isStarted:e.isStarted}},function(e){return{onCorretAnswer:function(t){return e(function(e){e({type:"CORRECT_ANSWER",payload:{points:100,level:1}})})},onWrongAnswer:function(){return e(function(e){e({type:"REMOVE_LIVE",payload:{level:1,lives:1}})})},setTimeChanged:function(t){return e((n=t,function(e){e({type:"SET_TIME",payload:n})}));var n},onEndGame:function(){return e(v(!0))},onRetryGame:function(){return e(v(!1))},onReStartGame:function(){return e(function(e){e({type:"REBOOT_GAME"})})},onStartGame:function(){return e(function(e){e({type:"START_GAME"})})},onEarnLife:function(){return e(function(e){e({type:"EARN_LIFE"})})}}})(He),Ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(s.a,{store:m},r.a.createElement(ze,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Addition_NumberLine",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Addition_NumberLine","/service-worker.js");Ke?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ve(t,e)})}}()}],[[52,1,2]]]);
//# sourceMappingURL=main.741c1dcf.chunk.js.map