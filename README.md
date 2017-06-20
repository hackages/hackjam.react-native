# HackJam React Native
## Advanced Redux
### Getting Started
```bash
git clone https://github.com/hackages/hackcamp.react-native
yarn
# Run the app from Expo XDE
# Happy Hacking ;-)
```

### Todos
### Reducers
Start by running
```bash
yarn test
```
Ensure that all your test passes before starting the next todo

The file you need it to edit for your tests is `src/reducers/activeTrucks`;
#### Errors, errors, errors ❌
The first thing you need to do is to make sure your app is running, meaning that you don't see any errors on your screen.

To do that you're gonna need to do a few things:
- Run the app on your Phone
- Get rid of the error messages
    - You'll need to configure [redux-thunk](https://github.com/gaearon/redux-thunk) in `src/store/store.js`
    - Fix all the errors that appear on your screen
    
#### Async actions 🎸
Open src/actions/trucks.js and write all the actions. 
You can find comments there that'll help you out to write the actions.

#### REALTIME DATA 🔥
Fetching your data using Ajax is cool but you know what's even *cooler*?

Websockets, realtime, thats right.

If you open the file src/components/TruckSocket you can find instructions there to help you out

#### They call me Columbus 🗾
If you open `src/screens/Map/index.js` you'll find an empty component. Create a component that'll render the <Map /> Component and a back button to go back to the listScreen.

### Bonus:

#### Persistance is the key 🔑
You should persist your redux store using [redux-persist](https://github.com/rt2zz/redux-persist)

Persist every reducers but the ui one

#### Middlewares you said? 😷
Write a middleware that stops the trucks from being created if their names contain any of the words that can be found in src/constants/dictionnary.js

#### Notifications 🎵
Using [the expo documentation](https://docs.expo.io/versions/v16.0.0/guides/push-notifications.html) extract your expo push notification token and posting it to http://calapez.me:4242/notifications.

Your body should look like that
```JSON
{
    "token": "your expo push token"
}
```


