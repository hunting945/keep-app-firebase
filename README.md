# Project composition, Development Kit
* Javascript, HTML, CSS
* React: component, hooks
* Firebase
* VSCode

# How to run 如何使用
1. Download project
```
git clone https://github.com/hunting945/keep-app-firebase
```
2. Install packages
```
npm install
```
3. create a Firebase account, a web app project and realtime database

4. create Firebase init config data in FirebaseConfig.json
```
{
    "API_KEY": "...",
    "PROJECT_ID": "...",
    "AUTHDOMAIN": "...",
    "DATABASEURL": "...",
    "STORAGEBUCKET": "...",
    "SENDER_ID": "...",
    "APP_ID": "..."
}
```
4. run app on http://localhost:3000
```
npm start
```
# Developement steps 開發步驟
### Step1: create keep app layout
```
npx create-react-app keep-app-firebase
```
* remove unused files and codes
* create header component to show keep app name
* create footer component to show copyright message
* create note component to show div element
* add font link in index.html and mod index.css 
```
<link font-family: "Montserrat", sans-serif;
    href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap"
    rel="stylesheet" />
```
### Step2: render notes in keep
* add example notes in notes.js
* render example notes

### Step3: implement the addnote and deletenote functionality
* create createArea component to text note(title, content)
* create submitNote and deleteNote function

### Step4: styling the keep app
* install materia ui to add icon and component in the project
```
npm install @material-ui/core
npm install @material-ui/icons
```

### Step5: use firebase as backend database
* go to Firebase service website and create a web project and create a realtime database, then produce databaseURL and config parameters
* install firebase and create firebase.js and following parameters
```
npm install firebase
```
```
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
```
* deleteNote and submitNote function modify data through calling firebase api