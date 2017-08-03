import Vue from 'vue';
import VueRouter from 'vue-router';
import DataDiri from './components/data-diri.vue';
import Pendidikan from './components/pendidikan.vue';
import Organisasi from './components/organisasi.vue';
import Skill from './components/skill.vue';
import Kursus from './components/kursus-pelatihan.vue';
import Kontak from './components/kontak.vue';
import Project from './components/project.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    //mode: 'history',
    routes: [
        {path: '/data-diri', component: DataDiri, name: 'data-diri'},
        {path: '/pendidikan', component: Pendidikan, name: 'pendidikan'},
        {path: '/organisasi', component: Organisasi, name: 'organisasi'},
        {path: '/skill', component: Skill, name: 'skill'},
        {path: '/kursus-pelatihan', component: Kursus, name: 'kursus-pelatihan'},
        {path: '/kontak', component: Kontak, name: 'kontak'},
        {path: '/project', component: Project, name: 'project'},
    ]
});

export default router;