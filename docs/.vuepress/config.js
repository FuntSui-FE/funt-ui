module.exports = {
  base: '/funt-ui/',
  dest: 'docs/dist',
  port: 1111,
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Hello Funt-ui',
      description: 'A Mobile UI Components built on Vue'
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/funt-ui.png'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c'
      }
    ]
  ],
  themeConfig: {
    repo: 'FuntSui-FE/funt-ui',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        },
        nav: [
          // {
          //   text: '文档',
          //   link: '/API/install.html'
          // }
        ]
      }
    },
    sidebar: {
      '/API/': [
        {
          title: '开发指南',
          collapsable: false,
          children: ['install', 'start']
        },
        {
          title: '组件',
          collapsable: false,
          children: ['loading', 'scroll', 'lmarquee', 'marquee', 'numkeyboard']
        }
      ]
    }
  }
};
