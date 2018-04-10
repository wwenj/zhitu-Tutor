<template>
  <div id="app">
    <div class="teacher" v-if="teacher">
    <img :src="teacher.teacher.image" alt="教师头像">
    <div class="teacher-con">
      <p class="one">
        <span class="name">{{teacher.teacher.name}}</span>
        <span class="sub">数</span>
        <span class="grade">小</span>
        <span class="grade">初</span>
        <span class="grade">高</span>
        <span class="tech-time" @click="teacherInfo">编辑资料</span>
      </p>
      <div class="three-box">
        <span class="three">专职教师</span>
        <span class="three">已认证</span>
        <span class="three">明星教师</span>
      </div>
    </div>
    </div>
    <ul class="user-midd">
      <li>
        <img src="../../../static/img/me_try.png" alt="">
        <span>我的课程</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
      <li>
        <img src="../../../static/img/me_course.png" alt="">
        <span>我的试讲</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
      <li class="contact">
        <img src="../../../static/img/me_kfphone.png" alt="">
        <span>客服电话</span>
        <img class="img-right" src="../../../static/img/me_arrow.png" alt="">
      </li>
      <li @click="about">
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
      teacher: ''
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
          that.teacher = res.data.data;
        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
    },
    clickOut: function () {
      localStorage.clear();
      location.href = '/';
    },
    teacherInfo: function () {
      location.href = '#/teacher_info'
    },
    /* 关于 */
    about: function () {
      location.href = '#/about'
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
/* 头部信息 */
.teacher{
  width: 100%;
  height: rem(110);
  background: #fff;
  margin-bottom: rem(10);
  position: relative;
  padding-left: rem(110);
  box-sizing: border-box;
}
.teacher img{
  width: rem(80);
  height: rem(80);
  position: absolute;
  top:rem(15);
  left: rem(15);
}
.teacher-con{
  width: 100%;
  height: 100%;
  padding: rem(15) 0;
  box-sizing: border-box;
  position: relative;
}
.one{
  font-size: rem(15);
}
.one span{
  display: inline-block;
}
.sub{
  padding: 0 rem(4);
  color: #fff;
  border-radius: rem(3);
  background: #52c644;
  font-size: rem(12);
  line-height: rem(18);
  border:1px solid #52c644;
}
.grade{
  padding: 0 rem(1);
  color: #097c25;
  border-radius: rem(3);
  font-size: rem(11);
  line-height: rem(18);
  border:1px solid #097c25;
}
.tech-time{
  float: right;
  font-size: rem(13);
  color: #cecece;
  margin-right: rem(15);
  margin-top: rem(4);
}
.three-box{
  position: absolute;
  bottom: rem(15);
}
.three{
  font-size: rem(13);
  padding-left: rem(15);
  background-image: url('../../../static/img/accept.png');
  background-repeat: no-repeat;
  background-size: rem(15) rem(15);
  background-position: 0 rem(2);
}
</style>
