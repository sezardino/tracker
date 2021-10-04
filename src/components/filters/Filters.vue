<template>
  <div class="filters">
    <ul class="filters__list">
      <template v-for="filter in filters" :key="filter">
        <li
          :class="[
            'filters__item',
            { 'filters__item--active': currentFilter === filter },
          ]"
        >
          <button
            type="button"
            class="filters__button"
            :aria-label="'change filter to ' + filter"
            @click="$emit('filterChange', filter)"
          >
            {{ filter }}
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Filters",
  props: {
    filters: {
      type: Array as PropType<Array<string> | []>,
      default: () => [],
    },
    currentFilter: {
      type: String,
      required: false,
    },
  },
  emits: ["filterChange"],
});
</script>

<style lang="scss" scoped src="./Filters.scss"></style>
