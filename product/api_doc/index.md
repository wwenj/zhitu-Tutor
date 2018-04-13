
### 注意： 所有接口都要传两个参数 app_key，access_token


## 首页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://xx.com/api/index `
  
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
      "banner":[
      	{
      	  "url": "",
      	  "img" :"",
      	}
      ],
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
      "subjects":[
      	 {
      	    "id" : 1,
      	    "name" : "",
      	    "icon" : "",
      	 }
      ]
    }
  }
```

 **返回参数说明** 
 
 data

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|banner |array   |首焦轮播  |
|teacher |array   |热推教师  |
|subjects |array   |学科  |

 
 teacher

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|source |int   |来源类型 1:大学生 2:编制内教师 3:职业教师  |
|is_confirm |int   |是否认证 1:已认证 0:未认证 |
|is_star |int   |明星教师  1：明星教师 0：普通教师 |
|teach_year |int   |教龄|
|teach_time |int   |授课时长 |







