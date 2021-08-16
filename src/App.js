import React,{useState} from "react";
import './App.css';
import Select from 'react-select';
import {useHistory} from 'react-router-dom';
import background from './img/weather.jpg'
import {useSelector,useDispatch} from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import InfoIcon from '@material-ui/icons/Info';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import removedata from "./actions/Delete";
import Card from "./Card";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
function App(props) {
  const history=useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const list=useSelector((state)=>state.add.list);
  const user_name=useSelector((state)=>state.current);
  const dispatch=useDispatch();


  return (<>
    
    <div style={{ backgroundImage: `url(${background})`,width:'100vw',height:'130vh',backgroundSize:'100% 100%'}}>
          <Navbar color="light" light expand="lg">
        <NavbarBrand href="/" style={{marginLeft:'30px'}}>Xcelpros</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <img  src='https://media.istockphoto.com/photos/hindu-god-krishna-picture-id175454330?k=6&m=175454330&s=612x612&w=0&h=O11Hv-bTXTlVX0kMktLQOTeh-gG1huf_RWOoeKTodHQ='id="mypic"/>

        <button className="logout" onClick={()=>{history.push("/login");}}><span id="logout_media">Logout</span><i class="fas fa-sign-out-alt"></i></button>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginLeft:'10px'}}>
              <DropdownToggle nav caret>
                Dashboard
              </DropdownToggle>
              <DropdownMenu right>
              {list.map((cvalue)=>{
                return(<>
                   <DropdownItem>
                      {cvalue.fullname}
                         <DropdownItem divider />
                </DropdownItem>
                </>)
              })}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="navitem">
              <EditIcon/>
            </NavItem>
              <DropdownItem divider />
            <NavItem className="navitem">
              <CameraRollIcon/>
            </NavItem>
              <DropdownItem divider />
            <NavItem className="navitem">
              <CardMembershipIcon/>
            </NavItem>
              <DropdownItem divider />
            <NavItem className="navitem">
              <InfoIcon/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="container" style={{width:'100vw',height:'93vh'}}>
          <div className="row">
          {list.map((cvalue)=>{
            return(<Card name={cvalue.fullname} email={cvalue.email}/>)
          })}              
            <Card/>
          </div>
      </div>
    </div>
  </>);
}
export default App;
