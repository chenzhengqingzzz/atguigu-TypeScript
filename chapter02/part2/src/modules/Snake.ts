/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-15 16:24:51
 * @LastEditors: 陈正清macbook pro
 * @LastEditTime: 2023-06-20 16:59:15
 * @FilePath: /尚硅谷TypeScript/chapter02/part2/src/modules/Snake.ts
 * @Description: 蛇的类
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
class Snake {
    // 获取表示蛇头的元素 我们一般拿蛇头来判定碰撞
    snakeHead: HTMLElement
    // 获取表示蛇身体的元素（包括蛇头）这个类型再往集合里面添加新元素会实时刷新
    snakeBodies: HTMLCollection
    // 获取装整个蛇的容器 也就是id为snake的div
    element: HTMLElement

    constructor() {
        this.element = <HTMLElement>document.getElementById('snake')
        this.snakeHead = <HTMLElement>document.querySelector('#snake > div')
        // 我们得获取蛇的整个身子 也就是snake下的所有div 至于不用querySelector 是因为不能改即时更新
        this.snakeBodies = <HTMLCollection>this.element.getElementsByTagName('div')
    }

    /**
     * @description: 获取蛇的坐标（蛇头坐标）
     * @return {HTMLElement}
     */
    get X() {
        return this.snakeHead.offsetLeft
    }
    get Y() {
        return this.snakeHead.offsetTop
    }

    /**
     * @description: 设置蛇的坐标（蛇头坐标）
     * @param {number} value 新传入的值
     * @return {*}
     */
    set X(value) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.X === value) {
            return
        }

        // X的值的合法范围应该是在0~290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了 这个时候需要抛出一个异常
            throw new Error('蛇撞墙了！')
        }

        // 移动身体 注意先后顺序 debugger麻了才知道是这里的问题
        this.moveBody()
        // 移动头部
        this.snakeHead.style.left = value + 'px'

    }
    set Y(value) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.Y === value) {
            return
        }

        // Y的值的合法范围应该是在0~290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了 这个时候需要抛出一个异常
            throw new Error('蛇撞墙了！')
        }

        // 移动身体 注意先后顺序 debugger麻了才知道是这里的问题
        this.moveBody()
        // 移动头部
        this.snakeHead.style.top = value + 'px'

    }

    /**
     * @description: 蛇增加身体的方法
     * @return {*}
     */
    addBody() {
        // 向element中添加一个div
        // debugger
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    /**
     * @description: 蛇身体移动的方法
     * @return {*}
     */
    moveBody() {
        /*
        *   将后面的身体设置为前一个身体的位置
        *       举例子：
        *           第4节 = 第3节的位置
        *           第3节 = 第2节的位置
        *           第2节 = 第1节的位置
        *   
        * 
        * */
        // 遍历获取所有的身体(注意这里是从后往前遍历）
        for(let i = this.snakeBodies.length - 1; i > 0; i--){
            // 获取当前身体的前一节身体的位置
            // 类型断言 告诉ts 它的类型就是HTMLelement
            let frontX = (<HTMLElement>this.snakeBodies[i - 1]).offsetLeft;
            let frontY = (<HTMLElement>this.snakeBodies[i - 1]).offsetTop;

            // 将前一节身体的值设置到当前身体上
            (<HTMLElement>this.snakeBodies[i]).style.left = frontX + 'px';
            (this.snakeBodies[i] as HTMLElement).style.top = frontY + 'px';
        }
    }
}

export default Snake