# 🛍️ Mi tienda Istea – Proyecto E-commerce

Este es un proyecto de e-commerce simple y responsivo desarrollado con **HTML5**, **CSS3**, **Bootstrap 5** y **JavaScript (modular)**. Permite listar productos dinámicamente desde una API, aplicar búsqueda en tiempo real, y gestionar un carrito de compras con persistencia en `localStorage`.

---

## 📁 Estructura del proyecto
.
├── index.html # Página principal
├── README.md # Documentación del proyecto
├── .gitignore
├── css/
│ └── styles.css # Estilos personalizados
└── src/
├── index.js # Punto de entrada JS (modular)
├── api/
│ └── api.js # Fetch de productos
└── components/ # Componentes funcionales
├── cards.js
├── cart.js
├── cartSidebar.js
├── modal.js
└── search.js

---

## 🚀 Funcionalidades

- ✅ Render dinámico de productos desde API
- 🔍 Buscador en vivo (título y descripción)
- 🛒 Carrito de compras persistente (localStorage)
- 📦 Modal con detalles del producto
- 🧮 Control de cantidad (+ / −)
- 🧹 Botón para vaciar carrito
- ✅ Confirmación con toast personalizado

---

## 🛠️ Tecnologías usadas

- HTML5 / CSS3
- Bootstrap 5.3.7 + Icons
- JavaScript ES Modules
- Web Storage API (`localStorage`)

---

## 📦 Instalación local

1. Clonar el repositorio:

```bash
git clone https://github.com/matiasediez/ecommerce.git
cd ecommerce
