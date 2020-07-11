### Installation and usage

Clone this repository to quickly start a new Express project with the minimal you need to get up and running. 
You'll need [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en/download/) installed and a running [MongoDB](https://www.mongodb.com/) instance.  After you made sure you have everything set up, run this on your terminal:

```sh
git clone https://github.com/ajsaraujo/express-start.git
cd express-start/

# Renames .env.example to .env
mv .env.exampe .env

npm i
npm start
```

#### Dependencies

- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [cors](https://www.npmjs.com/package/cors)

#### Development Dependencies

- [nodemon](https://www.npmjs.com/package/nodemon)
- [sucrase](https://www.npmjs.com/package/sucrase)
