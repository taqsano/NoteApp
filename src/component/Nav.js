import React, { Component } from 'react'
import { connect } from 'react-redux';
class Nav extends Component {
    handleAdd =(event)=>{
        event.preventDefault();
        this.props.changeEdit();
        this.props.changeAdd()
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark mb-3" style={{ backgroundColor: 'black' }}>
                    <a className="navbar-brand" href="/#">Note_App</a>
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" >Menu </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0 ">
                            <li className="nav-item ">
                                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#" onClick={(event)=>this.handleAdd(event)}>Thêm Ghi Chú</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
  
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEdit: () => {
            dispatch({type:"CHANGE_EDIT"})
          },
        changeAdd: () => {
            dispatch({type:"CHANGE_ADD"})
          },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
