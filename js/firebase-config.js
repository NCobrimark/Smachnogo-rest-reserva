// =============================================
// SMACHNO-GO — Firebase Config
// =============================================
const firebaseConfig = {
  apiKey: "AIzaSyC8vt7aX7IgVP2MycCNnwU3oHGFNBd6fzM",
  authDomain: "smachno-go-reserva-restaurante.firebaseapp.com",
  databaseURL: "https://smachno-go-reserva-restaurante-default-rtdb.firebaseio.com",
  projectId: "smachno-go-reserva-restaurante",
  storageBucket: "smachno-go-reserva-restaurante.firebasestorage.app",
  messagingSenderId: "422115978392",
  appId: "1:422115978392:web:3cfd8b4cb9fe0731d2b4ed"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

// =============================================
// Структура бази даних (довідка):
//
// events/
//   {eventId}/
//     nombre: "Borsch-fest"
//     fecha: "2025-05-17"
//     hora: "19:30"
//     lugares: 8
//     precio: 2800
//     banco: "Mercado Pago"
//     nombre_cuenta: "Hanna Pitsyk"
//     cvu: "0000003100022248174271"
//     alias: "hanna.pitsyk.mp"
//     abierto: true
//     solicitudes_confirmadas: 0
//     solicitudes_counter: 0
//     menu/
//       primera_ronda: [{nombre, instagram_url, descripcion_corta, descripcion, ingredientes}]
//       segunda_ronda: [{nombre, instagram_url, descripcion_corta, descripcion, ingredientes}]
//       postres:       [{nombre, instagram_url, descripcion_corta, descripcion, ingredientes}]
//
// solicitudes/
//   {solicitudId}/
//     eventId, event_nombre, event_fecha, event_hora
//     nombre, apellido, email, telefono
//     lugares, estado, numero_reserva, fecha_solicitud
// =============================================
