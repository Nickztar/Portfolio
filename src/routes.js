import Mainer from './Mainer.svelte';
import Heading from './Heading.svelte';

const routes = [{
        name: '/',
        component: Mainer
    },
    {
        name: 'about',
        component: Heading
    }
    /*
    {
        name: 'contact',
        component: Contact
    },
    {
        name: 'code',
        component: Code
    } */
];

export { routes }