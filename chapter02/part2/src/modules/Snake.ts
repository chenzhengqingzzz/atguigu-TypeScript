/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-15 16:24:51
 * @LastEditors: 陈正清macbook pro
 * @LastEditTime: 2023-06-15 16:59:06
 * @FilePath: /尚硅谷TypeScript/chapter02/part2/src/modules/Snake.ts
 * @Description: 蛇的类
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
class Snake{
    // 获取表示蛇头的元素 我们一般拿蛇头来判定碰撞
    snakeHead: HTMLElement
    // 获取表示蛇身体的元素（包括蛇头）这个类型再往集合里面添加新元素会实时刷新
    snakeBodies: HTMLCollection
    // 获取装整个蛇的容器 也就是id为snake的div
    element: HTMLElement

    constructor(){
        this.element = <HTMLElement>document.getElementById('snake')
        this.snakeHead = <HTMLElement>document.querySelector('#snake > div')
        // 我们得获取蛇的整个身子 也就是snake下的所有div 至于不用querySelector 是因为不能改即时更新
        this.snakeBodies = <HTMLCollection>this.element.getElementsByTagName('div')
    }

    /**
     * @description: 获取蛇的坐标（蛇头坐标）
     * @return {HTMLElement}
     */
    get X(){
        return this.snakeHead.offsetLeft
    }
    get Y(){
        return this.snakeHead.offsetTop
    }

    /**
     * @description: 设置蛇的坐标（蛇头坐标）
     * @param {number} value 新传入的值
     * @return {*}
     */
    set X(value){
        this.snakeHead.style.left = value + 'px'
    }
    set Y(value){
        this.snakeHead.style.top = value + 'px'
    }

    /**
     * @description: 蛇增加身体的方法
     * @return {*}
     */
    addBody(){
        // 向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}

export default Snake