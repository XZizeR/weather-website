
# Web-Server

## APIs:

### express
Deploy the application on the local server. Stored in the [localhost](localhost:3000).
### nodemon
helps to run make changes in real time.
### hbs
> Handlebars - is going to allow us to render dynamic pages, using dynamic   engine, and easily create code that we can reuse across pages. 

hbs - uses handlebars behind the scenes. hbs just makes it really easy to integrate with express.
### request
To get a requests from a forign APIs. similar to http.

### Heroku
Deploying the application on [Heroku](www.heroku.com)
to check the version:
```sh
heroku -v
```
to log in:
```sh
heroku login
```



## How to:
to run the app:
```sh 
node src/app.js
```
to run with nodemon:
```sh
nodemon src/app.js -e js,hbs
```

### Git
to initialize Git in the project:
```sh 
git init
```
to check the stageing area:
```sh 
git status
```
to ignore a folder/file create `.gitignore` file, and write there the folder name `node_modules/`.
to commit all:
```sh 
git add .
```

to check ssh key
ls -a -l ~/.shh
to create SSH key
ssh-keygen -t rsa -b 4096 -C "xzizer@gmail.com"

eval "$(ssh-agent -s)"
to register the file:
ssh-add ~/.ssh/id_rsa
