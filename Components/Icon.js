import React , {useState}from "react";
import { BiHeart ,BiEditAlt, BiTrashAlt , BiMailSend, BiPhone, BiGlobe} from "react-icons/bi";
import PropTypes from 'prop-types';
import "../styles/Icon.css";

// let Styles = {
//     Icon : {
//         width : "22px",
//         height : "22px",
//     },
//     Action_Icon_1 : {
//         display : "block",
//         width : "22px",
//         height : "22px",
//         marginLeft: "calc(50% - 11px)",
//         color : "red",
//         cursor : "pointer",
//     },
//     Action_Icon  : {
//         display : "block",
//         width : "22px",
//         height : "22px",
//         marginLeft: "calc(50% - 11px)",
//         cursor : "pointer"
        
//     },
//     linkStyle : {
//         textDecoration : "none",
//         color: "black",
//         cursor: "pointer"
//     },
//     tagstyle:{
//         position : "relative",
//         bottom: "5px",
//         paddingLeft: "10px"
//     },
//     InfoStyle:{
//         display: "block"
//     }
// }


export const Icon = ({name, tag}) => {

    const [like , setLike] = useState(false)
    if(tag)
    {
        switch(name)
        {
            case "BiMailSend":
                return (
                <div  className="InfoStyle">
                    <BiMailSend className="Icon"/>
                    <span className="tagStyle">{tag}</span>
                </div>
                )
            case "BiPhone":
                return (
                <div  className="InfoStyle">
                    <BiPhone  className="Icon"/>
                    <span className="tagStyle">{tag}</span>
                </div>
                )
            case "BiGlobe":
                return (
                <div  className="InfoStyle">
                    <BiGlobe className="Icon"/>
                    <a className="linkStyle" href={tag}><span className="tagStyle">{tag}</span></a>
                </div>
                )
            default: 
                return null;  
        }
    }
    switch(name)
    {
        case"BiHeart":
            return <BiHeart onClick = {()=>setLike(!like)}  className={`Action_Icon ${like? "_1" : ""}` }/>
        case"BiEditAlt":
            return <BiEditAlt className="Action_Icon"/>
        case"BiTrashAlt":
            return <BiTrashAlt className="Action_Icon"/> 
        default: 
            return null;   
    }
   
  
}



Icon.propTypes = {
    name : PropTypes.string,
    tag: PropTypes.string,
}