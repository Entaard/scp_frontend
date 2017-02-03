import axios from 'axios'
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

export default {
  mockCreate(data) {
    console.log('mock', data)
    mock.onPost('/admins/products').reply(200, {
      "id": "21",
      "friendly_url": "name-price-id",
      "name": "product-name",
      "description": "des",
      "created_at": "20/12/2000",
      "status": "info",
      "price": "200",
      "url": "http://www.jamesbondlifestyle.com/sites/default/files/styles/fancybox_popup/public/images/product/cl014-sunspel-grey-shirt.jpg?itok=9JsNP14R",
      "category": {
        "id": "1",
        "name": "Fedora"
      },
    })
  },
  mockProduct(page) {
    console.log('change page:', page)
    mock.onGet('/admins/products').reply(200, {
      "result": [
        {
          "id": "1",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "info",
          "price": "200",
          "url": "http://www.jamesbondlifestyle.com/sites/default/files/styles/fancybox_popup/public/images/product/cl014-sunspel-grey-shirt.jpg?itok=9JsNP14R",
        },
        {
          "id": "2",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "image",
          "price": "200",
          "url": "http://www.binhindioutlet.me/wp-content/uploads/2015/04/MS1001.jpg",
        },
        {
          "id": "3",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuN4HUbp-D3Go0ggqRKk4QGITERQtZ-tgXA7gmquB-jXCUehMm",
        },
        {
          "id": "4",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "https://riverisland.scene7.com/is/image/RiverIsland/297488_main?$CrossSellProductPage300$",
        },
        {
          "id": "5",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQep3UlO7EoNCYgFjZiALgGxKB6GMTZQrlmoWaum5jmDoxi8jFsRg",
        },
        {
          "id": "6",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "https://images.sunfrogshirts.com/2015/02/09/Im-Not-Short-T-Shirt-Im-Not-Short-Im-A-People-Mcnugget-T-Shirt-Birthday-T-Shirt-Birthday-Gift.jpg",
        },
        {
          "id": "7",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "https://images.sunfrogshirts.com/2016/05/03/run-cookies-shirt.jpg",
        },
        {
          "id": "8",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "http://image1.superdry.com/static/images/products/upload6851007333299172757.jpg",
        },
        {
          "id": "9",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0BRigYIA4jG7EVEQdmvk9wOQF6woFry4_Gd86t-UH0Xerd9M9jw",
        }
      ],
      "total": 100,
      "page_count": 2,
    })
  },

  mockDetail(id) {
    mock.onGet(`/admins/products/${id}`).reply(200, {
      "id": "1",
      "friendly_url": "name-price-id",
      "name": "Khoi's awsome",
      "description": "Best guy in the world wearing the best shirt",
      "created_at": "20/12/2000",
      "status": "info",
      "price": "2000",
      "url": "https://images.sunfrogshirts.com/2015/02/09/Im-Not-Short-T-Shirt-Im-Not-Short-Im-A-People-Mcnugget-T-Shirt-Birthday-T-Shirt-Birthday-Gift.jpg",
      "category": {
        "id": "1",
        "name": "Celebrity shirt"
      },
      "user": {
        "id": "1",
        "first_name": "Minh Khoi"
      },
      "concepts": [
        {
          "id": "1",
          "name": "shirt",
          "is_concept": true
        },
        {
          "id": "2",
          "name": "jacket",
          "is_concept": false
        }
      ],
      "images": {
        "result": [
          {
            "id": "1",
            "url": "/images/category/category-img-01.jpg"
          },
          {
            "id": "2",
            "url": "/images/category/category-img-01.jpg"
          },
          {
            "id": "3",
            "url": "/images/category/category-img-01.jpg"
          },
          {
            "id": "4",
            "url": "/images/category/category-img-01.jpg"
          },
          {
            "id": "5",
            "url": "/images/category/category-img-01.jpg"
          },
          {
            "id": "6",
            "url": "/images/category/category-img-01.jpg"
          },
        ],
        "total": 100,
        "page_count": 2,
      }
    })
  },

  mockImages({id}) {
    mock.onGet(`/admins/products/${id}/images`).reply(200, {
      "result": [
        {
          "id": "1",
          "url": "/images/category/category-img-02.jpg"
        },
        {
          "id": "2",
          "url": "/images/category/category-img-02.jpg"
        },
        {
          "id": "3",
          "url": "/images/category/category-img-02.jpg"
        },
        {
          "id": "4",
          "url": "/images/category/category-img-02.jpg"
        },
        {
          "id": "5",
          "url": "/images/category/category-img-02.jpg"
        },
        {
          "id": "6",
          "url": "/images/category/category-img-02.jpg"
        },
      ],
      "total": 100,
      "page_count": 2,
    })
  }
}
