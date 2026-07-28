import { reactive } from 'vue';

const WHATSAPP_NUMBER = '237674330299';

export const whatsappState = reactive({
  visible: false,
  message: '',
});

export function openWhatsAppPreview(message) {
  whatsappState.message = message;
  whatsappState.visible = true;
}

export function closeWhatsAppPreview() {
  whatsappState.visible = false;
}

export function sendWhatsApp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappState.message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  closeWhatsAppPreview();
}
