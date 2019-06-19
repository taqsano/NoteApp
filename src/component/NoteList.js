import React, { Component } from 'react'
import {notedata} from './FireBaseConnect'
import ListItem from './ListItem';
export default class NoteList extends Component {
constructor(props) {
  super(props);
  this.state={
    Mang:[],
  }
}

componentWillMount() {
  notedata.on('value',(notes)=>{ 
    var arrData= [];
      notes.forEach(element => {
        const key = element.key
        const noteTitle = element.val().noteTitle
        const noteContent = element.val().noteContent
        arrData.push({
          id:key,
          note:element,
          noteTitle:noteTitle,
          noteContent:noteContent
        })
        });
        this.setState({
          Mang:arrData
      });
      
  })
}
  getData =()=>{
    if(this.state.Mang){
      console.log(this.state.Mang);
      return( this.state.Mang.map((value,key)=>{
        return(<ListItem 
          key={key}
          id={key}
          note={value}
          noteTitle={value.noteTitle}
          noteContent={value.noteContent}
        />)
      }))
    }
  }
    render() {
        return (
            <div className="col">
            <div id="noteLists" role="tablist" aria-multiselectable="true">
              {this.getData()}
            </div>
          </div>
        )
    }
}
