<template>
  <router-view
    style="
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    "
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.bg-pinkBackground {
  background-image: linear-gradient(
    to top,
    #f274bb,
    #f274bb,
    #f274bb,
    #f274bb,
    #f274bb,
    #e782d5,
    #d790ec,
    #c29fff
  ) !important;
}
</style>
