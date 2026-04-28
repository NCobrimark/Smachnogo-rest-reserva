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
