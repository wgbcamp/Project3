(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r),c=a(33),l=a(6),s=a(12),m=a(13),u=a(15),h=a(14),p=a(16),g=a(158),d=a(154),E=a(155),v=a(156),b=a(157),f=a(84),I=a(153),S=a(19),y=a(81),D=a.n(y),C=a(82),O=a.n(C),j=a(149),k=a(7);function x(e){return null==localStorage.getItem("account")||""==localStorage.getItem("account")?null:i.a.createElement("div",null,i.a.createElement(k.b,{to:"/post",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},"sell an item")),i.a.createElement(k.b,{to:"/sellerHistory",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},"seller history")),i.a.createElement(k.b,{to:"/orderHistory",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},"order history")))}var w=Object(I.a)((function(e){return{root:{flexGrow:1},headerButtons:{width:160,height:35,fontSize:15},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(S.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function N(e){var t=w();return i.a.createElement("div",{className:t.root},i.a.createElement(d.a,{position:"static"},i.a.createElement(E.a,null,i.a.createElement(v.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},i.a.createElement(D.a,null)),i.a.createElement(k.b,{to:"/",style:{textDecoration:"none",color:"white"}},i.a.createElement(b.a,{className:t.title,variant:"h6",noWrap:!0},"E-Commerce")),i.a.createElement(b.a,{className:t.title,variant:"h6",noWrap:!0}),i.a.createElement(g.a,{container:!0,alienItems:"flex-start",justify:"flex-end",direction:"row"},i.a.createElement("div",{className:t.search},i.a.createElement("div",{className:t.searchIcon},i.a.createElement(O.a,null)),i.a.createElement(f.a,{onChange:e.handleInputChange,onSubmit:e.onSubmit,value:e.search,name:"search",placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),i.a.createElement(k.b,{to:"/search",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit",onClick:e.saveCookie},"search")),i.a.createElement(x,null),i.a.createElement(k.b,{to:"/signup",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{color:"inherit"},e.currentAccount))))),i.a.createElement(k.b,{to:"/search"},i.a.createElement(g.a,{container:!0,spacing:0,direction:"row",justify:"center"},i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Clothing",t)},className:t.headerButtons},"Clothing"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Sports",t)},className:t.headerButtons},"Sports"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Gardening",t)},className:t.headerButtons},"Gardening"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Electronics",t)},className:t.headerButtons},"Electronics"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Toys",t)},className:t.headerButtons},"Toys"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Books",t)},className:t.headerButtons},"Books"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Business",t)},className:t.headerButtons},"Business"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Automotive",t)},className:t.headerButtons},"Automotive"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Music",t)},className:t.headerButtons},"Music"),i.a.createElement(j.a,{variant:"contained",color:"default",onClick:function(t){return e.SaveCookieTag("Art",t)},className:t.headerButtons},"Art"))))}var T=a(159),B=a(160),A=a(163),F=a(162),z=a(161),q=Object(I.a)((function(e){var t;return t={root:{maxWidth:345},media:{height:140}},Object(l.a)(t,"root",{flexGrow:1}),Object(l.a)(t,"paper",{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}),t}));function M(e){var t=q();return i.a.createElement("div",{className:t.root},i.a.createElement(T.a,{className:t.root,onClick:function(t){return e.saveItemID(e.id,t)}},i.a.createElement(B.a,null,i.a.createElement(z.a,{className:t.media,image:e.image}),i.a.createElement(F.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},"Description: "+e.description,i.a.createElement("br",null),i.a.createElement("br",null),"Price: "+e.price,i.a.createElement("br",null),e.shipping))),i.a.createElement(A.a,null,i.a.createElement(k.b,{to:"/details",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{size:"small",color:"primary"},"Details")))))}var U=a(18),_=a.n(U),G=function(e){return _.a.post("/api/item/byID",e)},P=function(e){return _.a.post("/api/item/byIDpurchased",e)},W=function(){return _.a.get("/api/item/readpurchase")},$=function(e){return _.a.post("/api/item/search",e)},R=function(e){return _.a.post("/api/item/searchByTag",e)},L=function(e){return _.a.post("/api/item",e)},H=function(e){return _.a.post("/profile",e)},J=function(e){return _.a.post("/api/item/purchase",e)},Y=function(e){return _.a.post("/api/item/delete",e)},Q=function(e){return _.a.put("/api/item/update",e)},K=function(e){return _.a.post("/api/signUp",e)},V=function(e){return _.a.post("/api/signIn",e)},X=function(e){return _.a.post("/api/searchForAccount",e)},Z=function(e){return _.a.post("/api/findItemSeller",e)},ee=function(e){return _.a.post("/api/searchPostsByAccount",e)},te=function(e){return _.a.post("/api/searchBuysByAccount",e)},ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[],itemToDelete:"",purchasedItems:[],account:"SignUp/SignIn",signInStatue:"No"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.SaveCookieTag=function(e){localStorage.setItem("searchTag",e),localStorage.setItem("search","")},a.logOut=function(){localStorage.setItem("account","")},a.saveCookie=function(){localStorage.setItem("search",a.state.search),localStorage.setItem("searchTag","")},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={account:localStorage.getItem("account")};X(t).then((function(t){console.log(t);try{e.setState({account:"Welcome, "+t.data[0].username+"!"})}catch(a){console.log("No one is logged in")}})),$({search:""}).then((function(t){e.setState({itemData:t.data})})),W().then((function(t){console.log(t),e.setState({purchasedItems:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N,{search:this.state.search,handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,currentAccount:this.state.account,logOut:this.logOut,SaveCookieTag:this.SaveCookieTag}),i.a.createElement("br",null),i.a.createElement("h2",null,"Items for Sale:"),i.a.createElement("br",null),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(g.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(g.a,{item:!0,xs:4},i.a.createElement(M,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:"Shipping: $"+t.shippingCost,id:t._id,saveItemID:e.saveItemID}))}))))),i.a.createElement("br",null))}}]),t}(n.Component),ne=a(36),ie=a(168),re=a(169),oe=a(170),ce=a(166),le=a(167),se=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200},flexGrow:1,textAlign:"center"},formControl:{margin:e.spacing(1),minWidth:200}}}));function me(e){var t=se(),a=Object(n.useState)("item name"),r=Object(ne.a)(a,2),o=r[0],c=r[1],l=Object(n.useState)("item quantity"),s=Object(ne.a)(l,2),m=s[0],u=s[1],h=Object(n.useState)(""),p=Object(ne.a)(h,2),d=p[0],E=p[1],v=Object(n.useState)(""),b=Object(ne.a)(v,2),f=b[0],I=b[1],S=Object(n.useState)("item price"),y=Object(ne.a)(S,2),D=y[0],C=y[1],O=Object(n.useState)("item shipping cost"),k=Object(ne.a)(O,2),x=k[0],w=k[1],N=Object(n.useState)("item description"),T=Object(ne.a)(N,2),B=T[0],A=T[1],F={name:o,quantity:m,type:d,condition:f,price:D,shippingCost:x,description:B,image:e.imageName,itemSeller:e.itemSeller};return i.a.createElement("div",{className:t.root},i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:o,id:"standard-size-normal",onChange:function(e){return c(e.target.value)},name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:m,id:"standard-size-normal",name:"PostItemQuantity",onChange:function(e){return u(e.target.value)}})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ce.a,{className:t.formControl},i.a.createElement(re.a,null,"item category"),i.a.createElement(le.a,{value:d,onChange:function(e){return E(e.target.value)}},i.a.createElement(oe.a,{value:"Clothing"},"Clothing"),i.a.createElement(oe.a,{value:"Sports"},"Sports"),i.a.createElement(oe.a,{value:"Gardening"},"Gardening"),i.a.createElement(oe.a,{value:"Electronics"},"Electronics"),i.a.createElement(oe.a,{value:"Toys"},"Toys"),i.a.createElement(oe.a,{value:"Books"},"Books"),i.a.createElement(oe.a,{value:"Business"},"Business"),i.a.createElement(oe.a,{value:"Automotive"},"Automotive"),i.a.createElement(oe.a,{value:"Music"},"Music"),i.a.createElement(oe.a,{value:"Art"},"Art")))),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ce.a,{className:t.formControl},i.a.createElement(re.a,null,"item condition"),i.a.createElement(le.a,{value:f,onChange:function(e){return I(e.target.value)}},i.a.createElement(oe.a,{value:"New"},"New"),i.a.createElement(oe.a,{value:"Refurbished"},"Refurbished"),i.a.createElement(oe.a,{value:"Used"},"Used"),i.a.createElement(oe.a,{value:"For parts only"},"For parts only")))),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:D,id:"standard-size-normal",name:"PostItemPrice",onChange:function(e){return C(e.target.value)}})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:x,id:"standard-size-normal",name:"PostItemShippingCost",onChange:function(e){return w(e.target.value)}})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:B,id:"standard-size-normal",name:"PostItemDescription",onChange:function(e){return A(e.target.value)}})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement("input",{type:"file",onChange:e.onFileChange})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(j.a,{onClick:function(t){return e.postItem(F)},variant:"contained",color:"primary"},"Submit"))))}var ue=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={selectedFile:null,selectedFileName:"",submissionTime:"",search:"",itemSeller:""},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search),localStorage.setItem("searchTag","")},a.SaveCookieTag=function(e){localStorage.setItem("searchTag",e),localStorage.setItem("search","")},a.onFileChange=function(e){var t=e.target.value.replace(/^.*[\\\/]/,""),n=("./images/"+a.state.submissionTime).concat(t);console.log(n),a.setState({selectedFileName:n}),a.setState({selectedFile:e.target.files[0]})},a.onFileUpload=function(){var e=new FormData;e.append("avatar",a.state.selectedFile,a.state.submissionTime+a.state.selectedFile.name),H(e).then((function(e){console.log(e)})),console.log(a.state.selectedFile),console.log("The time was..."+a.state.submissionTime)},a.fileData=function(){return a.state.selectedFile?i.a.createElement("div",null,i.a.createElement("h2",null,"File Details:"),i.a.createElement("p",null,"File Name: ",a.state.selectedFile.name),i.a.createElement("p",null,"File Type: ",a.state.selectedFile.type),i.a.createElement("p",null,"Last Modified:"," ",a.state.selectedFile.lastModifiedDate.toDateString())):i.a.createElement("div",null,i.a.createElement("br",null))},a.postItem=function(e){console.log(e),console.log(Number(e.quantity)),isNaN(e.name)&&Number(e.quantity)>0&&isNaN(e.type)&&isNaN(e.condition)&&Number(e.price)>0&&Number(e.shippingCost)>=0&&a.state.selectedFile.size<=1e6?(a.onFileUpload(),L(e)):alert("Please check your submission to ensure you entered in the proper values. Only upload images up to 1 MB in size.")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({submissionTime:Date.now()});var t={account:localStorage.getItem("account")};Z(t).then((function(t){console.log(t),e.setState({itemSeller:t.data[0].uniqueID})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(N,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,SaveCookieTag:this.SaveCookieTag}),i.a.createElement(me,{postItem:this.postItem,onFileChange:this.onFileChange,onFileUpload:this.onFileUpload,imageName:this.state.selectedFileName,imageTime:this.state.submissionTime,itemSeller:this.state.itemSeller}),i.a.createElement("div",null),this.fileData())}}]),t}(n.Component),he=a(35),pe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[]},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.deleteItem=function(e,t){t.preventDefault(),console.log("This is the ID to Delete"),console.log(e),Y({thingID:e}).then((function(){window.location.reload()}))},a.saveCookie=function(){localStorage.setItem("search",a.state.search),window.location.reload()},a.SaveCookieTag=function(e){localStorage.setItem("searchTag",e),localStorage.setItem("search",""),window.location.reload()},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={search:localStorage.getItem("search")},a={searchTag:localStorage.getItem("searchTag")};""==t.search?R(a).then((function(t){e.setState({itemData:t.data})})):$(t).then((function(t){e.setState({itemData:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,SaveCookieTag:this.SaveCookieTag}),i.a.createElement("br",null),i.a.createElement("h3",null,"Search results:"),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(g.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(g.a,{item:!0,xs:4},i.a.createElement(M,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:t.shippingCost,id:t._id,saveItemID:e.saveItemID,deleteItem:e.deleteItem}))}))))))}}]),t}(n.Component),ge=Object(I.a)({root:{maxWidth:1e3},media:{height:0,paddingTop:"56.25%",marginTop:"30"}});function de(e){var t=ge();return i.a.createElement(T.a,{className:t.root},i.a.createElement(B.a,null,i.a.createElement(z.a,{className:t.media,image:e.image}),i.a.createElement(F.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.type,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping,i.a.createElement("br",null),i.a.createElement("br",null),e.itemSellerName))),i.a.createElement(A.a,null,i.a.createElement(j.a,{onClick:e.purchaseItem,value:e.id,size:"small",color:"primary"},"Purchase")))}var Ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",currentUser:"",itemData:[Object(l.a)({_id:"",name:"",quantity:"",type:"",condition:"",price:"",shippingCost:"",description:"",image:"",itemSeller:""},"type","")],itemSellerName:""},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.SaveCookieTag=function(e){localStorage.setItem("searchTag",e),localStorage.setItem("search","")},a.saveCookie=function(){localStorage.setItem("search",a.state.search),localStorage.setItem("searchTag","")},a.purchaseItem=function(){var e={name:a.state.itemData[0].name,quantity:a.state.itemData[0].quantity,type:a.state.itemData[0].type,condition:a.state.itemData[0].condition,price:a.state.itemData[0].price,shippingCost:a.state.itemData[0].shippingCost,description:a.state.itemData[0].description,image:a.state.itemData[0].image,itemBuyer:a.state.currentUser,originalSeller:a.state.itemSellerName};console.log(e);var t={thingID:a.state.itemData[0]._id};null==localStorage.getItem("account")||""==localStorage.getItem("account")?alert("You cannot purchase items when signed out. Please sign in."):J(e).then((function(e){console.log(e),Y(t)}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={search:localStorage.getItem("itemID")};this.setState({currentUser:localStorage.getItem("account")}),G(t).then((function(t){e.setState({itemData:t.data});var a={account:e.state.itemData[0].itemSeller};console.log(a),Z(a).then((function(t){console.log(t),e.setState({itemSellerName:t.data[0].username})}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return i.a.createElement("div",null,i.a.createElement(N,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(de,(e={key:this.state.itemData[0]._id,image:"."+this.state.itemData[0].image,title:this.state.itemData[0].name,description:"Description: "+this.state.itemData[0].description,price:"Price: $"+this.state.itemData[0].price,shipping:"Shipping: $"+this.state.itemData[0].shippingCost,id:this.state.itemData[0]._id},Object(l.a)(e,"image",this.state.itemData[0].image),Object(l.a)(e,"itemSellerName","Seller: "+this.state.itemSellerName),Object(l.a)(e,"type","Category: "+this.state.itemData[0].type),Object(l.a)(e,"purchaseItem",this.purchaseItem),e)))}}]),t}(n.Component);Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200},flexGrow:1,textAlign:"center"}}}));var ve=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200},flexGrow:1,textAlign:"center"}}}));function be(e){var t=ve();return i.a.createElement("div",{className:t.root},i.a.createElement("br",null),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement("br",null),i.a.createElement("h4",null,"Log out of your account"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(k.b,{to:"/"},i.a.createElement(j.a,{onClick:e.logOut,variant:"contained",color:"primary"},"Click here to log out")))),i.a.createElement("h2",null,e.imageName))}var fe=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200},flexGrow:1,textAlign:"center"}}}));function Ie(e){var t=fe();return i.a.createElement("div",{className:t.root},i.a.createElement("br",null),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement("h2",null,"Sign up for an account"),i.a.createElement(ie.a,{label:"Enter your username",id:"standard-size-normal",onChange:e.handleInputChange,name:"username"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:"Enter your password",type:"password",id:"standard-size-normal",onChange:e.handleInputChange,name:"password"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(k.b,{to:"/"},i.a.createElement(j.a,{onClick:e.signUp,variant:"contained",color:"primary"},"Submit"))),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement("h4",null,"Log in, if you have already created an account"),i.a.createElement(ie.a,{label:"Enter your username",id:"standard-size-normal",onChange:e.handleInputChange,name:"username"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:"Enter your password",type:"password",id:"standard-size-normal",onChange:e.handleInputChange,name:"password"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(k.b,{to:"/"},i.a.createElement(j.a,{onClick:e.signIn,variant:"contained",color:"primary"},"Submit")))),i.a.createElement("h2",null,e.imageName))}var Se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",username:"",password:"",uniqueID:Math.random()+Date.now()},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.signUp=function(){var e={username:a.state.username,password:a.state.password,uniqueID:a.state.uniqueID};alert("Your account, "+e.username+" has been registered."),K(e).then((function(e){console.log(e)}))},a.signIn=function(){var e={username:a.state.username,password:a.state.password,uniqueID:a.state.uniqueID};alert(e.username+" has signed in."),V(e).then((function(e){console.log(e),localStorage.setItem("account",e.data[0].uniqueID),window.location.reload(!0)}))},a.logOut=function(){localStorage.setItem("account","")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){null!=localStorage.getItem("account")&&""!=localStorage.getItem("account")||this.setState({loggedOut:!0})}},{key:"render",value:function(){return this.state.loggedOut?i.a.createElement(Ie,{handleInputChange:this.handleInputChange,signUp:this.signUp,signIn:this.signIn}):i.a.createElement(be,{logOut:this.logOut})}}]),t}(n.Component),ye=Object(I.a)((function(e){var t;return t={root:{maxWidth:345},media:{height:140}},Object(l.a)(t,"root",{flexGrow:1}),Object(l.a)(t,"paper",{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}),t}));function De(e){var t=ye();return i.a.createElement("div",{className:t.root},i.a.createElement(T.a,{className:t.root,onClick:function(t){return e.saveItemID(e.id,t)}},i.a.createElement(B.a,null,i.a.createElement(z.a,{className:t.media,image:e.image}),i.a.createElement(F.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping))),i.a.createElement(A.a,null,i.a.createElement(k.b,{to:"/sellerdetails",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{size:"small",color:"primary"},"Details")),i.a.createElement(j.a,{onClick:function(t){return e.deleteItem(e.id,t)},value:e.id,size:"small",color:"primary"},"Delete"))))}var Ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[],itemToDelete:"",purchasedItems:[],account:"SignUp/SignIn",signInStatue:"No"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.deleteItem=function(e,t){t.preventDefault(),console.log("This is the ID to Delete"),console.log(e),Y({thingID:e}).then((function(){window.location.reload()}))},a.SaveCookieTag=function(e){localStorage.setItem("searchTag",e),localStorage.setItem("search","")},a.saveCookie=function(){localStorage.setItem("search",a.state.search),localStorage.setItem("searchTag","")},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={account:localStorage.getItem("account")};X(t).then((function(t){console.log(t);try{e.setState({account:"Welcome, "+t.data[0].username+"!"})}catch(a){console.log("No one is logged in")}})),ee(t).then((function(t){console.log(t),e.setState({itemData:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N,{search:this.state.search,handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,currentAccount:this.state.account,SaveCookieTag:this.SaveCookieTag}),i.a.createElement("br",null),i.a.createElement("h2",null,"Selling history:"),i.a.createElement("br",null),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(g.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(g.a,{item:!0,xs:4},i.a.createElement(De,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:t.shippingCost,id:t._id,deleteItem:e.deleteItem,saveItemID:e.saveItemID}))}))))))}}]),t}(n.Component),Oe=Object(I.a)({root:{maxWidth:1e3},media:{height:0,paddingTop:"56.25%",marginTop:"30"}});function je(e){var t=Oe();return i.a.createElement(T.a,{className:t.root},i.a.createElement(B.a,null,i.a.createElement(z.a,{className:t.media,image:e.image}),i.a.createElement(F.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.type,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping,i.a.createElement("br",null),i.a.createElement("br",null),e.itemSeller))),i.a.createElement(A.a,null,i.a.createElement(j.a,{onClick:function(t){return e.deleteItem(e.id,t)},value:e.id,size:"small",color:"primary"},"Delete")))}var ke=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[Object(l.a)({_id:"",name:"",quantity:"",type:"",condition:"",price:"",shippingCost:"",description:"",image:"",itemSeller:""},"type","")]},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.purchaseItem=function(){var e={name:a.state.itemData[0].name,quantity:a.state.itemData[0].quantity,type:a.state.itemData[0].type,condition:a.state.itemData[0].condition,price:a.state.itemData[0].price,shippingCost:a.state.itemData[0].shippingCost,description:a.state.itemData[0].description,image:a.state.itemData[0].image};console.log(e),J(e).then((function(e){console.log(e)}))},a.deleteItem=function(e,t){t.preventDefault(),console.log("This is the ID to Delete"),console.log(e),Y({thingID:e})},a.updateItem=function(){var e={thingID:a.state.itemData[0]._id};Q(e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={search:localStorage.getItem("itemID")};G(t).then((function(t){e.setState({itemData:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return i.a.createElement("div",null,i.a.createElement(N,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(je,(e={key:this.state.itemData[0]._id,image:"."+this.state.itemData[0].image,title:this.state.itemData[0].name,description:this.state.itemData[0].description,price:"$"+this.state.itemData[0].price,shipping:"Shipping: "+this.state.itemData[0].shippingCost,id:this.state.itemData[0]._id},Object(l.a)(e,"image",this.state.itemData[0].image),Object(l.a)(e,"itemSeller","Seller: "+this.state.itemData[0].itemSeller),Object(l.a)(e,"type","Category: "+this.state.itemData[0].type),Object(l.a)(e,"purchaseItem",this.purchaseItem),Object(l.a)(e,"updateItem",this.updateItem),Object(l.a)(e,"deleteItem",this.deleteItem),e)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h2",null,"Update your item:"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:this.state.itemData[0].name,id:"standard-size-normal",name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:this.state.itemData[0].quantity,id:"standard-size-normal",name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:this.state.itemData[0].type,id:"standard-size-normal",name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:this.state.itemData[0].condition,id:"standard-size-normal",name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:this.state.itemData[0].price,id:"standard-size-normal",name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:this.state.itemData[0].shippingCost,id:"standard-size-normal",name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(ie.a,{label:this.state.itemData[0].description,id:"standard-size-normal",name:"name"})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(j.a,{variant:"contained",color:"primary"},"Update"))))}}]),t}(n.Component),xe=Object(I.a)((function(e){var t;return t={root:{maxWidth:345},media:{height:140}},Object(l.a)(t,"root",{flexGrow:1}),Object(l.a)(t,"paper",{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}),t}));function we(e){var t=xe();return i.a.createElement("div",{className:t.root},i.a.createElement(T.a,{className:t.root,onClick:function(t){return e.saveItemID(e.id,t)}},i.a.createElement(B.a,null,i.a.createElement(z.a,{className:t.media,image:e.image}),i.a.createElement(F.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},"Description: "+e.description,i.a.createElement("br",null),i.a.createElement("br",null),"Price: "+e.price,i.a.createElement("br",null),"Shipping: "+e.shipping))),i.a.createElement(A.a,null,i.a.createElement(k.b,{to:"/buyerdetails",style:{textDecoration:"none",color:"white"}},i.a.createElement(j.a,{size:"small",color:"primary"},"Details")))))}var Ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[],purchasedItems:[],account:"SignUp/SignIn",signInStatue:"No"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.SaveCookieTag=function(e){localStorage.setItem("searchTag",e),localStorage.setItem("search","")},a.saveCookie=function(){localStorage.setItem("search",a.state.search),localStorage.setItem("searchTag","")},a.saveItemID=function(e,t){t.preventDefault(),localStorage.setItem("itemID",e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={account:localStorage.getItem("account")};X(t).then((function(t){console.log(t);try{e.setState({account:"Welcome, "+t.data[0].username+"!"})}catch(a){console.log("No one is logged in")}})),te(t).then((function(t){console.log(t.data),e.setState({itemData:t.data})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N,{search:this.state.search,handleInputChange:this.handleInputChange,saveCookie:this.saveCookie,currentAccount:this.state.account,SaveCookieTag:this.SaveCookieTag}),i.a.createElement("br",null),i.a.createElement("h2",null,"Order history:"),i.a.createElement("br",null),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(g.a,{container:!0,spacing:3},Object(c.a)(this.state.itemData).map((function(t,a){return i.a.createElement(g.a,{item:!0,xs:4},i.a.createElement(we,{key:t._id,image:"."+t.image,title:t.name,description:t.description,price:"$"+t.price,shipping:t.shippingCost,id:t._id,saveItemID:e.saveItemID}))}))))))}}]),t}(n.Component),Te=Object(I.a)({root:{maxWidth:1e3},media:{height:0,paddingTop:"56.25%",marginTop:"30"}});function Be(e){var t=Te();return i.a.createElement(T.a,{className:t.root},i.a.createElement(B.a,null,i.a.createElement(z.a,{className:t.media,image:e.image}),i.a.createElement(F.a,null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),i.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.description,i.a.createElement("br",null),i.a.createElement("br",null),e.type,i.a.createElement("br",null),i.a.createElement("br",null),e.price,i.a.createElement("br",null),e.shipping,i.a.createElement("br",null),i.a.createElement("br",null),e.itemSeller))),i.a.createElement(A.a,null))}var Ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",itemData:[Object(l.a)({_id:"",name:"",quantity:"",type:"",condition:"",price:"",shippingCost:"",description:"",image:"",itemSeller:""},"type","")]},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(l.a)({},t,n))},a.saveCookie=function(){localStorage.setItem("search",a.state.search)},a.purchaseItem=function(){var e={name:a.state.itemData[0].name,quantity:a.state.itemData[0].quantity,type:a.state.itemData[0].type,condition:a.state.itemData[0].condition,price:a.state.itemData[0].price,shippingCost:a.state.itemData[0].shippingCost,description:a.state.itemData[0].description,image:a.state.itemData[0].image};console.log(e),J(e).then((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={search:localStorage.getItem("itemID")};P(t).then((function(t){e.setState({itemData:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return i.a.createElement("div",null,i.a.createElement(N,{handleInputChange:this.handleInputChange,saveCookie:this.saveCookie}),i.a.createElement(Be,(e={key:this.state.itemData[0]._id,image:"."+this.state.itemData[0].image,title:this.state.itemData[0].name,description:this.state.itemData[0].description,price:"$"+this.state.itemData[0].price,shipping:"Shipping: $"+this.state.itemData[0].shippingCost,id:this.state.itemData[0]._id},Object(l.a)(e,"image",this.state.itemData[0].image),Object(l.a)(e,"itemSeller","Seller: "+this.state.itemData[0].originalSeller),Object(l.a)(e,"type","Category: "+this.state.itemData[0].type),Object(l.a)(e,"purchaseItem",this.purchaseItem),Object(l.a)(e,"updateItem",this.updateItem),Object(l.a)(e,"deleteItem",this.deleteItem),e)))}}]),t}(n.Component);var Fe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(he.c,null,i.a.createElement(he.a,{exact:!0,path:"/",component:ae}),i.a.createElement(he.a,{exact:!0,path:"/post",component:ue}),i.a.createElement(he.a,{exact:!0,path:"/search",component:pe}),i.a.createElement(he.a,{exact:!0,path:"/details",component:Ee}),i.a.createElement(he.a,{exact:!0,path:"/signup",component:Se}),i.a.createElement(he.a,{exact:!0,path:"/sellerHistory",component:Ce}),i.a.createElement(he.a,{exact:!0,path:"/orderHistory",component:Ne}),i.a.createElement(he.a,{exact:!0,path:"/sellerdetails",component:ke}),i.a.createElement(he.a,{exact:!0,path:"/buyerdetails",component:Ae})))};o.a.render(i.a.createElement(k.a,null,i.a.createElement(Fe,null)),document.getElementById("root"))},93:function(e,t,a){e.exports=a(121)}},[[93,1,2]]]);
//# sourceMappingURL=main.3b1aece9.chunk.js.map