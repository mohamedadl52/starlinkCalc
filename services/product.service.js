import axios from 'axios';

// const API_URL = 'http://localhost:8081/api/product';
const API_URL = 'https://shop-le2d.onrender.com/api/product';

class CatogressService {
  add(product) {
    console.log(product)
    return axios
      .post(API_URL + '/', product)
      .then(response => {
        return response.data;
      });
  }
  get() {
    return axios
      .get(API_URL)
      .then(response => {
        return response.data;
      });
    }
    getoneProduct (id){
      console.log(id)
      return axios
        .get(API_URL + '/' + id)
        .then(response => {
          return response.data;
        });
      
  }
    updateoneProduct (data){
      console.log(data)
      return axios
        .put(API_URL + '/updateProduct/' + data.id , data.formData )
        .then(response => {
          return response.data;
        });
      
  }
  delete(id) {
   console.log(id)
    return axios
      .delete(API_URL + "/" + id.product , {catogress : id.catogress})
      .then(response => {
        return response.data;
      });
  }
  update(info){

  return axios.put(API_URL + '/' + info.id , {type : info.name }).then(response=>{
  return response.data
})

}

}

export default new CatogressService();