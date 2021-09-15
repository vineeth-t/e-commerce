import './loginCard.css'
export function Login(){
    return(
        <>
        
            <form className='loginCard'>
                <div >
                    <label> UserName : </label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password'/>
                </div>
                <button className='btn-logIn'>LogIn</button>
            </form>
        </>
    )
}