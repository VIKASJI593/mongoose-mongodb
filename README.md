

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

git init

git branch -M 29-middleware-ROUTE-path

git add .

git commit -m "mongodb-mongoose"

git push -u origin main

git push -f -u origin main

git branch

git remote add origin https://github.com/VIKASJI593/mongoose-mongodb.git

git remote -v


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

npm i express@5.0.0-alpha.8

npm i -D nodemon

 "type": "module",

npm run dev

npm init -y

node index.js

nodemon index.js




git init

git add .

git commit -m "controller"

git branch -M 4-controller

git branch

git remote add origin https://github.com/VIKASJI593/express-5.0.0-alpha.8.git

git remote -v

git push -u origin 4-controller

git push -f -u origin 4-controller


//vs code setting
{
    "files.autoSave": "afterDelay",
    "code-runner.clearPreviousOutput": true,
    "editor.mouseWheelZoom": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
         
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode" 

        
           
    
    },
    "powermode.enabled": true,
    "powermode.presets": "flames",
    "powermode.combo.counterEnabled": "hide",
    "powermode.combo.counterSize": 0
   
} 





// cd basichttpserver
// in windows-  cd "F:\New folder\nodejs\11-api"
// node index.js

nodemon index.js

//GIT BRANCH
 git config --global user.email "kumar.vikas593@gmail.com"
  git config --global user.name "VIKAS KUMAR"
git branch

git branch name

git branch name checkout

git branch

git init

git add .

git status

git commit -m "1-SettingUpOurFirstNodeJsServer"

git push -u origin 1-SettingUpOurFirstNodeJsServer

git push -f -u origin 1-SettingUpOurFirstNodeJsServer

// create a new repository on the command line echo "# -Mini-Project-Finishing-up" >> README.md

git init

git add .

git commit -m "1-SettingUpOurFirstNodeJsServer"

git branch -M 1-SettingUpOurFirstNodeJsServer

git branch

git remote add origin https://github.com/VIKASJI593/nodejs.git

git remote -v

git push -u origin mongodb

git push -f -u origin mongodb

//push an existing repository from the command line

git remote add origin git@github.com:VIKASJI593/-Mini-Project-Finishing-up.git

git branch -M main

git push -u origin main

git push -f -u origin main

//RENAME git remote rename origin tutorial git config --global user.name "VIKAS KUMAR" git config --global user.email "kumar.vikas593@gmail.com"

git remote

git remote -v

git remote remove firebase

git remote

git remote -v

git remote add firebase https://github.com/VIKASJI593/firebase.git

git remote add firebase https://github.com/VIKASJI593/testing.git

git remote set-url origin https://github.com/VIKASJI593/firebase.git

git remote set-url origin https://github.com/VIKASJI593/testing.git

git remote rename firebase origin

git add .

git commit -m "Component-Lifecycle-Mounting"

git branch Component-Lifecycle-Mounting git checkout Component-Lifecycle-Mounting

git push -u origin firebase

git push -f -u origin Component-Lifecycle-Mounting

//UPDATE NODEJS To update Node.js, you’ll need npm’s handy n module. Run the code below to clear npm’s cache, install n, and update to the latest stable version of Node.js:

sudo npm cache clean -f

sudo npm install -g n

sudo n stable

//UBUNTU ROOT ERROR sudo rm /var/lib/apt/lists/lock sudo rm /var/cache/apt/archives/lock ...to no avail. Interestingly, if I am actually root and use:

sudo -s apt-get update && apt-get upgrade

sudo npm install -g n sudo n lts

//restart terminal node --version npm --version

//install shortcut sudo apt install shotcut

//balena etcher Install FUSE sudo add-apt-repository universe sudo apt install libfuse2

download balena etcher

//ssh

ssh-keygen -t ed25519 -C "kumar.vikas593@gmail.com"

eval "$(ssh-agent -s)"

// add to github

cat ~/.ssh/id_ed25519.pub

Then select and copy the contents of the id_ed25519.pub file displayed in the terminal to your clipboard

//snap store update

Just run this command:

sudo snap refresh snap-store

It will show the information about running snap apps

error: cannot refresh "snap-store": snap "snap-store" has running apps (ubuntu-software), pids: 2137 Then kill them. and run again same command:

kill 2137 sudo snap refresh snap-store

Download Windows ISO file from https://www.microsoft.com/en-in/softw...

Install WoeUSB tool using following commands:

sudo apt update

sudo apt install git p7zip-full python3-pip python3-wxgtk4.0

sudo pip3 install WoeUSB-ng

Insert blank Flash Drive

Unmount Flash Drive

Open WoeUSB GUI tool

Flash the flash drive using instructions on WoeUSB tool's GUI interface







//vs code termial clar shortcut  => go to file-preference-keyboard shortcut
workbench.action.terminal.clear

//vs code output clar automatic
1. install code runner
2.go to setting
3.in user section search run code configuration
4.tick clear previous output








live server
JavaScript (ES6) code snippets
!  for html snippets 








//git branch clone
git clone -b A-SEARCH-CHAT https://github.com/VIKASJI593/testing.git

