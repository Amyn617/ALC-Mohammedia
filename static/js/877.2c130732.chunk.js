"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[877],{111:(e,a,t)=>{t.d(a,{A:()=>x});var s=t(43),l=t(216),r=t(475),i=t(723),n=t(204),o=t(144),c=t(579);const m={code:"en",name:"English",flag:"https://flagsapi.com/US/flat/64.png"},x=()=>{var e,a;const t=(0,l.Zp)(),[x,d]=(0,s.useState)(null),[h,g]=(0,s.useState)(!1),{language:p,setLanguage:f}=(0,s.useContext)(i.s),{t:b}=(0,s.useContext)(i.s),u=(0,s.useRef)(null),j=e=>d(e),v=()=>d(null),N=[{code:"en",name:"English",flag:"https://flagsapi.com/US/flat/64.png"},{code:"fr",name:"Fran\xe7ais",flag:"https://flagsapi.com/FR/flat/64.png"},{code:"sp",name:"Espa\xf1ol",flag:"https://flagsapi.com/ES/flat/64.png"},{code:"ar",name:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",flag:"https://flagsapi.com/MA/flat/64.png"}],y=(0,s.useCallback)((e=>{h&&u.current&&!u.current.contains(e.target)&&g(!1)}),[h]);(0,s.useEffect)((()=>(document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)})),[h,y]);const k=N.find((e=>e.code===p))||m,w=(e,a=null)=>{d(null),g(!1),a?(t(e),setTimeout((()=>{const e=document.getElementById(a);e&&e.scrollIntoView({behavior:"smooth"})}),100)):(t(e),window.scrollTo({top:0,behavior:"smooth"}))},_=(null===(e=o.J.find((e=>"/english-program"===e.path)))||void 0===e?void 0:e.sections)||[],E=(null===(a=o.J.find((e=>"/french-program"===e.path)))||void 0===a?void 0:a.sections)||[];return(0,c.jsx)("div",{className:"sticky z-50 top-0",children:(0,c.jsxs)("div",{className:"flex items-center justify-between px-10 xl:px-20 bg-white shadow-md",children:[(0,c.jsx)(r.N_,{to:"/",onClick:()=>w("/"),children:(0,c.jsx)("img",{src:"/assets/images/svg/logo.svg",alt:"ALC Mohammedia logo",className:"w-56 lg:w-48 py-6"})}),(0,c.jsx)("div",{className:"fixed inset-0 bg-black z-40 transition-opacity duration-500 "+(h?"opacity-50 visible":"opacity-0 invisible")}),(0,c.jsxs)("ul",{dir:""+("ar"===p?"rtl":"ltr"),ref:u,className:"hidden gap-10 max-lg:flex max-xl:gap-6 max-lg:flex-col max-lg:z-50 max-lg:text-white max-lg:bg-blue-900 max-lg:absolute max-lg:top-0 max-lg:px-12 max-lg:py-20 max-lg:h-[100vh] max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out lg:flex "+(h?"max-lg:translate-x-0 max-lg:left-0 opacity-100":"max-lg:-translate-x-full max-lg:left-0 max-lg:opacity-0"),children:[(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:"/",onClick:()=>w("/"),className:"hover:text-sky-600 transition-all navbar-link",children:b("home")})}),(0,c.jsx)("li",{className:"relative",onMouseEnter:()=>j("registration"),onMouseLeave:v,children:(0,c.jsx)(r.N_,{to:"/registration",onClick:()=>w("/registration"),className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:b("registration")})}),(0,c.jsxs)("li",{className:"relative cursor-pointer",onMouseEnter:()=>j("english"),onMouseLeave:v,children:[(0,c.jsxs)("div",{className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:[b("english_program"),(0,c.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,c.jsx)("ul",{className:("english"===x?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50",children:_.map((e=>(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:`/english-program/${e}`,onClick:()=>w("/english-program",e),className:"p-2 block hover:bg-sky-300 max-xl:text-black",children:b(e.replace(/-/g,"_"))})},e)))})]}),(0,c.jsxs)("li",{className:"relative cursor-pointer",onMouseEnter:()=>j("french"),onMouseLeave:v,children:[(0,c.jsxs)("div",{className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:[b("french_program"),(0,c.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,c.jsx)("ul",{className:("french"===x?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50",children:E.map((e=>(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:`/french-program/${e}`,onClick:()=>w("/french-program",e),className:"p-2 block hover:bg-sky-300 max-xl:text-black",children:b(e.replace(/-/g,"_"))})},e)))})]}),(0,c.jsx)("li",{className:"relative",onMouseEnter:()=>j("join"),onMouseLeave:v,children:(0,c.jsx)(r.N_,{to:"/join",onClick:()=>w("/join"),className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:b("join")})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:"/clubs",onClick:()=>w("/clubs"),className:"hover:text-sky-600 transition-all navbar-link",children:b("clubs")})})]}),(0,c.jsxs)("div",{className:"relative",onMouseEnter:()=>j("language"),onMouseLeave:v,children:[(0,c.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,c.jsx)("img",{src:k.flag,width:"30",alt:k.code}),(0,c.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,c.jsx)("ul",{className:("language"===x?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full right-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[150px] transition-all duration-300 ease-in-out z-50",children:N.filter((e=>e.code!==p)).map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)("button",{onClick:()=>(e=>{f(e),d(null),console.log(`Language changed to: ${e}`)})(e.code),className:"w-full p-2 flex items-center hover:bg-sky-300 cursor-pointer",children:[(0,c.jsx)("img",{src:e.flag,width:"20",alt:e.name,className:"mr-2"}),e.name]})},e.code)))})]}),(0,c.jsx)("button",{className:"lg:hidden text-2xl",onClick:()=>g((e=>!e)),children:(0,c.jsx)(n.OXb,{})})]})})}},138:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(204),l=t(579);const r=()=>(0,l.jsx)("div",{className:"hidden xl:flex items-center justify-center bg-blue-900 text-white py-3 text-base",children:(0,l.jsxs)("ul",{className:"nav-contact flex gap-12 2xl:gap-28",children:[(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)(s.vq8,{className:"mr-2"})," 33 Rue de Damas, Mohammedia"]})}),(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"tel:+212661545636",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)("i",{className:"fa-solid fa-phone mr-2"}),"+212 661-545636"]})}),(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"mailto:admin@alcmohammedia.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)(s.maD,{className:"mr-2"})," admin@alcmohammedia.com"]})}),(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsxs)("a",{href:"https://linktr.ee/alcmohammedia",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,l.jsx)("i",{className:"fa-solid fa-link mr-2"}),"All Links"]})})]})})},796:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(43),l=t(579);const r=()=>{const[e,a]=(0,s.useState)(!1),t=()=>{window.pageYOffset>300?a(!0):a(!1)};return(0,s.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[]),(0,l.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-10 right-10 bg-sky-500 text-white text-2xl px-4 py-2 rounded-full transition-opacity duration-300 "+(e?"opacity-100":"opacity-0"),"aria-label":"Scroll to top",children:(0,l.jsx)("i",{className:"fa-solid fa-angle-up"})})}},834:(e,a,t)=>{t.d(a,{A:()=>c});var s=t(43),l=t(216),r=t(475),i=t(723),n=t(579);const o=({icon:e,link:a,prefix:t="solid"})=>(0,n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:text-red-500 hover:scale-110 transition-all duration-300","aria-label":`Visit our ${e} page`,children:(0,n.jsx)("i",{className:`fa-${t} fa-${e} text-base`})}),c=()=>{const e=(0,l.Zp)(),{t:a,language:t}=(0,s.useContext)(i.s),c="ar"===t,m=({to:e,children:a})=>(0,n.jsx)("li",{children:(0,n.jsxs)(r.N_,{to:e,className:"group flex items-center gap-2 hover:text-red-500 transition-all duration-300",children:[(0,n.jsx)("span",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:(0,n.jsx)("i",{className:`fa-solid fa-chevron-${c?"left":"right"} text-xs`})}),(0,n.jsx)("span",{className:`group-hover:translate-x-${c?"-1":"1"} transition-transform`,children:a})]})}),x=a=>{e(a),window.scrollTo({top:0,behavior:"smooth"})};return(0,n.jsxs)("footer",{className:"bg-no-repeat bg-cover bg-blue-900/95 text-gray-300 "+(c?"text-right":"text-left"),style:{backgroundImage:"url(/assets/images/svg/footer-bg.svg)"},dir:c?"rtl":"ltr",children:[(0,n.jsx)("div",{className:"container mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-20",children:(0,n.jsxs)("div",{className:"grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",children:[(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)(r.N_,{to:"/",onClick:()=>x("/"),className:"block w-36 sm:w-48 transition-transform hover:scale-105",children:(0,n.jsx)("img",{src:"/assets/images/svg/logo.svg",alt:a("alcLogo"),className:"brightness-0 invert"})}),(0,n.jsx)("p",{className:"text-base leading-relaxed opacity-90 max-w-md",children:a("footerDescription")}),(0,n.jsx)("div",{className:"space-y-3 pt-4 border-t border-white/20",children:[{icon:"location-dot",text:"33 Rue de Damas, Mohammedia",link:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"},{icon:"phone",text:"+212 661-545636",link:"tel:+212661545636"},{icon:"envelope",text:"admin@alcmohammedia.com",link:"mailto:admin@alcmohammedia.com"},{icon:"link",text:"All Links",link:"https://linktr.ee/alcmohammedia"}].map((({icon:e,text:a,link:t})=>(0,n.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 hover:text-red-500 transition-all duration-300 group",children:[(0,n.jsx)("i",{className:`fa-solid fa-${e} w-5 group-hover:scale-110 transition-transform`}),(0,n.jsx)("span",{className:"group-hover:translate-x-1 transition-transform",children:a})]},a)))})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${c?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("alcMohammedia")}),(0,n.jsx)("nav",{"aria-label":"Footer navigation",children:(0,n.jsx)("ul",{className:"space-y-3 text-base",children:[{path:"/",label:"home"},{path:"/registration",label:"registration"},{path:"/english-program",label:"english_program"},{path:"/french-program",label:"french_program"},{path:"/join",label:"join"},{path:"/clubs",label:"clubs"}].map((e=>(0,n.jsx)(m,{to:e.path,onClick:()=>x(e.path),children:a(e.label)},e.label)))})})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${c?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("links")}),(0,n.jsxs)("ul",{className:"space-y-3 text-base",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://aca.org.ma/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 transition-all inline-block hover:translate-x-1 duration-300",children:a("aca")})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://aca.org.ma/contact-3/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 transition-all inline-block hover:translate-x-1 duration-300",children:a("allAlcs")})})]})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${c?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("contacts")}),(0,n.jsx)("div",{dir:"ltr",className:"flex flex-wrap gap-4",children:[{icon:"envelope",link:"mailto:admin@alcmohammedia.com"},{icon:"phone",link:"tel:+212661545636"},{icon:"facebook-f",prefix:"brands",link:"https://www.facebook.com/ALC.Mohammedia/"},{icon:"instagram",prefix:"brands",link:"https://www.instagram.com/alcmohammedia/"},{icon:"linkedin-in",prefix:"brands",link:"https://www.linkedin.com/company/alc-mohammedia/"},{icon:"youtube",prefix:"brands",link:"https://www.youtube.com/@alcmohammedia6915"},{icon:"location-dot",link:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"}].map((e=>(0,n.jsx)(o,{...e},e.icon)))})]})]})}),(0,n.jsx)("div",{className:"bg-gray-800",children:(0,n.jsx)("div",{className:"container mx-auto px-6 md:px-8 lg:px-12 py-4",children:(0,n.jsxs)("p",{className:"text-center text-sm text-gray-400",children:["\xa9 ",(new Date).getFullYear()," ",a("allRightsReserved")," ",(0,n.jsx)(r.N_,{to:"/",onClick:()=>x("/"),className:"text-sky-400 hover:text-red-500 transition-all",children:a("alcMohammedia")})]})})})]})}},877:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var s=t(138),l=t(111),r=t(834),i=t(796),n=t(43),o=t(216),c=t(723),m=t(579);const x=()=>{const{t:e,language:a}=(0,n.useContext)(c.s),t=(0,o.zy)(),[,s]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const e=()=>{s(window.scrollY)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[s]),(0,n.useEffect)((()=>{const e=()=>{if(t.hash){const e=document.querySelector(t.hash);if(e){const a=window.innerHeight,t=e.getBoundingClientRect(),s=a/2,l=window.scrollY+t.top-s+t.height/2;window.scrollTo({top:l,behavior:"smooth"})}}};e();const a=()=>{e()};return window.addEventListener("hashchange",a),()=>{window.removeEventListener("hashchange",a)}}),[t]),(0,m.jsxs)("div",{dir:""+("ar"===a?"rtl":"ltr"),className:"bg-gray-100 py-12",children:[(0,m.jsxs)("div",{className:"text-center mb-8",children:[(0,m.jsx)("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500",children:e("french_program")}),(0,m.jsx)("p",{className:"text-base md:text-lg text-gray-700 mt-2",children:e("exploreWorldOfFrench")})]}),(0,m.jsxs)("section",{id:"general-french",children:[(0,m.jsxs)("div",{className:"relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg",style:{backgroundImage:"url(/assets/images/fr_1.jpg)",backgroundAttachment:"fixed"},"aria-label":"General French",children:[(0,m.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,m.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10",children:e("general_french")})]}),(0,m.jsx)("p",{className:"text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify",children:e("general_french_desc")})]}),(0,m.jsxs)("section",{id:"professional-french",children:[(0,m.jsxs)("div",{className:"relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg",style:{backgroundImage:"url(/assets/images/fr_2.jpg)",backgroundAttachment:"fixed"},"aria-label":"Professional French",children:[(0,m.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,m.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10",children:e("professional_french")})]}),(0,m.jsx)("p",{className:"text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify",children:e("professional_french_desc")})]}),(0,m.jsxs)("section",{id:"communication-french",children:[(0,m.jsxs)("div",{className:"relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg",style:{backgroundImage:"url(/assets/images/fr_3.jpg)",backgroundAttachment:"fixed"},"aria-label":"Communication: Oral/Written",children:[(0,m.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,m.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10",children:e("communication_french")})]}),(0,m.jsx)("p",{className:"text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify",children:e("communication_french_desc")})]}),(0,m.jsxs)("section",{id:"exam-preparation-french",children:[(0,m.jsxs)("div",{className:"relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg",style:{backgroundImage:"url(/assets/images/fr_4.jpg)",backgroundAttachment:"fixed"},"aria-label":"Exam Preparation (DELF B1 - B2, DALF, and TCF)",children:[(0,m.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,m.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10",children:e("exam_preparation_french")})]}),(0,m.jsx)("p",{className:"text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify",children:e("exam_preparation_french_desc")})]}),(0,m.jsxs)("section",{id:"regional-french",children:[(0,m.jsxs)("div",{className:"relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg",style:{backgroundImage:"url(/assets/images/fr_5.jpg)",backgroundAttachment:"fixed"},"aria-label":"Regional French (6th Year High School)",children:[(0,m.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,m.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10",children:e("regional_french")})]}),(0,m.jsx)("p",{className:"text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify",children:e("regional_french_desc")})]}),(0,m.jsxs)("section",{id:"french-middle-school",children:[(0,m.jsxs)("div",{className:"relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg",style:{backgroundImage:"url(/assets/images/fr_6.jpg)",backgroundAttachment:"fixed"},"aria-label":"French (9th Year Middle School)",children:[(0,m.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,m.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10",children:e("french_middle_school")})]}),(0,m.jsx)("p",{className:"text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify",children:e("french_middle_school_desc")})]})]})},d=()=>(0,m.jsxs)("div",{id:"top",className:"flex flex-col min-h-screen",children:[(0,m.jsx)(s.A,{}),(0,m.jsx)(l.A,{}),(0,m.jsx)("main",{className:"flex-grow",children:(0,m.jsx)(x,{})}),(0,m.jsx)(r.A,{}),(0,m.jsx)(i.A,{})]})}}]);
//# sourceMappingURL=877.2c130732.chunk.js.map