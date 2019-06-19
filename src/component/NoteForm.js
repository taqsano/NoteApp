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
      // ket-noi-thong-qua-props
      var item={};
      item.noteTitle=title;
      item.noteContent=content;
      // this.props.getData(item)

      
      this.props.addDataStore(item)
      
    }
  
    render() {
        console.log(this.props.editItem);
        
        return (
            <div className="col-4">
            <h3>SỬA NỘI DUNG NOTE</h3>
            <form>
            <div className="form-group">
              <label htmlFor="noteTitle">Tiêu đề note</label>
              <input defaultValue={this.props.editItem.noteTitle} onChange={(event)=>this.handleChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="noteContent">Nội dung note</label>
              <textarea defaultValue={this.props.editItem.noteContent} onChange={(event)=>this.handleChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpId" placeholder="" />
            </div>
            <button type="reset" onClick={()=>this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-warning btn-block">Lưu</button>
            </form>
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({type:'ADD_DATA',getItem})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);