/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-11 14:02:42
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-11 17:39:43
 * @FilePath: /atguigu-TypeScript/chapter02/part1/src/06_接口.ts
 * @Description: 接口相关知识
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
(function () {

    // 描述一个对象的类型
    type myType = {
        name: string
        age: number
    }

    /*
    *   接口来定义一个类的结构 用来定义一个类中应该包含哪些属性和方法
    *       同时接口也可以当成类型声明去使用
    * 
    */

    interface myInterface {
        name: string
        age: number
    }

    // 可以重复定义同名接口 最终的规范是这两个同名接口加在一起的规范
    interface myInterface {
        gender: string
    }

    const obj: myInterface = {
        name: 'sss',
        age: 111,
        gender: '男'
    }

    /*
    *   接口可以在定义类的时候去限制类的结构
    *       接口中的所有属性都不能有实际的值
    *       接口只定义对象的结构而不考虑实际值
    *           在接口中所有的方法都是抽象方法
    * */
    interface myInter {
        name: string,

        sayHello(): void
    }

    /*
    *    定义类时，可以使类去实现一个接口
    *        实现接口就是使类满足接口的要求
    * */
    class myClass implements myInter {
        name: string

        constructor(name: string){
            this.name = name
        }

        sayHello(): void {
            console.log('大家好');
        }
   }
})