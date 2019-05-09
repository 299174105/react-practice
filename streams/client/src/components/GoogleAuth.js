import React from 'react';
import {connect} from "react-redux";
import {signOut,signIn} from "../actions";

class GoogleAuth extends React.Component{

    componentDidMount() {

        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId:'563279300434-b53r6ifjho9vh3th6s2q5049llei55qh.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.authSign(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.authSign);
            })

        });
    }

    authSign = isSigned=>{

        if(isSigned){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut();
        }
    };

    onClickSignIn = ()=>{
       this.auth.signIn();
    };
    onClickSignOut = ()=>{
        this.auth.signOut();
    };

    renderButton=()=>{
        if(this.props.isSignedIn===null){
            return null;
        }else if (this.props.isSignedIn) {
           return (
               <button className="ui button red" onClick={this.onClickSignOut}>
                    <i className="google icon"/>signout
               </button>) ;
        }else {
            return (
                <button className="ui button red" onClick={this.onClickSignIn}>
                    <i className="google icon"/>sign in with google
                </button>
            )
        }
    };

    render() {
        return this.renderButton();
    }

}

const mapStateToProps = (state)=>{

    return {isSignedIn:state.isSign.isSignedIn};
};

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);