/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-09 17:09:20
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-09 17:26:29
 * @FilePath: /atguigu-TypeScript/chapter02/part1/src/02_构造函数.ts
 * @Description: 构造函数和this
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
class Dog{
    name: string
    age: number
    
    // constructor 被称为构造函数
    // 构造函数会在每一次对象创建的时候调用
    constructor(name: string, age: number){
        console.log('构造函数执行了');
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中，当前对象就是当前新建的那个对象
        // 所以我们就可以通过this来向新建的对象中添加属性
        // console.log(this);
        this.name = name
        this.age = age
        
    }

    bark(){
        // alert('汪汪汪')
        // 在方法中可以用this来表示当前调用方法的实例
        console.log(this);
        
    }
}

const dog = new Dog('小黑', 4)
const dog2 = new Dog('小白', 2)

// console.log(dog);

dog.bark()
dog2.bark()