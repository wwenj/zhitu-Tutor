<template>
  <div id="app">
<h1>分类页面</h1>
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style lang="scss">
@import "../../static/css/_mixin.scss";

</style>
