# Star Ruchulu - Premium Andhra Foods | E-commerce Frontend

This is a premium, high-end e-commerce frontend built for **Star Ruchulu**, a Pan-India homemade Andhra food delivery brand. Designed with a modular architecture and clean UI for seamless API integration in the future (Phase-2).

## 🚀 Features

- **Modern Tech Stack:** React (Vite) + Tailwind CSS + React Router
- **Premium UI:** Custom color palette (Deep Red, Turmeric Gold, Curry Leaf Green), responsive layout, and beautiful typography.
- **E-commerce Ready:** Complete product catalog, categorised filtering system, sorting, and related products.
- **Cart Management:** Functional `localStorage` based cart, sliding cart drawer, and cart calculations (subtotal, shipping, conditional free shipping).
- **Checkout Flow:** Fully mocked out checkout form with validation and order confirmation.
- **Mobile First:** Optimized for all devices including touch-friendly buttons, hamburger menus, and a sticky mobile cart.
- **Integrated Features:** Floating WhatsApp order button, Instagram gallery UI, and SEO-friendly routing structure.

## 🛠️ Project Structure

```
/src
  /components     # Reusable UI components (Navbar, ProductCard, CartDrawer, etc.)
  /pages          # Page components (Home, Shop, ProductDetails, Checkout, etc.)
  /data           # Mock JSON data (products.json)
  /utils          # Helper functions (cartUtils.js)
  App.jsx         # Main router and layout
  main.jsx        # App entry point
  index.css       # Tailwind configuration and global CSS variables
```

## 💻 Running Locally

Follow these instructions to get the project up and running on your local machine:

### Prerequisites

Ensure you have **Node.js** (v16.0 or higher) and **npm** installed on your system.
You can download Node.js from [nodejs.org](https://nodejs.org/).

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JPawanK1116/starruchulu-pawancup.git
   cd starruchulu-pawancup
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the website:**
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 🎨 Adding Assets

Placeholders are currently used for images. To use your own images, place them inside the `public/images/` directory with the following filenames:

- **Hero:** `andhra-food-hero.jpg`
- **Categories:** `veg-pickles.jpg`, `nonveg-pickles.jpg`, `sweets.jpg`, `snacks.jpg`, `fryums.jpg`, `curries.jpg`
- **Regional:** `palnadu-special.jpg`, `godavari-special.jpg`, `rayalaseema-special.jpg`, `coastal-andhra.jpg`
- **Combos:** `combo1.jpg`, `combo2.jpg`, `combo3.jpg`
- **Products:** `gongura-pickle.jpg`, `avakaya.jpg`, `chicken-pickle.jpg`, `mutton-pickle.jpg`, `bobbatlu.jpg`, `boondi-laddu.jpg`, `murukulu.jpg`
- **Gallery:** `gallery1.jpg`, `gallery2.jpg`, `gallery3.jpg`, `gallery4.jpg`

## 👨‍💻 Designed & Developed By
[Crawlup](https://crawlup.com) 
