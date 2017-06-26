# HackJam 2 - redux

## Start

### Getting started 

In a terminal, execute
```
git clone https://github.com/hackages/hackcamp.react-native.git
git checkout hackjam-2
yarn test
# Happy hacking ;-)
```

## Part 1 - Redux

### Use

In a terminal, execute
```
yarn test
```

This one is pretty straight-forward, you should create the reducers and the actions that goes with it.

For each test suite you'll find a reducer and a file for the actions.

The reducers are store stored in `src/reducers`.
The actions are stored in `src/actions`.


## Part 2 - React Redux

### Use
Launch Expo XDE and open the app.

### TODO
* Fix the errors
* The list of trucks seems to be empty ...
* Make sure that all the components get the right props from connect()
    * You can find the components that require informations from connect in `src/screens`.
* The HeaderWidget button does not work...


## Bonus
- Add the delete function in the trucks tests, implement it in the reducer and then implement it in the app
- Write a reducer that adds an uuid to the actions truckActions if its missing.
