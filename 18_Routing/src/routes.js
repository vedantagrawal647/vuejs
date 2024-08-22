import Home from './Home.vue';
import About from './About.vue';
import Contact from './Contact.vue'
import Post from './Post.vue'
import NotFound from "./NotFound.vue"

export default [
    {
        path:'/',
        component:Home,
        name:'home'
    },
    {
        path:'/about',
        component:About,
        name:'about'
    },
    {
        path:'/contact',
        component:Contact,
        name:'contact'
    },
    {
        path:'/posts/:slug',
        component:Post,
        name:'post',
        props:true
    },
    {
        path:'*',
        component:NotFound
    }
]