<template>
  <component
    :is="as"
    :class="[
      'statistic-item',
      `statistic-item--${data.title.toLocaleLowerCase()}`,
    ]"
    :style="{ backgroundColor: data.color }"
  >
    <div class="statistic-item__body">
      <header class="statistic-item__header">
        <h3 class="statistic-item__title">{{ data.title }}</h3>
        <MoreButton class="statistic-item__more" />
      </header>
      <div class="statistic-item__count">
        <p class="statistic-item__current">{{ current }} hrs</p>
        <p class="statistic-item__last">Last - {{ previous }}hrs</p>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import MoreButton from "@/components/more-button/MoreButton.vue";
import { HtmlWrappers, IData } from "@/types";
import { isInEnum } from "@/helpers/";

export default defineComponent({
  name: "StatisticItem",
  components: { MoreButton },
  props: {
    as: {
      type: String,
      default: HtmlWrappers.LI,
      validator: (value: HtmlWrappers) => isInEnum(value, HtmlWrappers),
    },
    data: {
      type: Object as PropType<IData>,
      required: true,
    },
    activeFilter: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const current = computed(() => {
      const { data, activeFilter } = props;
      return data.timeframes[activeFilter].current;
    });

    const previous = computed(() => {
      const { data, activeFilter } = props;
      return data.timeframes[activeFilter].previous;
    });

    return { current, previous };
  },
});
</script>

<style lang="scss" scoped src="./StatisticItem.scss"></style>
