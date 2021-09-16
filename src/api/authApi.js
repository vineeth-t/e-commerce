export const Users=[{
    userName:'god',
    password:'tanay'
  },{
      userName:'test',
      password:'test'

  }]
  export function findUserByUserName(userName){
    return Users.find((user)=>user.userName===userName)
  }
export function fakeAuthApI(userName,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const user= findUserByUserName(userName)
            if(user?.password===password && user?.password!==''){
                resolve({userLoginStatus:true,status:200})
            }reject({userLoginStatus:false,status:401})
        },2000)
        
    })
}
    