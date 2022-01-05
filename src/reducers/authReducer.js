export function authReducer(state,{type,payload}){
    switch(type){
        case 'SET-USER-NAME':
            return {...state,userName:payload}
        case 'SET-PASSWORD':
            return{...state,password:payload}
        case 'LOGIN':
            return {...state,login:true,
                             userName:payload.fname,
                             userId:payload.userId,
                             token:payload.token
                            }
        case 'LOGOUT':
            return {...state,login:false,userName:'',password:''}
        default: 
            return {...state}
    }
}