import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alertinfo from './Alertinfo';
class ListItem extends Component {


Editfunc =()=>{
    this.props.changeEdit();
    this.props.getdata(this.props.note)
    // if(this.props.addStatus){
    //     alert("Đang trong quá trình thêm note")
    // }
}

deleteData =()=>{

    this.props.getDeleteData(this.props.note.id);
    // console.log("dl xoa: ",this.props.note.id );
    this.props.alert_on("Xoá thành công")
    this.props.alert_style("danger")
}

    render() {
        return (
            <div>
                
                <div className="card">
                    <div className="card-header" role="tab" id="note">
                        <h5 className="mb-0 ">
                            <a className="d-block float-left" data-toggle="collapse" data-parent="#noteLists" href={"#id" + this.props.id} aria-expanded="true" aria-controls="note1">
                                {this.props.noteTitle}
                            </a>
                        </h5>
                        <div className="btn-group float-right mb-2" role="group" >
                            <button className="btn btn-outline-warning waves-effect d-block"
                            onClick={()=>this.Editfunc()} >Sửa</button>
                            <button className="btn btn-outline-danger waves-effect d-block" onClick={()=>this.deleteData()}>Xoá</button>
                        </div>
                    </div>
                    <div id={"id" + this.props.id} className="collapse in" role="tabpanel" aria-labelledby="note1">
                        <div className="card-body">
                            {this.props.noteContent}
                        </div>
                    </div>
                    <Alertinfo   pt-10 mr-100/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        addStatus:state.isAdd,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEdit: () => {
            dispatch({type:"CHANGE_EDIT"})
          },
        getdata: (editObj) => {
            dispatch({type:"GET_DATA",editObj})
          },
        getDeleteData: (deleteId) => {
            dispatch({type:"DELETE",deleteId})
          },
        changeAdd: () => {
            dispatch({type:"CHANGE_ADD"})
          },
        alert_on : (alertContent) => {
            dispatch({type:"ALERT_ON",alertContent})
          }, 
        alert_style : (alertColor) => {
            dispatch({type:"ALERT_STYLE",alertColor})
          }, 
    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItem)