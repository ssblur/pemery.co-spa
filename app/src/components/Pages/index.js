/**
 * Pages module
 * @author Patrick Emery
 */
import HomePage from './HomePage.vue';
import Resume from './Resume.vue';
import Contract from './contract';

export default {
    routes: [
        { 
            path: '/',
            component: HomePage,
        },
        {
            path: '/resume',
            component: Resume,
        },
        Contract
    ],
    components: {
        HomePage,
    }
}