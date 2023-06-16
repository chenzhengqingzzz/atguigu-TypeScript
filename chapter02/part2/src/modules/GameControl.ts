/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-15 21:16:55
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-16 20:28:23
 * @FilePath: /atguigu-TypeScript/chapter02/part2/src/modules/GameControl.ts
 * @Description: 游戏控制器 用于控制其他的所有类
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 引入其他类
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl{
    // 定义三个属性
    // 蛇
    snake: Snake
    // 食物
    food: Food
    // 记分牌
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方向（按键的方向）
    direction: string = ''

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    /**
     * @description: 游戏的初始化方法，调用后游戏即开始
     * @return {*}
     */    
    init(){
        // 绑定键盘的按键按下的事件
        // 这里的this本来是document 我们使用了使用.bind修改this的指向 变成了GameControl对象
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }

    keydownHandler(event: KeyboardEvent){
        console.log(this);
        
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        
        // 修改direction属性
        this.direction = event.key
    }
}

export default GameControl