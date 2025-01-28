## Day_3 Data_Migration Template_2.
## Given API Base URL:
https://hackathon-apis.vercel.app/api/products

## Description:
This endpoint retrieves a list of products available in the store. Each product includes detailed information such as the product's name, description, price, category, initial quantity, tags, and an image URL. The response provides an array of products in JSON format.

## Example Response:
[
  {
    "name": "The Poplar suede sofa",
    "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    "image": "https://cdn.sanity.io/images/ri847jqu/production/9b6a4fc8c65bbb4e5793fb0e1116b510d73dc9e8-630x375.png",
    "_id": "65453ffd-e476-4b6b-a388-7e3de1bb632a",
    "features": [
        "Premium material",
        "Handmade upholster",
        "Quality timeless classic"
    ],
    "dimensions": {
        "width": "110cm",
        "height": "110cm",
        "depth": "50cm"
    },
    "category": {
        "name": "Tableware",
        "slug": "tableware"
    },
    "price": 980,
    "tags": [
        "popular products"
    ]
  }
]

## Importing Api data into my sanity project.
To import api data in my sanity projects i followed these steps.

## 1. cloned this repo https://github.com/bilalmk/hackathon-template02.git using following command:
**git clone https://github.com/bilalmk/hackathon-template02.git**

note it is not necessary to clone this repo in your project you can clone this repo anywhere you want.