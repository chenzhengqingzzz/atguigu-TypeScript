/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-15 16:07:39
 * @LastEditors: 陈正清macbook pro
 * @LastEditTime: 2023-06-15 16:08:20
 * @FilePath: /尚硅谷TypeScript/chapter02/part2/src/modules/ScorePanel.ts
 * @Description: 计分板的类
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */
// 定义表示记分牌的类
class ScorePanel {
    // score和level用来记录分数和等级
    private score = 0
    private level = 1
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle: HTMLElement
    levelEle: HTMLElement

    // 设置一个变量限制等级
    maxLevel: number
    // 设置一个变量表示升1级所需的分数
    upScore: number

    // maxLevel不传就是10
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = <HTMLElement>document.getElementById('score')
        this.levelEle = <HTMLElement>document.getElementById('level')
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.score++
        // 这里后面加上空字符串是因为要拼串 把数字转成字符串
        this.scoreEle.innerHTML = this.score + ''
        // 判断目前的分数是多少 每获得upScore分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 提升关卡等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }

    }
}

// 测试代码
// const scorePanel = new ScorePanel(100, 2)
// for (let index = 0; index < 203; index++) {
//     scorePanel.addScore()
    
// }

// 默认暴露
export default ScorePanel