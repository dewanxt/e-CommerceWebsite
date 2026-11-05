# Exclusive: E-Commerce Storefront

Exclusive is a responsive online shopping front end built with React 19, Vite, and Tailwind CSS. It loads real product data from a public API, lets visitors browse and filter the catalogue, and walks them from a product page through the cart to a checkout form. I built it to practise structuring a multi-page React application with shared state, client-side routing, and reusable components.

**Live demo:** https://e-commerce-website-five-alpha-49.vercel.app/

<!-- Add a screenshot of the home page here: ![Home page](./screenshots/home.png) -->
<!-- Add a screenshot of the shop page here: ![Shop page](./screenshots/shop.png) -->
<!-- Add a screenshot of the mobile layout here: ![Mobile view](./screenshots/mobile.png) -->

## What it does

The home page brings together a banner, a flash sale section with a live countdown, product categories, best sellers, an explore grid, new arrivals, and a trust section. The shop page lists every product from the API with category filtering, pagination, and skeleton loaders while data is loading. Each product has its own details page with related items. Visitors can add products to a cart and a wishlist, change quantities in the cart, and remove items, and both lists are saved in the browser so they survive a refresh. The checkout page validates the delivery form and confirms the order with a toast notification, and there are also contact, account, login, sign-up, and custom 404 pages.

## Tech stack

The interface is written in React 19 with React Router for navigation and Redux Toolkit for cart, wishlist, and product state. Styling uses Tailwind CSS 4 with DaisyUI and Ant Design components, and the layout adapts from phones to wide desktops. Data comes from the DummyJSON products API through Axios. React Slick provides the sliders, React Paginate handles pagination, React Toastify shows notifications, and React Icons supplies the icons. Vite is the build tool and ESLint checks the code.

## Project structure

The `src/pages` folder holds one file per route, and `src/components` holds the reusable pieces such as the navigation bar, product card, countdown, and skeleton loader. Application state lives in `src/Slices/ProductSlice.jsx` with the store configured in `src/Store.js`, and all routes are declared in `src/router.js`.

## Running it locally

You need Node.js 18 or newer. Clone the repository, install the dependencies, and start the dev server:

```bash
git clone https://github.com/dewanxt/e-CommerceWebsite.git
cd e-CommerceWebsite
npm install
npm run dev
```

Vite prints a local address, usually `http://localhost:5173`, which you can open in the browser. To create a production build, run `npm run build`, and use `npm run preview` to check it locally.

## Notes and limitations

Login and sign-up are front-end demonstrations that validate the form fields but do not create real accounts or sessions, and the checkout does not take payments. Product data comes from a public demo API, so items and prices are placeholders. Real authentication and order storage are the next things I plan to add.

## Author

Built by Sabbir Dewan, a front-end developer in Dhaka. You can find more of my work on [GitHub](https://github.com/dewanxt) and [LinkedIn](https://www.linkedin.com/in/dewanxt/).
