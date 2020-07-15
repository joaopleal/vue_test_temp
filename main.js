Vue.config.devtools = true

Vue.component('product-review', {
  template: `
    
  `,
  
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart: function(id){
      this.cart.push(id)
    }
  }
})