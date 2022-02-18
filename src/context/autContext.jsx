import {createContext,useState,useEffect,useContext} from 'react'
import {auth, firebase} from '../services/firebase'


export const AuthContext = createContext({})


export function useAuth(){
  return useContext(AuthContext)
}

export function AuthContextProvider(props){

  const [user,setUser] = useState("")
  const [userLogin,setUserLogin] = useState("")
      
async function sigInWithGoogle(){

  const provider = new firebase.auth.GoogleAuthProvider();

const result = await  auth.signInWithPopup(provider)
if(result.user)  {
  const {displayName,photoURL,uid} = result.user;

    if(!displayName || !photoURL){
      throw new Error('Missing information from Google Acount')
    }

    setUserLogin({
      id:uid,
      name:displayName,
      avatar: photoURL
    })

  
  }

}



function logout(){
  return firebase.auth.signOut()
}




async function sigInWithFacebook(){

    const provider = new auth.FacebookAuthProvider()
  
  const result = await  auth.signInWithPopup(provider)
  if(result.user)  {
    const {displayName,photoURL,uid} = result.user;
  
      if(!displayName || !photoURL){
        throw new Error('Missing information from Google Acount')
      }
  
      setUser({
        id:uid,
        name:displayName,
        avatar: photoURL
      })
  
    
    }

    
  
  }


  useEffect(()=>{
  auth.onAuthStateChanged(userLogin=>{
      if(user){
        const {displayName,photoURL,uid} = userLogin;
    
        if(!displayName || !photoURL){
          throw new Error('Missing information from Google Acount')
        }
    
        setUserLogin({
          id:uid,
          name:displayName,
          avatar: photoURL

          
        })
      }
    })
   
    }, [])







return (
    <AuthContext.Provider value={{user,logout, sigInWithGoogle,sigInWithFacebook}}>
        {props.children}
    </AuthContext.Provider>
    
    
        )


}