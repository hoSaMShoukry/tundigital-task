import { defineNuxtPlugin } from "#app";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp:any) => {
  const options: ToastContainerOptions = {
    autoClose: 3000,
    position: "top-right",
    // You can customize more options here
  };

  nuxtApp.vueApp.use(Vue3Toastify, options);
});
