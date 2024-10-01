import {createRouter , createWebHistory} from 'vue-router'
import Home from '../veiws/HOme.vue'
// import About from '../veiws/abOut.vue'



// rout for scam page  
//    import  scam from '../veiws/SCAM/inDex.vue'
const router = createRouter({
    history : createWebHistory() , 
    routes : [
        {path:'/' , name : 'Home' , component : Home } ,
       ]
})

export default router