<template>
  <div id="app">
    <input type="text" v-model="tell" placeholder="请输入手机号">
    <input type="password" v-model="password" placeholder="请输入密码">
    <div class="button" @click="loginFunc">登  录</div>
    <p class="info">登录即代表同意《知途家教》相关规定</p>
    <p class="login-bottom">
      <span class="no" @click="register">没有账号？快捷登录</span>
      <span class="forget">忘记密码</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      tell: '',
      password: ''
    };
  },
  mounted () {

  },
  methods: {
    loginFunc () {
      let that = this;
      that.axios({
        url: 'http://api.zhituteam.com/api/user/passwordLogin',
        method: 'post',
        data: {
          phone: that.tell,
          password: that.password
        }
      })
        .then(res => {
          if (res.data.error_code === 0) {
            localStorage.setItem('zt_data', JSON.stringify(res.data.data));
            location.href = '/user';
            // if (this.id !== "" && this.from !== "") {
            //   location.href = `#/teacher_detail/${that.id}`;
            // } else {
            //   location.href = "#/public_personal_center";
            // }
          } else {
            alert(res.data.message)
          }
        });
    },
    register: function () {
      location.href = '/register';
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
  // overflow: hidden;
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
  // margin-top: rem(-6);
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
.login-bottom {
  height: rem(20);
  margin-top: rem(15);
  width: 94%;
  margin-left: 3%;
}
.login-bottom span {
  text-decoration: underline;
  color: #666;
  font-size: rem(12);
  display: inline-block;
}
.forget {
  float: right;
}
.no {
  float: left;
}
</style>
