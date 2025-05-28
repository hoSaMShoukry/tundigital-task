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
    width: 60%;
  }
}
@media (max-device-width: 1253px) {
  .main {
    .sub-main {
      width: 80%;
    }
  }
}
@media (max-device-width: 850px) {
  .main {
    .sub-main {
      width: 90%;
    }
  }
}
</style>
