<template>
  <section class="statistic">
    <h2 class="statistic__title">Statistic</h2>
    <ul className="statistic__list">
      <template v-for="item in data" :key="item.title">
        <StatisticItem :data="item" :activeFilter="activeFilter" />
      </template>
    </ul>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import StatisticItem from "@/components/statistic-item";
import { IData } from "@/types";
import { useStore } from "vuex";

export default defineComponent({
  name: "Statistic",
  components: { StatisticItem },
  props: {
    data: {
      type: Array as PropType<Array<IData> | []>,
      default: () => [],
    },
  },
  setup() {
    const store = useStore();

    const activeFilter = computed(() => store.getters["tracker/currentTab"]);

    return { activeFilter };
  },
});
</script>

<style lang="scss" scoped src="./Statistic.scss"></style>
