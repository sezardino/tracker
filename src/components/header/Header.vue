<template>
  <header className="header">
    <div class="header__wrapper">
      <h1 className="header__title">
        <span className="header__field">Report for</span>
        Jeremy Robson
      </h1>
      <img src="/images/avatar.png" alt="jeremy" className="header__avatar" />
    </div>
    <Filters class="header__filters" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Filters from "@/components/filters";

export default defineComponent({
  name: "Header",
  components: { Filters },
});
</script>

<style lang="scss" scoped src="./Header.scss"></style>
