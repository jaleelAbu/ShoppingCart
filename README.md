## Shopping Cart
This project is a basic implementation of Shopping Cart in `Angular JS 2` with `Bootsrap`.  
The application has following structure:
## App Module
#App Component:
The app component wraps `Category-list` component, `Product-list` component and a `router-outlet`.

On clicking a category from category list, the `category-list` component emits an event which is listened by the app component. The app component controls the `router` and `router-outlet` to show the products on screen.  

The `shopping cart button` (positioned on the top right corner of app window) loads the `cart component` in `router-outlet` by using the `routerLink` feature of router. 

#Category-list Component
This component uses `category service` to pull the data from server and store it in `category` array. The `category` array is then used for displaying the category list using `ngFor` in the category template. This component `emits an event` when a category is selected. 

#Product-list Component
This component is loaded in `router-outlet` of `app component`. When this component is loaded, it takes `catgegory ID` as parameter from router to display the corresponding category of products.

This component uses `product service` to fetch data from server. Once data is received, it stores it in `product` array which is later used to display the products on the screen.
When the `shopping cart icon` is clicked on product tile, it saves the information of the product in `Local Storage` which is later used by `cart module`.

#Text Overflow Control on Product Tile:
To limit the text length on the product tile, the text has `Pipe feature` implemented. The Custom built `pipe` substrings the text and appends it with `“…”` string. 

#Not-found Component
This component is loaded into the `router-outlet` of app component when the router encounters an invalid router path.


## Cart Module

#Cart Component
This component is loaded in `router-outlet` of `app component` when the `Shopping Cart button` on the main app window is clicked. 

The `Cart Component` uses data saved in `Local Storage` to display the cart items.
When `“Continue Shopping”` button is clicked its calls the navigate back feature of `Location` object to get back to product display view. 

## Services

#Product Service
This component fetches product data from server and provides it through `getProducts` and `getProduct` function. 

#Category Service
This component fetches category data from server and provides it through `getCategories` function. 

## Pipes

#Limit text
This `pipe` trims a text for manageable text length on product tile. It appends `“…”` at the end of the trimmed text. This pipe takes a `maxCharacters` parameter for limiting the text length.

## Routers

#Router
This `router` is configured with `app module`. It maps the `router path` to the  allocated component. 


