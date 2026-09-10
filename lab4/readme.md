# NPM Project

1. create project folder
2. right click on project folder and select open in integrated terminal
    ![alt text](./image.png)
3. run 'npm init -y' press enter
4. open package.json file from project folder 
5. update type  as 'module' in package.json
    ![alt text](image1.png)
6. type in terminal 'npm i nodemon -D' to install nodemon, which restarts server while file changes. -D flag indicate install as dev dependency
7. it creates node_modules folder and package-lock.json
8. update .gitignore file and write project-folder/node_modules or simply node_modules/
9. update package.json to run the project, update script property as below.
```
"scripts": {
    "start" : "node app.js",
    "dev" : "nodemon app.js"
  }
```

10. now you can start the server by running 'npm run dev' im the project folder terminal
