<template>
  <div class="start-page">
    <h2 class="top-heading">MCQ TEST</h2>
    <h4>Total {{ totalQuestion }} questions</h4>
    <h4>Total time: {{ secondToHhMmSs(totalQuestion * timePerQuestion) }}</h4>
    <button class="start-button" @click="onStart">START</button>
    <br /><br />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { configuration } from '../../configuration';
import { secondToHhMmSs } from "./../../util";


export default {
  name: "StartPage",
  data() {
    return {
      timePerQuestion: configuration.timePerQuestion
    }
  },
  computed: {
    ...mapGetters(['totalQuestion'])
  },
  methods: {
    onStart() {
      this.$router.push({name: 'test-page'})
    },
    secondToHhMmSs: secondToHhMmSs,
  },
};
</script>

<style lang="scss" scoped>
.start-page {
  min-width: 320px;
  width: 25%;
  padding: 15px;
  background: #fceafe;
  border-radius: 20px;
}
.top-heading {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #6a1ce8;
  text-align: center;
}
.start-button {
  border: 0;
  width: 250px;
  height: 45px;
  color: white;
  text-transform: uppercase;
  background: #6a1ce8;
  border-radius: 5px;
  font-weight: bold;
  /* box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24); */
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  &:active {
    transform: scale(0.9);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
}
</style>