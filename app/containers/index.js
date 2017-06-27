import React,{Component} from 'react';
import RouterMap from '../routes/index';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            done:false
        }
    }
    componentDidMount(){
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