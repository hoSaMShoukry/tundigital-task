<template>
  <div class="main">
    <div class="sub-main">
      <Filter />
      <collapse />
    </div>
  </div>
</template>

<script setup lang="ts">
import Filter from "./components/filter.vue";
import collapse from "./components/collapse.vue";
onMounted(() => {});
</script>
<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  width: 100%;
  .sub-main {
    width: 80%;
  }
}
</style>
