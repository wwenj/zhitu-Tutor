<template>
  <div class="app">
    <mt-header class="nav-header" title="教师个人资料" fixed>
      <router-link to="/teacher" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import { Cell, Header, Button } from 'mint-ui';
export default {
  components: {
    'mt-cell': Cell,
    'mt-header': Header,
    'mt-button': Button
  }
};
</script>
