import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this)
        this.state={
            noteTitle:'',
            noteContent:'',
            editItem:'',
            id:'',
        }
    }
    
    componentWillMount() {
      if(this.props.editItem){
        this.setState({
          noteTitle:this.props.editItem.noteTitle,
          noteContent:this.props.editItem.noteContent,
          id:this.props.editItem.id
        });
      }
    }
    
    
    handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        console.log("name: "+name)
        console.log("value: "+value)
        this.setState({
                [name]:value
            })
    }

     addData =(title,content)=>{

      if(this.state.id){//edit
        this.props.changeEdit();
        var editObj={};
        editObj.id = this.state.id;
        editObj.noteContent = this.state.noteContent;
        editObj.noteTitle = this.state.noteTitle;
        this.props.edit(editObj); 
        this.props.alert_on("Sửa thành công");
        this.props.alert_style("success");
      }
      else{
        var item={};
        item.noteTitle=title;
        item.noteContent=content;
        this.props.changeEdit();
        this.props.alert_on("Thêm thành công");
        this.props.alert_style("success");
      }
      
      // this.props.getData(item)
      this.props.addDataStore(item)
      
    }
    title =()=>{
      if(this.props.addStatus){
        return(<h3>Thêm mới</h3>)
      }
      else{
        return(<h3>Sửa ghi chú</h3>)
      }
      
    }
  
    render() {
        // console.log(this.props.editItem);
        
        return (
            <div className="col-9">
            {this.title()}
            <form>
            <div className="form-group">
              <label htmlFor="noteTitle">Tiêu đề note</label>
              <input defaultValue={this.props.editItem.noteTitle} onChange={(event)=>this.handleChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="" required />
            </div>
            <div className="form-group">
              <label htmlFor="noteContent">Nội dung note</label>
              <textarea defaultValue={this.props.editItem.noteContent} onChange={(event)=>this.handleChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpId" placeholder="" required />
            </div>
            <button type="submit" onClick={()=>this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-warning btn-block">Lưu</button>
            </form>
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    addStatus:state.isAdd,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({type:'ADD_DATA',getItem})
    },
    changeEdit: () => {
      dispatch({type:"CHANGE_EDIT"})
    },

    edit: (getItem) => {
      dispatch({type:"EDIT",getItem})
    },
    alert_on: (alertContent) => {
      dispatch({type:"ALERT_ON",alertContent})
    },
    alert_style: (alertColor) => {
      dispatch({type:"ALERT_STYLE",alertColor})
    },
    alert_off : () => {
      dispatch({type:"ALERT_OFF"})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);