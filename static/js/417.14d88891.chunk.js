"use strict";(self.webpackChunkswiggyclone=self.webpackChunkswiggyclone||[]).push([[417],{815:(e,s,l)=>{l.r(s),l.d(s,{default:()=>A});var t=l(43),a=l(3),i=l(238);const n=l.p+"static/media/empty_cart.0ade70c16682ac3badc0.webp";var r=l(216),c=l(210),d=l(173),o=l(944),m=l(579);const x=e=>{const{val:s}=e,{name:l,defaultPrice:n,price:r,vegClassifier:c,itemQuantity:d}=s,[o,x]=(0,t.useState)({minus:"#60b246",plus:"#60b246"}),A=(0,a.wA)(),h=((0,a.d4)((e=>e.cart.ItemOccurStore)),(0,a.d4)((e=>e.cart.items))),g=(0,a.d4)((e=>e.cart.tempstateStore));var u=!1;return(0,m.jsxs)("div",{className:"quantityBtn flex items-center justify-center rounded-lg h-10 py-2 w-20 md:w-20 lg:w-24 xl:w-24 ",children:[(0,m.jsx)("div",{className:"cursor-pointer px-1 ",onClick:()=>{return e=s,A((0,i.HN)(!g)),A((0,i.Zq)(e)),A((0,i.HW)(e)),void h.filter((s=>{if(s.card.info.id===e.id&&!u){const e=h.indexOf(s),l=h.slice(0,e),t=h.slice(e+1);let a=l.concat(t);A((0,i.gw)()),a.forEach((e=>{A((0,i.IP)(e))})),u=!0}}));var e},children:(0,m.jsx)("i",{className:"fa-solid fa-minus",style:{color:o.minus}})}),(0,m.jsx)("div",{className:" mx-2 md:mx-3 lg:mx-3 xl:mx-3 font-bold  text-center",children:d}),(0,m.jsx)("div",{className:"cursor-pointer px-1  ",onClick:()=>{return e=s,A((0,i.HN)(!g)),A((0,i.Zq)(e)),A((0,i.HW)(e)),void h.filter((s=>{s.card.info.id!==e.id||u||(A((0,i.IP)(s)),u=!0)}));var e},children:(0,m.jsx)("i",{className:"fa-solid fa-plus",style:{color:o.plus}})})]})},A=()=>{var e,s,l,A,h,g,u,f;const[j,p]=(0,t.useState)(!0),w=(0,a.d4)((e=>e.cart.temp)),v=null===(e=w[w.length-1])||void 0===e||null===(s=e.info)||void 0===s?void 0:s.id,N=null===(l=w[w.length-1])||void 0===l||null===(A=l.info)||void 0===A?void 0:A.name,b=null===(h=w[w.length-1])||void 0===h||null===(g=h.info)||void 0===g?void 0:g.areaName,y=null===(u=w[w.length-1])||void 0===u||null===(f=u.info)||void 0===f?void 0:f.cloudinaryImageId,C=(0,a.d4)((e=>e.cart.tempstateStore)),B=(0,a.wA)(),k=()=>{B((0,i.HN)(!C)),B((0,i.gw)()),B((0,i.pN)()),B((0,i.gA)())},Q=(0,r.Zp)(),S="#9f9fa3",I=()=>{Q("/restaurantMenu/".concat(v))},O=(0,a.d4)((e=>e.cart.ItemOccurStore)),R=[];O.forEach((e=>{const{defaultPrice:s,price:l,itemQuantity:t}=e;R.push(void 0===l?s/100*t:l/100*t)}));const E=R.reduce(((e,s)=>e+s),0),D=Math.floor(.12*E),F=E+40+15+D;return(0,m.jsxs)("div",{className:"flex flex-col justify-center items-center",style:{backgroundColor:"#e9ecee"},children:[(0,m.jsx)("div",{className:"CartSection1 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mt-4 mb-9",style:{backgroundColor:"white"},children:0!==O.length?(0,m.jsxs)(m.Fragment,{children:[w.length>=1?(0,m.jsxs)("div",{className:"flex justify-between",children:[(0,m.jsxs)("div",{className:"RestName flex w-8/12",children:[(0,m.jsx)("img",{className:"restImg w-16 cursor-pointer",src:o.pI+y,alt:"food",onClick:I}),(0,m.jsxs)("div",{className:"ml-4",children:[(0,m.jsx)("p",{className:"font-bold text-base lg:text-lg mb-1 cursor-pointer",onClick:I,children:N}),(0,m.jsx)("p",{className:"text-xs sm:text-sm md:text-sm lg:text-sm",children:b})]})]}),(0,m.jsx)("div",{className:"float-right w-4/12 text-right ",children:(0,m.jsx)("button",{className:"clearCartBtn p-2 rounded-lg font-bold text-xs sm:text-sm md:text-base lg:text-lg",style:{backgroundColor:"rgb(203 59 58)",color:"white"},onClick:k,children:"Clear Cart"})})]}):"",(0,m.jsx)("div",{className:"flex flex-column justify-center mt-3 items-center",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:O?O.map(((e,s)=>{const{name:l,defaultPrice:t,price:a,vegClassifier:i,itemQuantity:n}=e;return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"flex items-center my-3 justify-between",children:[(0,m.jsxs)("div",{className:"ItemName w-10/12 flex items-center",children:["VEG"===i?(0,m.jsx)("img",{className:"VegNonvegIcon w-5",src:c,alt:"veg"}):(0,m.jsx)("img",{className:"VegNonvegIcon w-5",src:d,alt:"nonveg"}),(0,m.jsx)("p",{className:"line-clamp-3 md:line-clamp-2 lg:line-clamp-none xl:line-clamp-none text-sm md:text-base lg:text-lg font-semibold m-0 mx-2",children:l})]}),(0,m.jsx)("div",{className:"BasePrice w-3/12 text-center",children:(0,m.jsxs)("p",{className:"text-sm md:text-base lg:text-lg m-0 mx-2",children:["\u20b9",t?t/100:a/100]})}),(0,m.jsx)("div",{className:"QtyBtn w-3/12 position-relative top-3 flex justify-center mx-2 text-sm md:text-base lg:text-lg",children:(0,m.jsx)(x,{val:e})}),(0,m.jsx)("div",{className:"SecondPrice w-4/12 text-center",children:(0,m.jsxs)("p",{className:"text-sm md:text-base lg:text-lg m-0 mx-2",children:["\u20b9",t?t/100*n:a/100*n]})})]})},s)})):""}),(0,m.jsx)("input",{className:"h-8 w-full p-4 outline-none",style:{backgroundColor:"#f9f9f9"},type:"text",placeholder:"Any suggestions? We will pass it on..."}),(0,m.jsxs)("div",{className:"flex justify-between mt-4 border-1 p-2",children:[(0,m.jsx)("div",{className:"ml-2",children:(0,m.jsx)("input",{type:"Checkbox",value:j,onChange:()=>p(!j)})}),(0,m.jsxs)("div",{className:"ml-4 ",children:[(0,m.jsx)("p",{className:"m-0 text-sm md:text-base lg:text-lg font-semibold",children:"Opt in for No-contact Delivery"}),j?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("p",{className:"m-0 text-sm md:text-base lg:text-lg",style:{color:S},children:"Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)"})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("p",{className:"m-0 text-sm md:text-base lg:text-lg",style:{color:S},children:"Our delivery partner will call to confirm. Please ensure that your address has all the required details."})})]})]}),(0,m.jsxs)("div",{className:"BillDetails mt-3 text-sm md:text-base lg:text-lg",children:[(0,m.jsx)("p",{className:"font-semibold text-lg",children:"Bill Details"}),(0,m.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,m.jsx)("span",{children:"Item Total"}),(0,m.jsx)("span",{children:E})]}),(0,m.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,m.jsx)("span",{children:"Delivery Fee "}),(0,m.jsx)("span",{children:40})]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,m.jsx)("span",{children:"Delivery Tip"}),(0,m.jsx)("span",{className:"AddTip",children:"Add Tip"})]}),(0,m.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,m.jsx)("span",{children:"Platform Fee"}),(0,m.jsx)("span",{children:15})]}),(0,m.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,m.jsx)("span",{children:"GST and Restaurant Charges"}),(0,m.jsx)("span",{children:D})]}),(0,m.jsx)("hr",{className:"border-2 border-black"}),(0,m.jsxs)("div",{className:"flex flex-row justify-between mb-2 font-semibold text-lg",children:[(0,m.jsx)("span",{children:"To Pay"}),(0,m.jsx)("span",{children:F})]}),(0,m.jsx)("div",{className:"placeOrderBar bg-green-500 h-12  font-bold text-xl text-white mt-5 cursor-pointer",onClick:()=>{Q("/orderplaced"),k()},children:(0,m.jsx)("span",{className:"placeorder w-full h-12 flex justify-center items-center",children:"Place Order"})})]})]})})]}):(0,m.jsxs)("div",{className:"flex flex-column justify-center items-center",style:{height:"34rem"},children:[(0,m.jsx)("img",{className:"emptyCartPic mb-5",src:n,alt:"EmptyCart"}),(0,m.jsx)("h3",{className:"font-bold",children:"Your cart is empty"}),(0,m.jsx)("h5",{className:"text-center",children:"You can go to home page to view more resturants"}),(0,m.jsx)("button",{className:" mt-3 m-1 p-2 bg-orange-500 text-white font-bold",onClick:()=>{Q("/")},children:"See Restaurant NEAR YOU"})]})}),0!==(null===O||void 0===O?void 0:O.length)?(0,m.jsx)("div",{className:"CartSection2 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mb-5",style:{backgroundColor:"white"},children:(0,m.jsxs)("div",{className:"p-4 border-2 text-sm md:text-base lg:text-lg",children:[(0,m.jsx)("p",{className:"font-bold ",children:"Review your order and address details to avoid cancellations"}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{style:{color:"#ed6148"},children:"Note:"})," If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds."]}),(0,m.jsx)("p",{children:"Avoid cancellation as it leads to food wastage."}),(0,m.jsx)("p",{className:"underline underline-offset-2 cursor-pointer",style:{color:"#ed6148"},children:"Read cancellation policy"})]})}):""]})}},173:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO2Xv0oDQRDGtzOXmRi1VLGyt5AZgwh5E/++g4jiIxmtRNTsFIKgopZG7Iy9CbFX5gx2wSS32b2Q/WDgiluY383OzHfGREVFReVSwvidpzATC2ACSyJAYEmswCRV4KIyPVfn0q4QnAlDQxi+utGwBKeyVtq52SjP5g7gtmISS3gkBO3/RyK0LOOhnjF5ALhcT+Yt4/2gc90yPl+tFpaCAggni0L4MexysoTN60qyEARAr4AQPmbdsJbxQaqm4B1ACI+dWQXCA68AOm36a9h+A1q9ptNIACzjnrvksVuF0rY3gN857xbAMtS8AViCN+cVYGj4BOg4rwBBZ6wBhKDtDUAYXkfQAy/eAFJj5r4HTrwBqKt0DVDn4qbfRcbQcnh9PmWlPOMNQKWW2B0A7g+bx9AAasBSI5b97t8FMXMqtcJqiTN8+Xf9n8iaR6aDmkD6FQdP/in4D83fu1VTUEvcT2Nrw+qdP182U67zyHxQLbG6St0Tuph0Y6ehzww1S8WtXtMmFwCjkESAwJJYgXGvgOQkzMQBREVFRRkf+gHhzjmciMgUEwAAAABJRU5ErkJggg=="},210:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2XwUoDQQyG56be1KMVH8OJTWSvfQq1+g4iFfEoQpPaB7H2Naqox1a8qXdb6r2SrR6LdXd2Zkvnh8DC7sB8m0nmjzFRUVFRpRQITcoUZmkBTGBBBAgsiBlYpgwAw+ZeC4+BsWuZBiD4paHPlvHOMtXpijZKBwAMa7ZJ58A0+rsl4hCEGrrGlAGgel3dskz3/+3rlukZb3AnKMBuO9m2Qh+ZLyjGd2CoBAFIjw3jY+5blukhuUxWvQNYwQtXNsEKnnkF0G4zX8HOGzic1Z0KAsATd5unaRaa+0c+AbrOAYQ63gCs0KtzAKaBPwDGsXsAHC80ADCNvAGA4EsBNdD3BqDGrIAM3HoEoLp7ADzwe5FNXaWrAv5MWsm6N4Cf9w2HGTjNuo/MAGrA1IjlL17sBTFz6TcMldQSZwbAN50n8u4j/0Aj2Mvw55+CDzS/0iOglniewtaC1TNfa9dWXO8j90K1xOoq0wFeqK83dhr6LNQBwcNZ3aYUAEUIIkBgQczAomcAShJm6QCioqKijA99A3yCPIRsuFUZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=417.14d88891.chunk.js.map