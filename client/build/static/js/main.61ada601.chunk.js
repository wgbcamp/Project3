(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),c=a(33),o=a(5),s=a(12),m=a(13),u=a(15),p=a(14),h=a(16),d=a(157),g=a(152),E=a(154),v=a(155),b=a(156),f=a(84),I=a(149),D=a(18),y=a(80),C=a.n(y),O=a(82),S=a.n(O),j=a(158),x=a(11),k=Object(I.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(o.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(D.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(D.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function w(e){var t=k();return i.a.createElement("div",{className:t.root},i.a.createElement(g.a,{position:"static"},i.a.createElement(E.a,null,i.a.createElement(v.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},i.a.createElement(C.a,null)),i.a.createElement(x.b,{to:"/",style:{textDecoration:"none",color:"white"}},i.a.createElement(b.a,{className:t.title,variant:"h6",noWrap:!0},"E-Commerce")),i.a.createElement(b.a,{className:t.title,variant:"h6",noWrap:!0}),i.a.createElement("div",{className:t.search},i.a.createElement("div",{className:t.searchIcon},i.a.createElement(S.a,null)),i.a.createElement(f.a,{onChange:e.handleInputChange,onSubmit:e.onSubmit,value:e.search,name:"search",placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),i.a.createElement(d.a,null,i.a.createElement(x.b,{to:"/search",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit",onClick:e.saveCookie},"search")),i.a.createElement(x.b,{to:"/post",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},"sell an item")),i.a.createElement(x.b,{to:"/sellerHistory",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},"seller history")),i.a.createElement(x.b,{to:"/orderHistory",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},"order history")),i.a.createElement(x.b,{to:"/signup",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},e.currentAccount))))),i.a.createElement(j.a,{variant:"contained",color:"default"},"Clothing"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Sports"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Gardening"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Electronics"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Toys"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Books"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Health & Wellness"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Exercise"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Music"),i.a.createElement(j.a,{variant:"contained",color:"default"},"Art"))}var N=a(159),F=a(160),A=a(163),z=a(162),T=a(161),q=Object(I.a)((function(e){var t;return t={root:{maxWidth:345},media:{height:140}},Object(o.a)(t,"root",{flexGrow:1}),Object(o.a)(t,"paper",{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}),t}));function _(e){var t=q();return i.a.createElement("div",{className:t.root},i.a.createElement(N.a,{className:t.root,onClick:function(t){return e.saveItemID(e.id,t)}},i.a.createElement(F.a,null,i.a.createElement(T.a,{className:t.media,image:e.image}),i.a.createElement(z.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},"Description: "+e.description,i.a.createElement("br",null),i.a.createElement("br",null),"Price: "+e.price,i.a.createElement("br",null),e.shipping))),i.a.createElement(A.a,null,i.a.createElement(x.b,{to:"/details",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{size:"small",color:"primary"},"Details")))))}Object(I.a)((function(e){var t;return t={root:{maxWidth:345},media:{height:140}},Object(o.a)(t,"root",{flexGrow:1}),Object(o.a)(t,"paper",{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}),t}));var U=a(19),M=a.n(U),B=function(e){return M.a.post("/api/item/byID",e)},W=function(e){return M.a.post("/api/item/byIDpurchased",e)},G=function(){return M.a.get("/api/item/readpurchase")},P=function(e){return M.a.post("/api/item/search",e)},$=function(e){return M.a.post("/api/item",e)},H=function(e){return M.a.post("/profile",e)},R=function(e){return M.a.post("/api/item/purchase",e)},L=function(e){return M.a.post("/api/item/delete",e)},J=function(e){return M.a.put("/api/item/update",e)},Q=function(e){return M.a.post("/api/signUp",e)},K=function(e){return M.a.post("/api/signIn",e)},V=function(e){return M.a.post("/api/searchForAccount",e)},X=function(e){return M.a.post("/api/findItemSeller",e)},Y=function(e){return M.a.post("/api/searchPostsByAccount",e)},Z=function(e){return M.a.post("/api/searchBuysByAccount",e)},ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[],itemToDelete:"",purchasedItems:[],account:"SignUp/SignIn",signInStatue:"No"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={account:localStorage.getItem("account")};V(t).then((function(t){console.log(t);try{e.setState({account:"Welcome, "+t.data[0].username+"!"})}catch(a){console.log("No one is logged in")}})),P({search:""}).then((function(t){e.setState({itemData:t.data})})),G().then((function(t){console.log(t),e.setState({purchasedItems:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(w,{search:this.state.search,handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,currentAccount:this.state.account}),i.a.createElement("br",null),i.a.createElement("h2",null,"Items for Sale:"),i.a.createElement("br",null),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(d.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(_,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:"Shipping: $"+t.shippingCost,id:t._id,saveItemID:e.saveItemID}))}))))),i.a.createElement("br",null))}}]),t}(n.Component),te=a(36),ae=a(168),ne=a(169),ie=a(170),re=a(166),le=a(167),ce=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200},flexGrow:1,textAlign:"center"},formControl:{margin:e.spacing(1),minWidth:200}}}));function oe(e){var t=ce(),a=Object(n.useState)("item name"),r=Object(te.a)(a,2),l=r[0],c=r[1],o=Object(n.useState)("item quantity"),s=Object(te.a)(o,2),m=s[0],u=s[1],p=Object(n.useState)(""),h=Object(te.a)(p,2),g=h[0],E=h[1],v=Object(n.useState)(""),b=Object(te.a)(v,2),f=b[0],I=b[1],D=Object(n.useState)("item price"),y=Object(te.a)(D,2),C=y[0],O=y[1],S=Object(n.useState)("item shipping cost"),x=Object(te.a)(S,2),k=x[0],w=x[1],N=Object(n.useState)("item description"),F=Object(te.a)(N,2),A=F[0],z=F[1],T={name:l,quantity:m,type:g,condition:f,price:C,shippingCost:k,description:A,image:e.imageName,itemSeller:e.itemSeller};return i.a.createElement("div",{className:t.root},i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:l,id:"standard-size-normal",onChange:function(e){return c(e.target.value)},name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:m,id:"standard-size-normal",name:"PostItemQuantity",onChange:function(e){return u(e.target.value)}})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(re.a,{className:t.formControl},i.a.createElement(ne.a,null,"item category"),i.a.createElement(le.a,{value:g,onChange:function(e){return E(e.target.value)}},i.a.createElement(ie.a,{value:"Clothing"},"Clothing"),i.a.createElement(ie.a,{value:"Sports"},"Sports"),i.a.createElement(ie.a,{value:"Gardening"},"Gardening"),i.a.createElement(ie.a,{value:"Electronics"},"Electronics"),i.a.createElement(ie.a,{value:"Toys"},"Toys"),i.a.createElement(ie.a,{value:"Books"},"Books"),i.a.createElement(ie.a,{value:"Health & Wellness"},"Health & Wellness"),i.a.createElement(ie.a,{value:"Exercise"},"Exercise"),i.a.createElement(ie.a,{value:"Music"},"Music"),i.a.createElement(ie.a,{value:"Art"},"Art")))),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(re.a,{className:t.formControl},i.a.createElement(ne.a,null,"item condition"),i.a.createElement(le.a,{value:f,onChange:function(e){return I(e.target.value)}},i.a.createElement(ie.a,{value:"New"},"New"),i.a.createElement(ie.a,{value:"Refurbished"},"Refurbished"),i.a.createElement(ie.a,{value:"Used"},"Used"),i.a.createElement(ie.a,{value:"For parts only"},"For parts only")))),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:C,id:"standard-size-normal",name:"PostItemPrice",onChange:function(e){return O(e.target.value)}})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:k,id:"standard-size-normal",name:"PostItemShippingCost",onChange:function(e){return w(e.target.value)}})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:A,id:"standard-size-normal",name:"PostItemDescription",onChange:function(e){return z(e.target.value)}})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement("input",{type:"file",onChange:e.onFileChange})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(j.a,{onClick:function(t){return e.postItem(T)},variant:"contained",color:"primary"},"Submit"))))}var se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selectedFile:null,selectedFileName:"",submissionTime:"",search:"",itemSeller:""},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.onFileChange=function(e){var t=e.target.value.replace(/^.*[\\\/]/,""),n=("./images/"+a.state.submissionTime).concat(t);console.log(n),a.setState({selectedFileName:n}),a.setState({selectedFile:e.target.files[0]})},a.onFileUpload=function(){var e=new FormData;e.append("avatar",a.state.selectedFile,a.state.submissionTime+a.state.selectedFile.name),H(e).then((function(e){console.log(e)})),console.log(a.state.selectedFile),console.log("The time was..."+a.state.submissionTime)},a.fileData=function(){return a.state.selectedFile?i.a.createElement("div",null,i.a.createElement("h2",null,"File Details:"),i.a.createElement("p",null,"File Name: ",a.state.selectedFile.name),i.a.createElement("p",null,"File Type: ",a.state.selectedFile.type),i.a.createElement("p",null,"Last Modified:"," ",a.state.selectedFile.lastModifiedDate.toDateString())):i.a.createElement("div",null,i.a.createElement("br",null))},a.postItem=function(e){console.log(e),console.log(Number(e.quantity)),isNaN(e.name)&&Number(e.quantity)>0&&isNaN(e.type)&&isNaN(e.condition)&&Number(e.price)>0&&Number(e.shippingCost)>=0&&a.state.selectedFile.size<=1e6?(a.onFileUpload(),$(e)):alert("Please check your submission to ensure you entered in the proper values. Only upload images up to 1 MB in size.")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({submissionTime:Date.now()});var t={account:localStorage.getItem("account")};X(t).then((function(t){console.log(t),e.setState({itemSeller:t.data[0].uniqueID})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(w,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(oe,{postItem:this.postItem,onFileChange:this.onFileChange,onFileUpload:this.onFileUpload,imageName:this.state.selectedFileName,imageTime:this.state.submissionTime,itemSeller:this.state.itemSeller}),i.a.createElement("div",null),this.fileData())}}]),t}(n.Component),me=a(35),ue=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[]},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.deleteItem=function(e,t){t.preventDefault(),console.log("This is the ID to Delete"),console.log(e),L({thingID:e}).then((function(){window.location.reload()}))},a.saveCookie=function(){localStorage.setItem("search",a.state.search),window.location.reload()},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(localStorage.getItem("search"));var t={search:localStorage.getItem("search")};P(t).then((function(t){e.setState({itemData:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(w,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement("br",null),i.a.createElement("h3",null,"Search results:"),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(d.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(_,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:t.shippingCost,id:t._id,saveItemID:e.saveItemID,deleteItem:e.deleteItem}))}))))))}}]),t}(n.Component),pe=Object(I.a)({root:{maxWidth:1e3},media:{height:0,paddingTop:"56.25%",marginTop:"30"}});function he(e){var t=pe();return i.a.createElement(N.a,{className:t.root},i.a.createElement(F.a,null,i.a.createElement(T.a,{className:t.media,image:e.image}),i.a.createElement(z.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.type,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping,i.a.createElement("br",null),i.a.createElement("br",null),e.itemSellerName))),i.a.createElement(A.a,null,i.a.createElement(j.a,{onClick:e.purchaseItem,value:e.id,size:"small",color:"primary"},"Purchase"),i.a.createElement(j.a,{onClick:e.updateItem,value:e.id,size:"small",color:"primary"},"Update")))}var de=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",currentUser:"",itemData:[Object(o.a)({_id:"",name:"",quantity:"",type:"",condition:"",price:"",shippingCost:"",description:"",image:"",itemSeller:""},"type","")],itemSellerName:""},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.purchaseItem=function(){var e={name:a.state.itemData[0].name,quantity:a.state.itemData[0].quantity,type:a.state.itemData[0].type,condition:a.state.itemData[0].condition,price:a.state.itemData[0].price,shippingCost:a.state.itemData[0].shippingCost,description:a.state.itemData[0].description,image:a.state.itemData[0].image,itemBuyer:a.state.currentUser,originalSeller:a.state.itemSellerName};console.log(e);var t={thingID:a.state.itemData[0]._id};R(e).then((function(e){console.log(e),L(t)}))},a.updateItem=function(){var e={thingID:a.state.itemData[0]._id};J(e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={search:localStorage.getItem("itemID")};this.setState({currentUser:localStorage.getItem("account")}),B(t).then((function(t){e.setState({itemData:t.data});var a={account:e.state.itemData[0].itemSeller};console.log(a),X(a).then((function(t){console.log(t),e.setState({itemSellerName:t.data[0].username})}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return i.a.createElement("div",null,i.a.createElement(w,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(he,(e={key:this.state.itemData[0]._id,image:"."+this.state.itemData[0].image,title:this.state.itemData[0].name,description:"Description: "+this.state.itemData[0].description,price:"Price: $"+this.state.itemData[0].price,shipping:"Shipping: $"+this.state.itemData[0].shippingCost,id:this.state.itemData[0]._id},Object(o.a)(e,"image",this.state.itemData[0].image),Object(o.a)(e,"itemSellerName","Seller: "+this.state.itemSellerName),Object(o.a)(e,"type","Category: "+this.state.itemData[0].type),Object(o.a)(e,"purchaseItem",this.purchaseItem),Object(o.a)(e,"updateItem",this.updateItem),e)))}}]),t}(n.Component),ge=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200},flexGrow:1,textAlign:"center"}}}));function Ee(e){var t=ge();return i.a.createElement("div",{className:t.root},i.a.createElement("br",null),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement("h2",null,"Sign up for an account:"),i.a.createElement(ae.a,{label:"Enter your username",id:"standard-size-normal",onChange:e.handleInputChange,name:"username"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:"Enter your password",id:"standard-size-normal",onChange:e.handleInputChange,name:"password"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(x.b,{to:"/"},i.a.createElement(j.a,{onClick:e.signUp,variant:"contained",color:"primary"},"Submit"))),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement("h4",null,"Log in, if you already have an account created"),i.a.createElement(ae.a,{label:"Enter your username",id:"standard-size-normal",onChange:e.handleInputChange,name:"username"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:"Enter your password",id:"standard-size-normal",onChange:e.handleInputChange,name:"password"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(x.b,{to:"/"},i.a.createElement(j.a,{onClick:e.signIn,variant:"contained",color:"primary"},"Submit")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h4",null,"Or, log out of your account"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(x.b,{to:"/"},i.a.createElement(j.a,{onClick:e.logOut,variant:"contained",color:"primary"},"Click here to log out")))),i.a.createElement("h2",null,e.imageName))}var ve=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",username:"",password:"",uniqueID:Math.random()+Date.now()},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.signUp=function(){var e={username:a.state.username,password:a.state.password,uniqueID:a.state.uniqueID};Q(e).then((function(e){console.log(e)}))},a.signIn=function(){var e={username:a.state.username,password:a.state.password,uniqueID:a.state.uniqueID};K(e).then((function(e){console.log(e),localStorage.setItem("account",e.data[0].uniqueID)}))},a.logOut=function(){localStorage.setItem("account","")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(w,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(Ee,{handleInputChange:this.handleInputChange,signUp:this.signUp,signIn:this.signIn,logOut:this.logOut}))}}]),t}(n.Component),be=Object(I.a)((function(e){var t;return t={root:{maxWidth:345},media:{height:140}},Object(o.a)(t,"root",{flexGrow:1}),Object(o.a)(t,"paper",{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}),t}));function fe(e){var t=be();return i.a.createElement("div",{className:t.root},i.a.createElement(N.a,{className:t.root,onClick:function(t){return e.saveItemID(e.id,t)}},i.a.createElement(F.a,null,i.a.createElement(T.a,{className:t.media,image:e.image}),i.a.createElement(z.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping))),i.a.createElement(A.a,null,i.a.createElement(x.b,{to:"/sellerdetails",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{size:"small",color:"primary"},"Details")),i.a.createElement(j.a,{onClick:function(t){return e.deleteItem(e.id,t)},value:e.id,size:"small",color:"primary"},"Delete"))))}var Ie=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[],itemToDelete:"",purchasedItems:[],account:"SignUp/SignIn",signInStatue:"No"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.deleteItem=function(e,t){t.preventDefault(),console.log("This is the ID to Delete"),console.log(e),L({thingID:e}).then((function(){window.location.reload()}))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={account:localStorage.getItem("account")};V(t).then((function(t){console.log(t);try{e.setState({account:"Welcome, "+t.data[0].username+"!"})}catch(a){console.log("No one is logged in")}})),Y(t).then((function(t){console.log(t),e.setState({itemData:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(w,{search:this.state.search,handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,currentAccount:this.state.account}),i.a.createElement("br",null),i.a.createElement("h2",null,"Selling history:"),i.a.createElement("br",null),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(d.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(fe,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:t.shippingCost,id:t._id,deleteItem:e.deleteItem,saveItemID:e.saveItemID}))}))))))}}]),t}(n.Component),De=Object(I.a)({root:{maxWidth:1e3},media:{height:0,paddingTop:"56.25%",marginTop:"30"}});function ye(e){var t=De();return i.a.createElement(N.a,{className:t.root},i.a.createElement(F.a,null,i.a.createElement(T.a,{className:t.media,image:e.image}),i.a.createElement(z.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.type,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping,i.a.createElement("br",null),i.a.createElement("br",null),e.itemSeller))),i.a.createElement(A.a,null,i.a.createElement(j.a,{onClick:function(t){return e.deleteItem(e.id,t)},value:e.id,size:"small",color:"primary"},"Delete")))}var Ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[Object(o.a)({_id:"",name:"",quantity:"",type:"",condition:"",price:"",shippingCost:"",description:"",image:"",itemSeller:""},"type","")]},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.purchaseItem=function(){var e={name:a.state.itemData[0].name,quantity:a.state.itemData[0].quantity,type:a.state.itemData[0].type,condition:a.state.itemData[0].condition,price:a.state.itemData[0].price,shippingCost:a.state.itemData[0].shippingCost,description:a.state.itemData[0].description,image:a.state.itemData[0].image};console.log(e),R(e).then((function(e){console.log(e)}))},a.deleteItem=function(e,t){t.preventDefault(),console.log("This is the ID to Delete"),console.log(e),L({thingID:e})},a.updateItem=function(){var e={thingID:a.state.itemData[0]._id};J(e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={search:localStorage.getItem("itemID")};B(t).then((function(t){e.setState({itemData:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return i.a.createElement("div",null,i.a.createElement(w,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(ye,(e={key:this.state.itemData[0]._id,image:"."+this.state.itemData[0].image,title:this.state.itemData[0].name,description:this.state.itemData[0].description,price:"$"+this.state.itemData[0].price,shipping:"Shipping: "+this.state.itemData[0].shippingCost,id:this.state.itemData[0]._id},Object(o.a)(e,"image",this.state.itemData[0].image),Object(o.a)(e,"itemSeller","Seller: "+this.state.itemData[0].itemSeller),Object(o.a)(e,"type","Category: "+this.state.itemData[0].type),Object(o.a)(e,"purchaseItem",this.purchaseItem),Object(o.a)(e,"updateItem",this.updateItem),Object(o.a)(e,"deleteItem",this.deleteItem),e)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h2",null,"Update your item:"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:this.state.itemData[0].name,id:"standard-size-normal",name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:this.state.itemData[0].quantity,id:"standard-size-normal",name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:this.state.itemData[0].type,id:"standard-size-normal",name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:this.state.itemData[0].condition,id:"standard-size-normal",name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:this.state.itemData[0].price,id:"standard-size-normal",name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:this.state.itemData[0].shippingCost,id:"standard-size-normal",name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(ae.a,{label:this.state.itemData[0].description,id:"standard-size-normal",name:"name"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(j.a,{variant:"contained",color:"primary"},"Update"))))}}]),t}(n.Component),Oe=Object(I.a)((function(e){var t;return t={root:{maxWidth:345},media:{height:140}},Object(o.a)(t,"root",{flexGrow:1}),Object(o.a)(t,"paper",{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}),t}));function Se(e){var t=Oe();return i.a.createElement("div",{className:t.root},i.a.createElement(N.a,{className:t.root,onClick:function(t){return e.saveItemID(e.id,t)}},i.a.createElement(F.a,null,i.a.createElement(T.a,{className:t.media,image:e.image}),i.a.createElement(z.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping))),i.a.createElement(A.a,null,i.a.createElement(x.b,{to:"/buyerdetails",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{size:"small",color:"primary"},"Details")))))}var je=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[],purchasedItems:[],account:"SignUp/SignIn",signInStatue:"No"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={account:localStorage.getItem("account")};V(t).then((function(t){console.log(t);try{e.setState({account:"Welcome, "+t.data[0].username+"!"})}catch(a){console.log("No one is logged in")}})),Z(t).then((function(t){console.log(t.data),e.setState({itemData:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(w,{search:this.state.search,handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,currentAccount:this.state.account}),i.a.createElement("br",null),i.a.createElement("h2",null,"Order history:"),i.a.createElement("br",null),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(d.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(Se,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:t.shippingCost,id:t._id,saveItemID:e.saveItemID}))}))))))}}]),t}(n.Component),xe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[Object(o.a)({_id:"",name:"",quantity:"",type:"",condition:"",price:"",shippingCost:"",description:"",image:"",itemSeller:""},"type","")]},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.purchaseItem=function(){var e={name:a.state.itemData[0].name,quantity:a.state.itemData[0].quantity,type:a.state.itemData[0].type,condition:a.state.itemData[0].condition,price:a.state.itemData[0].price,shippingCost:a.state.itemData[0].shippingCost,description:a.state.itemData[0].description,image:a.state.itemData[0].image};console.log(e),R(e).then((function(e){console.log(e)}))},a.deleteItem=function(e,t){t.preventDefault(),console.log("This is the ID to Delete"),console.log(e),L({thingID:e})},a.updateItem=function(){var e={thingID:a.state.itemData[0]._id};J(e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={search:localStorage.getItem("itemID")};W(t).then((function(t){e.setState({itemData:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return i.a.createElement("div",null,i.a.createElement(w,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(ye,(e={key:this.state.itemData[0]._id,image:"."+this.state.itemData[0].image,title:this.state.itemData[0].name,description:this.state.itemData[0].description,price:"$"+this.state.itemData[0].price,shipping:"Shipping: "+this.state.itemData[0].shippingCost,id:this.state.itemData[0]._id},Object(o.a)(e,"image",this.state.itemData[0].image),Object(o.a)(e,"itemSeller","Seller: "+this.state.itemData[0].originalSeller),Object(o.a)(e,"type","Category: "+this.state.itemData[0].type),Object(o.a)(e,"purchaseItem",this.purchaseItem),Object(o.a)(e,"updateItem",this.updateItem),Object(o.a)(e,"deleteItem",this.deleteItem),e)))}}]),t}(n.Component);var ke=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(me.c,null,i.a.createElement(me.a,{exact:!0,path:"/",component:ee}),i.a.createElement(me.a,{exact:!0,path:"/post",component:se}),i.a.createElement(me.a,{exact:!0,path:"/search",component:ue}),i.a.createElement(me.a,{exact:!0,path:"/details",component:de}),i.a.createElement(me.a,{exact:!0,path:"/signup",component:ve}),i.a.createElement(me.a,{exact:!0,path:"/sellerHistory",component:Ie}),i.a.createElement(me.a,{exact:!0,path:"/orderHistory",component:je}),i.a.createElement(me.a,{exact:!0,path:"/sellerdetails",component:Ce}),i.a.createElement(me.a,{exact:!0,path:"/buyerdetails",component:xe})))};l.a.render(i.a.createElement(x.a,null,i.a.createElement(ke,null)),document.getElementById("root"))},93:function(e,t,a){e.exports=a(121)}},[[93,1,2]]]);
//# sourceMappingURL=main.61ada601.chunk.js.map