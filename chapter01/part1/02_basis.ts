/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-07 15:40:39
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-07 18:54:22
 * @FilePath: /atguigu-TypeScript/chapter01/02_basis.ts
 * @Description: TypeScript中的类型声明
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 表示我们声明一个变量a，同时指定它的类型为number
let a: number

// a的类型设置为了number，a的值只能是数字
a = 10
a = 33
// a = 'hello' // 此行代码会报错 因为变量a的类型是number 不能赋值字符串 但是可以编译成js
let b: string
// b = 123

// 声明完变量直接进行赋值
// let c: boolean = true

// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
let c = false
c = true

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b
// }
// console.log(sum(123, 456)) // 579
// console.log(sum(123, '456')); // '123456'

function sum(a: number, b: number): number{
    // 大括号之前的number是指定返回值的类型为number
    return a + b
}

let result = sum(123, 456) // result是number类型
