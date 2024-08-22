import Home from './Home.vue';
import About from './About.vue';
import Post from './Post.vue'
import Portfolio from './Portfolio.vue'
import Profile from './Profile.vue'
import Contact from './Contact.vue'

export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/post',
        component:Post,
        //NESTED ROUTE
        children:[
            { 
                path:'',
                component:Contact
            },
            { 
                path:'profile', // do not write '/' id in this
                component:Profile
            },
            {
                path:'portfolio',
                component:Portfolio
            }
        ]
    },
]