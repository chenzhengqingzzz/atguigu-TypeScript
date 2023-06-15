/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-12 16:20:10
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-14 16:06:41
 * @FilePath: /atguigu-TypeScript/chapter02/part2/src/index.ts
 * @Description: 项目入口文件
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 引入样式
import './style/index.less'

// 定义食物类
class Food{
    // 定义一个属性 表示食物所对应的元素(div)
    element: HTMLElement

    constructor(){
        // 获取页面中的food元素并将其赋值给element
        // 使用类型断言 告诉ts this.element的类型永远确定
        this.element = <HTMLElement>document.getElementById('food')
    }

    // 用getter 获取食物XY轴坐标的方法
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }
    // 修改食物的位置
    changePosition(){
        // 生成随机的位置
        // 食物的位置最小是0 最大是舞台区宽度-食物宽度 也就是290
        // 蛇移动一次就是一格 一格的大小就是10 所以就要求食物的坐标必须是整10
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

// 测试代码
const food = new Food()
console.log(food);

food.changePosition()
console.log(food.X, food.Y);
