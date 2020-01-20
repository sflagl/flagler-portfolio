import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Resume from './views/Resume.vue';
import Contact from './views/Contact.vue';
import Portfolio from './views/Portfolio.vue';
import ProjectOne from './views/ProjectOne.vue';
import ProjectTwo from './views/ProjectTwo.vue';
import ProjectThree from './views/ProjectThree.vue';



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{

            path: '',
            name: 'home',
            // component: () =>
            //     import ('./views/Products.vue') or
            component: Home,
        }, {
            path: '/home',
            name: 'home',
            // component: () =>
            //     import ('./views/Products.vue') or
            component: Home,
        }, {
            path: '/resume',
            name: 'resume',
            // component: () =>
            //     import ('./views/Products.vue') or
            component: Resume,
        }, {
            path: '/contact',
            name: 'contact',
            // component: () =>
            //     import ('./views/Products.vue') or
            component: Contact,
        }, {
            path: '/portfolio',
            name: 'portfolio',
            // component: () =>
            //     import ('./views/Products.vue') or
            component: Portfolio,
        }, {
            path: '/portfolio',
            name: 'portfolio',
            // component: () =>
            //     import ('./views/Products.vue') or
            component: Portfolio,
            children: [{
                    path: 'projectone',
                    name: 'projectone',
                    // component: () =>
                    //     import ('./views/Products.vue') or
                    component: ProjectOne,
                }, {
                    path: 'projecttwo',
                    name: 'projecttwo',
                    // component: () =>
                    //     import ('./views/Products.vue') or
                    component: ProjectTwo,
                }, {
                    path: 'projectthree',
                    name: 'projectthree',
                    // component: () =>
                    //     import ('./views/Products.vue') or
                    component: ProjectThree,
                },

            ]
        },

    ]

});