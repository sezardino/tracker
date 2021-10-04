<template>
  <header className="header">
    <div class="header__wrapper">
      <h1 className="header__title">
        <span className="header__field">Report for</span>
        Jeremy Robson
      </h1>
      <img src="/images/avatar.png" alt="jeremy" className="header__avatar" />
    </div>
    <Filters
      class="header__filters"
      :filters="filters"
      :currentFilter="activeFilter"
      @filterChange="changeFilterHandler"
    />
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Filters from "@/components/filters";
import { useStore } from "vuex";

export default defineComponent({
  name: "Header",
  components: { Filters },
  setup() {
    const store = useStore();

    const filters = computed(() => store.getters["tracker/tabs"]);
    const activeFilter = computed(() => store.getters["tracker/currentTab"]);

    const changeFilterHandler = (filter: string) =>
      store.dispatch("tracker/changeTab", filter);

    return { filters, activeFilter, changeFilterHandler };
  },
});
</script>

<style lang="scss" scoped src="./Header.scss"></style>
