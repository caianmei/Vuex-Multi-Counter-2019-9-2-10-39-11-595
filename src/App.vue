<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" /><br/>
    <input v-model="countNum" v-on:input="changeInput" />
    <Counter v-for="n in getNum()" v-bind:key="n" v-bind:index="n" />
    <p>sum: {{$store.getters.getSum}}</p>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "app",
  components: {
    Counter
  },
  data() {
    return {
      countNum: 0
    };
  },
  methods: {
    changeInput() {
      let inputNum = this.getNum();
      this.$store.commit("updateInput", inputNum);
    },
    getNum: function() {
      if (this.isNum(this.countNum)) {
        return parseInt(this.countNum);
      } else {
        return 0;
      }
    },
    isNum: function(n) {
      return !isNaN(parseInt(n)) && isFinite(n);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
