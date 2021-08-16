const initialData='rashmilrajpoot333@gmail.com';

const current=(state=initialData,action)=>{
	switch(action.type){
		case "CURR_USER":return state=action.email;
		default:return state
	}
}

export default current;