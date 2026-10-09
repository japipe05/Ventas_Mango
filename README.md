# Control de Ventas - Mango con Crema

Aplicación web desarrollada en HTML5, CSS3 (Tailwind CSS) y JavaScript para el control y registro de ventas de **Mango con Crema**.

## Estructura de Archivos
- `index.html`: La aplicación web completa (Interfaz de ventas, historial/gestión, dashboard y lógica).
- `google-apps-script.js`: Script para conectar las ventas directamente a tu Google Sheet.

## Instrucciones de Uso y Google Sheet
1. Sube `index.html` a tu repositorio de GitHub Pages.
2. Crea un Google Sheet, ve a **Extensiones > Apps Script**, pega el código de `google-apps-script.js`, y despliégalo como Aplicación Web (acceso: "Cualquiera").
3. Copia la URL generada y reemplázala en la variable `WEBHOOK_URL` dentro del archivo `index.html`.
