import React from "react";
import { Spin } from 'antd';
import "components/style/loading.less"
export default class Loading extends React.Component {
    render(){
        return <div className="z-loading">
            <Spin size="large"></Spin>
        </div>
    }
}