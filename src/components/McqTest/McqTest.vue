<template>
  <div class="root">
    <start-page
      :totalQuestion="qaList.length"
      v-if="pageNo === 0"
      @next-page="nextPage"
    />
    <test-page :qaList="qaList" v-if="pageNo === 1" @finish-test="finishTest" />
    <final-page :score="score" v-if="pageNo === 2" @try-again="tryAgain" />
  </div>
</template>

<script>
import StartPage from "./StartPage.vue";
import TestPage from "./TestPage.vue";
import FinalPage from "./FinalPage.vue";
import qaList from "./../../assets/qa.json";

export default {
  name: "McqTest",
  components: { StartPage, TestPage, FinalPage },
  props: {
    msg: String,
  },
  data() {
    return {
      pageNo: 0,
      score: 0,
      qaList: qaList,
    };
  },
  computed: {},
  methods: {
    nextPage() {
      this.pageNo = (this.pageNo + 1) % 3;
    },
    finishTest(answers) {
      this.nextPage();
      console.log(answers);
      this.score = answers.reduce(
        (total, cur, index) =>
          this.qaList[index].answer == cur ? total + 1 : total,
        this.score
      );
    },
    tryAgain() {
      this.nextPage();
      this.score = 0;
    },
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
