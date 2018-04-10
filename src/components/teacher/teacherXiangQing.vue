<template>
  <div id="app" v-if="datailData">
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
    <div class="teacher-case" v-for="(item,index) in datailData.teacher_case" :key="index">
        <h3>{{item.title}}</h3>
        <p class="int">{{item.content}}</p>
    </div>
  </div>
  <div class="bottom-line">
    <p>满意就预约吧</p>
    <hr>
  </div>
  <div class="bottom-nav">
    <span class="collect" @click="collectBtn">
      <img v-if="!collection" src="../../../static/img/detail_star_white.png" alt="">
      <img v-else src="../../../static/img/detail_star_yellow.png" alt="">
      <span v-if="!collection">收藏</span>
      <span v-else>已收藏</span>
    </span>
    <div class="shijiang-box" @click="yuyueBtn">
      <span v-if="!yuyue" class="shijiang">预约试讲</span>
      <span v-else class="shijiang" style="background: rgb(102, 102, 102);">已预约</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      datailData: '',
      collection: 1,
      yuyue: '',
      id: ''
    };
  },
  mounted () {
    this.teacherDetailAjax();
  },
  methods: {
    teacherDetailAjax: function () {
      this.id = sessionStorage.getItem('teacher_id')
      var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/teacher/info',
        method: 'get',
        params: {
          id: this.id
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          that.datailData = res.data.data.teacher;
          that.collection = res.data.data.teacher.is_collect;
          that.yuyue = res.data.data.teacher.is_select;
        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
    },
    /* 点击收藏 */
    collectBtn: function () {
      if (this.collection === 1) {
        this.collectAuto('collect/del',this.id);
        this.collection = 0
      } else {
        this.collectAuto('collect/add',this.id);
        this.collection = 1
      }
    },
    /* 点击预约 */
    yuyueBtn: function () {
      if (this.yuyue === 0) {
        this.collectAuto('coursetrial/add',this.id);
        this.yuyue = 1
      }
    },
    /* 点击收藏 */
    collectAuto: function (url,tid) {
      this.axios({
        url: 'http://api.zhituteam.com/api/'+url,
        method: 'get',
        params: {
          tid: tid
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          if (res.data.error_code === 0) {
            console.log('操作成功')
          } else {
            alert(res.data.message)
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
  padding: rem(15) rem(15) rem(15) rem(10);
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
/* 底部分割线 */
.bottom-line{
  width: 100%;
  height:rem(60);
  padding: rem(25) rem(30);
  box-sizing: border-box;
  position: relative;
  margin-bottom: rem(50);
}
.bottom-line p{
  width: rem(100);
  color: #9e9c9c;
  font-size: rem(15);
  position: absolute;
  top:rem(20);
  left: 50%;
  margin-left: rem(-50);
  text-align: center;
  background:#F5F5F5;
  z-index: 10;
}
hr{
  width: rem(222);
  position: absolute;
  top:rem(15);
  left: 50%;
  margin-left: rem(-111);
  border-top: 1px solid #9e9c9c;
}
.bottom-nav{
  width: 100%;
  height: rem(50);
  background: #2dc072;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
}
.bottom-nav span{
  display: inline-block;
}
.collect{
  width: 14%;
  height: 100%;
  background: #00000023;
  text-align: center;
  font-size: rem(14);
  color: #fff;
}
.collect img{
  width: rem(20);
  height: rem(20);
  vertical-align: rem(-10);
}
.collect span{
  display: block;
}
.shijiang-box{
  flex-grow:1;
}
.shijiang{
  width: 100%;
  height: 100%;
  background: #2dc072;
  text-align: center;
  line-height: rem(50);
  color: #fff;
}
</style>
