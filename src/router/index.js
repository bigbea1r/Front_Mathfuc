import Home from '@/views/Home.vue'
import TermsOfUse from '@/views/TermsOfUse.vue'
import Student from '@/views/Student.vue'
import Pokemon from '@/views/Nublay.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/terms-of-use', name: 'TermsOfUse', component: TermsOfUse },
    { path: '/student', name: 'Студентам', component: Student },
    { path: '/pokemon', name: 'Pokemon', component: Pokemon },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router