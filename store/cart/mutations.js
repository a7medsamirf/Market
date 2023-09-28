function CalculateTotal(state) {
  state.Total = 0;
  for (let i = 0; i <= state.cart.length; i++) {

    let item = state.cart[i];
    if(item !== undefined && item != null){
      state.Total += (item.product.price * item.quantity);
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
    let itemfound = state.cart.find((p) => p.product.id === product.id);
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
    localStorage.setItem("myCart", JSON.stringify(state.cart)); /////////////////
    CalculateTotal(state); ////////////
    if (!item) return;
    if (item.quantity == 1) {
      state.cart.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
    this.$toast.success("Cart Updated.", {
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

  RemoveCartItem(state, index) {
    state.cart.splice(index, 1);
    localStorage.setItem("myCart", JSON.stringify(state.cart)); /////////////////
    const ItemRemoved = this.$i18n.t('product.ItemRemoved');
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
