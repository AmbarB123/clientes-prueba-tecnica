import {ref, computed, onMounted} from 'vue'
import { defineStore } from "pinia";
import { useFirebaseAuth} from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { useRouter } from "vue-router";

interface ErrorCodes {
 [key: string]: string;
}

export const useAuthStore = defineStore('auth', () => {

 const auth:any = useFirebaseAuth()
 const router = useRouter()
 const errorMessage = ref('')
 const authUser = ref(null)

  const errorCodes: ErrorCodes = {
   'auth/invalid-credential' : 'Usuario no encontrado',
   'auth/wrong-password' : 'El password es incorrecto'
 }

 onMounted( () => {
   onAuthStateChanged(auth, (user) => {
      if (user) {
         console.log(user);
         authUser.value = user
      }
   })
 })

 const login = ({email, password}: {email: string, password: string}): void => {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user
         authUser.value = user
         router.push({name: 'admin-clientes'})
      })
      .catch(error => {
         errorMessage.value = errorCodes[error.code]
      })
 }

 const logout = () => {
   signOut(auth).then( () => {
      authUser.value = null
      router.push({name: 'login'})
   }).catch( error => {
      console.log(error);
      
   })
 }

 const hasError = computed( () => {
  return errorMessage.value
 })

 const isAuth = computed(() => {
   return authUser.value
 })

 return{
  login,
  logout,
  hasError,
  errorMessage,
  isAuth
 }
})