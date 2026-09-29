# Frontend - Backend
1. create project folder (lab7)
2. create two folder frontend and backend
3. open terminal and split it into two
4. open frontend in to left side terminal
5. open backend into right side terminal
6. in backend
   a. initialize backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and script
    ```
    "start":"node app.js",
    "dev": "nodemon app.js" 
    ```
    d. create app.js
7. In Frontend
    a. npm create vite@latest
    b. enter . as project name
    c. select framework as react from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend

# Components
1. Simple jsx functions return html directly .
2. It must start with capital letters.
3. It should be treated as html tags. It must be closed.