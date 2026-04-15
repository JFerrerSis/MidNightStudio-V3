import { atom, computed } from 'nanostores';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const STORAGE_KEY = 'midnight_cart_data';
const EXPIRATION_TIME = 20 * 60 * 1000; 

export const isCartOpen = atom(false);

function getInitialCart() {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const { items, timestamp } = JSON.parse(saved);
    if (Date.now() - timestamp > EXPIRATION_TIME) {
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }
    return items;
  } catch (e) {
    return [];
  }
}

export const cartItems = atom<CartItem[]>(getInitialCart());

cartItems.subscribe((items) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      items,
      timestamp: Date.now()
    }));
  }
});

// --- Acciones Corregidas ---
export function addToCart(product: CartItem) {
  const currentItems = cartItems.get();
  // Buscamos si ya existe
  const existingItemIndex = currentItems.findIndex(item => item.id === product.id);

  if (existingItemIndex > -1) {
    const newItems = [...currentItems];
    newItems[existingItemIndex] = {
      ...newItems[existingItemIndex],
      quantity: newItems[existingItemIndex].quantity + 1
    };
    cartItems.set(newItems);
  } else {
    // Si no existe, lo agregamos con cantidad 1 estrictamente
    cartItems.set([...currentItems, { ...product, quantity: 1 }]);
  }
  
  // No abrimos el modal (como pediste)
}

export function removeFromCart(id: string) {
  cartItems.set(cartItems.get().filter(item => item.id !== id));
}

export function clearCart() {
  cartItems.set([]);
}

export const cartTotal = computed(cartItems, (items) => 
  items.reduce((total, item) => total + (item.price * item.quantity), 0)
);

export const cartCount = computed(cartItems, (items) => 
  items.reduce((count, item) => count + item.quantity, 0)
);