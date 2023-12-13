import {auth, provider} from "../ParkingChat.js";
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Auth = () => {

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        cookies.set("auth-token", result.user.refreshToken)
    }

    return(
        <div className="auth">
            <p>Sign in with Google</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
export default Auth;