<template>
  <div id="app">
<!-- <p>教师列表{{teacherLists}}</p> -->
  <div class="teacher" v-for="(item,index) in teacherLists" @click="toDetail(item.id)" :key="index">
    <img :src="item.image" alt="教师头像">
    <div class="teacher-con">
      <p class="one">
        <span class="name">{{item.name}}</span>
        <span class="sub" v-for="(item1,index) in item.subject" :key="index">{{item1.label}}</span>
        <span class="grade" v-for="(item2,index) in item.grade" :key="index+1">{{item2.label}}</span>
        <span class="tech-time">授课{{item.teach_time}}小时</span>
      </p>
      <p class="two">
        {{item.teach_year}}年教龄
      </p>
      <p class="three" v-for="(item3,index) in item.extend_tag" :key="index">
        {{item3.label}}
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    teacherLists: {
      type: Array
    }
  },
  data () {
    return {

    };
  },
  mounted () {
    /* ajax */
    // this.homeAjax();
  },
  methods: {
    // homeAjax: function () {
    //   var that = this;
    //   this.axios({
    //     url: 'http://api.zhituteam.com/api/index',
    //     method: 'get',
    //     params: {
    //       ID: 12345 // 请求参数
    //     },
    //     timeout: 2000, // 超时请求
    //     withCredentials: false, // 跨域不带凭证 默认
    //     responseType: 'json' // 响应数据类型 默认
    //   })
    //     .then(function (res) {
    //       that.HomeData = res.data.data;
    //       console.log(that.HomeData)
    //     })
    //     .catch(function (err) {
    //       alert('ajax请求出错，错误信息：' + err);
    //     });
    // }
    toDetail: function (id) {
      sessionStorage.setItem('teacher_id', id);
      location.href = '#/teacher_detail';
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../static/css/_mixin.scss";
#app{
  background:#F5F5F5;
}
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
  padding: 0 rem(4);
  color: #097c25;
  border-radius: rem(3);
  font-size: rem(11);
  line-height: rem(18);
  border:1px solid #097c25;
}
.tech-time{
  float: right;
  font-size: rem(13);
  color: #888;
  margin-right: rem(15);
  margin-top: rem(4);
}
.two{
  margin-top: rem(5);
  color: #888;
  font-size: rem(13);
}
.three{
  // position: absolute;
  // bottom: rem(15);
  // font-size: rem(13);
  display: inline-block;
  margin-top: rem(18);
  margin-right: rem(5);
  padding-left: rem(15);
  background-image: url('../../../static/img/accept.png');
  background-repeat: no-repeat;
  background-size: rem(15) rem(15);
  background-position: 0 rem(2);
}
</style>
