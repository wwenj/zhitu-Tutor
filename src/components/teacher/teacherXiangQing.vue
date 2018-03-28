<template>
  <div id="app">
    <div class="teacher">
      <img :src="datailData.image" alt="教师头像">
      <div class="teacher-con">
        <p class="one">
          <span class="name">{{datailData.name}}</span>
          <span class="sub">{{datailData.subject[0].label}}</span>
          <span class="grade">{{datailData.grade[0].label}}</span>
          <span class="price">{{datailData.price}}</span>
        </p>
        <p class="two">
          {{datailData.teach_year}}年教龄
        </p>
        <p class="three">
          {{datailData.extend_tag[0].label}}
          <span class="tech-time">授课{{datailData.teach_time}}小时</span>
        </p>
      </div>
  </div>
  <div class="conBox">
    <h2>
      <img src="../../../static/img/detail_teacher.png" alt="">
      个人简介
    </h2>
    <p class="int">{{datailData.intro}}</p>

    <h2>
      <img src="../../../static/img/detail_introduce.png" alt="">
      教学经历
    </h2>
    <p class="int">{{datailData.teacher_experience[0].title}}</p>

    <h2>
      <img src="../../../static/img/detail_reward.png" alt="">
      成功案例
    </h2>
    <div class="teacher-case" v-for="item in datailData.teacher_case">
        <h3>{{item.title}}</h3>
        <p class="int">{{item.content}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      datailData: {}
    };
  },
  mounted () {
    this.teacherDetailAjax();
  },
  methods: {
    teacherDetailAjax: function () {
      var id = sessionStorage.getItem('teacher_id')
      var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/teacher/info',
        method: 'get',
        params: {
          id: id
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          that.datailData = res.data.data.teacher;
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
  font-size: rem(13);
  color: #888;
  position: absolute;
  top: 0;
  right: rem(15);

}
.two{
  margin-top: rem(5);
  color: #888;
  font-size: rem(13);
}
.three{
  width: rem(250);
  position: absolute;
  bottom: rem(15);
  font-size: rem(13);
  padding-left: rem(15);
  background-image: url('../../../static/img/accept.png');
  background-repeat: no-repeat;
  background-size: rem(15) rem(15);
  background-position: 0 rem(2);
}
.price{
  float: right;
  margin-right: rem(15);
  color: #ee4034;
  font-size: rem(13);
}
.conBox{
  width: 100%;
  padding: rem(15) rem(15);
  box-sizing: border-box;
  background: #fff;
}
h2{
  width: 100%;
  height: rem(20);
  font-size: rem(15);
  color: #262323;
  font-weight: 500;
}
h2 img{
  width: rem(20);
  height: rem(20);
  vertical-align: middle;
}
.int{
  color: #888;
  font-size: rem(13);
  padding-left: rem(20);
  box-sizing: border-box;
  margin-top: rem(8);
  margin-bottom: rem(8);
}
h3{
  font-size: rem(13);
  padding-left: rem(20);
  box-sizing: border-box;
  color: black;
  font-weight: 500;
  margin-top: rem(8);
  margin-bottom: rem(-8);
}
.teacher-case{
  border-bottom: 1px solid rgb(206, 204, 204);
}
</style>
