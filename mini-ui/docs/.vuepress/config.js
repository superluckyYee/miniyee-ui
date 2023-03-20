module.exports = {
    // 最开始的/是指向.vuepress/public/的
    base:'./',
    lang: 'zh-CN',
    title:'miniyee-ui',
    description: '渴望编写可以用于todolist项目的组件库',
    head:[['link',{rel:'icon', href: '/images/logo.png'}]],
    //这里开始是文档主题
    theme:'vdoing',
    //通过 themeConfig.nav 增加一些导航栏链接
    themeConfig:{
        logo: '/images/logo.png',
        nav: [
            {
              text: '首页',
              link: '/',
            },
            {
              text: '组件',
              link: '/pages/c6fbd8/',
            },
        ],
        sidebar: { mode: 'structuring', collapsable: true},
        sidebarDepth: 2,//侧边栏自动提取文章的几层标题
        sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
        updateBar: {
            // 最近更新栏
            showToArticle: false, // 显示到文章页底部，默认true
            moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
        },
        category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        archive: true,// 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。


    },
    plugins: ['demo-container'],
}