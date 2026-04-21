# Smachno-Go — Instrucciones de configuración

## Archivos del proyecto

```
index.html          → Página principal (calendario + lista de veladas)
evento.html         → Detalle de la velada + formulario de solicitud
confirmacion.html   → Confirmación después de enviar solicitud
plato.html          → Página de plato (sin Instagram)
admin.html          → Panel de administración
css/style.css       → Estilos globales
js/firebase-config.js → Configuración Firebase
firebase-rules.json → Reglas de seguridad Firebase
```

## Paso 1 — Crear proyecto Firebase

1. Ir a https://console.firebase.google.com
2. Crear nuevo proyecto → nombre: `smachnogo`
3. Ir a **Realtime Database** → Crear base de datos → Modo test
4. Ir a **Configuración del proyecto** → Tus apps → Web → Registrar app
5. Copiar el objeto `firebaseConfig` que aparece

## Paso 2 — Conectar Firebase

Abrir `js/firebase-config.js` y reemplazar los valores:

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",          // ← pegar acá
  authDomain: "TU_PROJECT...",   // ← pegar acá
  databaseURL: "https://TU_PROJECT-default-rtdb...",
  projectId: "TU_PROJECT",
  storageBucket: "TU_PROJECT...",
  messagingSenderId: "...",
  appId: "..."
};
```

## Paso 3 — Reglas de seguridad

En Firebase Console → Realtime Database → Reglas → pegar el contenido de `firebase-rules.json`

## Paso 4 — Cambiar contraseña admin

En `admin.html`, línea con `ADMIN_PASSWORD`, cambiar el valor:

```js
const ADMIN_PASSWORD = 'smachnogo2025'; // ← cambiá esto
```

## Paso 5 — Deploy en GitHub Pages

1. Crear repositorio en GitHub (ej: `smachnogo-reservas`)
2. Subir todos los archivos
3. Settings → Pages → Branch: main → Folder: / (root)
4. Tu app estará en: `https://TU_USUARIO.github.io/smachnogo-reservas/`

## Cómo usar el admin

- Entrar a `/admin.html`
- Contraseña: la que configuraste en el paso 4
- **Solicitudes**: ver todas las solicitudes, confirmar cuando recibís el pago, enviar WA directamente
- **Veladas**: crear/editar veladas, menú por rondas, datos de transferencia
- **Recordatorios**: seguimiento de la cadena de notificaciones

## Flujo de reserva

```
Cliente: completa formulario → solicitud guardada en Firebase
         → ve página de confirmación con datos de transferencia

Vos: ves la solicitud en admin.html → el cliente paga → 
     apretás "Confirmar" → el lugar queda reservado → 
     la barra de ocupación se actualiza en tiempo real
```

## Próximo paso sugerido

Integrar envío de emails automáticos via **EmailJS** (gratuito hasta 200 emails/mes):
- Email al cliente con datos de transferencia
- Email a vos con datos del cliente (nombre + teléfono + solicitud)
