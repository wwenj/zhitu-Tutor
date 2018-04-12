<template>
  <div id="app">
    <div class="head">
      <span @click="start" :class={spanAuto:spanAuto}>未开始</span>
      <span @click="end" :class={spanAuto:!spanAuto}>已结束</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      spanAuto: 1
    };
  },
  mounted () {

  },
  methods: {
    start: function () {
      this.spanAuto = 1;
      this.courseAjax(1);
    },
    end: function () {
      this.spanAuto = 0;
      this.courseAjax(2);
    },
    courseAjax: function (status) {
      // var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/course/studentlists',
        method: 'get',
        params: {
          status: status
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          alert(res.data.message);
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
.head{
  width: 100%;
  height: rem(50);
  background: #fff;
  display:flex;
  justify-content:space-around;
}
.head span{
  display: inline-block;
  width: rem(80);
  height: rem(35);
  line-height: rem(35);
  margin-top: rem(15);
  text-align: center;
  font-size: rem(20);
}
.spanAuto{
  border-bottom: 1px solid #2ea141;
  color: #2ea141;
}
</style>
