import React from "components/node_modules/react";
import { Spin } from 'components/node_modules/antd';
import "components/style/loading.less"
export default class Loading extends React.Component {
    render(){
        return <div className="z-loading">
            <Spin size="large"></Spin>
        </div>
    }
}