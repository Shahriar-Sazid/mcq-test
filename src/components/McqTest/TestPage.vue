<template>
  <div class="test-page">
    <div class="timer">
      <span><h2>Remaining Time</h2></span>
      <span
        ><h2>{{ secondToHhMmSs(timeInSecond) }}</h2></span
      >
    </div>
    <br />

    <div v-for="(qa, idx) in qaList" :key="idx">
      <div class="question-answer">
        <h4>{{ idx + 1 }}. {{ qa.title }}</h4>
        <form class="answer" :class="{ 'answer-taken': answerTaken[idx] }">
          <label
            v-for="(opt, idx2) in qa.options"
            :key="idx2"
            class="options"
            :for="idx.toString() + idx2.toString()"
          >
            <div class="input-box">
              <input
                :disabled="answerTaken[idx]"
                v-model="answers[idx]"
                @input="inputTaken(idx)"
                :value="opt"
                type="radio"
                name="radio"
                :id="idx.toString() + idx2.toString()"
              />
              <span class="design"></span>
            </div>

            <div class="input-text">
              <span class="text">
                {{ opt }}
              </span>
            </div>
          </label>
        </form>
      </div>
      <br />
    </div>

    <div class="footer">
      <button class="finish-button" @click="finishTest(answers)">FINISH</button>
    </div>
  </div>
</template>

<script>
import { secondToHhMmSs } from "./../../util";
import { configuration } from "../../configuration";

export default {
  name: "TestPage",
  props: ["qaList"],
  data() {
    return {
      timeInSecond: this.qaList.length * configuration.timePerQuestion,
      answers: Array(this.qaList.length),
      answerTaken: Array(this.qaList.length).fill(false),
      timer: null,
    };
  },
  methods: {
    finishTest() {
      clearInterval(this.timer);
      this.$emit("finish-test", this.answers);
    },
    secondToHhMmSs: secondToHhMmSs,
    inputTaken(idx) {
      console.log("abcd");
      this.answerTaken[idx] = true;
    },
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
.answer-taken {
  color: lighten($primary-color, 25%);
}

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

.question-answer {
  background: $bg-color;
  border-radius: 10px;
  padding: 8px 30px;
}

/* label */
.options {
  display: flex;
  margin: 12px 0;
  cursor: pointer;
  position: relative;
  padding-left: $length;
  /* checked state */
  input:checked + .design::before {
    opacity: 1;
    transform: scale(0.6);
  }
}

.input-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
}

/* .design */
.design {
  width: $length;
  height: $length;

  border: 2px solid $primary-color;
  border-radius: 100%;
  margin-right: 0.5 * $length;

  position: relative;
  &::before {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    background: $primary-color;
    opacity: 0;
    transition: 0.3s;
  }
}
</style>

