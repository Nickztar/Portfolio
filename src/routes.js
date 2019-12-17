import PublicLayout from './public_layout.svelte';
import Mainer from './Mainer.svelte';

const routes = [{
        name: '/',
        layout: PublicLayout,
        component: Mainer
    }/* ,
    {
        name: 'about',
        component: Heading
    } */
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