import { atom, computed } from 'nanostores';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export const cartItems = atom<CartItem[]>([]);
export const isCartOpen = atom(false);

// Agregar o incrementar cantidad
export function addToCart(product: any) {
  const currentItems = cartItems.get();
  const existingItem = currentItems.find(item => item.id === product.id);

  if (existingItem) {
    cartItems.set(currentItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    cartItems.set([...currentItems, { ...product, quantity: 1 }]);
  }
}

// Eliminar producto
export function removeFromCart(id: number) {
  cartItems.set(cartItems.get().filter(item => item.id !== id));
}

// Cálculo del Total
export const cartTotal = computed(cartItems, (items) => 
  items.reduce((total, item) => total + (item.price * item.quantity), 0)
);