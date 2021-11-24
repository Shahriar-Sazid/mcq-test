import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './Routes';
import { createStore } from 'vuex';
import qaList from './assets/qa.json';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
)


const store = createStore({
    state() {
        return {
            qaList: qaList
        }
    },
    getters: {
        totalQuestion(state) {
            return state.qaList.length;
        },
        getList(state) {
            return state.qaList;
        }
    }
});

const app = createApp(App);

app.use(router).use(store);

app.mount('#app');
