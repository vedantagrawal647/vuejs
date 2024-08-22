import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state:{
        products:[
            {name:'Banana skin',price:20},
            {name:'papaya skin',price:30},
            {name:'mango skin',price:20},
            {name:'carrot skin',price:20}
          ] 
    },
    getters:{
        saleProducts:state => {
            var saleProducts = state.products.map(product => {
                return {
                  name:'**' + product.name + '**',
                  price:product.price/2
                }
              });
              return saleProducts;
        }
    },
    mutations:{
        reducePrice: (state,payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            })
        }
    },
    actions:{
        reducePrice:(context,payload) => {
            setTimeout(function(){
                context.commit('reducePrice',payload)
            },2000)
        }
    }
})