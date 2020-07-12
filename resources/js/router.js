import Vue from 'vue';
import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import ContactsCreate from "./views/ContactsCreate";
import ContactsShow from "./views/ContactsShow";
import ContactsEdit from "./views/ContactsEdit";
import ContactIndex from "./views/ContactIndex";
import BirthdaysIndex from "./views/BirthdaysIndex";
import Logout from "./Actions/Logout";

Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '', component: ExampleComponent,
            meta: {title: 'Welcome'}

        },
        {
            path: '/contacts', component: ContactIndex,
            meta: {title: 'Contacts'}

        },
        {
            path: '/contacts/create', component: ContactsCreate,
            meta: {title: 'Add New Contact'}

        },
        {
            path: '/contacts/:id', component: ContactsShow,
            meta: {title: 'Details for Contact'}

        },
        {
            path: '/contacts/:id/edit', component: ContactsEdit,
            meta: {title: 'Edit Contact'}

        },
        {
            path: '/birthdays', component: BirthdaysIndex,
            meta: {title: 'Birthdays'}

        },
        {
            path: '/logout', component: Logout

        },
    ],
});
