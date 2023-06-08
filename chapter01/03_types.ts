/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-07 19:38:01
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-07 20:58:01
 * @FilePath: /atguigu-TypeScript/chapter01/03_types.ts
 * @Description: TS中的类型
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
// 也可以直接使用字面量进行类型声明
let a: 10
a = 10
// a = 11 // a的值只能为number类型的10 无法再为其他了

// 可以使用 | 来连接多个类型(联合类型)
let b: 'male' | 'female'
b = 'male'
b = 'female'
// b = 'hello'

let c: boolean | string
c = true
c = 'hello'

// any表示任意类型 可以任意赋值 一个变量设置类型为any后 相当于对该变量关闭了TS类型检测
// 使用TS时不建议使用any类型
// let d: any

// 声明变量如果不指定类型，则TS解析器会自动判断变量类型为any(隐式的any)
let d
d = 10
d = 'hello'
d = true

// unknown表示未知类型的值
let e: unknown
e = 10
e = 'hello'
e = true

// d的类型是any 它可以赋值给任意变量
let s: string
// s = d // 这里赋值完之后 s的类型会从string变成boolean

e = 'hello'
// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof e === 'string') {
    s = e
}

// 类型断言 告诉编译器变量e就是字符串类型 可以让编译器不报错 确保我们写的是对的
/* 
* 语法：
*   变量 as 类型
*   <类型>变量
*/
s = e as string
s = <string>e

// void原来表示空，以函数为例，就表示没有返回值的函数
function fn(): void{

}

// never表示永远不回返回结果
function fn2(): never{
    throw new Error('报错了！！')
}