import {auth, provider} from "./firebase";
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Auth = (props) => {
    const { setIsAuth } = props;

    const signInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken)
            setIsAuth(true); 
        } catch(error){
            console.error(error);
        }
        
    }

    return(
        <div className="auth">
            <p>Sign in with Google</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
export default Auth;