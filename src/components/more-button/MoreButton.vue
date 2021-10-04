<template>
  <button class="more-button" aria-label="open sub menu">
    <span class="more-button__item"></span>
    <span class="more-button__item"></span>
    <span class="more-button__item"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MoreButton",
});
</script>

<style lang="scss" scoped src="./MoreButton.scss"></style>
