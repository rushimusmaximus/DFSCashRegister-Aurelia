import 'bootstrap';

export class CashRegisterMain {

  public cart = new Cart();
  public selectedCartItemId : string = "";
  public items = ITEMS;
  public salesTaxRate = SALES_TAX_RATE;
  public checkoutScreenShowing = false;

  editCartItemQuantity(id: string){
      this.selectedCartItemId = id;
  }

  closeEditCartItemQuantity(){
      this.selectedCartItemId = null;
  }

  showCheckoutScreen(){
    this.checkoutScreenShowing = true;
  }

  hideCheckoutScreen(){
    this.checkoutScreenShowing = false;
  }

  checkoutScreenClosed(){
    //console.log("checkoutScreenClosed");
    this.hideCheckoutScreen();
  }

  checkoutScreenSave(){
    //console.log("checkoutScreenSave");
    this.hideCheckoutScreen();
  }

  checkoutScreenCancel(){
    //console.log("checkoutScreenCancel");
    this.hideCheckoutScreen();
  }

}

var SALES_TAX_RATE : number  = .072;

class Item {
    id: string;
    price: number;
    constructor(id: string, price: number){
        this.id = id;
        this.price=price;
    }
}

var ITEMS : Item[] = [
    new Item("Cabbage", 1.29),
    new Item("Chuckit", 7.82),
    new Item("Ammo", .20),
    new Item("DVD", 14.77),
    new Item("Pants", 34.73),
    new Item("Drill", 28.96)
];

class CartItem {
    item: Item;
    quantity: number;
    constructor(item: Item, quantity: number){
        this.item = item;
        this.quantity = quantity;
    }
    get id() : string {
      return this.item.id;
    }

    get getCost() : number {
        return (this.item.price * this.quantity);
    }
}

class Cart {
    items : CartItem[] = [];

    get isEmpty() : boolean {
        return this.items.length == 0;
    }

    get isNotEmpty() : boolean {
        return this.items.length > 0;
    }

    empty(){
        this.items = []
    }

    incrementItem(item: Item) {
        var cartItem = this.getItemInCart(item);
        if (cartItem != null){
            cartItem.quantity++
        } else {
            this.addItem(item, 1);
        }
    }

    setItemQuantity(item: Item, quantity: number){
        var cartItem = this.getItemInCart(item);
        if (cartItem != null){
            cartItem.quantity = quantity;
        } else {
            this.addItem(item, quantity);
        }
    }

    removeItem(itemToRemove: CartItem){
        this.items = this.items.filter(cartItem => {
            return cartItem.item.id != itemToRemove.item.id
        })
    }

    get subtotal(): number {
        return this.items.reduce(function(a, b) { return a + b.getCost }, 0);
    }

    get tax() : number {
        return this.subtotal * SALES_TAX_RATE;
    }

    get total() : number {
        return this.subtotal + this.tax;
    }

    private addItem(item: Item, quantity: number){
        this.items.push(new CartItem(item, quantity));
    }

    private getItemInCart(item: Item) : CartItem {
        var index = this.items.findIndex(cartItem => {
            if (cartItem == null) return false;
            return item.id === cartItem.item.id
        });
        if (index >=0 ) return this.items[index]
    }
}
