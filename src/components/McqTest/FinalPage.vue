<template>
  <div class="start-page">
    <h2 class="top-heading">MCQ RESULT</h2>
    <div class="celebrate-logo">
      <img src="@/assets/pngaaa.com-1321842.png" alt="" />
    </div>
    <h4>You got {{ score }} points</h4>

    <button class="start-button" @click="tryAgain">TAKE AGAIN</button>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "FinalPage",
  data() {
    return {
      score: this.$route.params.score
    }
  },
  methods: {
    tryAgain() {
      this.$router.push({name: 'start-page'})
    },
  },
};
</script>

<style scoped lang="scss">
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
  text-align: center;
  color: #6a1ce8;
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
.celebrate-logo {
  img {
    height: 86px;
  }
}
</style>