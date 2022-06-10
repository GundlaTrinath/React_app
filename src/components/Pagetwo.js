import React from "react";
import './style.css';


function Pageone(props){
    let className=props.primary ? 'primary' : ''
    return (
        <div>
            <div className={'${className} img1'}>
                <img src='/images/userimage.jpg' alt='userimage' height={100} width={100}/>
                <p>Name : {props.name}</p>
                <p>Worked from : {props.s_date}</p>
                <p>Worked till : {props.e_date}</p>
            </div>
        </div>
    )
}

export default Pageone