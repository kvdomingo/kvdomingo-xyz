import React from "react";
import {
  MDBNavbar as Navbar,
  MDBNavbarBrand as NavbarBrand,
  MDBNavbarNav as NavbarNav,
  MDBNavLink as NavLink,
  MDBNavItem as NavItem,
  MDBNavbarToggler as NavbarToggler,
  MDBCollapse as Collapse,
  MDBDropdown as Dropdown,
  MDBDropdownToggle as DropdownToggle,
  MDBDropdownMenu as DropdownMenu,
  MDBDropdownItem as DropdownItem,
} from "mdbreact";
import { Image } from "cloudinary-react";
import { Link, withRouter } from "react-router-dom";

const bigLogoHeight = "70px",
  smallLogoHeight = "50px",
  dropdownItems = [
    { name: "Photography", path: "/photography" },
    { name: "Coursework", path: "/svip" },
    { name: "Web Development", path: "/dev" },
  ],
  navbarItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "CV", path: "/cv" },
  ];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "rgba(0, 0, 0, 0.0)",
      dropdownOpen: false,
      fixed: "fixed-top navbar-dark",
      isOpen: false,
      navBrand: "logo/logo-white",
      navBrandHeight: bigLogoHeight,
      navBrandOpacity: 1,
      padY: "py-3",
    };
    this.styles = {
      navDropdown: {
        backgroundColor: "rgba(255, 255, 255, 0.90)",
      },
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleNavScroll);
    this.changePageNavStyle(window.location.pathname);
    this.props.history.listen(() => this.changePageNavStyle(window.location.pathname));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNavScroll);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      this.setState({ navIsOpen: false });
    }
  }

  changePageNavStyle = pathName => {
    if (pathName === "/") {
      this.setState({
        background: "rgba(0, 0, 0, 0.0)",
        fixed: "fixed-top navbar-dark",
        navBrand: "logo/logo-white",
        navBrandOpacity: 0,
      });
    } else {
      this.setState({
        background: "rgba(255, 255, 255, 0.90)",
        fixed: "navbar-light",
        navBrand: "logo/logo-black",
        navBrandOpacity: 1,
      });
    }
  };

  handleNavScroll = () => {
    if (window.scrollY < 30) {
      if (window.location.pathname === "/") {
        this.setState({
          background: "rgba(0, 0, 0, 0.0)",
          navBrandOpacity: 0,
        });
      }
      this.setState({
        navBrandHeight: bigLogoHeight,
        padY: "py-3",
      });
    } else {
      if (window.location.pathname === "/") {
        this.setState({
          background: "rgba(0, 0, 0, 0.90)",
          navBrandOpacity: 1,
        });
      }
      this.setState({
        navBrandHeight: smallLogoHeight,
        padY: "py-1",
      });
    }
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  openDropdown = () => {
    this.setState({ dropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ dropdownOpen: false });
  };

  render() {
    return (
      <Navbar
        expand="lg"
        className={`navbar-slick px-5 ${this.state.fixed} ${this.state.padY}`}
        style={{
          background: this.state.background,
          boxShadow: "none",
        }}
      >
        <NavbarBrand>
          <Link to="/">
            <Image
              publicId={this.state.navBrand}
              cloudName="kdphotography-assets"
              secure={true}
              alt="Kenneth V. Domingo logo"
              height={this.state.navBrandHeight}
              className={`navbar-slick-brand`}
              style={{ opacity: this.state.navBrandOpacity }}
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbar" isOpen={this.state.isOpen} navbar>
          <NavbarNav right>
            {navbarItems.map(({ name, path }, i) => (
              <NavItem key={i}>
                <NavLink to={path} className="section-header">
                  {name}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={() => ""}
                onMouseEnter={this.openDropdown}
                onMouseLeave={this.closeDropdown}
              >
                <DropdownToggle nav>
                  <span className="mr-2 section-header">Portfolio</span>
                </DropdownToggle>
                <DropdownMenu right basic>
                  {dropdownItems.map(({ name, path }, i) => (
                    <DropdownItem key={i}>
                      <Link to={path}>{name}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
