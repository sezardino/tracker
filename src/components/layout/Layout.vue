<template>
  <main class="main">
    <slot name="content" />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
});
</script>

<style lang="scss" scoped src="./Layout.scss"></style>
