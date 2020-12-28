import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonInicio = () => {


  return (
    <Fragment>
        <div className="text-decoration-none my-3">
        <a href="#catalogo">
            <MDBBtn outline color="white">GALERIA</MDBBtn></a>
        <a href="#contacto">    
            <MDBBtn outline color="white">CONTACTO</MDBBtn></a>
      </div>
    </Fragment>
  );
}

export default ButtonInicio;