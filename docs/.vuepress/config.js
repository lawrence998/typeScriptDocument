module.exports = {
  port: 8083,
  title: 'TypeScript开发教程',
  base: '/typeScriptDocument/',
  dest: './dist',   // 设置输出目录
  description: '目录',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link', { rel: 'icon', href: '/images/typescript.png' }]
  ],
  themeConfig: {
    // The navigation bar
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/dengwb1991'
      }
    ],
    // The sidebar
    sidebar: [
      {
        title: '初识篇',
        collapsable: false,
        children: [
          'introduce/what-is-typescript',
          'introduce/install-typescript',
          'introduce/hello-typescript'
        ]
      },
      {
        title: '基础篇',
        collapsable: false,
        children: [
          'basics/basis-data-types',
          'basics/interface',
          'basics/function',
          'basics/class',
          'basics/class-and-interface',
          'basics/generics',
          'basics/type-check-mechanism',
          'basics/advanced-type'
        ]
      },
      {
        title: '工程篇',
        collapsable: false,
        children: [
          'project/import-export',
          'project/namespace',
          'project/declaration-merging',
          'project/declaration-files'
        ]
      },
      {
        title: '配置篇',
        collapsable: false,
        children: [
          'configuration/file-options',
          'configuration/compiler-options'
        ]
      },
      {
        title: '实战篇',
        collapsable: false,
        children: [
          'actual/typescript-react',
          'actual/react-component-type'
        ]
      }
    ],
    lastUpdated: 'Last Updated'
  }
}