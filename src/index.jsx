import React from "react"
import ReactDom from "react-dom"
import { Button } from 'antd';
import { HashRouter, Route } from "react-router-dom";
import Admin from "components/Admin";
import Loadable from "components/HOC/Loadable"

ReactDom.render(<Admin>
    <HashRouter>
        <Route exact path="/" component={Loadable(() => import("pages/index"))}></Route>
        <Route exact path="/test" component={Loadable(() => import("pages/test"))}></Route>
    </HashRouter>
</Admin>, document.getElementById("app"))


if (module.hot) {
    module.hot.accept();
}