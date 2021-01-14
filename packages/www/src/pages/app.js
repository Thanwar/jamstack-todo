import React, { useContext } from "react";
import { Router, Link } from "@reach/router";
import netlifyIdentityContext from "../../netlifyIdentityContext";

let Dash = () => {
    const { user } = useContext(netlifyIdentityContext);


    return <div>{user && user.user_metadata.full_name}</div>
}

export default props => {
    return (
        <Router>
        <Dash path="/app" />
      </Router>
    );
};