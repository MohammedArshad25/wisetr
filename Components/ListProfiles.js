import React from "react";
import {connect } from "react-redux"
import {Profile} from "./Profile";
import {DeleteItem} from "../actions";
import Modal from "./modal";

let profileStyles = {
    container : {
        display : "flex",
        flexDirecton : "row",
        flexWrap : "wrap",
        justifyContent : "space-around"
    },
}

class ListProfiles extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showModal: false,
          profile : {}
        };
        this.setModal = this.setModal.bind(this);
    }
    setModal(profile){
        this.setState({showModal: !this.state.showModal,
            profile : profile
        })
        console.log(this.state.showModal)
    } 
    renderList(){
        console.log(this.props.ListData)

        return this.props.ListData.map((profile) => {
            let  removeId = (id) => {
                this.props.DeleteItem(id-1);
                console.log(this.props.ListData)
            }
            return <Profile  key={profile.id} 
                            name={profile.name} 
                            email={profile.email} 
                            mobile={profile.phone} 
                            profile_url={profile.website} 
                            removeItem={()=>removeId(profile.id)}
                            showModal={()=>this.setModal(profile)}/>
        })
    }
    render(){

     return(
         <div style={profileStyles.container}>
             {this.renderList()}
             {this.state.showModal&& (
            <Modal show={this.state.showModal} id="10">
              <div className="center">
                <button className="close" onClick={()=>this.setModal(undefined)}>X</button>
              </div>
              <br />
              <form>
              <div className="email">
                  <label htmlFor="name">Name</label>
                  <input type="email" value={this.state.profile.name} name="name" />
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input type="email" value={this.state.profile.email} name="email" />
                </div>
                <div className="email">
                  <label htmlFor="phone">Phone</label>
                  <input type="phone" value={this.state.profile.phone} name="phone" />
                </div>
                <div className="email">
                  <label htmlFor="website">Website</label>
                  <input type="text" value={this.state.profile.website} name="website" />
                </div>
                <br />
                <div className="submit">
                  <button type="button" className="btn" >cancel</button>
                  <button type="button" className="btn" >ok</button>
                </div>
              </form>
            </Modal>)}
         </div>
        )
    }
}

const mapStateToProps = state => { 
    return {ListData : state.DeleteItem};
};

export default  connect(mapStateToProps, {DeleteItem})(ListProfiles);