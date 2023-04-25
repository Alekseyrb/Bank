<template>
<!--  <main-layout></main-layout>-->
<!--  <auth-layout></auth-layout>-->
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import {computed} from "vue";
import {useRoute} from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import mainLayout from "@/layout/MainLayout.vue";
export default {
  computed: {
    mainLayout() {
      return mainLayout
    }
  },
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => route.meta.layout),
    }
  },
  components: {
    MainLayout,
    AuthLayout,
  }
}
</script>

<style>

</style>
