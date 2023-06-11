"use strict";
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
    const obj = {
        name: 'sss',
        age: 111,
        gender: '男'
    };
    /*
    *    定义类时，可以使类去实现一个接口
    *        实现接口就是使类满足接口的要求
    * */
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好');
        }
    }
});
