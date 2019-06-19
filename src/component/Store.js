import {notedata} from './FireBaseConnect'
var redux = require('redux');

const noteInitialState = {
    isEdit:false,
    editItem:{},
    
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            notedata.push(action.getItem)
            alert('Du liệu nhận vào'+JSON.stringify(action.getItem)+'thành công');
            return state
        case "CHANGE_EDIT":
            return {...state,isEdit:!state.isEdit}
        case "GET_DATA":
            return {...state,editItem:action.editObj}    
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
    
})
export default store
