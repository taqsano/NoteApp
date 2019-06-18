import React, { Component } from 'react'
import { connect } from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this)
        this.state={
            noteTitle:'',
            noteContent:'',
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
      // var item={};
      // item.noteTitle=title;
      // item.noteContent=content;
      // this.props.getData(item)
      // alert("Thêm Thành Công")
      this.props.addDataStore()
    }
  
    render() {
        
        return (
            <div className="col-4">
            <h3>SỬA NỘI DUNG NOTE</h3>
            <form>
            <div className="form-group">
              <label htmlFor="noteTitle">Tiêu đề note</label>
              <input onChange={(event)=>this.handleChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tiêu đề note" />
            </div>
            <div className="form-group">
              <label htmlFor="noteContent">Nội dung note</label>
              <textarea onChange={(event)=>this.handleChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpId" placeholder="Nội dung note" />
            </div>
            <button type="reset" onClick={()=>this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-warning btn-block">Lưu</button>
            </form>
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.test
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: () => {
      dispatch({type:'TEST_GIT'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);