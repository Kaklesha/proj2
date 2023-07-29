
import { useAuth } from "../../../../hooks/useAuth";

const Header =()=>{
    const [user, setUser] = useAuth();
    return     user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
        </>
      ) : (
        <>
          <h2>You need auth</h2>
          <button onClick={()=>setUser({name:"Max",})}>login</button>
        </>
      )
}
export default Header