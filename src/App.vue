<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  // name: "App"
};
</script>

<style lang="scss">
@import "../static/css/_reset.scss";
@import "../static/css/_mixin.scss";
#app{
  font-size: rem(15)
}
</style>
