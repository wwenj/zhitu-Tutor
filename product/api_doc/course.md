## 学生端我的课程
**简要描述：** 

- 学生端我的课程

**请求URL：** 
- ` http://xx.com/api/course/studentlists `
  
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
    		"next_teach_time" : "",
    		"course_info" : "",
    		"status" :  1, 	
    		"finish_num" : "5",
    		"all_num"   : "10"
    		"child" : [
    		  {
    		  	"id" : "",
    			"start_time" : "",
    			"status" : "",
    			"plan" : "",
				"summary" : "",
				"question" : "",
				"stu_answer" :"",
			  }
    		]
    	}
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|child->status| string | 状态 1未开始  2已完成|
|plan| string | 课前计划|
|summary| string | 课后总结|
|question| string | 课后作业|
|stu_answer| string | 学生答案|

***

## 教师端我的课程
**简要描述：** 

- 教师端我的课程

**请求URL：** 
- ` http://xx.com/api/course/teacherlists `
  
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
    		"next_teach_time" : "",
    		"course_info" : "",
    		"status" :  1, 	
    		"finish_num" : "5",
    		"all_num"   : "10"
    		"child" : [
    		  {
    		  	"id" : "",
    			"start_time" : "",
    			"status" : "",
    			"plan" : "",
				"summary" : "",
				"question" : "",
				"stu_answer" :"",
			  }
    		]
    	}
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|child->status| string | 状态 1未开始  2已完成|
|plan| string | 课前计划|
|summary| string | 课后总结|
|question| string | 课后作业|
|stu_answer| string | 学生答案|

***

## 修改课程
**简要描述：** 

- 教师端我的课程

**请求URL：** 
- ` http://xx.com/api/coursechild/save`
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key  |是  |string |app标识   |
|access_token           |是  |string | 用户秘钥   |
|child_course_id        |是  |string | 子课程id  |
|plan     |否  |string | 预习   |
|summary  |否  |string | 总结   |
|question |否  |string | 作业  |
|stu_answer |否  |string | 答案  |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": []
  }
```

***