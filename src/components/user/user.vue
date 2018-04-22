<template>
  <div id="app">
    <div class="head" v-if="user">
      <div class="head-pic">
        <img :src="user.user.image" alt="">
      </div>
        <span class="phone">{{user.user.phone}}</span>
        <span class="chage" @click="userInfo">编辑</span>
    </div>
    <ul class="user-midd">
      <li @click="toCollect">
        <img src="../../../static/img/detail_star_midd.png" alt="">
        <span>我的收藏</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
      <li @click="toCourse">
        <img src="../../../static/img/me_try.png" alt="">
        <span>查看试讲</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
      <li @click="toCourse">
        <img src="../../../static/img/me_course.png" alt="">
        <span>我的课堂</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
      <li class="contact">
        <img src="../../../static/img/me_kfphone.png" alt="">
        <span>客服电话</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
      <li @click="toAbout">
        <img src="../../../static/img/me_about_us.png" alt="">
        <span>关于知途家教</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
    </ul>
    <button class="out" @click="clickOut">退出登录</button>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      user: ''
    };
  },
  mounted () {
    this.userAjax();
  },
  methods: {
    userAjax: function () {
      var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/user/info',
        method: 'get',
        params: {
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          that.user = res.data.data;
        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
    },
    clickOut: function () {
      localStorage.clear();
      location.href = '#/';
    },
    userInfo: function () {
      location.href = '#/user_info'
    },
    /* 收藏 */
    toCollect: function () {
      location.href = '#/user_collect'
    },
    /* 关于 */
    toAbout: function () {
      location.href = '#/about'
    },
    /* 我的课程 */
    toCourse: function () {
      location.href = '#/user_course'
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
.head{
  width: 100%;
  height: rem(75);
  background: #fff;
}
.head-pic{
  width: rem(50);
  height: rem(50);
  padding: rem(12);
  float: left;
}
.head-pic img{
  width: 100%;
  height: 100%;
  border-radius: rem(50);
}
.head span{
  display: inline-block;
  height: rem(50);
  padding: rem(12) 0;
  line-height: rem(50);
  color: #999999;
}
.phone{
  float: left;
}
.chage{
  float: right;
  margin-right: rem(15);
}
/* 中间三个选择栏 */
.user-midd{
  width: 100%;
  margin-top: rem(11);
}
.user-midd li{
  width: 100%;
  height: rem(50);
  border-bottom: 1px solid #efefef;
  background: #ffffff;
  line-height: rem(50);
  padding: 0 rem(15);
  box-sizing: border-box;
  position: relative;
}
.img-right{
  position: absolute;
  top: 50%;
  right: rem(20);
  margin-top: rem(-10);
}
.user-midd li img{
  width: rem(20);
  height: rem(20);
  vertical-align: middle;
}
.user-midd li span{
  vertical-align: middle;
  margin-left: rem(8);
}
.contact{
  margin-top: rem(10);
}
.out{
  width: 100%;
  height: rem(50);
  margin-top: rem(10);
  border: none;
  background: #ffffff;
  color: red;
  font-size: rem(16);
  outline: none;
}
</style>
