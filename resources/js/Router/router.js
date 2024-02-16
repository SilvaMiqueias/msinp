import {createRouter, createWebHistory} from "vue-router";
import Section from "@/Components/Site/Section.vue";
import Contact from "@/Components/Site/Contact.vue";
import About from "@/Components/Site/About.vue";

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    linkActiveClass: 'route-active',
    routes: [
        {path: '/', component: Section},
        {path: '/servico', component: About},
        {path: '/contato', component: Contact}
    ],
});

export default router;
