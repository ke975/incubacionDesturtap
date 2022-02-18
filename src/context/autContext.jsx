import {createContext,useState,useEffect} from 'react'
import {auth, firebase} from '../services/firebase'


export const AuthContext = createContext({})


export function AuthContextProvider(props){

useEffect(()=>{
     auth.onAuthStateChanged(user=>{
    if(user){
        const{displaName,photoURL,uid} = user;

        if(!displaName || !photoURL){
            throw new Error("Missing information from Google Acount")
        }
            setUser({
                id:uid,
                name:displaName,
                avatar:photoURL
            })

    }

    })
 
},[])

const [user,setUser] = useState()
        
async function sigInWithGoogle(){

  const provider = new firebase.auth.GoogleAuthProvider();

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


async function sigInWithFacebook(){

    const provider = new firebase.auth.FacebookAuthProvider()
  
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

return (
    <AuthContext.Provider value={{user, sigInWithGoogle,sigInWithFacebook}}>
        {props.children}
    </AuthContext.Provider>
    
    
        )


}