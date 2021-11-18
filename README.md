# Amplify Geo Applications

## Building the client with AWS Amplify

1. Setup project
   Create the react app

```
npx create-react-app client
```

2. Initialize the amplify app in the client directory

```
amplify init
```

Install dependencies

```
npm install bootstrap
npm install @aws-amplify/ui-react
```

2. Add authentication

```
amplify add auth
amplify push --yes
```

Modify the client to show the auth

```
cp base/01-App.js src/App.js
cp base/01-Header.js src/components/Header.js
```

Start the app

```
npm start
```

Create a new account and see the page resulting
