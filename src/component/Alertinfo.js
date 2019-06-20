import React, { Component } from 'react';
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class Alertinfo extends Component {

    handleDismiss = () => {
        this.props.alert_off();
    }

    render() {
        console.log('alert_style: ',this.props.alertColor);
        if (this.props.alertshow === false) return null;
       
        
        return (
            <AlertContainer>
                <Alert type={this.props.alertColor} onDismiss={() => this.handleDismiss()} timeout={600}> {this.props.alertContent}</Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertshow: state.alertshow,
        alertContent:state.alertContent,
        alertColor:state.alertColor,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alert_off: () => {
            dispatch({ type: "ALERT_OFF" })
        },
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alertinfo)
