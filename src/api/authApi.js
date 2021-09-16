export const Users={
    userName:'god',
    password:'tanay'
  }
export function fakeAuthApI(userName,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userName===Users.userName&&password===Users.password){
                resolve({userLoggedIn:true,status:200})
            }reject({userLoggedIn:false,status:401})
        },2000)
        
    })
}
    