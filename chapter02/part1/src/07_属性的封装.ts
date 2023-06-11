/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-11 18:12:58
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-11 20:43:13
 * @FilePath: /atguigu-TypeScript/chapter02/part1/src/07_属性的封装.ts
 * @Description: 
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
(function () {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前面添加属性的修饰符
        /*
        *   public 公开属性 修饰的属性可以在任意位置访问（修改）默认值
        *   private 私有属性 私有属性只能在类内部进行访问（修改）
        *       - 通过在类中添加方法使得私有属性可以被外部访问
        *   protected 受保护的属性 只能在当前类和当前类的子类中访问(修改) 是一个折中的修饰符
        * */
        private _name: string
        private _age: number

        constructor(name: string, age: number) {
            this._name = name
            this._age = age
        }

        /*
        *   getter方法用来读取属性
        *   setter方法用来设置属性
        *       - 它们被称为属性的存取器
        * */
        // 定义方法，用来获取name属性 getter
        // getName(){
        //     return this._name
        // }
        // // 定义方法 用来设置name属性 setter
        // setName(value: string){
        //     this._name = value
        // }

        // getAge(){
        //     return this._age
        // }
        // setAge(value: number){
        //     // 判断年龄是否合法
        //     if (value >= 0) {
        //         this._age = value
        //     }
        // }

        // TS中设置getter的方式
        get name() {
            console.log('get name()执行了！！');
            return this._name
        }
        // TS中设置setter的方式
        set name(value: string) {
            console.log('set name()执行了！！');
            this._name = value
        }

        get age() {
            return this._age
        }
        set age(value: number) {
            if (value >= 0) {
                this._age = value
            }
        }
    }

    const per = new Person('孙悟空', 18)

    /*
    *  现在属性是在对象中设置的，属性可以任意的被修改
    *   属性可以任意被修改 将会导致对象中的数据变得非常不安全
    * */
    // per.name = '猪八戒'

    // per.setName('猪八戒')
    // per.setAge(-33)

    per.name = '猪八戒'
    per.age = 38
    // 这里并不是去获取name属性 而是去执行get name()这个方法 也就是getter
    console.log(per);


    class A{
        protected num: number

        constructor(num: number){
            this.num = num
        }
    }

    class B extends A{
        test(){
            console.log(this.num);
        }
    }

    const b = new B(123)
    // 无法在类的实例里访问protected属性
    // B.num = 22

    class C{
        // 可以直接将属性定义在构造函数中 它会自动赋值 这算是一个语法糖
        constructor(public name: string, public age: number){}
    }

    const c = new C('xxx', 11)
})()