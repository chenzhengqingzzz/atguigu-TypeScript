"use strict";
/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-09 16:24:14
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-09 16:55:29
 * @FilePath: /atguigu-TypeScript/chapter02/part1/src/01_类的简介.ts
 * @Description: 类的简介
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
// 使用class关键字来定义一个类
/*
*   对象中主要包含了两个部分 属性、方法 我们都需要在类中明确的表示出来
            属性
            方法
*/
class Person {
    constructor() {
        /*
        *   直接定义的属性是实例属性，需要通过对象的实例去访问
        *       const per = new Person()
        *       per.name
        *   使用static开头的属性是静态属性（类属性），可以通过类直接去访问
        *       Person.age
        *
        *   readonly开头的属性表示一个只读的属性 无法修改
        */
        // 定义属性
        // readonly name: string = '孙悟空'
        this.name = '孙悟空';
        // 在属性前使用static关键字可以定义类属性（静态属性）
        // static readonly age: number = 18
        this.age = 18;
    }
    // 定义方法
    /*
    *   类似静态属性，如果方法以static开头，则方法就是类方法（静态方法），可以直接通过类去调用
    */
    sayHello() {
        console.log('大家好');
    }
}
const per = new Person();
console.log(per);
// 通过这个类直接访问类属性（静态属性）
// console.log(Person.age);
// console.log(per.name);
// console.log(per.name = 'tom');
per.sayHello();
