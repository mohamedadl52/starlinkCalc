import ProductService from '../../services/product.service';


export const product = {
  namespaced: true,
  actions: {
    add({ commit }, product) {
       console.log(product)
      return ProductService.add(product).then(
        user => {
          commit('AddSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('AddFailure');
          return Promise.reject(error);
        }
      );
    },
    get({ commit }) {

      return ProductService.get().then(
        data => {
          commit('getSuccess', data);
          return Promise.resolve(data);
        },
        error => {
          commit('getFailure');
          return Promise.reject(error);
        }
      );
    },
    getProduct({ commit } , id) {

      return ProductService.getoneProduct(id).then(
        data => {
          commit('getSuccess', data);
          return Promise.resolve(data);
        },
        error => {
          commit('getFailure');
          return Promise.reject(error);
        }
      );
    },
    updateProduct({ commit } , data) {

      return ProductService.updateoneProduct(data).then(
        data => {
          commit('getSuccess', data);
          return Promise.resolve(data);
        },
        error => {
          commit('getFailure');
          return Promise.reject(error);
        }
      );
    },
    delete( {commit} ,id ) {
      commit('delete')
      console.log(id)
      return ProductService.delete(id).then(
        data => {
          console.log('good delete')
          return Promise.resolve(data);
        },
        error => {
          console.log('bad delete' , error)
          return Promise.reject(error);
        }
      );
    },
    update( {commit} ,{id , name} ) {
      commit('updated')
      console.log({id , name})
      return ProductService.update({id , name}).then(
        data => {
          console.log('good updated')
          return Promise.resolve(data);
        },
        error => {
          console.log('bad updated' , error)
          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    AddSuccess() {
      console.log('good')
    },
    AddFailure(error) {
      console.log(error)
    },
    getSuccess() {
      console.log('get sucess')
    },
    getFailure() {
      console.log('get failuer')
    },
    delete() {
      console.log('delete')
    },
    updated() {
      console.log('updated')
    },
  
  }
};