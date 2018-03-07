import React, { Component } from 'react'
import style from './index.scss'
import MyLayout from '../../common/layout'


class TodayMune extends Component{
    constructor(props){
        super(props);

        $("body").css("backgroundImage","url('')");
    }

    render(){
        return(
            <div>
                <MyLayout>
                </MyLayout>
            </div>
        )
    }
}

export default TodayMune