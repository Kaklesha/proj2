import {createContext} from 'react'

export const AuthContext = createContext()


const AuthProvider =({children})=>{
const [user,setUser] =useState(null)

    return <div>

    <AuthContext.Provider value={{user,setUser}}>
        AuthProvider
    </AuthContext.Provider>

    </div>
}
export default AuthProvider