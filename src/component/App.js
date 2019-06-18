import React, { Component } from 'react'
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
// import { Provider } from 'react-redux';
import {notedata} from './FireBaseConnect'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  addData =(item)=>{
    notedata.push(item);
  }

  render() {
  notedata.once('value').then(function(snapshot){
    console.log(snapshot.val())
    });
    return (
      
      <div>
        <div>
          <Nav />
          <div className="container-fluid">
            <div className="row">
              <NoteList />
              <NoteForm getData={(item)=>this.addData(item)}  />
            </div>
          </div></div>
      </div>
    
    )
  }
}

