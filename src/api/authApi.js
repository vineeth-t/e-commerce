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
    
export function SignUpApi(fname, lname, emailId, password, confirmPassword){
    return new Promise((resolve,reject)=>{
        const user=findUserByUserName(emailId)
        if(user){
            Users.concat({fname, lname, emailId, password, confirmPassword})
            resolve({success:true,status:200})
            
        }else{
            reject({success:false,status:401})
        }
    })
}