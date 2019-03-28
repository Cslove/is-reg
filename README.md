# is-reg
> Regular expressions usually used
> 常用的正则特殊需求表达式判断

## Usage
``` bash
npm i is-reg
```
``` js
  const { isEmail } = require('is-reg')

  isEmail('csheng.dude@gmail.com')    //true

  isEmail('hello.com')     // false
```
## API
### `isEmail(arg: string): boolean`
判断一个给定字符串是否是一个email格式的字符串
### `isPhone(arg: string): boolean`
判断一个给定字符串是否是个电话号码
eg：
```js 
isPhone('17809247855')  // true
```
### `isPassword(arg: string): boolean`
判断一个给定字符串是否是个密码， 注：（该函数判断以字母开头，长度在6~18之间，只能包含字母、数字和下划线的密码）
### `isStrongPassword(arg: string): boolean`
判断一个给定字符串是否是个强密码， 注：（必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间）

