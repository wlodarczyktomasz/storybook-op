import{a as g,j as a}from"./jsx-runtime-bc5d6cf6.js";import{R as h}from"./index-c013ead5.js";import{g as v}from"./_commonjsHelpers-725317a4.js";var f={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function s(){for(var r="",n=0;n<arguments.length;n++){var o=arguments[n];o&&(r=l(r,m(o)))}return r}function m(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return s.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var n="";for(var o in r)t.call(r,o)&&r[o]&&(n=l(n,o));return n}function l(r,n){return n?r?r+" "+n:r+n:r}e.exports?(s.default=s,e.exports=s):window.classNames=s})()})(f);var A=f.exports;const y=v(A),x="_visuallyHidden_1d57v_45",_="_Accordion_1d57v_64",j={visuallyHidden:x,Accordion:_},i=h.forwardRef((e,t)=>g("div",{className:y(j.Accordion),ref:t,children:[a("p",{children:"Accordion component working!"}),a("div",{children:e.children})]}));i.displayName="Accordion";const N={title:"Components/Accordion",component:i,tags:["autodocs"]},S=e=>{switch(e){case"es":return"¡Hola!";case"fr":return"Bonjour!";case"kr":return"안녕하세요!";case"zh":return"你好!";default:return"Hello!"}},c={render:(e,{globals:{locale:t}})=>a(i,{...e,children:e.children||S(t)}),args:{children:""},parameters:{design:{type:"figma",name:"UI",url:""}}};var d,p,u;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: AccordionProps, {
    globals: {
      locale
    }
  }) => <Accordion {...args}>{args.children || getCaptionForLocale(locale)}</Accordion>,
  args: {
    children: ""
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: ""
    }
  }
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const O=["Default"];export{c as Default,O as __namedExportsOrder,N as default};
//# sourceMappingURL=accordion.stories-c751c3df.js.map
