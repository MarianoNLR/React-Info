import { Component } from "react";
import { Card } from 'react-bootstrap';

class CardComponent extends Component{
    constructor(props){
        super(props);

        this.state = {   
        };

    }

        render(){
            return(
                
                <div className="col-md-4">
                    <Card>
                        <Card.Img variant="top" src={this.props.imagen} />
                        <Card.Body>
                            <Card.Title>{this.props.titulo}</Card.Title>
                            <Card.Text>
                            {this.props.texto}
                            </Card.Text>
                            <Card.Link href="#">Go to Course</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            )
    }
}

export default CardComponent