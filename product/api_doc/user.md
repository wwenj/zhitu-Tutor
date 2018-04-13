##登录
**简要描述：**
- 密码登录接口

**请求URL：**
- ` http://xx.com/api/user/passwordLogin `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |否  |string | 用户秘钥   |
|phone     |是  |string | 手机号    |
|password     |密码登录必须  |string | 密码|

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
      "token": 'string',
      "obj" : {
      	 "id" : 1,
		 "phone" : "",
		 "name" : "",
		 "image" : "",
      }，
      "role_type" :1,
      "setpass" : 0
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|token| string | 用户登录token|
|obj| obj | 登录用户精简结构|
|role_type| int | 用户类型 1学生 2教师|
|setpass| int | 首次登录设置密码 0不设置 1设置|

***

**简要描述：**
- 密码登录接口

**请求URL：**
- ` http://xx.com/api/user/fastLogin `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |否  |string | 用户秘钥   |
|phone     |是  |string | 手机号    |
|role_type| int | 用户类型 1学生 2教师|
|code_no     |短信登录必须  |string | 验证码编号|
|code     |短信登录必须  |string | 手机验证码|

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
      "token": 'string',
      "obj" : {
      	 "id" : 1,
		 "phone" : "",
		 "name" : "",
		 "image" : "",
      }，
      "role_type" :1,
      "setpass" : 0
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|token| string | 用户登录token|
|obj| obj | 登录用户精简结构|
|role_type| int | 用户类型 1学生 2教师|
|setpass| int | 首次登录设置密码 0不设置 1设置|

***


##忘记密码
**简要描述：**
- 忘记密码

**请求URL：**
- ` http://xx.com/api/user/forgetPassword `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|phone     |忘记密码必须  |string | 手机号    |
|code_no     |忘记密码必须  |string | 验证码编号|
|code     |忘记密码必须  |string | 手机验证码|
|newPass     |是  |string ||

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": []
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|

***


##修改密码
**简要描述：**
- 修改密码

**请求URL：**
- ` http://xx.com/api/user/modifyPassword `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|oldPass     |修改密码必须  |string | 旧密码|
|newPass     |是  |string |新密码|

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": []
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|

***


##第一次忘记密码
**简要描述：**
- 第一次设置密码

**请求URL：**
- ` http://xx.com/api/user/firstSetPassword `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|newPass     |是  |string |密码|

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": []
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|

***


##用户中心
**简要描述：**
- 第一次设置密码

**请求URL：**
- ` http://xx.com/api/user/info `

**请求方式：**
- GET

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"teacher" : {
    	},
    	"user" : {
    	}
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|teacher|obj|当前登录用户是教师时返回|
|user|obj|当前登录用户是家长/学生时返回|

***

##家长编辑资料
**简要描述：**
- 家长编辑资料

**请求URL：**
- ` http://xx.com/api/user/setuserinfo `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|image |否  |string | 用户头像  |
|name |否  |string | 用户昵称  |
|grade |否  |string | 年级  |
|sex |否  |string | 性别  |
|home_address |否  |string | 家庭地址 |
|city |否  |string | 城市  |

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```

***

##教师编辑资料
**简要描述：**
- 教师编辑资料

**请求URL：**
- ` http://xx.com/api/user/setuserinfo `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|image |否  |string | 用户头像  |
|name |否  |string | 用户昵称  |
|grade |否  |string | 年级  |
|sex |否  |string | 性别  |
|home_address |否  |string | 家庭地址 |
|city |否  |string | 城市  |
|school |否  |string | 学校  |
|major |否  |string | 专业  |
|qualification |否  |string | 学历  |
|subject |否  |string | 学科  |
|grade |否  |string | 年级 多选逗号分隔  |
|type |否  |string | 类型 |
|teach_year |否  |string | 教龄 单位 年  |
|price |否  |string | 价格  单位 元/两小时（一节课是两小时）  |
|intro |否  |string | 个人简介  |


 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```

***

##修改教师拓展信息
**简要描述：**
- 修改教师拓展信息

**请求URL：**
- ` http://xx.com/api/user/setteacherextend `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|title |否  |string | 标题  |
|content |否  |string | 内容  |
|start_time |否  |string | 开始时间  |
|end_time |否  |string | 结束时间  |
|id |否  |string | id 修改时必填  为空是新增 |
|type |否  |string | 类型 1:成功案例   2:教学经历 |




 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```

***

***

##删除教师拓展信息
**简要描述：**
- 删除教师拓展信息

**请求URL：**
- ` http://xx.com/api/user/delteacherextend `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|id |否  |string | id 修改时必填  为空是新增 |
|type |否  |string | 类型 1:成功案例   2:教学经历 |




 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```

***

