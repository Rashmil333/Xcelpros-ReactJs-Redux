export const addData=(edata,pdata,fullname)=>
{
    return (
        {
            type:"ADD",
            payload: {
                id:new Date().getTime().toString(),
                email:edata,
                pass:pdata,
                fullname:fullname
               
            }
        }
    )
}