/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-08 21:16:32
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-09 13:45:43
 * @FilePath: /atguigu-TypeScript/chapter01/part3/webpack.config.js
 * @Description: webpack相关配置
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 引入一个包
// node里的一个模块 主要作用就是帮助我们拼接路径
const path = require('path')

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
    },

    // 指定wabpack打包时要使用的模块
    module: {
        // 指定loader要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/, // 以ts结尾的所有文件
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node_moudles/
            }
        ]
    }
}