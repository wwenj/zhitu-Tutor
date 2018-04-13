<template>
  <div id="app">
    <div class="head">
      <span @click="grade" class="btm" :class="headAuto==1?'headColor':''">{{ gradeName }}</span>|
      <span @click="subject" class="btm" :class="headAuto==2?'headColor':''">{{ subjectName }}</span>|
      <span @click="type" class="btm" :class="headAuto==3?'headColor':''">{{ typeName }}</span>
    </div>
    <div v-if="classType" class="headOut">
      <span v-for="(item,index) in classType" :key="index" @click="classClick(index,item)">{{item}}</span>
    </div>
    <TeacherList class="list" v-if="classData" :teacherLists="classData.teacher"></TeacherList>
    <div v-if="mark" @click="markClick" class="mark"></div>
  </div>
</template>

<script>
import TeacherList from '../teacher/teacherList';
export default {
  components: {
    TeacherList
  },
  data () {
    return {
      classType: '', // 选项卡数据
      classData: '', // 教师列表数据
      headAuto: 1, // 头部分类字体色控制
      gradeNum: 0, // 年级
      typeNum: 0, // 身份
      subjectNum: 0, // 学科
      mark: 0, // 遮罩
      gradeName: '年级',
      subjectName: '科目',
      typeName: '教师类型'
    };
  },
  mounted () {
    this.subjectNum = sessionStorage.getItem('subjectNum');
    this.classAjax();
  },
  methods: {
    grade: function () {
      this.headAuto = 1;
      this.mark = 1;
      this.classType = ['全部', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'];
    },
    subject: function () {
      this.headAuto = 2;
      this.mark = 1;
      this.classType = ['全部', '语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理', '音乐', '美术'];
    },
    type: function () {
      this.headAuto = 3;
      this.mark = 1;
      this.classType = ['全部', '专职老师', '在校大学生', ' '];
    },
    markClick: function () {
      this.classType = '';
      this.mark = 0;
    },
    classAjax: function () {
      var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/teacher/lists',
        method: 'get',
        params: {
          grade: that.gradeNum,
          type: that.typeNum,
          subject: that.subjectNum,
          offset: 0,
          limit: 20
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          that.classData = res.data.data;
        })
        .catch(function (err) {
          alert('ajax请求出错，错误信息：' + err);
        });
    },
    classClick: function (num, item) {
      switch (this.headAuto) {
        case 1:
          this.gradeName = item;
          this.gradeNum = num;
          break;
        case 2:
          this.subjectName = item;
          if (num > 0) {
            this.subjectNum = num + 12;
          } else {
            this.subjectNum = 0;
          }
          break;
        case 3:
          this.typeName = item;
          if (num > 0) {
            this.typeNum = num + 23;
          } else {
            this.typeNum = 0;
          }
          break;
      };
      this.markClick();
      this.classAjax();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../static/css/_mixin.scss";
#app {
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  padding-top:rem(1) ;
}
.list{
  margin-top:rem(44);
}
.btm:after {
  position: absolute;
  right: rem(22);
  top: rem(15);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #040000;
  content: " ";
  display: block;
  width: 0;
  height: 0;
}
.head{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:rem(35);
  display: flex;
  justify-content:space-between;
  background: #fff;
  line-height: rem(35);
  color: #dde2f0;
  z-index: 10;
}
.head span{
  position: relative;
  width: 33%;
  height: 100%;
  text-align: center;
  line-height: rem(35);
  font-size: rem(14);
  color: #000;
}
.headColor{
  color: #52c644 !important;
}
.headOut{
  position: fixed;
  top: rem(35);
  left: 0;
  width: 100%;
  padding: rem(0) rem(12) rem(8) rem(12);
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content:space-between;
  flex-wrap:wrap;
  border-top: 1px solid #dde2f0;
  z-index: 10;
}
.headOut span{
  display: inline-block;
  width: rem(75);
  height: rem(40);
  background: #f5f5f5;
  border-radius: rem(5);
  text-align: center;
  line-height: rem(40);
  margin-top: rem(8);
}
/* 遮罩 */
.mark{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.603);
}
</style>
