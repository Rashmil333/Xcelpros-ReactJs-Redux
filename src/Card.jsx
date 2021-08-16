import React,{useState} from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useSelector} from "react-redux";


const Card=(props)=>{
	const curr_name=useSelector((state)=>state.current);
	return(<>

		{curr_name==props.email?
				<>
			<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" id="card_my">
		<MoreVertIcon/><StarBorderIcon style={{float:'right'}}/>
		<br/>
		<span id="arc">
			<img src='https://cdn.mygodimages.com/mygodimg/preview/artistic-lord-krishna-images-black-background-116045181835lcx0f35xe.jpg' id="card_pic"/>
		</span>
		<h5 style={{textAlign:'center'}}>{props.name}</h5>
		<h6 style={{textAlign:'center',color:'grey'}}>Krishna</h6>
		<MailOutlineIcon/> <span style={{float:'right'}}>{props.email}</span><br/>
		<CallIcon/> <span style={{float:'right'}}>8601279470</span>
        </div>
		</>
		:
		<>
			<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" id="card">
		<MoreVertIcon/><StarBorderIcon style={{float:'right'}}/>
		<br/>
		<span id="arc">
			<img src='https://cdn.mygodimages.com/mygodimg/preview/artistic-lord-krishna-images-black-background-116045181835lcx0f35xe.jpg' id="card_pic"/>
		</span>
		<h5 style={{textAlign:'center'}}>{props.name}</h5>
		<h6 style={{textAlign:'center',color:'grey'}}>Krishna</h6>
		<MailOutlineIcon/> <span style={{float:'right'}}>{props.email}</span><br/>
		<CallIcon/> <span style={{float:'right'}}>8601279470</span>
        </div>
		</>}
	</>)
}
export default Card;
