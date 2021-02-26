# API Test


### Remote Runner

1. Go to http://18.215.244.19:8080
2. Login Jenkins:

      > username: `admin` | password: `admin`
3. Execute the pipeline project

      http://18.215.244.19:8080/blue/organizations/jenkins/assessment-pipeline/activity

      <img src="https://i.imgur.com/CnvnZ66.png" width="520" height="200" />
      <img src="https://i.imgur.com/YxWFCp5.png" width="520" height="340" />


### Local Runner

1. Execute Postman collections
      ```
      npm install -g newman
      newman run Interview.postman_collection.json --suppress-exit-code 1
      ```

     <img src="https://i.imgur.com/uAwye99.png" width="620" height="360" />



2. Execute Supertest

      ```
      npm install
      npm test
      ```

      <img src="https://i.imgur.com/22z5cOe.png" width="620" height="195" />