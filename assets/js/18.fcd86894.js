(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{220:function(t,s,e){"use strict";e.r(s);var r=e(0),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hello-typescript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-typescript"}},[t._v("#")]),t._v(" Hello TypeScript")]),t._v(" "),e("p",[t._v("结合 "),e("code",[t._v("tsc")]),t._v(" 命令，我们一起写一个简单的例子。")]),t._v(" "),e("p",[t._v("创建一个 index.ts 文件。")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello TypeScript'")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("执行 "),e("code",[t._v("tsc index.ts")]),t._v(" 命令，会在同目录下生成 index.js 文件。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello TypeScript'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("一个简单的例子就实现完了。我们可以通过官网提供的 "),e("a",{attrs:{href:"http://www.typescriptlang.org/play/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Playground"),e("OutboundLink")],1),t._v(" 进行验证。")]),t._v(" "),e("p",[t._v("但是在项目开发过程中我们会结合构建工具，如 "),e("code",[t._v("webpack")]),t._v("，和对应的本地服务 "),e("code",[t._v("dev-server")]),t._v(" 等相关工具一同使用。")]),t._v(" "),e("p",[t._v("接下来把我们了解到的知识结合在一起。搭建一个"),e("a",{attrs:{href:"https://github.com/dengwb1991/typescript-in-action/tree/master/base-typescript/first-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整的项目"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("项目根目录中有一个 "),e("code",[t._v("tsconfig.json")]),t._v(" 文件，简单介绍其作用。")]),t._v(" "),e("h2",{attrs:{id:"tsconfig-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[t._v("#")]),t._v(" tsconfig.json")]),t._v(" "),e("p",[t._v("如果一个目录下存在一个 "),e("code",[t._v("tsconfig.json")]),t._v(" 文件，那么它意味着这个目录是 TypeScript 项目的根目录。"),e("code",[t._v("tsconfig.json")]),t._v(" 文件中指定了用来编译这个项目的根文件和编译选项。 一个项目可以通过以下方式之一来编译：")]),t._v(" "),e("ul",[e("li",[t._v("不带任何输入文件的情况下调用 "),e("code",[t._v("tsc")]),t._v("，编译器会从当前目录开始去查找 "),e("code",[t._v("tsconfig.json文")]),t._v(" 件，逐级向上搜索父目录。")]),t._v(" "),e("li",[t._v("不带任何输入文件的情况下调用 "),e("code",[t._v("tsc")]),t._v("，且使用命令行参数 "),e("code",[t._v("--project")]),t._v("（或 "),e("code",[t._v("-p")]),t._v(" ）指定一个包含 "),e("code",[t._v("tsconfig.json")]),t._v(" 文件的目录。")])]),t._v(" "),e("p",[t._v("当命令行上指定了输入文件时，tsconfig.json文件会被忽略。")])])}),[],!1,null,null,null);s.default=n.exports}}]);