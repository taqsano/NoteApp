import React, { Component } from 'react'
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
// import { Provider } from 'react-redux';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isEdit:true,
    }
  }
  
  showForm =()=>{
    if(this.props.isEdit){
      return<NoteForm/>
    }
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
          <div className="container">
            <div className="row">
              <NoteList />
              {this.showForm()}
            </div>
          </div></div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEdit: () => {
      dispatch({type:"CHANGE_EDIT"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
