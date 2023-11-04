
function CalculateTotal(state) {
  state.Total = 0;

  // Iterate through the cart items
  for (let i = 0; i <= state.cart.length; i++) {
    let item = state.cart[i];

    // Check if the item is defined and not null
    if(item !== undefined && item != null){
      state.Total += (item.product.salePrice * item.quantity);
    }
  }
}

///////////////

export default {
  LoadCart(state) {
    let cart = localStorage.getItem("myCart");
    if (cart) {
      state.cart = JSON.parse(cart);
      state.Total = 0; //////////
      CalculateTotal(state); ////////////////
    }
  },

  AddToCart(state, product) {
    //Check if item is in cart
    let itemfound = state.cart.find((products) => products.product.id === product.id);
    if (!itemfound) {
      state.cart.push({ product, quantity: 1 });
    }
    if (itemfound) {
      itemfound.quantity += 1;
    }

 //Update local storage
    localStorage.setItem("myCart", JSON.stringify(state.cart));
    CalculateTotal(state); ////////////
    const AddToCart = this.$i18n.t('product.AddToCart');
    this.$toast.success(AddToCart, {
      position: "bottom-center",
      timeout: 2635,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false
    });
  },
  DecreaseItemCount(state, index) {
    let item = state.cart[index];
    if (!item) return;
    if (item.quantity == 1) {
      state.cart.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
    this.$swal({
      toast: true,
      text: "Cart Updated.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },

// إنقاص عدد العناصر
  DecreaseItemCount(state, index) {
    const CartUpdated = this.$i18n.t('product.CartUpdated');
    let item = state.cart[index];
    if (!item) return;
    if (item.quantity == 1) {
      state.cart.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
    localStorage.setItem("myCart", JSON.stringify(state.cart)); /////////////////
    CalculateTotal(state); ////////////
    this.$toast.success(CartUpdated, {
      position: "bottom-center",
      timeout: 2635,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false
    });
  },

// إزالة عنصر السلة 
  RemoveCartItem(state, index) {
    const ItemRemoved = this.$i18n.t('product.ItemRemoved');
    state.cart.splice(index, 1);
    localStorage.setItem("myCart", JSON.stringify(state.cart)); /////////////////
    CalculateTotal(state);///////////////////
    this.$toast.error(ItemRemoved, {
      position: "bottom-center",
      timeout: 2635,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false
    });

  },

  // زيادة عدد العناصر
  IncreaseItemCount(state, index) {
    const CartUpdated = this.$i18n.t('product.CartUpdated');
    let item = state.cart[index];
    item.quantity += 1;
    localStorage.setItem("myCart", JSON.stringify(state.cart)); /////////////////
    CalculateTotal(state); ////////////
    this.$toast.success(CartUpdated, {
      position: "bottom-center",
      timeout: 2635,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false
    });
  },
  ClearCart(state) {
    state.cart = [];
    //Update local storage
    localStorage.removeItem("myCart");
  },
};
