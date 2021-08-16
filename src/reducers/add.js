const initialData={
    list:[]
}
const add=(state=initialData,action)=>
{
    switch(action.type)
    {
        case "ADD":
            // const email=action.payload;
            console.log(state);
            return{
                ...state,
                list:[
        
                    ...state.list,
                    {
                        id:action.payload.id,
                        email:action.payload.email,
                        pass:action.payload.pass,
                        fullname:action.payload.fullname
                    }
        
                ]
            };
        
        default: return state;
    }
}
export default add;