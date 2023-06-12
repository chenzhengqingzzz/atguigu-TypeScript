/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-12 15:12:28
 * @LastEditors: 陈正清macbook pro
 * @LastEditTime: 2023-06-12 15:58:05
 * @FilePath: /尚硅谷TypeScript/chapter02/part1/src/08_泛型.ts
 * @Description: 泛型相关学习
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
// function fn(a: number): number{
//     return a
// }


/*
*   在定义函数或者类的时候，如果遇到类型不明确就可以使用泛型
* */

function fn<T>(a: T): T{
    return a
}

// 可以直接去调用具有泛型的函数
let result = fn(10) // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>('hello') // 指定泛型

// 可以同时指定多个泛型
function fn2<T, K>(a: T, b: K){
    console.log(b);
    return a
}
fn2<number, string>(123, 'hello')

interface Inter{
    length: number
}
// 限制泛型：指定T为泛型，但是必须要实现Inter这个接口
function fn3<T extends Inter>(a: T): number{
    return a.length
}
fn3('123')
// fn3(123) // 这样就不行 因为我们必须保证传递的参数有length这个属性 而number没有
fn3({length: 10}) // 这样就可以 因为传的对象参数里面有length属性

class MyClass<T>{
    name: T
    constructor(name: T){
        this.name = name
    }
}

const mc = new MyClass<string>('孙悟空')