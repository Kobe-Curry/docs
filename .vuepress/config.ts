import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Lsky Pro',
    description: '兰空图床使用文档',

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/logo.png',
        navbar: [
            { text: '首页', link: '/docs' },
            {
                text: '选择版本',
                children: [
                    {
                        text: 'Lsky Pro 1.x',
                        children: [
                            { text: 'v1.x', link: '/docs/v1/', activeMatch: '^/docs/v1/' }
                        ]
                    },
                    {
                        text: 'Lsky Pro 2.x',
                        children: [
                            { text: 'v2.x', link: '/docs/v2/', activeMatch: '^/docs/v2/' }
                        ]
                    },
                ]
            }
        ],
        repo: 'https://github.com/lsky-org/lsky-pro',
        docsRepo: 'https://github.com/lsky-org/docs',
        docsBranch: 'master',
        lastUpdated: true,
        sidebarDepth: 2,
        sidebar: [
            {
                text: '主页',
                link: '/docs',
            },
            {
                text: 'V1.x',
                link: '/docs/v1/',
                children: [
                    {
                        text: '安装',
                        link: '/docs/v1/Install',
                    },
                    {
                        text: '环境变量',
                        link: '/docs/v1/env',
                        children: [],
                    },
                    {
                        text: '存储策略',
                        link: '/docs/v1/StorageStrategy',
                        children: [
                            {
                                text: '本地',
                                link: '/docs/v1/SS/Local'
                            },
                            {
                                text: '阿里云OSS',
                                link: '/docs/v1/SS/AliyunOSS'
                            },
                            {
                                text: '腾讯云COS',
                                link: '/docs/v1/SS/TencentCloudCOS'
                            },
                            {
                                text: '又拍云USS',
                                link: '/docs/v1/SS/UpyunUSS'
                            },
                            {
                                text: '七牛云KODO',
                                link: '/docs/v1/SS/KODO'
                            },
                            {
                                text: 'FTP',
                                link: '/docs/v1/SS/FTP'
                            },
                        ],
                    }
                ],
            }
        ],
    },
})