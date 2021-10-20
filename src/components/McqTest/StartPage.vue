<template>
  <div class="start-page">
    <h2 class="top-heading">MCQ TEST</h2>
    <h4>Total 30 questions</h4>
    <button class="start-button" @click="onStart">START</button>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "StartPage",
  props: {
    page: Object,
  },
  methods: {
      onStart() {
        //   this.page.count++;
      }
  }
};
</script>

<style>
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
}
.start-button:active {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}
</style>