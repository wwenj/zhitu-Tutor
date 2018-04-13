
## 收藏
**简要描述：** 

- 收藏接口

**请求URL：** 
- ` http://xx.com/api/collect/add `
  
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
      "teacher" : {
          "id" : 1,
          "name" : "",   
          "image" : "",   
          "subject" : [
          	  {
          	  	"id" :1,
          	  	"lebel" : "数学",
          	  	"sort"  : 0
          	  }
          ],     
          "grade" : [
          	  {
          	  	"id" :1,
          	  	"lebel" : "数学",
          	  	"sort" : 0
          ],   
          "extend_tag" : [
          	  {
          	  	"id" :1,
          	  	"lebel" : "已认证",
          	  	"sort"  : 0
          	  }，
          	  {
          	  	"id" :1,
          	  	"lebel" : "大学生",
          	  	"sort"  : 0
          	  }
          ],
          "school" : "",
          "source" : 1,   
          "is_confirm" : 0,  
          "is_star" : 0,  
          "teach_time" : 10, 
          "teach_time" : 10,        
       }
    }
  }
```

 **返回参数说明** 
 
 data

|参数名|类型|说明|
|:-----  |:-----|-----  |
|teacher |object   |教师详细  |


## 取消收藏
**简要描述：** 

- 取消收藏

**请求URL：** 
- ` http://xx.com/api/collect/del `
  
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





## 收藏列表
**简要描述：** 

- 收藏列表

**请求URL：** 
- ` http://xx.com/api/collect/lists `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|offset |是  |string | 偏移量 |
|limit |是  |string | 每页数量   |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      "teacher" : [
        {
          "id" : 1,
          "name" : "",   
          "image" : "",   
          "subject" : [
          	  {
          	  	"id" :1,
          	  	"lebel" : "数学",
          	  	"sort"  : 0
          	  }
          ],     
          "grade" : [
          	  {
          	  	"id" :1,
          	  	"lebel" : "数学",
          	  	"sort
          ],   
          "extend_tag" : [
          	  {
          	  	"id" :1,
          	  	"lebel" : "已认证",
          	  	"sort"  : 0
          	  }，
          	  {
          	  	"id" :1,
          	  	"lebel" : "大学生",
          	  	"sort"  : 0
          	  }
          ],
          "school" : "",
          "source" : 1,   
          "is_confirm" : 0,  
          "is_star" : 0,  
          "teach_time" : 10, 
          "teach_time" : 10,        
        }
      ],
    }
  }
```

 **返回参数说明** 
 
 data

|参数名|类型|说明|
|:-----  |:-----|----- |
|teacher |array   |教师列表  |







