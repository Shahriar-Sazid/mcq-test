<template>
  <div class="question-answer">
    <h4>{{ idx + 1 }}. {{ qa.title }}</h4>
    <form class="answer" :class="{ 'answer-taken': answered }">
      <label
        v-for="(opt, idx2) in qa.options"
        :key="idx2"
        class="options"
        :for="idx.toString() + idx2.toString()"
      >
        <div class="input-box">
          <input
            :disabled="answered"
            @input="onInputTaken(opt)"
            :value="modelValue"
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
</template>

<script>
export default {
  name: "Qa",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      required: true,
    },
    qa: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      answered: false,
    };
  },
  methods: {
    onInputTaken(option) {
      this.answered = true;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>


<style lang="scss" scoped>
$bg-color: #fceafe;
$primary-color: #6a1ce8;
$length: 16px;

.question-answer {
  background: $bg-color;
  border-radius: 10px;
  padding: 8px 30px;
}
.answer-taken {
  color: lighten($primary-color, 25%);
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