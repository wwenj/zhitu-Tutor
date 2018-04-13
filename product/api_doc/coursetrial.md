
## 预约
**简要描述：** 

- 预约接口

**请求URL：** 
- ` http://xx.com/api/coursetrial/add `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|tid |是  |string | 教师id   |

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


## 学生端我的试听
**简要描述：** 

- 学生端我的试听

**请求URL：** 
- ` http://xx.com/api/coursetrial/studentlists `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|status |是  |string | 状态 1： 未开始 2:已结束   |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"course" : {
    		"id" : 1,
    		"teacher_id" : 1,
    		"teacher_name" : "",
    		"start_time" : "",
    		"course_info" : "",
    		"status" :  1, 	
    	}
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|status| string | 状态 4待处理  5 通过 6 未通过|

***

## 教师端我的试听
**简要描述：** 

- 教师端我的试听

**请求URL：** 
- ` http://xx.com/api/coursetrial/teacherlists `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|status |是  |string | 状态 1： 未开始 2:已结束   |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"course" : {
    		"id" : 1,
    		"student_id" : 1,
    		"student_name" : "",
    		"phone" : "15662176002",
    		"address" : "",
    		"start_time" : "",
    		"course_info" : "",
    		"status" :  1, 	
    	}
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|status| string | 状态 4待确认  5 通过 6 未通过|

*** 

## 教师端 教师结束试讲
**简要描述：** 

- 教师试讲结束

**请求URL：** 
- ` http://xx.com/api/coursetrial/finishteach `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|id |是  |string | 试讲课程id  |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": []
  }
```

*** 

## 学生端 通过试讲
**简要描述：** 

- 试讲通过

**请求URL：** 
- ` http://xx.com/api/coursetrial/agree `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|id |是  |string | 试讲课程id  |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": []
  }
```

*** 

## 学生端 不通过试讲
**简要描述：** 

- 试讲不通过

**请求URL：** 
- ` http://xx.com/api/coursetrial/disagree `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|id |是  |string | 试讲课程id  |
|reason |是  |string | 不通过原因 |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": []
  }
```


