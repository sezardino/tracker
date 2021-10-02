<template>
  <section class="statistic">
    <h2 class="statistic__title">Statistic</h2>
    <ul className="statistic__list">
      <template v-for="item in 6" :key="item">
        <StatisticItem />
      </template>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticItem from "@/components/statistic-item";

export default defineComponent({
  name: "Statistic",
  components: { StatisticItem },
});
</script>

<style lang="scss" scoped src="./Statistic.scss"></style>
