import {notedata} from './FireBaseConnect'
var redux = require('redux');

const noteInitialState = {
    isEdit:false,
    editItem:{},
    isAdd: false,
    alertshow:false,
    alertContent:'',
    alert_style:'',
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            
            if(action.getItem===undefined ){
                state.isAdd=false
                state.alertContent='Không thể thêm note rỗng'
                state.alertColor='danger'
            }
            else if(action.getItem.noteTitle===undefined){
                   state.isAdd=false
                   state.alertContent='Note thiếu Title'
                   state.alertColor='danger'
            }
            else if(action.getItem.noteContent===undefined){
                state.isAdd=false
                state.alertContent='Note thiếu Content'
                state.alertColor='danger'
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
        case "ALERT_ON":
                return {...state,alertshow:true,alertContent:action.alertContent}               
        case "ALERT_OFF":
                return {...state,alertshow:false,alertContent:action.alertContent}               
        case "ALERT_STYLE":
                return {...state,alertColor:action.alertColor}               
        default:    
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
})
export default store
