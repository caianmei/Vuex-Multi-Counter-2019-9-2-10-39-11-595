<template>
  <div class="counter">
    <button class="plus" @click="plus">+</button>
    <span class="value">{{getNumber()}}</span>
    <button class="minus" @click="minus">-</button>
  </div>
</template>

<script>
//import store from "../store/store";
export default {
  name: "counter",
  props: {
    index: Number
  },
  methods: {
    getNumber: function() {
      return this.$store.getters.getNum(this.index);
    },
    minus: function() {
      this.$store.commit("update", {index:this.index,value:-1});
    },
    plus: function() {
      this.$store.commit("update", {index:this.index,value:1});
    }
  }
};
</script>

<style scoped>
</style>
