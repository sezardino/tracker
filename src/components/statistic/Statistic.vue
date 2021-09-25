<template>
  <ul className="statistic">
    <li className="statistic__item">
      <div className="statistic__body">
        <header className="statistic__header">
          <h3 className="statistic__title">Work</h3>
          <button className="statistic__more">more</button>
        </header>
        <div className="statistic__count">
          <p className="statistic__current">32hrs</p>
          <p className="statistic__last">Last Week - 36hrs</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Statistic",
});
</script>
