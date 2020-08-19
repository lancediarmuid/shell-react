import React from 'react';
import { Card, Button, Radio, notification, message } from "antd";
import './style.css'

export default class Topic extends React.Component{

    openNotification = (type, direction) =>{
        if(direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: '操作成功',
            description:'操作信息嘻嘻嘻嘻嘻'
        })
    }

    showMessage = (type) =>{
        message[type]("操作成功")
    }

    render(){
        return (
            <div>
                <h3>This is Topic Page.</h3>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.openNotification('success')}>success</Button>
                    <Button type='primary' onClick={()=>this.openNotification('info')}>info</Button>
                    <Button type='primary' onClick={()=>this.openNotification('warning')}>warning</Button>
                    <Button type='primary' onClick={()=>this.openNotification('error')}>error</Button>
                    
                </Card>
                <Card title='通知提醒框,带方向' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.openNotification('success', 'topLeft')}>success</Button>
                    <Button type='primary' onClick={()=>this.openNotification('info', 'topRight')}>info</Button>
                    <Button type='primary' onClick={()=>this.openNotification('warning', 'bottomLeft')}>warning</Button>
                    <Button type='primary' onClick={()=>this.openNotification('error', 'bottomRight')}>error</Button>
                </Card>
                <Card title='Message 全局提示' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type='primary' onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type='primary' onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button type='primary' onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button type='primary' onClick={()=>this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}