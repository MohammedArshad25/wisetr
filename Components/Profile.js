import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import {Icon} from './Icon';


let ProfileStyles = {
    container: {
        height: "472px",
        width: "380px",
        background: "#F5F5F5",
        position: "relative",
        border : "1px solid grey",
        margin : "10px"
    },
    image:{
        height: "230px",
        width: "380px",
        background: "transparent"
    },
    profile_description: {
        height: "142px",
        paddingTop:"19px",
        paddingBottom:"19px",
        width: "335px",
        paddingLeft: "45px",
        background: "white",
 
    },
    profile_actions: {
        
        width: "100%",
        height: "57px",
        display : "flex",
        flexDirection : "row",
        alignItems: "center",
        borderTop : "1px solid grey"
    },
    Action_item:{
        width : "126.66px",
        borderRight: "1px solid grey"
    },
    Action_item_last:{
        width : "126.66px",

    }
}

//http:aws/cloudfront.com/something/same.jpg?api+key=asdiofhaq4897w9r

 export const Profile = ({image_url, name = name, email=email, mobile=mobile, profile_url=profile_url, removeItem, showModal}) => {
    //  create image url dynamically from the https://avatars.dicebear.com/v2/avataaars/rafivun.svg
    const userImageUrl = `https://avatars.dicebear.com/v2/avataaars/${name}.svg`;
    const userProfile = {

    }

    return (
    <div style={ProfileStyles.container}>
        <img style={ProfileStyles.image} src={userImageUrl} ></img>

        <div style={ProfileStyles.profile_description}>
            <h3>{name}</h3>
            <Icon name ="BiMailSend" tag={email}/>
            <Icon name ="BiPhone" tag={mobile}/>
            <Icon name ="BiGlobe" tag={profile_url}/>
        </div>
        <div style={ProfileStyles.profile_actions}>
            <div style={ProfileStyles.Action_item}>
                <Icon name ="BiHeart"/>
            </div>
            <div onClick={()=>showModal()}  style={ProfileStyles.Action_item}>
                <Icon name ="BiEditAlt" />
            </div>
            <div onClick={()=>removeItem()} style={ProfileStyles.Action_item_last}>
                <Icon  name="BiTrashAlt" />
            </div>
        </div>
    </div>
    )

}



Profile.propTypes = {
    image_url : PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    profile_url: PropTypes.string
}