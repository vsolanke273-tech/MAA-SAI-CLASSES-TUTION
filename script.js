// Simple JS for contact form to open WhatsApp with prefilled message
function sendMessage(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !phone || !message){
    alert('Please fill all fields.');
    return;
  }
  const text = `Hello Maa Sai Classes!%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
  const wa = 'https://wa.me/919624616862?text=' + text;
  window.open(wa, '_blank');
}
