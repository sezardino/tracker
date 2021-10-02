<template>
  <component
    :is="as"
    className="statistic-item statistic-item--work"
    :style="{ backgroundColor: StatisticColors.WORK }"
  >
    <div className="statistic-item__body">
      <header className="statistic-item__header">
        <h3 className="statistic-item__title">Work</h3>
        <button className="statistic-item__more">more</button>
      </header>
      <div className="statistic-item__count">
        <p className="statistic-item__current">32hrs</p>
        <p className="statistic-item__last">Last Week - 36hrs</p>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HtmlWrappers, StatisticColors } from "@/types/enums";
import { isInEnum } from "@/helpers/";

export default defineComponent({
  name: "StatisticItem",
  props: {
    as: {
      type: String,
      default: HtmlWrappers.LI,
      validator: (value: HtmlWrappers) => isInEnum(value, HtmlWrappers),
    },
  },
  setup() {
    return { StatisticColors };
  },
});
</script>

<style lang="scss" scoped src="./StatisticItem.scss"></style>
