"use strict";
/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-10 16:44:44
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-10 18:33:43
 * @FilePath: /atguigu-TypeScript/chapter02/part1/src/04_super.ts
 * @Description: super关键字
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
// 创建函数作用域 避免和其他文件的命名重复
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
            // 因为在子类写构造函数 本质也是方法重写 如果没有带上父类的构造函数 那么就无法获得父类的属性 也就不叫继承了
            super(name); // 调用父类的构造函数 并且传入属性
            this.age = age;
        }
        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            super.sayHello();
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 3);
    dog.sayHello();
    console.log(dog);
})();
