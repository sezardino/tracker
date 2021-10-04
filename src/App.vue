<template>
  <Layout>
    <template v-slot:content>
      <Header />
      <Statistic :data="statistic" />
    </template>
    <template v-slot:footer>
      <Copyrights />
    </template>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Layout from "@/components/layout";
import Copyrights from "@/components/copyrights/";
import Header from "@/components/header";
import Statistic from "@/components/statistic";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: { Copyrights, Header, Statistic, Layout },
  setup() {
    const store = useStore();
    const statistic = computed(() => store.getters["tracker/data"]);

    onMounted(() => {
      store.dispatch("tracker/initialization");
    });

    return { statistic };
  },
});
</script>

<style scoped></style>
