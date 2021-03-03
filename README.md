# API Test
> Basic API testing boilerplate project based on JavaScript

### Test Runner

1. Execute Postman collections
      ```
      npm install -g newman
      newman run test.postman_collection.json --suppress-exit-code 1
      ```

     <img src="https://i.imgur.com/uAwye99.png" width="620" height="360" />



2. Execute Supertest

      ```
      npm install
      npm test
      ```

      <img src="https://i.imgur.com/22z5cOe.png" width="620" height="195" />
