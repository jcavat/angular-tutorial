# Angular tutorial

Configure and run the server:
```
cd server
npm install
npm start
```

## Mission for Step 1 
### Install angular cli 
`npm install -g @angular/cli`

### Connect and play with mongodb shell v3.6
```
mongo --host eratosthene --port 27017
use order
db.orders.find()
```

### Create a new angular project
`ng new orders`

---
if you encounter any problems, go to step 2 : `git checkout step2`

## Mission for Step 2
run the angular project
```
cd orders
ng serve
```

then:
* add a **vendors component** (`ng generate component vendors`),
* use a **title binding property** and declare a list of strings with fake vendors' title,
* in the related template, expose the title as a html title (`h1`) and place the list of strings inside a bullet list (`ul/li`).

---
if you encounter any problems, go to step 3 : `git checkout step3`

## Mission for Step 3
* create a repository service helping to access vendors' data,
* use an abstraction of the service and a fake in-memory implementation.

---
if you encounter any problems, go to step 4 : `git checkout step4`

## Mission for Step 4
* do a better abstraction for the order repository by taking into account the latency of such a service
* use a Rest implementation for accessing data with the `HttpClientModule` to your Rest Api.

---
if you encounter any problems, go to step 5 : `git checkout step5`

## Mission for Step 5
* do routes for `/vendorsdetails` and `/vendorsdetails/:id` in OrderRepositoryService
* use a VendorDetail class using title, categories and products fields
* transform the vendors component to use a set of cards 
* create a VendorCard component to add more details on a specifi vendor. Use a badge for the sum of commands per vendors and a list of products

---
if you encounter any problems, go to step 6 : `git checkout step6`

## Mission for Step 6
* route to a `VendorDetails` component when we select a vendor
* use a `pipe` to transform the vendor id to a capitalized title (this-is-a-shop become This Is A Shop)

---
if you encounter any problems, go to step 7 : `git checkout step7`
