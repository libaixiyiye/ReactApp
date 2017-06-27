import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index'
import Slider from '../../components/Slider/index';
import Ad from '../../containers/Home/subpage/Ad';
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京" />
                <Slider/>
                <Ad/>
            </div>
        )
    }
}