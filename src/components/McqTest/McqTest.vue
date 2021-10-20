<template>
  <div class="root">
    <start-page v-if="page.count === 0" :page="page" />
  </div>
</template>

<script>
import StartPage from "./StartPage.vue";
export default {
  name: "McqTest",
  components: { StartPage },
  props: {
    msg: String,
  },
  data() {
    return {
      page: {
        count: 0,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.root {
  display: grid;
  width: 100%;
  height: 100vh;
  place-items: center;
}
</style>
