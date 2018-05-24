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
* do a better abstraction for the order repository taking into account the latency of such a service
* use a Rest implementation for accessing data with the `HttpClientModule` to your Rest Api.

---
if you encounter any problems, go to step 4 : `git checkout step5`
