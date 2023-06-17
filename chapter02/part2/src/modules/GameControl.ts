/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-15 21:16:55
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-17 21:41:57
 * @FilePath: /atguigu-TypeScript/chapter02/part2/src/modules/GameControl.ts
 * @Description: 游戏控制器 用于控制其他的所有类
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved. 
 */

// 引入其他类
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    // 定义三个属性
    // 蛇
    snake: Snake
    // 食物
    food: Food
    // 记分牌
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方向（按键的方向）
    direction: string = 'ArrowRight'
    // 创建一个属性用来记录游戏是否结束 默认蛇是活着的
    isLive = true

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
    init() {
        // 绑定键盘的按键按下的事件
        // 这里的this本来是document 我们使用了使用.bind修改this的指向 变成了GameControl对象
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        console.log(event);
        
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）

        // 修改direction属性
        this.direction = event.key
        // debugger
        // 调用run方法 使蛇移动       
        // this.run()

    }

    /**
     * @description: 创建一个控制蛇移动的方法
     * @return {*}
     */
    run() {
        /*
        *   根据方向(this.direction)来使蛇的位置改变
        *       向上 top 减少
        *       向下 top 增加
        *       向左 left 减少
        *       向右 left 增加
        * */

        // 获取蛇现在的坐标
        let X = this.snake.X
        let Y = this.snake.Y
        
        // 根据按键的方向修改X值和Y值
        switch (this.direction) {
            case 'ArrowUp':
                // 向上移动 top减少
                Y -= 10
                break;
            case 'ArrowDown':
                // 向下移动 top增加
                Y += 10
                break;
            case 'ArrowLeft':
                // 向左移动 left减少
                X -= 10
                break;
            case 'ArrowRight':
                // 向右移动 left增加
                X += 10
                break;
            default:
                break;
        }
        // debugger
        // 修改蛇身上的X属性和Y属性
        this.snake.X = X
        this.snake.Y = Y        

        // 如果蛇活着，则开启一个定时调用 在这里本质是一个递归
        // run作为函数传入 可能也会有this指向问题 所以我们使用bind把this调成调用run的实例
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
}

export default GameControl