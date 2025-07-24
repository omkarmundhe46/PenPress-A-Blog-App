import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import userContext from "../context/userContext";

const CustomNavbar = () => {
    const userContextData = useContext(userContext)
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())
    }, [login])

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const logout = () => {
        doLogout(() => {
            setLogin(false)
            userContextData.setUser({
                data: null,
                login: false
            })
            navigate("/")
        })
    }

    return (
        <div>
            <Navbar
                light
                expand="lg"
                className={`modern-navbar px-4 py-3 ${scrolled ? 'scrolled' : ''}`}
                style={{ position: 'sticky', top: 0, zIndex: 1000 }}
            >
                <NavbarBrand tag={ReactLink} to="/" className="navbar-brand-modern">
                    BlogSpace
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="border-0" />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/" className="nav-link-modern">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about" className="nav-link-modern">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/services" className="nav-link-modern">
                                Services
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown inNavbar nav>
  <DropdownToggle caret nav className="nav-link-modern">
    More
  </DropdownToggle>
  <DropdownMenu className="modern-card border-0 mt-2">
    <DropdownItem tag={ReactLink} to="/services" className="py-2">
      Contact Us
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem
      className="py-2"
      tag="a"
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </DropdownItem>
    <DropdownItem
      className="py-2"
      tag="a"
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      YouTube
    </DropdownItem>
    <DropdownItem
      className="py-2"
      tag="a"
      href="https://www.instagram.com/omkarrr__46/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </DropdownItem>
    <DropdownItem
      className="py-2"
      tag="a"
      href="https://www.linkedin.com/in/omkarmundhe/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown>

                    </Nav>

                    <Nav navbar className="align-items-center">
                        {login ? (
                            <>
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav className="nav-link-modern d-flex align-items-center">
  <img 
    src={user?.image || "/images/default-avatar.png"} 
    alt="profile"
    className="rounded-circle me-2"
    style={{ width: '32px', height: '32px', objectFit: 'cover' }}
  />
  <span className="d-none d-md-inline">{user?.name || user?.email}</span>
</DropdownToggle>
                                    <DropdownMenu end className="modern-card border-0 mt-2">
                                        <DropdownItem tag={ReactLink} to={`/user/profile-info/${user?.id}`} className="py-2">
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/user/dashboard" className="py-2">
                                            Dashboard
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={logout} className="py-2 text-danger">
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </>
                        ) : (
                            <>
                                <NavItem className="me-2">
                                    <NavLink tag={ReactLink} to="/login" className="nav-link-modern">
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/signup" className="btn-primary-modern btn-modern text-decoration-none px-3 py-2">
                                        Sign Up
                                    </NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;