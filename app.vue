<template>
  <div>
    <!-- Waiting screen only on page reload -->
    <div v-if="showWaiting" class="waiting-screen">
      <img
        src="/images/Turn-Digital-Logo.avif"
        alt="Please wait..."
        class="scale-animation"
      />
    </div>

    <!-- Main app -->
    <div v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showWaiting = ref(true);

onMounted(() => {
  setTimeout(() => {
    showWaiting.value = false;
  }, 3000);
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.waiting-screen {
  position: fixed;
  inset: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.scale-animation {
  width: 150px;
  animation: scaleUp 3s ease-in-out forwards;
}

@keyframes scaleUp {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>
