import AddJob from '@/views/AddJob.vue'
import EditJob from '@/views/EditJob.vue'
import Home from '@/views/Home.vue'
import Jobs from '@/views/Jobs.vue'
import JobView from '@/views/JobView.vue'
import NotFound from '@/views/NotFound.vue'
import {createRouter , createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        } ,
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        } ,
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        }, 
        {
            path: '/jobs/add' ,
            name: 'addJob',
            component: AddJob
        },
        {
            path: '/jobs/edit/:id',
            name: 'editJob',
            component: EditJob
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        } 
    ]
})

export default router