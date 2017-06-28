import React,{Component} from 'react';
import RouterMap from '../routes/index';
import {connect} from 'react-redux';
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreator组成的对象
import  * as Actions from '../actions/userInfo';
import {getStorage} from '../local/index'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            done:false
        }
    }
    componentDidMount(){
        //先去本地查找 是否存储过localstorage名字叫cityName的
        //1.没有cityName,赋予一个默认值
        //2.将当前的城市 存放到redux中
        let cityName=getStorage('cityName');
        if(cityName==null){
            cityName='北京'
        }
        //页面加载后 设置一个城市
        this.props.userActions.update({
            cityName
        });
        this.setState({
            done:true
        })
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>正在加载中</div>}
            </div>
        )
    }
}
export default connect(
    state=>{   //mapStateToProps
        return{}
    },
    dispatch=>{  ////mapDispatchToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App);