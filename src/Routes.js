import StartPage from './components/McqTest/StartPage.vue';
import TestPage from './components/McqTest/TestPage.vue';
import FinalPage from './components/McqTest/FinalPage.vue';

export const routes = [
    {
        name: 'start-page',
        path: '',
        component: StartPage
    },
    {
        name: 'test-page',
        path: '/mcq-test',
        component: TestPage
    },
    {
        name: 'final-page',
        path: '/final-page',
        component: FinalPage
    }
]
