import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBCol } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import FooterBecky from './componentes/footer';
import ButtonInicio from './componentes/btn';
import img08 from "./assets/img/img08.png"
import imagenes from "./assets/img/imagenes"


class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand >
                <strong>Becky Home</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="#">Inicio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-1">Catalogo</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem header className="text-center shadow-1"><strong>GALERIA</strong></MDBDropdownItem>
                      <MDBDropdownItem href="#!">Almohadones</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Mandalas</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Manteles</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contacto</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView img src={img08}>
            <MDBMask overlay="pink-strong" className="flex-center flex-column text-white">
              <h2><strong>BECKY HOME & DECO</strong></h2>
              <h4>Decoracion personalizada artesanal.</h4>
              <ButtonInicio>
                <noscript>botones galeria y contacto</noscript>
              </ButtonInicio>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center mt-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
          <section id="sobrebecky">
          </section>
          <MDBContainer>
            <section id="galeria">
              <h2 className="text-center my-3"><strong>GALERIA</strong></h2>
                <div className="row">
                  <div className="col-lg-4 col-md-4 my-3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={imagenes.img01}
                        waves />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="col-lg-4 col-md-4 my-3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={imagenes.img02} 
                        waves />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="col-lg-4 col-md-4 my-3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={imagenes.img03}
                        waves />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 my-3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={imagenes.img04}
                        waves />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="col-lg-4 col-md-4 my-3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={imagenes.img05}
                        waves />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="col-lg-4 col-md-4 my-3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={imagenes.img06}
                        waves />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </div>
            </section>
          </MDBContainer>
          <section id="contacto">

          </section>
        </main>
        <footer id="footer">
          <div>
            <FooterBecky>
            </FooterBecky>
          </div>
        </footer>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;