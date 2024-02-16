import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDvUfHhxe-VrERs39Eme3Wxoag39BS6-u0",
  authDomain: "zomato-clone-710bd.firebaseapp.com",
  projectId: "zomato-clone-710bd",
  storageBucket: "zomato-clone-710bd.appspot.com",
  messagingSenderId: "985380064642",
  appId: "1:985380064642:web:c64bb196ae166097d8139b",
  measurementId: "G-7B4VHE0N0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
