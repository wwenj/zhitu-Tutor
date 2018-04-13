<template>
  <div id="app">
    <TeacherList :teacherLists="collectList.teacher"></TeacherList>
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
      collectList: ''
    };
  },
  mounted () {
    this.collectAjax();
  },
  methods: {
    collectAjax: function () {
      var that = this;
      this.axios({
        url: 'http://api.zhituteam.com/api/collect/lists',
        method: 'get',
        params: {
          offset: 0,
          limit: 6
        },
        withCredentials: false, // 跨域不带凭证 默认
        responseType: 'json' // 响应数据类型 默认
      })
        .then(function (res) {
          that.collectList = res.data.data;
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
  min-height: 100vh;
  background: #f5f5f5;
}
</style>
