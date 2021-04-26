import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AppStateType } from "../redux/redux-store";


type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {

}

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let { isAuth, ...restProps } = props;
        if (!isAuth) return <Redirect to = '/login' />

        return <WrappedComponent {...restProps as WCP} />
        
    }

    let mapStateToPropsForRedirect = (state: AppStateType) => ({
        isAuth: state.authPage.isAuth
    } as MapPropsType);

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}