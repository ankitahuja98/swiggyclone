"use strict";(self.webpackChunkswiggyclone=self.webpackChunkswiggyclone||[]).push([[304],{923:(e,s,t)=>{t.r(s),t.d(s,{default:()=>A});var l=t(43),a=t(216),i=t(944),n=t(3),d=t(238),o=t(579);const c=e=>{const{quantity:s,setQuantity:t,value:a}=e,i=(0,n.wA)(),[c,r]=(0,l.useState)({minus:"#60b246",plus:"#60b246"});(0,l.useEffect)((()=>{1===s?r({minus:"#60b246",plus:"#60b246"}):10===s&&r({minus:"#60b246",plus:"#cccccc"})}),[s]);const m=(0,n.d4)((e=>e.cart.items)),x=(0,n.d4)((e=>e.cart.tempstateStore));var u=!1;return(0,o.jsxs)("div",{className:"quantityBtn flex items-center justify-center rounded-lg h-10 p-2",children:[(0,o.jsx)("div",{className:"quantityBtnMinus cursor-pointer px-1",onClick:()=>(e=>{t(s-1),i((0,d.HN)(!x)),m.filter((s=>{if(s.card.info.id===e.card.info.id&&!u){const e=m.indexOf(s),t=m.slice(0,e),l=m.slice(e+1);let a=t.concat(l);i((0,d.gw)()),a.forEach((e=>{i((0,d.IP)(e))})),u=!0}}))})(a),children:(0,o.jsx)("i",{className:"fa-solid fa-minus",style:{color:c.minus}})}),(0,o.jsx)("div",{className:"mx-3 font-bold",children:s}),(0,o.jsx)("div",{className:" quantityBtnPlus cursor-pointer px-1",onClick:()=>(e=>{t(s+1),i((0,d.HN)(!x)),i((0,d.IP)(e))})(a),children:(0,o.jsx)("i",{className:"fa-solid fa-plus",style:{color:c.plus}})})]})};var r=t(210),m=t(173);const x=e=>{const{model:s,setModel:t,MenuData:a,getdata:x,value:u,modelValue:g}=e,[h,f]=(0,l.useState)(0),{id:v,name:A,defaultPrice:j,price:N,description:p,imageId:b,isVeg:w,isBestseller:y}=u.card.info,{rating:S,ratingCountV2:B}=u.card.info.ratings.aggregatedRating,C=(0,n.d4)((e=>e.cart.tempstateStore)),k=(0,n.d4)((e=>e.cart.restName)),I=(0,n.d4)((e=>e.cart.temp)),V=(0,n.wA)(),E=(0,n.d4)((e=>e.cart.ItemOccurStore));(0,l.useEffect)((()=>{E.forEach((e=>{u.card.info.id===e.id&&f(e.itemQuantity)}))}),[E]);let M=!1;return(0,o.jsxs)("div",{className:"MenuItem d-flex",children:[(0,o.jsxs)("div",{className:"ItemDetails w-10/12",children:[(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("p",{className:"m-0",children:1===w?(0,o.jsx)("img",{className:"VegNonvegIcon w-5",src:r,alt:"veg"}):(0,o.jsx)("img",{className:"VegNonvegIcon w-5",src:m,alt:"nonveg"})}),y?(0,o.jsxs)("div",{className:"flex items-center",style:{color:"#ff6e5a"},children:[(0,o.jsx)("i",{className:"ml-1 fa-solid fa-ribbon text-md"}),(0,o.jsx)("span",{className:" mb-0.5 font-semibold underline underline-offset-1",children:"Bestseller"})]}):""]}),(0,o.jsx)("p",{className:"text-l font-semibold mb-0",children:A}),(0,o.jsxs)("p",{className:"text-l font-semibold mb-1",children:["\u20b9 ",j/100||N/100]}),S?(0,o.jsxs)("p",{className:"text-xs md:text-sm font-semibold mb-2",children:[(0,o.jsx)("i",{className:"fa-solid fa-star ",style:{color:"#0a9400"}}),(0,o.jsxs)("span",{style:{color:"#0a9400"},children:[S," "]}),"(",B,")"]}):"",(0,o.jsx)("p",{className:"line-clamp-3 md:line-clamp-2 lg:line-clamp-none xl:line-clamp-none text-xs font-normal w-10/12",style:{color:"#928f9e"},children:p})]}),(0,o.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center img_",children:[(0,o.jsx)("img",{src:i.BB+b,alt:"err"}),0===h?(0,o.jsx)("button",{className:"AddBtn font-bold py-1 px-3  rounded-md w-75 ",style:{color:"#0a9400"},onClick:()=>(e=>{var l,i,n,o,c;if(I.length>0&&(null===(c=I[0])||void 0===c?void 0:c.info.id)!==k[k.length-1].info.id&&!1===s&&(M=!0),(!1===M||!0===g)&&f(h+1),V((0,d.HN)(!C)),V((0,d.wp)()),x(e),V((0,d.Zq)()),V((0,d.HW)(e)),0===I.length?V((0,d.uY)(k[k.length-1])):(null===(l=I[I.length-1])||void 0===l||null===(i=l.info)||void 0===i?void 0:i.id)!==(null===(n=k[k.length-1])||void 0===n||null===(o=n.info)||void 0===o?void 0:o.id)&&t(!0),0===I.length)V((0,d.IP)(e));else if(1===I.length){var r,m,u,v;(null===(r=I[I.length-1])||void 0===r||null===(m=r.info)||void 0===m?void 0:m.id)===a.id?V((0,d.IP)(e)):(null===(u=I[I.length-1])||void 0===u||null===(v=u.info)||void 0===v?void 0:v.id)!==a.id&&t(!0)}else if(I.length>1){var A,j;(null===(A=I[I.length-1])||void 0===A||null===(j=A.info)||void 0===j?void 0:j.id)===a.id?V((0,d.IP)(e)):t(!0),V((0,d.EH)()),V((0,d.Ph)())}})(u),children:"Add"}):(0,o.jsx)(c,{quantity:h,value:u,setQuantity:f})]})]},v)},u=e=>{const{title:s}=e.data.card.card,t=e.data.card.card.itemCards,{model:a,setModel:i,MenuData:n,getdata:d,modelValue:c,isVeg:r,isNonVeg:m,isBestseller:u,SearchItemInp:g}=e,[h,f]=(0,l.useState)(""),v=[],A=[];let j=[];return t.forEach((e=>{!0===r?1===e.card.info.isVeg&&(v.includes(e)||v.push(e)):v.length=0,!0===m?1!==e.card.info.isVeg&&(A.includes(e)||A.push(e)):A.length=0})),0!==v.length&&(j.length=0,v.forEach((e=>{j.push(e)}))),0!==A.length&&(j.length=0,A.forEach((e=>{j.push(e)}))),0===v.length&&0===A.length&&!1===r&&!1===m&&t.forEach((e=>{j.push(e)})),u&&(j=j.filter((e=>{var s;return!0===(null===(s=e.card.info)||void 0===s?void 0:s.isBestseller)}))),g&&(j=j.filter((e=>e.card.info.name.toLowerCase().includes(g.toLowerCase())))),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"accordionDiv",children:0!==j.length?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"AccordionHeader flex justify-between items-baseline cursor-pointer",onClick:()=>{e.SetShowItem(),f("block"===h?"none":"block")},children:[(0,o.jsxs)("p",{className:"font-bold text-xl",children:[s," (",j.length,")"]}),(0,o.jsx)("div",{className:"font-semibold text-xl mr-4 flex items-baseline",children:"block"===h?(0,o.jsx)("i",{className:"fa-solid fa-chevron-up mt-3"}):(0,o.jsx)("i",{className:"fa-solid fa-chevron-up fa-rotate-180"})})]}),e.showItem?(0,o.jsx)("div",{className:"AccordionBody",style:{display:h},children:j.map((e=>(0,o.jsx)("div",{children:(0,o.jsx)(x,{value:e,Itemcard:t,DisplayItem:h,model:a,setModel:i,MenuData:n,getdata:d,modelValue:c})},e.card.info.id)))}):null,(0,o.jsx)("div",{className:"CategorySepration mb-2",style:{backgroundColor:"#f1f1f6",height:"1rem"}})]}):""})})},g=()=>(0,o.jsx)("div",{className:"mt-5 flex justify-center Loader",children:(0,o.jsxs)("div",{className:" w-7/12",children:[(0,o.jsx)("div",{className:"Header h-40 rounded-2xl mb-5",style:{backgroundColor:"#d8d9db"}}),(0,o.jsx)("div",{className:" mt-5",children:[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}].map(((e,s)=>(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"Body mt-4 mb-3 cursor-pointer h-12 rounded-lg",style:{backgroundColor:"#d8d9db"}})},s)))})]})}),h=e=>{let{getisVeg:s,getisNonVeg:t}=e;const[a,i]=(0,l.useState)(!1),[n,d]=(0,l.useState)(!1),[c,r]=(0,l.useState)(""),[m,x]=(0,l.useState)("");s(a),t(n);return(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsxs)("label",{className:"switch",children:[(0,o.jsx)("input",{type:"checkbox",checked:c,onChange:()=>{i(!a),r(!c),x(""),d(!1)}}),(0,o.jsx)("span",{className:"slider veg"})]}),(0,o.jsx)("span",{className:"fontt font-bold text-xs sm:txt-sm md:text-lg lg:text-xl mb-0.5  ml-1  mr-2 md:mr-5 lg:mr-10",children:"Veg"}),(0,o.jsxs)("label",{className:"switch",children:[(0,o.jsx)("input",{type:"checkbox",checked:m,onChange:()=>{d(!n),x(!m),r(""),i(!1)}}),(0,o.jsx)("span",{className:"slider nonveg"})]}),(0,o.jsx)("span",{className:"fontt font-bold text-xs sm:txt-sm md:text-lg lg:text-xl mb-0.5 ml-1",children:"Non-Veg"})]})},f=e=>{let{getisBestseller:s}=e;const[t,a]=(0,l.useState)({color:"#f97203",bcgColor:"white",boxShadow:""}),[i,n]=(0,l.useState)(!1);return s(i),(0,o.jsx)("div",{children:(0,o.jsxs)("button",{className:"bestseller ml-3 lg:ml-5 text-xs md:text-lg lg:text-xl",style:{color:t.color,backgroundColor:t.bcgColor,boxShadow:t.boxShadow},onClick:()=>{n(!i),"white"===t.bcgColor?a({color:"white",bcgColor:"#f97203",boxShadow:"0px 0px 7px #f97203"}):a({color:"#f97203",bcgColor:"white",boxShadow:""})},children:["Bestseller","white"===t.color?(0,o.jsx)("span",{className:" ml-2 mt-1 ",children:(0,o.jsx)("i",{className:"cross fa-solid fa-xmark"})}):""]})})};var v=t(778);const A=()=>{var e;const s=(0,v.A)(),[t,i]=(0,l.useState)([]),[c,r]=(0,l.useState)([]),[m,x]=(0,l.useState)(""),[A,j]=(0,l.useState)(0),[N,p]=(0,l.useState)(!1),[b,w]=(0,l.useState)(!1),[y,S]=(0,l.useState)([]),[B,C]=(0,l.useState)(),[k,I]=(0,l.useState)(),[V,E]=(0,l.useState)(),{resid:M}=(0,a.g)(),Q=(0,n.d4)((e=>e.cart.tempstateStore));(0,l.useEffect)((()=>{R()}),[]);const R=async()=>{var e,s,t,l,a,n,d,o,c;const m=await fetch("https://swiggyserver-990t.onrender.com/api/menu?lat=28.6389315&lng=77.08668109999999&restaurantId=".concat(M)),x=await m.json();i(null===x||void 0===x||null===(e=x.data)||void 0===e||null===(s=e.cards[2])||void 0===s||null===(t=s.card)||void 0===t||null===(l=t.card)||void 0===l?void 0:l.info);const u=null===(a=x.data)||void 0===a||null===(n=a.cards[4])||void 0===n||null===(d=n.groupedCard)||void 0===d||null===(o=d.cardGroupMap)||void 0===o||null===(c=o.REGULAR)||void 0===c?void 0:c.cards.filter((e=>{var s,t;return"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"===(null===(s=e.card)||void 0===s||null===(t=s.card)||void 0===t?void 0:t["@type"])}));r(u)},D=(0,n.d4)((e=>e.cart.restName)),F=(0,n.wA)(),G=e=>{S(e)};return(0,o.jsx)(o.Fragment,{children:0===c.length?(0,o.jsx)(g,{}):(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"NavbarSeprationcolor",style:{height:"2rem"}}),(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsxs)("div",{className:"RestMenuDiv w-11/12 md:w-10/12 lg:w-8/12 ",children:[(0,o.jsxs)("div",{className:"restInfo w-full mt-2",children:[(0,o.jsx)("h1",{className:"text-2xl lg:text-3xl xl:text-3xl font-extrabold flex justify-start",children:null===t||void 0===t?void 0:t.name}),(0,o.jsx)("div",{className:"restMenudetails my-4",children:(0,o.jsxs)("div",{className:"restMenudetailsDiv p-3 rounded-3xl",children:[(0,o.jsx)("div",{className:"flex font-bold text-lg",children:(0,o.jsxs)("div",{className:"RestMenuBox flex",children:[(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsxs)("p",{className:"mb-1 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl",children:[(0,o.jsx)("i",{className:"fa-solid fa-star",style:{color:"#0a9400"}}),null===t||void 0===t?void 0:t.avgRatingString," "]}),(0,o.jsxs)("p",{className:"mb-1 ml-1 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl",children:["(",null===t||void 0===t?void 0:t.totalRatingsString,")"]})]}),s>400?(0,o.jsx)("p",{className:"mx-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl",children:"-"}):"",(0,o.jsx)("p",{className:"mb-1 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl",children:null===t||void 0===t?void 0:t.costForTwoMessage})]})}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:"text-md font-bold mb-1 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg",style:{color:"#f27429"},children:null===t||void 0===t||null===(e=t.cuisines)||void 0===e?void 0:e.join(", ")})}),(0,o.jsx)("div",{children:(0,o.jsxs)("p",{className:"mb-1 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg",children:[null===t||void 0===t?void 0:t.areaName,", ",null===t||void 0===t?void 0:t.city]})})]})})]}),(0,o.jsxs)("div",{className:"block sm:flex items-center mb-3",children:[(0,o.jsxs)("div",{className:"SearchItemInp border-2 flex justify-between items-center w-48 rounded-md",children:[(0,o.jsx)("input",{value:m,className:"outline-none p-1 w-10/12 mx-1",type:"text",placeholder:"Search for dishes",onChange:e=>{x(e.target.value)}}),m?(0,o.jsx)("i",{className:"fa-solid fa-xmark mx-3",onClick:()=>x("")}):(0,o.jsx)("i",{className:"fa-solid fa-magnifying-glass mx-3"})]}),(0,o.jsxs)("div",{className:"ToogleBtn flex items-center",children:[(0,o.jsx)(h,{getisVeg:e=>{C(e)},getisNonVeg:e=>{I(e)}}),(0,o.jsx)(f,{getisBestseller:e=>{E(e)}})]})]}),(0,o.jsx)("div",{className:"NavbarSeprationcolor",style:{height:"2rem"}}),c.map(((e,s)=>(0,o.jsx)(u,{data:e,index:s,showItem:s===A,SetShowItem:()=>j(s),model:N,setModel:p,MenuData:t,getdata:G,modelValue:b,isVeg:B,isNonVeg:k,isBestseller:V,SearchItemInp:m},s))),N&&(0,o.jsx)("div",{className:"sticky bottom-16 z-10 flex justify-center items-center",children:(0,o.jsxs)("div",{className:"model p-4",children:[(0,o.jsx)("p",{className:"font-bold text-xl",children:" Items already in cart"}),(0,o.jsx)("p",{className:" text-sm",children:"Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?"}),(0,o.jsxs)("div",{className:"flex justify-between",children:[(0,o.jsx)("button",{className:"NoBtn",onClick:()=>{p(!1)},children:"NO"}),(0,o.jsxs)("button",{className:"StartAFresh",onClick:()=>{F((0,d.HN)(!Q)),p(!1),w(!0),F((0,d.uY)(D[D.length-1])),F((0,d.gw)()),F((0,d.IP)(y))},children:["YES, START A FRESH"," "]})]})]})})]})})]})})}},173:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO2Xv0oDQRDGtzOXmRi1VLGyt5AZgwh5E/++g4jiIxmtRNTsFIKgopZG7Iy9CbFX5gx2wSS32b2Q/WDgiluY383OzHfGREVFReVSwvidpzATC2ACSyJAYEmswCRV4KIyPVfn0q4QnAlDQxi+utGwBKeyVtq52SjP5g7gtmISS3gkBO3/RyK0LOOhnjF5ALhcT+Yt4/2gc90yPl+tFpaCAggni0L4MexysoTN60qyEARAr4AQPmbdsJbxQaqm4B1ACI+dWQXCA68AOm36a9h+A1q9ptNIACzjnrvksVuF0rY3gN857xbAMtS8AViCN+cVYGj4BOg4rwBBZ6wBhKDtDUAYXkfQAy/eAFJj5r4HTrwBqKt0DVDn4qbfRcbQcnh9PmWlPOMNQKWW2B0A7g+bx9AAasBSI5b97t8FMXMqtcJqiTN8+Xf9n8iaR6aDmkD6FQdP/in4D83fu1VTUEvcT2Nrw+qdP182U67zyHxQLbG6St0Tuph0Y6ehzww1S8WtXtMmFwCjkESAwJJYgXGvgOQkzMQBREVFRRkf+gHhzjmciMgUEwAAAABJRU5ErkJggg=="},210:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2XwUoDQQyG56be1KMVH8OJTWSvfQq1+g4iFfEoQpPaB7H2Naqox1a8qXdb6r2SrR6LdXd2Zkvnh8DC7sB8m0nmjzFRUVFRpRQITcoUZmkBTGBBBAgsiBlYpgwAw+ZeC4+BsWuZBiD4paHPlvHOMtXpijZKBwAMa7ZJ58A0+rsl4hCEGrrGlAGgel3dskz3/+3rlukZb3AnKMBuO9m2Qh+ZLyjGd2CoBAFIjw3jY+5blukhuUxWvQNYwQtXNsEKnnkF0G4zX8HOGzic1Z0KAsATd5unaRaa+0c+AbrOAYQ63gCs0KtzAKaBPwDGsXsAHC80ADCNvAGA4EsBNdD3BqDGrIAM3HoEoLp7ADzwe5FNXaWrAv5MWsm6N4Cf9w2HGTjNuo/MAGrA1IjlL17sBTFz6TcMldQSZwbAN50n8u4j/0Aj2Mvw55+CDzS/0iOglniewtaC1TNfa9dWXO8j90K1xOoq0wFeqK83dhr6LNQBwcNZ3aYUAEUIIkBgQczAomcAShJm6QCioqKijA99A3yCPIRsuFUZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=304.b9421406.chunk.js.map