<template>
  <div class="filters">
    <ul class="filters__list">
      <li class="filters__item">
        <button class="filters__button">Daily</button>
      </li>
      <li class="filters__item filters__item--active">
        <button class="filters__button">Weekly</button>
      </li>
      <li class="filters__item">
        <button class="filters__button">Monthly</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Filters",
});
</script>

<style lang="scss" scoped src="./Filters.scss"></style>
