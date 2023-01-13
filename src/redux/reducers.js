
const initState={
    count:0
};

export const reducer = (state=initState,payload)=>{
    const { action, type } = payload;
    console.log(action,type);
    return state;
}
