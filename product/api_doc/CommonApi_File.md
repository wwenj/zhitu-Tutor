## 公共接口-文件
**简要描述：** 

- 上传文件接口

**请求URL：** 
- ` http://xx.com/cmn/file/upload `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |否 |string |app标识   |
|access_token |否  |string | 用户秘钥   |
|file |是  |formData| 需要上传的文件   |


 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"filename": 'string',
    	"fileSignUrl": 'string'
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----|:-----|-----|
|filename| string | oss存储的文件名|
|fileSignUrl| string | oss临时签名路径（有过期时间）|

***
**简要描述：** 

- 获取文件临时路径接口

**请求URL：** 
- ` http://xx.com/cmn/file/url `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |否 |string |app标识   |
|access_token |否  |string | 用户秘钥   |
|filename |是  |string| 文件名   |


 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": "string"
  }
```

 **返回参数说明**
直接返回文件地址

|参数名|类型|说明|
|:-----|:-----|-----|
