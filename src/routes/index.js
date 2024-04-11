import Vue from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

// Vue.config.Vue.config.productionTip = false

// Vue.use(VueRouter);

// Router 인스턴스 생성
// const router = new VueRouter({
//     routes: [ //페이지의 라우팅 정보

//     ]
// })

//Vue Router 4버전 부터는 인스턴스를 호출하지 않고 createRouter()메서드를 사용해 라우터 생성
const router = createRouter({
    history : createWebHistory(""),
    routes: [
        {
            path: '/',
            // 기본주소로 접속했을 때 /news로 리다이렉트
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
    ]
});

export default router;