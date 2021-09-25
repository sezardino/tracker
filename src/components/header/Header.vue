<template>
  <header className="header">
    <h1 className="header__title">
      <span className="header__field">Report for</span>
      Jeremy Robson
    </h1>
    <img src="/assets/avatar.png" alt="jeremy" className="header__image" />
    <ul className="filters header__filters">
      <li className="filters__item">
        <button className="filters__button">Daily</button>
      </li>
      <li className="filters__item">
        <button className="filters__button">Weekly</button>
      </li>
      <li className="filters__item">
        <button className="filters__button">Monthly</button>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
