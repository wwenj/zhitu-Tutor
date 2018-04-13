## APP启动接口
**简要描述：** 

- app启动时访问

**请求URL：** 
- ` http://xx.com/api/app/c `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |否 |string |app标识   |
|access_token |否  |string | 用户秘钥   |


 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"version" :  "",
    	"tags" : {
    	    "subject": [
      	       {
      	         "id" : 1,
      	         "name" : "",
   	    	     "icon" : ""
         	   }
            ],
            "grade": [
      	       {
      	         "id" : 1,
      	         "name" : "",
   	    	     "icon" : ""
         	   }
            ],
      	    "type": [
      	       {
      	         "id" : 1,
      	         "name" : "",
   	    	     "icon" : ""
         	   }
            ],
            "sex" : [
         	   {
         	     "id" : 1,
         	     "name" : "男",
         	     "icon" : ""
               }
            ],
            "qualification" : [
         	   {
         	     "id" : 1,
            	 "name" : "硕士",
         	     "icon" : ""
            	}
            ],
            "city" : [
         	   {
         	     "id" : 1,
         	     "name" : "吉林市",
         	     "icon" : ""
         	   }
            ]
       }
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|version| string | 静态资源version,用于清除本地缓存|
|tags| string | 公共标签|

***