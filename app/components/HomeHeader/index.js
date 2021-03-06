import React,{Component} from 'react';
import './index.less';
//主页头部组件
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
               <div className="city">
                   {this.props.cityName}
                   <i className="iconfont icon-icon21"></i>
               </div>
                <div className="search">
                    <i className="iconfont icon-fangdajing"></i>
                    <input type="text"/>
                </div>
                <div className="profile">
                    <i className="iconfont icon-touxiang"></i>
                </div>
            </div>
        )
    }
}