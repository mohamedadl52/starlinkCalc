import { createStore } from 'vuex'


// import { auth } from './auth.modules';
// import { catogress } from './catogress.modules';
// import { product } from './product.modules';


// Create a new store instance.
const store = createStore({
  state ()  {
    
     return {
      // count: 0
     }
  
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  } ,
  modules :{
    // auth , 
    // catogress ,
    // product    
    

  }
})
export { createStore }

export default store