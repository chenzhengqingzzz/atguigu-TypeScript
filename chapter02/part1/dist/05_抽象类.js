"use strict";
/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-10 18:43:10
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-11 13:51:21
 * @FilePath: /atguigu-TypeScript/chapter02/part1/src/05_抽象类.ts
 * @Description: 抽象类、抽象方法相关学习
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
(function () {
    /*
    *   以abstract开头的类是抽象类
    *       抽象类和其他类区别不大，只是不能用来创建对象
    *       抽象类就是专门用来被继承的类
    *
    *       抽象类中可以添加抽象方法
    * */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
        // 必须重写抽象类中的抽象方法
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
    // const an = new Animal() // 无法创建抽象类的实例
})();
