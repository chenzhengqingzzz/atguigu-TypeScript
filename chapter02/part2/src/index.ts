/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-12 16:20:10
 * @LastEditors: 陈正清macbook pro
 * @LastEditTime: 2023-06-15 16:12:25
 * @FilePath: /尚硅谷TypeScript/chapter02/part2/src/index.ts
 * @Description: 项目入口文件
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 引入样式
import './style/index.less'
// 引入各个类
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel';

// 测试代码
const food = new Food()
console.log(food);

food.changePosition()
console.log(food.X, food.Y);

const scorePanel = new ScorePanel(100, 2)
for (let index = 0; index < 203; index++) {
    scorePanel.addScore()
    
}