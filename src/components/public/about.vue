<template>
  <div id="app">
    <div class="head">
      <img src="../../../static/img/logo_share.png" alt="">
    </div>
    <p>
       知途家教，汇集了众多有丰富教学经验和教学特色的精英教师，
       致力于搭建一个让家长放心、省心的家教平台。我们具有丰富的教师资源，
       让您找好老师，找对老师！提分的捷径， 就是更有针对性的学习，
       告别大班课，知途家教一对一，成绩提高不是梦。
     </p>
     <ul>
       <li>网站：www.zhituteam.com</li>
       <li>客服电话：15611004123</li>
       <li style="border:none">微信公众号：知途家教</li>
     </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../../static/css/_mixin.scss";
#app {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  // padding-top: 1px;
  overflow: hidden;
}
.head{
  width:rem(100);
  height: rem(100);
  margin: rem(50) auto;
}
.head img{
  width: rem(100);
  height: rem(100);
  border-radius: rem(100);
}
p{
  width: 100%;
  font-size: rem(16);
  padding: 0 rem(25);
  box-sizing: border-box;
  text-indent: rem(30);
}
ul{
  width: 100%;
  margin-top: rem(50);
  background: #fff;
}
li{
  width: 100%;
  height: rem(40);
  margin-left: rem(20);
  border-bottom: 1px solid #d9d9d9;
  line-height: rem(40);
  font-size: rem(16);
}
</style>
