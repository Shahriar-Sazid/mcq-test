<template>
  <div class="test-page">
    <div class="timer">
      <span><h3>Remaining Time</h3></span>
      <span
        ><h3>{{ secondToHhMmSs(timeInSecond) }}</h3></span
      >
    </div>
    <br />

    <div v-for="(qa, idx) in qaList" :key="idx">
      <qa :qa="qa" :idx="idx" v-model="answers[idx]"/>
      <br />
    </div>

    <div class="footer">
      <button class="finish-button" @click="finishTest">FINISH</button>
    </div>
  </div>
</template>

<script>
import { secondToHhMmSs } from "./../../util";
import { configuration } from "../../configuration";
import Qa from "./Qa.vue";

export default {
  components: { Qa },
  name: "TestPage",
  data() {
    let qaList = this.$store.getters.getList;
    return {
      qaList,
      timeInSecond: qaList.length * configuration.timePerQuestion,
      answers: Array(qaList.length),
      timer: null,
    };
  },
  methods: {
    finishTest() {
      clearInterval(this.timer);
      this.$router.push({
        name: "final-page",
        params: {
          score: this.answers.reduce(
            (total, cur, index) =>
              this.qaList[index].answer == cur ? total + 1 : total,
            0
          ),
        },
      });
    },

    secondToHhMmSs: secondToHhMmSs,
  },
  created() {
    this.timer = setInterval(() => {
      this.timeInSecond--;
      if (this.timeInSecond == 0) {
        this.finishTest();
      }
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #6a1ce8;
$bg-color: #fceafe;
$length: 16px;

.test-page {
  min-width: 320px;
  width: 40%;
  padding: 15px;
  border-radius: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  color: $primary-color;
}
.timer {
  display: flex;
  background: mix($primary-color, $bg-color, 0.5);
  border-radius: 10px;
  padding: 8px 30px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  :first-child {
    flex-grow: 1;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
}

.finish-button {
  border: 0;
  width: 250px;
  height: 45px;
  color: white;
  text-transform: uppercase;
  background: $primary-color;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  &:active {
    transform: scale(0.9);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
}

</style>

