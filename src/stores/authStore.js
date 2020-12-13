import { makeAutoObservable } from "mobx";
import axios from "axios";
import decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    this.user = decode(token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };

  signup = async (userData) => {
    try {
      const res = await axios.post("http://localhost:8001/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await axios.post("http://localhost:8001/signin", userData);
      console.log(decode(res.data.token));
      this.setUser(res.data.token);
      console.log(this.user);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
  signout = () => {
    delete axios.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
