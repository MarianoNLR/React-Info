import { Component, Fragment } from "react";
import Header from '../components/Header'
import CardComponent from '../components/CardComponent'
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

class HomePage extends Component{

    constructor(props){
        super(props);

        this.state = {
            titulo: "",
            texto: "",
            imagen: null
        };
    }

    render(){
        return(
            <Fragment>
                <Header></Header>
                <div className="container d-flex ">
                    <div className="row">
                        <CardComponent titulo="The Complete React Web Developer Course (with Redux)" texto="Learn how to build and launch React web applications using React v16, Redux, Webpack, React-Router v4, and more!" imagen={image1}></CardComponent>
                        <CardComponent titulo="Server Side Rendering with React and Redux" texto="Build React, Redux, and React Router apps using Server Side Rendering (SSR), Isomorphic, and Universal JS techniques" imagen={image2}></CardComponent>
                        <CardComponent titulo="React - The Complete Guide" texto="Dive in and learn React from scratch! Learn Reactjs, Redux, React Routing, Animations, Next.js basics and way more!" imagen={image3}></CardComponent>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default HomePage
  