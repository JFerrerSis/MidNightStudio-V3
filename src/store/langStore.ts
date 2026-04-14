import { atom } from 'nanostores';

export type Language = 'es' | 'en';

export const currentLang = atom<Language>('es');

export const translations: Record<Language, any> = {
  es: {
    cart: {
      title: "Finalizar Pedido",
      subtitle: "Completa tus datos de envío",
      name: "Nombre",
      id: "Cédula",
      phone: "WhatsApp",
      method: "Método",
      date: "Fecha",
      address: "Dirección",
      payment: "Pago",
      summary: "Resumen de Comanda",
      total: "Total estimado",
      send: "Confirmar por WhatsApp"
    }
  },
  en: {
    cart: {
      title: "Checkout",
      subtitle: "Complete your shipping details",
      name: "Full Name",
      id: "ID Number",
      phone: "WhatsApp Number",
      method: "Method",
      date: "Date",
      address: "Address",
      payment: "Payment",
      summary: "Order Summary",
      total: "Estimated Total",
      send: "Confirm via WhatsApp"
    }
  }
};