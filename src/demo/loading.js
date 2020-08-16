import React from 'react'
import { Card, Button, Spin, Alert } from "antd";
import { SyncOutlined, LoadingOutlined } from "@ant-design/icons";
import './style.css'

export default class Loadings extends React.Component{
    render(){
        const iconSyncOutline = <SyncOutlined spin />
        const iconLoading = <LoadingOutlined  />
        return (
            <div>
                <Card title="Spin 用法" className="card-wrap">
                    <Spin size="small" style={{margin:'0 10px'}}/>
                    <Spin style={{margin:'0 10px'}} />
                    <Spin indicator={iconLoading} size="large" style={{margin:'0 10px'}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Spin
                        tip='加载中'
                        indicator={iconSyncOutline}
                    >
                        <Alert 
                            message="React"
                            description="欢迎使用 Alert 组件"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}