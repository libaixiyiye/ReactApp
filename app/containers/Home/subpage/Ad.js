import React,{Component} from 'react';
import {getAd} from '../../../fetch/home/index';
import './Ad.less'
export default class Ad extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        getAd().then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({data});
        })
    }
    render(){
        return (
            <div className="ad">
                {this.state.data.length?
                    this.state.data.map((item,index)=>(
                        <a href={item.link} key={index}>
                            <span>{item.title}</span>
                            <img src={item.src}/>
                        </a>
                    )):
                    <div>正在加载</div>}
            </div>
        )
    }
}