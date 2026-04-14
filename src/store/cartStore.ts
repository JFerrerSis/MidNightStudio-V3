import { atom, computed } from 'nanostores';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const STORAGE_KEY = 'midnight_cart_data';
const EXPIRATION_TIME = 20 * 60 * 1000; // 20 minutos en milisegundos

// Función para cargar datos iniciales
function getInitialCart() {
  if (typeof window === 'undefined') return [];
  
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];

  const { items, timestamp } = JSON.parse(saved);
  const now = Date.now();

  // Si pasaron más de 20 min, borrar y devolver vacío
  if (now - timestamp > EXPIRATION_TIME) {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
  
  return items;
}

export const cartItems = atom<CartItem[]>(getInitialCart());

// Suscripción automática: Cada vez que el carrito cambie, guardamos en LocalStorage
cartItems.subscribe((items) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      items,
      timestamp: Date.now() // Actualizamos el tiempo con cada acción
    }));
  }
});

export function addToCart(product: CartItem) {
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

export function removeFromCart(id: string) {
  cartItems.set(cartItems.get().filter(item => item.id !== id));
}

export const cartTotal = computed(cartItems, (items) => 
  items.reduce((total, item) => total + (item.price * item.quantity), 0)
);