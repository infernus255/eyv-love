import React, { useState, useEffect} from "react";
import { Navbar, Nav } from "react-bootstrap";

import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";

//Views
import ViewGallery from "../views/ViewGallery.jsx";

//Components
import LoginModal from "../components/LoginModal";

//Consts
import { user } from "../consts.js";

function Header() {
  //State
  const [view, setView] = useState("Galeria");

  const [showModalLogin, setShowModalLogin] = useState(false);

  const [userName, setUserName] = useState(localStorage.getItem("Usuario")?localStorage.getItem("Usuario"):"Invitado");
  const [pass, setPass] = useState(localStorage.getItem("Contrasena"));

  useEffect(()=>
      {
        setUserName(localStorage.getItem("Usuario"));
        setPass(localStorage.getItem("Contrasena"));
      },[userName,pass]
  )

  //Functions
  const changeView = (view) => setView(view);

  const seeViewUser = () => <ViewGallery />;

  const handleLogout = () => {
      localStorage.setItem("Usuario","Invitado")
        setUserName("Invitado");
    };

  const seeViewGuest = () => (
    <ViewGallery />
  );

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet"
        media="all"
      ></link>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => changeView("Galeria")} href="#">
          E y V
        </Navbar.Brand>
        <Nav className="mr-auto">
          {userName === user.Usuario &&
          pass === user.Contrasena ? (
            <>
              <Nav.Link onClick={() => changeView("Galeria")} href="#">
                Galeria
              </Nav.Link>
              )
            </>
          ) : (
            <>
              <Nav.Link onClick={() => changeView("Galeria")} href="#">
                Galeria
              </Nav.Link>
              )
            </>
          )}
        </Nav>

        <DropdownMenu trigger="" position="left" userName={userName}>
          <MenuItem text="Login" onClick={() => setShowModalLogin(true)} />
          
          <MenuItem text="Logout" onClick={handleLogout} />
        </DropdownMenu>

        
      </Navbar>
      {userName=== user.Usuario &&
      pass=== user.Contrasena
        ? seeViewUser()
        : seeViewGuest()}
        <LoginModal show={showModalLogin} onHide={() => setShowModalLogin(false)} setPass={(pass)=>setPass(pass)} setUser={(user)=>setUserName(user)} />
    </div>
  );
}

export default Header;
