import{j as e,a as r,F as s}from"./jsx-runtime-bc5d6cf6.js";import{M as a}from"./index-3f3eb519.js";import{u as i}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-55981349.js";import"../sb-preview/runtime.js";import"./index-169ee69c.js";import"./index-11d98b33.js";import"./index-f889f612.js";import"./index-356e4a49.js";const l=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,c=""+new URL("colors-ac9401f3.svg",import.meta.url).href,d=""+new URL("comments-f15a6837.svg",import.meta.url).href,p=""+new URL("direction-94a9917f.svg",import.meta.url).href,m=""+new URL("flow-275142c6.svg",import.meta.url).href,h=""+new URL("plugin-57148314.svg",import.meta.url).href,g=""+new URL("repo-fb4ece47.svg",import.meta.url).href,f=""+new URL("stackalt-2ad81543.svg",import.meta.url).href;function o(n){const t=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},i(),n.components);return r(s,{children:[e(a,{title:"Example/Introduction"}),`
`,e("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e(t.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),`
`,r(t.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.\r
That makes it easy to develop hard-to-reach states. Save these UI states as `,e(t.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,r(t.p,{children:[`Browse example stories now by navigating to them in the sidebar.\r
View their code in the `,e(t.code,{children:"stories"}),` directory to learn how they work.\r
We recommend building UIs with a `,e(t.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:e(t.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,e("div",{className:"subheading",children:"Configure"}),`
`,r("div",{className:"link-list",children:[r("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e("img",{src:h,alt:"plugin"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Presets for popular tools"}),`\r
Easy setup for TypeScript, SCSS and more.`]})})]}),r("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[e("img",{src:f,alt:"Build"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Build configuration"}),`\r
How to customize webpack and Babel`]})})]}),r("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[e("img",{src:c,alt:"colors"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Styling"}),`\r
How to load and configure CSS libraries`]})})]}),r("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e("img",{src:m,alt:"flow"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Data"}),`\r
Providers and mocking for data libraries`]})})]})]}),`
`,e("div",{className:"subheading",children:"Learn"}),`
`,r("div",{className:"link-list",children:[r("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e("img",{src:g,alt:"repo"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Storybook documentation"}),`\r
Configure, customize, and extend`]})})]}),r("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e("img",{src:p,alt:"direction"}),e("span",{children:r(t.p,{children:[e("strong",{children:"In-depth guides"}),`\r
Best practices from leading teams`]})})]}),r("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e("img",{src:l,alt:"code"}),e("span",{children:r(t.p,{children:[e("strong",{children:"GitHub project"}),`\r
View the source and add issues`]})})]}),r("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e("img",{src:d,alt:"comments"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Discord chat"}),`\r
Chat with maintainers and the community`]})})]})]}),`
`,e("div",{className:"tip-wrapper",children:r(t.p,{children:[e("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`\r
`,e("code",{children:"stories/Introduction.stories.mdx"})]})})]})}function U(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e(t,Object.assign({},n,{children:e(o,n)})):o(n)}export{U as default};
//# sourceMappingURL=_Introduction-ffe0bf9e.js.map
