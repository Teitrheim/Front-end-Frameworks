# eCom Store

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-brightgreen)](https://guileless-puppy-75e10b.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Teitrheim/Front-end-Frameworks.git)

## Overview

The **eCom Store** is a fully-featured e-commerce application built using **React**. It allows users to browse products, add them to a cart, and complete a purchase with a streamlined checkout process. This project demonstrates the use of key frontend technologies, including **React Router** for page navigation and state management for handling cart operations.

## Features

- **Homepage**
  Displays a list of all products with a look-ahead search bar that filters products dynamically as users type. Each product can be viewed in more detail on an individual product page.

- **Product Page**
  Displays details about a specific product, including title, description, images, price, and discounts. Users can add items to the cart from here.

- **Cart Page**
  Lists all items added to the cart, including a summary of the total price. Users can proceed to checkout from this page.

- **Checkout Success Page**
  Displays a success message once a purchase is completed and provides a link to return to the homepage. Clears the cart upon completion.

- **Contact Page**
  Contains a form for users to contact the store. Includes full validation for all input fields.

- **Responsive Design**
  Built with responsiveness in mind, ensuring compatibility with mobile, tablet, and desktop devices.

## Technologies Used

- **Frontend**: React, JavaScript
- **Styling**: CSS, Bootstrap (optional)
- **State Management**: React Hooks
- **Routing**: React Router

## Getting Started

### Prerequisites

Before running the project locally, ensure you have the following installed:

- **Node.js** (version 12.x or higher)
- **npm** (Node Package Manager)
- **Git**

### Setup and Installation

1. **Clone the Repository**
   Clone the repository to your local machine:

   ```sh
   git clone https://github.com/Teitrheim/Front-end-Frameworks.git
   cd Front-end-Frameworks
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the necessary dependencies:

   ```sh
   npm install
   ```

3. **Run the Application**
   Start the application locally using the following command:

```sh
npm start

```

4. **Build for Production**
   To create a production build, run:

```sh
npm run build

```

This will create a minified build of the project in the build folder.

Application Pages

1. Homepage
   Displays a list of all available products.
   Includes a search bar that filters products as users type.
   Products are displayed as cards, each linking to the Product Page.
2. Product Page
   Shows product details including:
   Title and description
   Images of the product
   Price and Discount (if applicable)
   Users can add products to the cart.
3. Cart Page
   Displays all products added to the cart.
   Shows the total price of items in the cart.
   Allows users to proceed to Checkout.
4. Checkout Success Page
   Displays a success message to confirm the user's order.
   Includes a link to return to the Homepage.
   The cart is cleared once the order is confirmed.
5. Contact Page
   Contains a contact form with fields for:
   Full Name (min. 3 characters, required)
   Subject (min. 3 characters, required)
   Email (valid email format, required)
   Message Body (min. 3 characters, required)
   Form validation is implemented for all fields.
   Testing Instructions
   Instructions for Testers
   Add to Cart and Checkout
   Add multiple products to the cart, proceed to checkout, and ensure the cart is cleared after reaching the Checkout Success Page.

Search and Filter
Test the search functionality by entering different keywords and ensuring only matching products are displayed.

Form Validation
Test the contact form by entering both valid and invalid data to confirm that validation rules are enforced.

Responsive Design
Test the application on different screen sizes to ensure that the layout adjusts appropriately.

Contributing
Contributions are welcome! If you'd like to improve the project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to all contributors and testers who helped in developing this project.
Images and assets are sourced from Unsplash, Pixabay, and Favicon.
