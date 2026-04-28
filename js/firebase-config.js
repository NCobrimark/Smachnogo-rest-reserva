// =============================================
// SMACHNO-GO — Firebase Config
// Замінити на свої дані з Firebase Console
// =============================================
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  databaseURL: "https://TU_PROJECT-default-rtdb.firebaseio.com",
  projectId: "TU_PROJECT",
  storageBucket: "TU_PROJECT.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

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
//     menu/
//       primera_ronda: [{nombre, instagram_url, descripcion}]
//       segunda_ronda: [{nombre, instagram_url, descripcion}]
//       postres:       [{nombre, instagram_url, descripcion}]
//     abierto: true
//
// solicitudes/
//   {solicitudId}/
//     eventId: "..."
//     nombre: "Ivan"
//     apellido: "Franco"
//     email: "ivan@example.com"
//     telefono: "+54 9 351..."
//     lugares: 2
//     estado: "solicitud" | "confirmada" | "cancelada"
//     fecha_solicitud: timestamp
//     numero_reserva: "SG-170525-001"
// =============================================
