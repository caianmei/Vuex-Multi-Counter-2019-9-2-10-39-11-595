import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counters: []
    },
    getters: {
        getNum: function (state) {
            return function (index) {
                return state.counters[index - 1]
            }
        },
        getSum: function (state) {
            let sum = 0;
            state.counters.forEach(element => {
                sum += element
            });
            return sum;
        }
    },
    mutations: {
        update(state, param) {
            let oldCounters = state.counters;
            oldCounters[param.index - 1] += param.value;
            state.counters = [];
            for (let i = 0; i < oldCounters.length; i++) {
                state.counters.push(oldCounters[i]);
            }
        },
        updateInput(state, inputNumber) {
            while (inputNumber > state.counters.length) {
                state.counters.push(state.counters.length + 1);
            }
            while (inputNumber < state.counters.length) {
                state.counters.pop();
            }
        }
    }

})

export default store