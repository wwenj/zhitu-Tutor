<template>
  <div id="app">
    <!-- 网站首页头部 -->
    <div class="header">
      <img class="header-logo" src="../../static/img/logo.png" alt="">
      <div class="header-my">
        <img src="../../static/img/my.png" alt="">
        <span @click="toMy">我的</span>
      </div>
    </div>
    <!-- 首页轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in HomeData.banner" :key="index"><img class="banner-img" :src='item.image' ></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
    </div>
<!-- 中间分类导航 -->
    <ul class="nav-box">
      <li v-for="(item,index) in HomeData.subjects" :key="index" @click="toClass(item.id)">
        <router-link to="/teacher_class" class="router-link">
          <img :src=item.icon alt="">
        </router-link>
        <p>{{item.name}}</p>
      </li>
    </ul>
<!-- 热门教师 -->
    <div class="hot-teacher">
      热门教师
    </div>
    <TeacherList :teacherLists="HomeData.teacher"></TeacherList>
  </div>
</template>

<script>
import Swiper from '../../static/js/swiper4';
import TeacherList from './teacher/teacherList';

export default {
  components: {
    TeacherList
  },
  data () {
    return {
      HomeData: {}
    };
  },
  mounted () {
    /* ajax */
    this.homeAjax();
    /* 轮播图 */
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    });
  },
  methods: {
    homeAjax: function () {
      var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/index',
        method: 'get',
        params: {
          ID: 12345 // 请求参数
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          that.HomeData = res.data.data;
        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
    },
    /* 查询是否已登录，并跳转到相应页面 ,判断登录身份选择跳转路由 */
    toMy: function () {
      const localData = localStorage.getItem('zt_data');
      const ztData = JSON.parse(localData);
      if (!ztData) {
        location.href = '#/login';
      } else {
        if (ztData.role_type === 1) {
          location.href = '#/user';
        } else if (ztData.role_type === 2) {
          location.href = '#/teacher';
        } else {
          alert('本地登录记录出错，已清除存储，请重新登录');
          localStorage.clear();
        }
      }
    },
    toClass: function (index) {
      sessionStorage.setItem('subjectNum', index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/css/_mixin.scss";
@import "../../static/css/swiper4.css";
#app{
  background: #fff;
}
.header {
  width: 100%;
  height: rem(40);
  padding: rem(12);
  box-sizing: border-box;
}
.header-logo {
  float: left;
  width: rem(85);
  height: rem(17);
  vertical-align: top;
}
.header-my {
  float: right;
  font-size: rem(16);
}
.header-my img {
  width: rem(16);
  height: rem(16);
  vertical-align: top;
}
.header-my span {
  display: inline-block;
  vertical-align: top;
  line-height: 16px;
}
/* 轮播 */
.swiper-container {
  width: 100%;
  height: rem(125);
}
.banner-img{
  width: 100%;
  height: 100%;
}
/* 导航分类 */
.nav-box{
  width:100%;
  display:flex;
  overflow: hidden;
}
.nav-box li{
  height: rem(75);
  // border: 1px solid black;
  flex-grow:1;
  padding: rem(14) 0;
  text-align:center;
}
.nav-box li img{
  width: rem(48);
  height: rem(48);
}
.nav-box li p{
  text-align: center;
  color: #262323;
  font-size: rem(14);
  margin-top: rem(-2)
}
.hot-teacher{
  width: 100%;
  // height: 100%;
  box-sizing: border-box;
  padding: rem(15);
  font-size: rem(18);
  color: #ff7200;
  background-color:#F5F5F5 ;
}
</style>
