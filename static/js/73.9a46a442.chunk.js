"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[73],{68:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(625),l=s(579);const i=({children:e})=>(0,l.jsx)(t.P.div,{initial:{opacity:0,y:50,scale:.95},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,margin:"-50px"},transition:{duration:1.4,ease:[.22,1,.36,1],staggerChildren:.2},children:e})},73:(e,a,s)=>{s.r(a),s.d(a,{default:()=>v});var t=s(138),l=s(111),i=s(43),r=s(723),n=s(579);const c=()=>{const{language:e}=(0,i.useContext)(r.s),{t:a}=(0,i.useContext)(r.s),[s,t]=(0,i.useState)(0),l=()=>{t(window.scrollY)};return(0,i.useEffect)((()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)})),[]),(0,n.jsxs)("section",{className:"relative bg-cover bg-center py-20",style:{backgroundImage:"url(/ALC-Mohammedia/assets/images/alc.jpeg)",backgroundAttachment:"fixed",backgroundPosition:`center ${-.1*s}px`},id:"home","aria-label":"home",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,n.jsx)("div",{className:"relative container mx-auto",children:(0,n.jsxs)("div",{className:"text-center text-white px-10",children:[(0,n.jsxs)("h1",{className:"text-4xl sm:text-6xl py-9 font-bold mb-4",children:["en"===e&&(0,n.jsxs)(n.Fragment,{children:["The ",(0,n.jsx)("span",{className:"text-gradient",children:a("hero_main")})," of Mohammedia"]}),"ar"===e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"text-gradient py-5",children:a("hero_main")})," \u0628\u0627\u0644\u0645\u062d\u0645\u062f\u064a\u0629"]}),"fr"===e&&(0,n.jsxs)(n.Fragment,{children:["Le ",(0,n.jsx)("span",{className:"text-gradient",children:a("hero_main")})," de Mohammedia"]}),"sp"===e&&(0,n.jsxs)(n.Fragment,{children:["El ",(0,n.jsx)("span",{className:"text-gradient",children:a("hero_main")})," de Mohammedia"]})]}),(0,n.jsx)("p",{className:"text-lg",children:a("hero_sub")})]})})]})},o=()=>(0,n.jsx)("div",{className:"animate-pulse",children:(0,n.jsx)("div",{className:"bg-gray-200 rounded-xl",style:{aspectRatio:"4 / 5"}})}),m=({post:e})=>{var a,s;const[t,l]=(0,i.useState)(0),[r,c]=(0,i.useState)(!1),m=(0,i.useCallback)((a=>"CAROUSEL_ALBUM"===e.media_type?e.children.data[a].media_url:"VIDEO"===e.media_type?e.thumbnail_url:e.media_url),[e]),{isLoading:d}=((e,a)=>{const[s,t]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{if("CAROUSEL_ALBUM"===e.media_type){const l=e.children.data.map(((e,s)=>new Promise(((e,t)=>{const l=new Image;l.src=a(s),l.onload=e,l.onerror=t}))));try{await Promise.all(l),t(!1)}catch(s){console.error("Failed to preload some images"),t(!1)}}else{const e=new Image;e.src=a(0),e.onload=()=>{t(!1)}}})()}),[e,a]),{isLoading:s}})(e,m);return(0,n.jsx)("a",{href:e.permalink,target:"_blank",rel:"noopener noreferrer",className:"block",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:(0,n.jsxs)("div",{className:"relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 bg-gray-100 group",style:{aspectRatio:"4 / 5"},children:[d&&(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"relative w-full h-full overflow-hidden",children:!d&&(0,n.jsx)("img",{src:m(t),alt:e.caption||"Instagram post",className:"absolute w-full h-full object-cover"})}),(0,n.jsxs)("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4 transition-all duration-300 "+(r?"opacity-100":"opacity-0 pointer-events-none"),children:[(0,n.jsx)("p",{className:"text-white text-lg line-clamp-3 mb-4",children:e.caption||""}),(0,n.jsxs)("div",{className:"flex items-center gap-6 text-white",children:[(0,n.jsxs)("span",{className:"flex items-center gap-2",children:[(0,n.jsx)("i",{className:"fa-solid fa-heart text-red-500"}),(null===(a=e.like_count)||void 0===a?void 0:a.toLocaleString())||0]}),(0,n.jsxs)("span",{className:"flex items-center gap-2",children:[(0,n.jsx)("i",{className:"fa-solid fa-comment text-sky-500"}),(null===(s=e.comments_count)||void 0===s?void 0:s.toLocaleString())||0]})]})]}),"CAROUSEL_ALBUM"===e.media_type&&(0,n.jsx)("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30",children:e.children.data.map(((e,a)=>(0,n.jsx)("button",{onClick:e=>{e.preventDefault(),e.stopPropagation(),l(a)},className:"w-2 h-2 rounded-full transition-all duration-300 "+(a===t?"bg-white scale-110":"bg-white/50 hover:bg-white/75"),"aria-label":`Go to slide ${a+1}`},a)))})]})})},d=()=>{const{t:e,language:a}=(0,i.useContext)(r.s),[s,t]=(0,i.useState)([]),[l,c]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{try{const e=await fetch("https://graph.instagram.com/17841406147208011/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,like_count,comments_count,children{media_url,thumbnail_url}&access_token=IGAASytZBimHnVBZAE1YUHJ1T2hIblNQenR1eFRTMGJrRGJpamFRdmNuSGJMVTNiV1FXUW1xREM2WHZAaa1pJeTFlQkx4bzNNbExDSHU4M0xhQ0FrLWk1eThXMHVHNF9xMDVVV1otNHFRX0FhWFRTb2g2RVpYaDdQQlhLbWV0ejRBSQZDZD");if(!e.ok)return;const a=await e.json();t(a.data)}catch(e){}finally{c(!1)}})()}),[]),l?(0,n.jsx)("div",{className:"p-10 lg:p-20 bg-white",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4",children:(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[...Array(6)].map(((e,a)=>(0,n.jsx)(o,{},a)))})})}):s.length?(0,n.jsx)("div",{className:"p-10 lg:p-20 bg-white","aria-label":"instagram",children:(0,n.jsxs)("div",{className:"max-w-7xl mx-auto px-4",children:[(0,n.jsxs)("div",{className:"text-center mb-12",children:[(0,n.jsx)("p",{className:"text-md text-red-500 mb-4 uppercase",children:e("socialMedia")}),(0,n.jsxs)("h2",{className:"text-3xl lg:text-5xl font-semibold mb-6 text-gray-500",children:[e("followUsOn")," ",(0,n.jsx)("span",{className:"text-sky-500",children:"ar"===a?"\u0627\u0646\u0633\u062a\u063a\u0631\u0627\u0645":"Instagram"})]}),(0,n.jsx)("p",{className:"text-gray-500 mb-8",children:e("stayUpdated")})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:s.slice(0,6).map((e=>(0,n.jsx)(m,{post:e},e.id)))})]})}):null},x=()=>{const{t:e,language:a}=(0,i.useContext)(r.s);return(0,n.jsx)("section",{dir:""+("ar"===a?"rtl":"ltr"),className:"p-10 lg:p-20 bg-white","aria-label":"category",children:(0,n.jsxs)("div",{className:"text-center max-w-7xl mx-auto px-4",children:[(0,n.jsx)("p",{className:"text-md text-red-500 mb-4 uppercase",children:e("highlights")}),(0,n.jsxs)("h2",{className:"text-3xl lg:text-5xl font-semibold mb-6 text-gray-500",children:[e("whatWeOffer"),(0,n.jsxs)("span",{className:"text-sky-500",children:[" ",e("inTheCenter")]})]}),(0,n.jsx)("p",{className:"text-gray-500 mb-10",children:e("discoverBenefits")}),(0,n.jsxs)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,n.jsx)("li",{className:"flex flex-col h-full",children:(0,n.jsxs)("div",{className:"p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-sky-50",children:[(0,n.jsx)("div",{className:"bg-sky-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/svg/cat-1.svg",width:"40",height:"40",loading:"lazy",alt:e("qualityEnglishCoursesAlt")})}),(0,n.jsx)("h3",{className:"text-xl font-semibold mb-5",children:(0,n.jsx)("div",{className:"text-sky-500",children:e("qualityEnglishCourses")})}),(0,n.jsx)("p",{className:"text-gray-600",children:e("qualityEnglishCoursesDescription")})]})}),(0,n.jsx)("li",{className:"flex flex-col h-full",children:(0,n.jsxs)("div",{className:"p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-red-50",children:[(0,n.jsx)("div",{className:"bg-red-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/svg/cat-2.svg",width:"40",height:"40",loading:"lazy",alt:e("professionalDevelopmentAlt")})}),(0,n.jsx)("h3",{className:"text-xl font-semibold mb-5",children:(0,n.jsx)("div",{className:"text-red-600",children:e("professionalDevelopment")})}),(0,n.jsx)("p",{className:"text-gray-600",children:e("professionalDevelopmentDescription")})]})}),(0,n.jsx)("li",{className:"flex flex-col h-full",children:(0,n.jsxs)("div",{className:"p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-indigo-50",children:[(0,n.jsx)("div",{className:"bg-indigo-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/svg/cat-3.svg",width:"40",height:"40",loading:"lazy",alt:e("culturalExchangeAlt")})}),(0,n.jsx)("h3",{className:"text-xl font-semibold mb-5",children:(0,n.jsx)("div",{className:"text-indigo-600",children:e("culturalExchange")})}),(0,n.jsx)("p",{className:"text-gray-600",children:e("culturalExchangeDescription")})]})}),(0,n.jsx)("li",{className:"flex flex-col h-full",children:(0,n.jsxs)("div",{className:"p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-green-50",children:[(0,n.jsx)("div",{className:"bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/svg/cat-4.svg",width:"40",height:"40",loading:"lazy",alt:e("outstandingTeachersAlt")})}),(0,n.jsx)("h3",{className:"text-xl font-semibold mb-5",children:(0,n.jsx)("div",{className:"text-green-600",children:e("outstandingTeachers")})}),(0,n.jsx)("p",{className:"text-gray-600",children:e("outstandingTeachersDescription")})]})})]})]})})},h=()=>{const{t:e,language:a}=(0,i.useContext)(r.s);return(0,n.jsx)("section",{dir:""+("ar"===a?"rtl":"ltr"),className:"py-10 bg-white","aria-label":"about",children:(0,n.jsxs)("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 max-sm:gap-7 gap-10 lg:gap-20 md:py-10 px-10",children:[(0,n.jsx)("div",{className:"img-holder rounded-lg overflow-hidden",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/alc2.jpg",width:"520",height:"370",loading:"lazy",alt:e("aboutBannerAlt"),className:"w-full h-full object-cover hover:scale-110 transition-all duration-500"})}),(0,n.jsxs)("div",{className:"about-content",children:[(0,n.jsx)("p",{className:"text-md text-red-500 mb-4 uppercase",children:e("aboutUs")}),(0,n.jsxs)("h2",{className:"text-gray-500 text-3xl lg:text-5xl  font-semibold mb-6",children:[e("welcomeTo")," ",(0,n.jsx)("span",{className:"text-sky-500 leading-tight",children:e("alcMohammedia")})]}),(0,n.jsx)("p",{className:"text-gray-500 mb-6 text-justify",children:e("aboutDescription")}),(0,n.jsxs)("ul",{className:"list-disc",children:[(0,n.jsxs)("li",{className:"flex items-center gap-3 mb-4",children:[(0,n.jsx)("i",{className:"fa-solid fa-check text-red-500 text-xl"}),(0,n.jsx)("span",{className:"text-gray-800",children:e("excellenceInEducation")})]}),(0,n.jsxs)("li",{className:"flex items-center gap-3 mb-4",children:[(0,n.jsx)("i",{className:"fa-solid fa-check text-red-500 text-xl"}),(0,n.jsx)("span",{className:"text-gray-800",children:e("outstandingTeachers")})]}),(0,n.jsxs)("li",{className:"flex items-center gap-3 mb-4",children:[(0,n.jsx)("i",{className:"fa-solid fa-check text-red-500 text-xl"}),(0,n.jsx)("span",{className:"text-gray-800",children:e("culturalEnrichment")})]})]})]})]})})},g=()=>{const{t:e,language:a}=(0,i.useContext)(r.s);return(0,n.jsxs)("section",{dir:""+("ar"===a?"rtl":"ltr"),className:"lg:py-10 bg-white","aria-label":"pedagogy",children:[(0,n.jsxs)("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 gap-5 lg:gap-20 p-10 lg:p-10",children:[(0,n.jsxs)("div",{className:"about-content",children:[(0,n.jsx)("p",{className:"text-md text-red-500 mb-4 uppercase",children:e("pedagogy")}),(0,n.jsxs)("h2",{className:"text-gray-500 text-3xl lg:text-5xl font-semibold mb-6",children:[(0,n.jsx)("span",{className:"text-sky-500",children:e("our")})," ",e("pedagogyTitle")]}),(0,n.jsx)("p",{className:"text-gray-500 mb-6 text-justify",children:e("pedagogyDescription")})]}),(0,n.jsx)("div",{className:"rounded-lg overflow-hidden",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/alc.jpeg",width:"520",height:"270",loading:"lazy",alt:e("pedagogyBannerAlt"),className:"w-full h-full object-cover hover:scale-110 transition-all duration-500"})})]}),(0,n.jsxs)("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 px-10 md:py-10",children:[(0,n.jsx)("div",{className:"rounded-lg overflow-hidden",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/alc3.jpg",width:"520",height:"470",loading:"lazy",alt:e("pblBannerAlt"),className:"w-full h-full object-cover hover:scale-110 transition-all duration-500"})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h2",{className:"text-gray-500 text-3xl lg:text-5xl font-semibold mb-6",children:[e("projectBasedLearning")," ",(0,n.jsx)("span",{className:"text-sky-500 leading-tight",children:e("(PBL)")})]}),(0,n.jsx)("p",{className:"text-gray-500 mb-6 text-justify",children:e("pblDescription")})]})]})]})},p=()=>{const{t:e,language:a}=(0,i.useContext)(r.s),[s,t]=(0,i.useState)(null);return(0,n.jsxs)("section",{dir:""+("ar"===a?"rtl":"ltr"),className:"mx-auto max-w-7xl px-4 lg:p-10","aria-label":"faq",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-md text-red-500 mb-4 uppercase",children:"FAQ"}),(0,n.jsx)("h2",{className:"text-gray-500 text-3xl lg:text-5xl font-bold mb-6",children:e("faq")}),(0,n.jsx)("p",{className:"text-gray-500 mb-8 text-lg",children:e("faqDescription")})]}),(0,n.jsx)("div",{children:[...Array(6)].map(((a,l)=>(0,n.jsxs)("div",{className:"bg-blue-200 my-5 rounded-lg",children:[(0,n.jsxs)("button",{"aria-expanded":s===l?"true":"false",className:"flex justify-between items-center w-full font-semibold p-5 \n                          hover:text-sky-500 transition-colors duration-200 cursor-pointer \n                          "+(s===l?"text-sky-500":"text-gray-700"),onClick:()=>(e=>{t(s===e?null:e)})(l),children:[(0,n.jsx)("div",{className:"text-lg text-wrap text-start",children:e(`question_${l+1}`)}),(0,n.jsx)("span",{"aria-hidden":"true",className:"text-2xl",children:s===l?"-":"+"})]}),(0,n.jsxs)("div",{className:"transition-max-height duration-500 ease-in-out overflow-hidden "+(s===l?"max-h-96 opacity-100":"max-h-0 opacity-0"),children:[(0,n.jsx)("hr",{className:"border-t-2 border-sky-500 mx-5"}),(0,n.jsx)("p",{className:"font-light text-gray-600 px-5 py-4",children:e(`respond_${l+1}`)})]})]},l)))})]})},u=()=>{const{t:e,language:a}=(0,i.useContext)(r.s);return(0,n.jsxs)("section",{dir:""+("ar"===a?"rtl":"ltr"),className:"py-10 lg:py-20 mx-auto max-w-7xl px-4 lg:px-8",children:[(0,n.jsxs)("div",{className:"text-center mb-6",children:[(0,n.jsx)("p",{className:"text-md text-red-500 uppercase tracking-wide",children:e("locationSubtitle")}),(0,n.jsxs)("h2",{className:"text-3xl lg:text-5xl font-bold text-gray-500 mt-2",children:[e("visitUs")," ",(0,n.jsx)("span",{className:"text-sky-500",children:e("alcMohammedia")})]})]}),(0,n.jsxs)("p",{className:"text-center text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-12",children:[e("locationDescription1")," ",(0,n.jsx)("br",{}),e("locationDescription2")," ",(0,n.jsx)("br",{}),e("locationDescription3")]}),(0,n.jsx)("div",{className:"w-full h-96 overflow-hidden rounded-lg shadow-lg",children:(0,n.jsx)("iframe",{className:"w-full h-full border-0",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4129397530337!2d-7.3934237000000005!3d33.6982622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b6f154fbb861%3A0xea51518c14999cb1!2sAmerican%20Language%20Center%2C%20Mohammedia.!5e0!3m2!1sen!2sma!4v1721125639506!5m2!1sen!2sma;",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"ALC Mohammedia Location"})})]})},f=()=>{const{t:e,language:a}=(0,i.useContext)(r.s),s=[{src:"/ALC-Mohammedia/assets/images/svg/ACA.svg",alt:"ACA",name:"ACA",url:"https://www.aca.org.ma"},{src:"/ALC-Mohammedia/assets/images/svg/CSC_Mohammedia.svg",alt:"CSC Mohammedia",name:"CSC Mohammedia",url:"https://www.instagram.com/csc_mohammedia/"},{src:"/ALC-Mohammedia/assets/images/svg/Brainlyne.svg",alt:"Brainlyne",name:"Brainlyne",url:"https://www.brainlyne.com"},{src:"/ALC-Mohammedia/assets/images/svg/US_Embassy_Morocco.svg",alt:"US Embassy Morocco",name:"US Embassy Morocco",url:"https://ma.usembassy.gov"},{src:"/ALC-Mohammedia/assets/images/svg/Association_Nahdat_Zenata.svg",alt:"Association Nahdat Zenata",name:"Association Nahdat Zenata",url:"https://nahdatzenata.wixsite.com/"}];return(0,n.jsxs)("section",{dir:""+("ar"===a?"rtl":"ltr"),className:"py-10 lg:py-20 mx-auto",children:[(0,n.jsxs)("div",{className:"text-center mb-6",children:[(0,n.jsx)("p",{className:"text-md text-red-500 uppercase tracking-wide",children:e("networkSubtitle")}),(0,n.jsxs)("h2",{className:"text-3xl lg:text-5xl font-bold text-gray-500 mt-2",children:[e("connectingWith")," ",(0,n.jsx)("span",{className:"text-sky-500",children:e("excellence")})]})]}),(0,n.jsxs)("p",{className:"text-center text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-12",children:[e("partnersDescription1")," ",(0,n.jsx)("br",{}),e("partnersDescription2")," ",(0,n.jsx)("br",{}),e("partnersDescription3")]}),(0,n.jsx)("div",{className:"flex flex-wrap justify-center gap-4",children:s.map(((e,a)=>(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"transition-transform duration-300 hover:scale-110",children:(0,n.jsx)("img",{src:e.src,alt:e.alt,className:"h-20 lg:h-28 object-contain mx-10 grayscale opacity-50 transition-all duration-500 hover:opacity-100 hover:grayscale-0",title:e.name})})},a)))})]})};var j=s(834),b=s(796),N=s(68);const v=()=>(0,n.jsxs)("div",{id:"top",children:[(0,n.jsx)(t.A,{}),(0,n.jsx)(l.A,{}),(0,n.jsx)(c,{}),(0,n.jsx)(N.A,{children:(0,n.jsx)(x,{})}),(0,n.jsx)(N.A,{children:(0,n.jsx)(d,{})}),(0,n.jsx)(N.A,{children:(0,n.jsx)(h,{})}),(0,n.jsx)(N.A,{children:(0,n.jsx)(g,{})}),(0,n.jsx)(N.A,{children:(0,n.jsx)(p,{})}),(0,n.jsx)(N.A,{children:(0,n.jsx)(f,{})}),(0,n.jsx)(N.A,{children:(0,n.jsx)(u,{})}),(0,n.jsx)(j.A,{}),(0,n.jsx)(b.A,{})]})},111:(e,a,s)=>{s.d(a,{A:()=>d});var t=s(43),l=s(216),i=s(475),r=s(723),n=s(204),c=s(144),o=s(579);const m={code:"en",name:"English",flag:"https://flagsapi.com/US/flat/64.png"},d=()=>{var e,a;const s=(0,l.Zp)(),[d,x]=(0,t.useState)(null),[h,g]=(0,t.useState)(!1),{language:p,setLanguage:u}=(0,t.useContext)(r.s),{t:f}=(0,t.useContext)(r.s),j=(0,t.useRef)(null),b=e=>x(e),N=()=>x(null),v=[{code:"en",name:"English",flag:"https://flagsapi.com/US/flat/64.png"},{code:"fr",name:"Fran\xe7ais",flag:"https://flagsapi.com/FR/flat/64.png"},{code:"sp",name:"Espa\xf1ol",flag:"https://flagsapi.com/ES/flat/64.png"},{code:"ar",name:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",flag:"https://flagsapi.com/MA/flat/64.png"}],y=(0,t.useCallback)((e=>{h&&j.current&&!j.current.contains(e.target)&&g(!1)}),[h]);(0,t.useEffect)((()=>(document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)})),[h,y]);const w=v.find((e=>e.code===p))||m,k=(e,a=null)=>{x(null),g(!1),a?(s(e),setTimeout((()=>{const e=document.getElementById(a);e&&e.scrollIntoView({behavior:"smooth"})}),100)):(s(e),window.scrollTo({top:0,behavior:"smooth"}))},A=(null===(e=c.J.find((e=>"/english-program"===e.path)))||void 0===e?void 0:e.sections)||[],C=(null===(a=c.J.find((e=>"/french-program"===e.path)))||void 0===a?void 0:a.sections)||[];return(0,o.jsx)("div",{className:"sticky z-50 top-0",children:(0,o.jsxs)("div",{className:"flex items-center justify-between px-10 xl:px-20 bg-white shadow-md",children:[(0,o.jsx)(i.N_,{to:"/",onClick:()=>k("/"),children:(0,o.jsx)("img",{src:"/ALC-Mohammedia/assets/images/svg/logo.svg",alt:"ALC Mohammedia logo",className:"w-56 lg:w-48 py-6"})}),(0,o.jsx)("div",{className:"fixed inset-0 bg-black z-40 transition-opacity duration-500 "+(h?"opacity-50 visible":"opacity-0 invisible")}),(0,o.jsxs)("ul",{dir:""+("ar"===p?"rtl":"ltr"),ref:j,className:"hidden gap-10 max-lg:flex max-xl:gap-6 max-lg:flex-col max-lg:z-50 max-lg:text-white max-lg:bg-blue-900 max-lg:absolute max-lg:top-0 max-lg:px-12 max-lg:py-20 max-lg:h-[100vh] max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out lg:flex "+(h?"max-lg:translate-x-0 max-lg:left-0 opacity-100":"max-lg:-translate-x-full max-lg:left-0 max-lg:opacity-0"),children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"/",onClick:()=>k("/"),className:"hover:text-sky-600 transition-all navbar-link",children:f("home")})}),(0,o.jsx)("li",{className:"relative",onMouseEnter:()=>b("registration"),onMouseLeave:N,children:(0,o.jsx)(i.N_,{to:"/registration",onClick:()=>k("/registration"),className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:f("registration")})}),(0,o.jsxs)("li",{className:"relative cursor-pointer",onMouseEnter:()=>b("english"),onMouseLeave:N,children:[(0,o.jsxs)("div",{className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:[f("english_program"),(0,o.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,o.jsx)("ul",{className:("english"===d?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50",children:A.map((e=>(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:`/english-program/${e}`,onClick:()=>k("/english-program",e),className:"p-2 block hover:bg-sky-300 max-xl:text-black",children:f(e.replace(/-/g,"_"))})},e)))})]}),(0,o.jsxs)("li",{className:"relative cursor-pointer",onMouseEnter:()=>b("french"),onMouseLeave:N,children:[(0,o.jsxs)("div",{className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:[f("french_program"),(0,o.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,o.jsx)("ul",{className:("french"===d?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50",children:C.map((e=>(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:`/french-program/${e}`,onClick:()=>k("/french-program",e),className:"p-2 block hover:bg-sky-300 max-xl:text-black",children:f(e.replace(/-/g,"_"))})},e)))})]}),(0,o.jsx)("li",{className:"relative",onMouseEnter:()=>b("join"),onMouseLeave:N,children:(0,o.jsx)(i.N_,{to:"/join",onClick:()=>k("/join"),className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:f("join")})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.N_,{to:"/clubs",onClick:()=>k("/clubs"),className:"hover:text-sky-600 transition-all navbar-link",children:f("clubs")})})]}),(0,o.jsxs)("div",{className:"relative",onMouseEnter:()=>b("language"),onMouseLeave:N,children:[(0,o.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,o.jsx)("img",{src:w.flag,width:"30",alt:w.code}),(0,o.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,o.jsx)("ul",{className:("language"===d?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full right-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[150px] transition-all duration-300 ease-in-out z-50",children:v.filter((e=>e.code!==p)).map((e=>(0,o.jsx)("li",{children:(0,o.jsxs)("button",{onClick:()=>(e=>{u(e),x(null),console.log(`Language changed to: ${e}`)})(e.code),className:"w-full p-2 flex items-center hover:bg-sky-300 cursor-pointer",children:[(0,o.jsx)("img",{src:e.flag,width:"20",alt:e.name,className:"mr-2"}),e.name]})},e.code)))})]}),(0,o.jsx)("button",{className:"lg:hidden text-2xl",onClick:()=>g((e=>!e)),children:(0,o.jsx)(n.OXb,{})})]})})}},138:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(204),l=s(579);const i=()=>(0,l.jsx)("div",{className:"hidden xl:flex items-center justify-center bg-blue-900 text-white py-3 text-base",children:(0,l.jsxs)("ul",{className:"nav-contact flex gap-12 2xl:gap-28",children:[(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)(t.vq8,{className:"mr-2"})," 33 Rue de Damas, Mohammedia"]})}),(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"tel:+212661545636",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)("i",{className:"fa-solid fa-phone mr-2"}),"+212 661-545636"]})}),(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"mailto:admin@alcmohammedia.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)(t.maD,{className:"mr-2"})," admin@alcmohammedia.com"]})}),(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"https://linktr.ee/alcmohammedia",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)("i",{className:"fa-solid fa-link mr-2"}),"All Links"]})})]})})},796:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(43),l=s(579);const i=()=>{const[e,a]=(0,t.useState)(!1),s=()=>{window.pageYOffset>300?a(!0):a(!1)};return(0,t.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[]),(0,l.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-10 right-10 bg-sky-500 text-white text-2xl px-4 py-2 rounded-full transition-opacity duration-300 "+(e?"opacity-100":"opacity-0"),"aria-label":"Scroll to top",children:(0,l.jsx)("i",{className:"fa-solid fa-angle-up"})})}},834:(e,a,s)=>{s.d(a,{A:()=>o});var t=s(43),l=s(216),i=s(475),r=s(723),n=s(579);const c=({icon:e,link:a,prefix:s="solid"})=>(0,n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:text-red-500 hover:scale-110 transition-all duration-300","aria-label":`Visit our ${e} page`,children:(0,n.jsx)("i",{className:`fa-${s} fa-${e} text-base`})}),o=()=>{const e=(0,l.Zp)(),{t:a,language:s}=(0,t.useContext)(r.s),o="ar"===s,m=({to:e,children:a})=>(0,n.jsx)("li",{children:(0,n.jsxs)(i.N_,{to:e,className:"group flex items-center gap-2 hover:text-red-500 transition-all duration-300",children:[(0,n.jsx)("span",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:(0,n.jsx)("i",{className:`fa-solid fa-chevron-${o?"left":"right"} text-xs`})}),(0,n.jsx)("span",{className:`group-hover:translate-x-${o?"-1":"1"} transition-transform`,children:a})]})}),d=a=>{e(a),window.scrollTo({top:0,behavior:"smooth"})};return(0,n.jsxs)("footer",{className:"bg-no-repeat bg-cover bg-blue-900/95 text-gray-300 "+(o?"text-right":"text-left"),style:{backgroundImage:"url(/ALC-Mohammedia/assets/images/svg/footer-bg.svg)"},dir:o?"rtl":"ltr",children:[(0,n.jsx)("div",{className:"container mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-20",children:(0,n.jsxs)("div",{className:"grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",children:[(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)(i.N_,{to:"/",onClick:()=>d("/"),className:"block w-36 sm:w-48 transition-transform hover:scale-105",children:(0,n.jsx)("img",{src:"/ALC-Mohammedia/assets/images/svg/logo.svg",alt:a("alcLogo"),className:"brightness-0 invert"})}),(0,n.jsx)("p",{className:"text-base leading-relaxed opacity-90 max-w-md",children:a("footerDescription")}),(0,n.jsx)("div",{className:"space-y-3 pt-4 border-t border-white/20",children:[{icon:"location-dot",text:"33 Rue de Damas, Mohammedia",link:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"},{icon:"phone",text:"+212 661-545636",link:"tel:+212661545636"},{icon:"envelope",text:"admin@alcmohammedia.com",link:"mailto:admin@alcmohammedia.com"},{icon:"link",text:"All Links",link:"https://linktr.ee/alcmohammedia"}].map((({icon:e,text:a,link:s})=>(0,n.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 hover:text-red-500 transition-all duration-300 group",children:[(0,n.jsx)("i",{className:`fa-solid fa-${e} w-5 group-hover:scale-110 transition-transform`}),(0,n.jsx)("span",{className:"group-hover:translate-x-1 transition-transform",children:a})]},a)))})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${o?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("alcMohammedia")}),(0,n.jsx)("nav",{"aria-label":"Footer navigation",children:(0,n.jsx)("ul",{className:"space-y-3 text-base",children:[{path:"/",label:"home"},{path:"/registration",label:"registration"},{path:"/english-program",label:"english_program"},{path:"/french-program",label:"french_program"},{path:"/join",label:"join"},{path:"/clubs",label:"clubs"}].map((e=>(0,n.jsx)(m,{to:e.path,onClick:()=>d(e.path),children:a(e.label)},e.label)))})})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${o?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("links")}),(0,n.jsxs)("ul",{className:"space-y-3 text-base",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://aca.org.ma/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 transition-all inline-block hover:translate-x-1 duration-300",children:a("aca")})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://aca.org.ma/contact-3/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 transition-all inline-block hover:translate-x-1 duration-300",children:a("allAlcs")})})]})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${o?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("contacts")}),(0,n.jsx)("div",{dir:"ltr",className:"flex flex-wrap gap-4",children:[{icon:"envelope",link:"mailto:admin@alcmohammedia.com"},{icon:"phone",link:"tel:+212661545636"},{icon:"facebook-f",prefix:"brands",link:"https://www.facebook.com/ALC.Mohammedia/"},{icon:"instagram",prefix:"brands",link:"https://www.instagram.com/alcmohammedia/"},{icon:"linkedin-in",prefix:"brands",link:"https://www.linkedin.com/company/alc-mohammedia/"},{icon:"youtube",prefix:"brands",link:"https://www.youtube.com/@alcmohammedia6915"},{icon:"location-dot",link:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"}].map((e=>(0,n.jsx)(c,{...e},e.icon)))})]})]})}),(0,n.jsx)("div",{className:"bg-gray-800",children:(0,n.jsx)("div",{className:"container mx-auto px-6 md:px-8 lg:px-12 py-4",children:(0,n.jsxs)("p",{className:"text-center text-sm text-gray-400",children:["\xa9 ",(new Date).getFullYear()," ",a("allRightsReserved")," ",(0,n.jsx)(i.N_,{to:"/",onClick:()=>d("/"),className:"text-sky-400 hover:text-red-500 transition-all",children:a("alcMohammedia")})]})})})]})}}}]);
//# sourceMappingURL=73.9a46a442.chunk.js.map