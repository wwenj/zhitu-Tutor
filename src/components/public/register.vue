<template>
  <div id="app">
    <input type="text" v-model="phone" placeholder="请输入手机号">
    <input type="text" v-model="code" placeholder="请输入验证码">
    <span class="conmeCode" @click="flag && send()">
      <span v-if="yan===1">获取验证码</span>
      <span v-if="yan===0" class="conmeCode-two">{{yanTime}}秒内有效</span>
    </span>
    <div class="p-box">
      <p :class="{change:chan}" @click="studentChoice">我是家长/学生</p>
      <p :class="{change:!chan}" @click="teacherChoice">我是教师</p>
    </div>
    <div class="button" @click="login">登  录</div>
    <p class="info">登录即代表同意《知途家教》相关规定</p>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      /* 验证码点击换文字 */
      yan: 1,
      /* 再次注册等待时间 */
      yanTime: 60,
      /* 注册事件取消标志 */
      flag: true,
      /* 我是家长与教师选择标志 */
      chan: 1,
      phone: '',
      code: '',
      data: ''
    };
  },
  methods: {
    send: function () {
      var that = this;
      /* 点击延时60秒才能再次点击 */
      this.yan = 0;
      this.flag = false;
      var yanTimer = setInterval(function () {
        that.yanTime = that.yanTime - 1;
        if (that.yanTime < 0) {
          that.yan = 1; // 切换文字
          that.yanTime = 60; // 切换回时间
          that.flag = true; // 放开事件
          clearInterval(yanTimer);
        }
      }, 1000);
      /* 验证码请求 */
      this.axios({
        url: 'http://api.zhituteam.com/api/cmn/sms/send',
        method: 'post',
        params: {
          code_type: 1,
          phone: this.phone
        },
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          if (res.data.error_code === 0){
            that.data = res.data.data;
          }else{
            alert(res.data.message);
            that.yanTime = 0;
          }

        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
    },
    login: function () {
      // var that = this;
      var role_type = 1;
      if (this.chan === 1) {
        role_type = 1
      } else {
        role_type = 2
      }
      this.axios({
        url: 'http://api.zhituteam.com/api/user/fastLogin',
        method: 'post',
        params: {
          code: this.code,
          phone: this.phone,
          code_no: this.data,
          role_type: role_type
        },
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          if (res.data.error_code === 0) {
            localStorage.setItem('zt_data', JSON.stringify(res.data.data));
            location.href = '#/fastLogin';
          } else {
            alert(res.data.message);
          }
        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
    },
    studentChoice: function () {
      this.chan = 1;
    },
    teacherChoice: function () {
      this.chan = 0;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../static/css/_mixin.scss";
#app {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
}
input {
  width: 100%;
  height: rem(53);
  border-top: 0px solid #fff;
  border-left: 0px solid #fff;
  border-bottom: 1px solid #eaeaea;
  outline: none;
  text-indent: rem(20);
  font-size: rem(15);
  background: #fff;
  box-sizing: border-box;
}
.conmeCode {
  font-size: rem(15);
  color: #2ebd51;
  position: absolute;
  top: rem(70);
  right: rem(15);
}
.conmeCode .conmeCode-two{
  color: #cfcdcd;
}
.p-box{
  width:100%;
  height: rem(50);
  display: flex;
  justify-content:space-around;
  margin-top: rem(12)
}
.p-box p {
  display: inline-block;
  width: rem(170);
  height: rem(50);
  border: 1px solid #cecece;
  color: #bcbcbc;
  line-height: rem(50);
  text-align: center;
}
.p-box .change{
  background-color: #2ebd51;
  color: #fff;
}
.button {
  width: 94%;
  margin-left: 3%;
  background-color: #2ebd51;
  font-size: rem(15);
  color: #fff;
  height: rem(50);
  margin-top: rem(20);
  border-radius: rem(2);
  text-align: center;
  line-height: rem(50);
}
.info {
  font-size: rem(12);
  text-align: center;
  color: #bcbcbc;
  margin-top: rem(10);
}
</style>
