import {notedata} from './FireBaseConnect'
var redux = require('redux');

const noteInitialState = {
    isEdit:false,
    editItem:{},
    isAdd: false,
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log('item: ',action.getItem);
            if(action.getItem===undefined){
                state.isAdd=false
                alert("Sua thanh cong")
            }
            else if(action.getItem.noteTitle===undefined){
                   state.isAdd=false
                alert("Thiếu tiêu đề note")
            }
            else if(action.getItem.noteContent===undefined){
                state.isAdd=false
                alert("Thiếu tiêu đề note")
            }
            else{
                state.isAdd=false
                notedata.push(action.getItem)
            }

            // alert('Du liệu nhận vào'+JSON.stringify(action.getItem)+'thành công');
            return state
        case "CHANGE_EDIT":
            return {...state,isEdit:!state.isEdit}
        case "CHANGE_ADD":
            return {...state,isAdd:!state.isAdd}
        case "GET_DATA":
            return {...state,editItem:action.editObj}    
        case "EDIT":
            notedata.child(action.getItem.id).update({
                noteContent: action.getItem.noteContent,
                noteTitle: action.getItem.noteTitle
            })
            console.log('cap nhat: ',JSON.stringify(action.getItem));
            return {...state,editItem:{}}
        case "DELETE":
                console.log('delete store: ',action.deleteId);
                notedata.child(action.deleteId).remove()
                console.log('Xoa: ',action.deleteId);
                return state           
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
})
export default store
