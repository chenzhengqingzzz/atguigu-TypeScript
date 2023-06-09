"use strict";
/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-09 17:40:20
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-09 18:38:35
 * @FilePath: /atguigu-TypeScript/chapter02/part1/src/03_继承.ts
 * @Description: 继承相关知识
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
// 创建函数作用域 避免和其他文件的命名重复
(function () {
    // 定义一个Animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    /*
    *  Dog extends Animal
    *       - 此时Animal被称为父类，Dog被称为子类
    *       — 使用继承后，子类将会拥有父类所有的方法和属性
    *       - 通过继承 我们可以将多个类中共有的代码写在一个父类中
    *          这样只需要写一次即可让所有的子类都同时拥有父类中的属性
    *          如果希望在子类中添加一些父类中没有的属性或方法，直接加就行
    *       - 如果在子类中添加了和父类相同的方法，则子类会覆盖掉父类的方法
    *          这种子类覆盖父类方法的形式我们称之为方法重写
    */
    // 定义一个表示狗的类
    // 使Dog类继承Animal类
    class Dog extends Animal {
        // 在新类中添加一个方法 这个方法是Dog类独有的
        run() {
            console.log(`${this.name}在跑`);
        }
        // 重写方法 让类有自己的特点
        sayHello() {
            console.log('汪汪汪');
        }
    }
    // 定义一个表示猫的类
    // 使Cat类继承Animal类
    class Cat extends Animal {
        // 重写方法
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
