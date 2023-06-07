/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-07 15:40:39
 * @LastEditors: 陈正清macbook pro
 * @LastEditTime: 2023-06-07 16:09:27
 * @FilePath: /尚硅谷TypeScript/chapter01/02_basis.ts
 * @Description: TypeScript中的类型声明
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 表示我们声明一个变量a，同时指定它的类型为number
let a: number

// a的类型设置为了number，a的值只能是数字
a = 10
a = 33
// a = 'hello' // 此行代码会报错 因为变量a的类型是number 不能赋值字符串
let b: string
// b = 123