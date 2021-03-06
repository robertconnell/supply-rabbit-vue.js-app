import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/pages/LandingPage';
import Teachers from '@/pages/Teachers';
import TeacherRequest from '@/pages/TeacherRequest';
import Donations from '@/pages/Donations';
import DonationCheckout from '@/pages/DonationCheckout';
import ThankYou from '@/pages/ThankYou';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage,
        },
        {
            path: '/teachers',
            name: 'Teachers',
            component: Teachers
        },
        {
            path: '/request=:id',
            name: 'TeacherRequest',
            component: TeacherRequest,
        },
        {
            path: '/donations',
            name: 'Donations',
            component: Donations,
        },
        {
            path: '/checkout=:id',
            name: 'DonationCheckout',
            component: DonationCheckout,
        },
        {
            path: '/thankyou=:id',
            name: 'ThankYou',
            component: ThankYou,
        },
    ],
});
