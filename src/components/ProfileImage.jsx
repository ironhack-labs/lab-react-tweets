import React, {Component} from "react";
import photo from '../../assets/images/vaca.png'

class CardProfile extends Component {
    render(){
        return(
            <div>
                <img src={photo} alt={'Vaca'} />
                
            </div>
        )
    }
}

export default CardProfile