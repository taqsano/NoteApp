import notedata from './FireBaseConnect'

var redux = require('redux');

const noteInitialState = {
    test: 'test'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("adddata")
            return state
        case "TEST_GIT":
            console.log("Test_Git")
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store
