import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css';
import '../css/flags.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'



import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import PrimeVue from 'primevue/config';
import Lara from '../../public/presets';
import store from './Store/store';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Breadcrumb from "primevue/breadcrumb";
import BlockUI from "primevue/blockui";
import Badge from "primevue/badge";
import AvatarGroup from "primevue/avatargroup";
import Avatar from "primevue/avatar";
import AutoComplete from "primevue/autocomplete";
import AccordionTab from "primevue/accordiontab";
import Accordion from "primevue/accordion";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import CascadeSelect from "primevue/cascadeselect";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import ColorPicker from "primevue/colorpicker";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import ConfirmDialog from "primevue/confirmdialog";
import Carousel from 'primevue/carousel';
import router from "@/Router/router";
import Tooltip from 'primevue/tooltip';
import InputMask from 'primevue/inputmask';
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';
import VueMobileDetection from "vue-mobile-detection";
import Sidebar from 'primevue/sidebar';
import FocusTrap from "primevue/focustrap";
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
import AnimateOnScroll from "primevue/animateonscroll";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Fieldset from "primevue/fieldset";
import Divider from "primevue/divider";


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue, {
                pt: Lara,
                ripple: true
            })
            .use(ConfirmationService)
        .component('Dialog',Dialog)
        .component('Accordion', Accordion)
        .component('AccordionTab', AccordionTab)
        .component('AutoComplete', AutoComplete)
        .component('Avatar', Avatar)
        .component('AvatarGroup', AvatarGroup)
        .component('Badge', Badge)
        .component('BlockUI', BlockUI)
        .component('Breadcrumb', Breadcrumb)
        .component('Button', Button)
        .component('Calendar', Calendar)
        .component('Card', Card)
        .component('Carousel', Carousel)
        .component('CascadeSelect', CascadeSelect)
        .component('Checkbox', Checkbox)
        .component('Chip', Chip)
        .component('Chips', Chips)
        .component('ColorPicker', ColorPicker)
        .component('Column', Column)
        .component('ColumnGroup', ColumnGroup)
        .component('ConfirmDialog', ConfirmDialog)
        .component('Divider', Divider)
        .component('ProgressSpinner', ProgressSpinner)
        .component('InputMask', InputMask)
        .component('Message', Message)
        .component('Sidebar', Sidebar)
        .component('Toast', Toast)
         .component('Fieldset', Fieldset)
        .use(VueMobileDetection)
        .use(store)
        .use(router)
         .use(ToastService)
        .directive('tooltip', Tooltip)
         .directive('badge', BadgeDirective)
        .directive('ripple', Ripple)
        .directive('styleclass', StyleClass)
        .directive('focustrap', FocusTrap)
        .directive('animateonscroll', AnimateOnScroll)
        .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
