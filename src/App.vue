<template>
  <Layout>
    <template v-slot:content>
      <Header />
      <Statistic />
    </template>
    <template v-slot:footer>
      <Copyrights />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layout";
import Copyrights from "@/components/copyrights/";
import Header from "@/components/header";
import Statistic from "@/components/statistic";

export default defineComponent({
  name: "App",
  components: { Copyrights, Header, Statistic, Layout },
});
</script>

<style scoped></style>
