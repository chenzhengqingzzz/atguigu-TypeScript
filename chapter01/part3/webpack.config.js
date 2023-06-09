/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-08 21:16:32
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-09 15:49:51
 * @FilePath: /atguigu-TypeScript/chapter01/part3/webpack.config.js
 * @Description: webpack相关配置
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 引入一个包
// node里的一个模块 主要作用就是帮助我们拼接路径
const path = require('path')
// 引入自动引入的html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack中的所有配置信息都应该写在moudle.exoprts中
module.exports = {

    // 指定入口文件
    entry: './src/index.ts',
    
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        // path: './dist,
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: 'boundle.js',
        // 是否让webpack打包的时候使用箭头函数 false代表不使用
        environment: {
            arrowFunction: true
        }
    },

    // 指定wabpack打包时要使用的模块
    module: {
        // 指定loader要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/, // 以ts结尾的所有文件
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 这是预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    '@babel/preset-env',
                                    // 配置信息
                                    {
                                        targets: {
                                            // 要兼容的目标浏览器
                                            'chrome': '114',
                                        },
                                        // 指定corejs的版本
                                        'corejs': '3',
                                        // 使用corejs的方式 'usage'表示按需加载
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                // 要排除的文件
                exclude: /node_moudles/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            title: '这是一个自定义title',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}