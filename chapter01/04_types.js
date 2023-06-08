/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-08 13:08:28
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-08 15:07:21
 * @FilePath: /atguigu-TypeScript/chapter01/04_types.ts
 * @Description: TS中的类型
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
// object表示一个js对象 在js的世界里 万物皆对象 所以这里的object无法起到限制的作用
var a1;
a1 = {};
a1 = function () {
};
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名: 属性值, 属性名: 属性值}
// 在属性名后面加上？ 表示属性是可选的
var b1;
b1 = { name: '孙悟空' };
// [propName: string]: any 表示任意类型的属性
var c1;
c1 = { name: '猪八戒', age: 18, gender: '男' };
/*
*   设置函数结构的类型声明
*       语法:   (形参: 类型, 形参: 类型, ...) => 返回值
*/
var d1;
d1 = function (n1, n2) {
    return n1 + n2;
};
/*
*   数组的类型声明
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
var e1;
e1 = ['a', 'b', 'c'];
// number[] 表示数值数组
var f;
var g;
g = [1, 2, 3];
/*
*   元组：就是固定长度的数组
*       语法：[类型, 类型, 类型]
*/
var h;
h = ['hello', 123];
/*
*   enum 枚举
*       语法：[类型, 类型, 类型]
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
