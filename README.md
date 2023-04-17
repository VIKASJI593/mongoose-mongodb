git init

git branch -M 5-mongoose-authorized

git add .

git commit -m "mongodb-mongoose"

git push -u origin 5-mongoose-authorized

git push -f -u origin 5-mongoose-authorized

git branch

git remote add origin https://github.com/VIKASJI593/mongoose-mongodb.git

git remote -v



npm i express@5.0.0-alpha.8

npm i -D nodemon

npm i ejs

npm i mongoose@6.10.5

npm i mongoose

"type": "module",

npm run dev

npm init -y

node index.js

nodemon index.js


//-----------------------------mongodb----------start-----



//mongo

// show dbs

//  use schooldb

db.dropDatabase()

db.student.insertOne({"name":"sonam","age":27})

db.createCollection("teacher",{validator:{$jsonSchema:{bsonType:"object",required:["name","age"],properties:{name:{bsonType:"string",description:"Must be a string and is required"},age:{bsonType:"int",description:"Must be a string and is required"},}}}})

// show collections

// db.getCollectionInfos({name:"teacher"})

// db.getCollectionInfos({name:"student"})

//---------------delete------------
db.student.drop()


// show collections

//------------------searh----------------
db.teacher.find()

//----------------------insert one data--------------------------
db.teacher.insertOne({name:"sonam",age:27})
db.teacher.find()


//----------------------insert many data--------------------------
db.teacher.insertMany([{name:"rahul",age:29},{name:"sumit",age:24}])
db.teacher.find()
db.teacher.find().pretty()


//----------------------------find one data---------------------
db.teacher.findOne()

//----------------------------find many data---------------------
db.teacher.find()


//----------------------------find limited data---------------------
db.teacher.find().limit(2)

//----------------------------find particular data---------------------
db.teacher.find({name:"sonam"})


db.teacher.insertOne({name:"Kunal",age:27})
db.teacher.find()

//------------queries on the basis of field------------------
db.teacher.find({age:27})


//-----------------update one data------------
db.teacher.updateOne({name:"rahul"},{$set:{name:"Jack",age:50}})
db.teacher.find()

//-----------------update many data------------
db.teacher.updateMany({age:27},{$set:{name:"Sameer"}})
db.teacher.find()

//-----------------delete one data------------
db.teacher.deleteOne({age:50})
db.teacher.find()

//-----------------delete many data------------
db.teacher.deleteMany({age:27})
db.teacher.find()


//----------------delete database-------------------
db.dropDatabase()
// show dbs
//----------close mongodb---------------
quit()

// ctrl+c ctrl+d




/****************user auhentication authorization**********************/

// use schooldb

db.student.find()

db.student.insertOne({"name":"Rahul","age":29})

db.student.find()

//--------------create user----------------
db.createUser({user:"geekyshows",pwd:"123456",roles:[{role:"read",db:"schooldb"}]})

//-------------show user-----------roles--------
// show users
// show roles
// mongo --authenticationDatabase "schooldb" -u "geekyshows" -p "123456"
// show collections

//--------------------superuser-------------------------
db.createUser({user:"boss",pwd:"123456",roles:["root"]})

// mongo --authenticationDatabase "admin" -u "boss" -p "123456"

quit()

// show collections

// use admin

// show collections

//--------------delete user-------------------

db.dropUser("geekyshows")
// show users
// show roles







//---------------------mongodb-----------last--------------

