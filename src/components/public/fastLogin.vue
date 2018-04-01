<template>
  <div id="app">
    <input type="text" v-model="newpass" placeholder="请设置密码">
    <div class="button" @click="newPass">确认密码</div>
    <p class="info">登录即代表同意《知途家教》相关规定</p>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      newpass: ''
    };
  },
  mounted () {
  },
  methods: {
    newPass: function () {
      var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/user/firstSetPassword',
        method: 'post',
        params: {
          newPass: this.newpass // 请求参数
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          if (res.data.error_code) {
            location.href = '#/user';
          } else {
            alert(res.data.message);
          }
        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
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
.button {
  width: 94%;
  margin-left: 3%;
  background-color: #2ebd51;
  font-size: rem(15);
  color: #fff;
  height: rem(50);
  margin-top: rem(10);
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
