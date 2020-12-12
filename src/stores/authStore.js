import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import decode from 'jwt-decode'

class AuthStore {
  user = null
  constructor() {
    makeAutoObservable(this)
  }

  signup = async (userData) => {
    try {
      const res = await axios.post('http://localhost:8001/signup', userData)
      this.user = decode(res.data.token)
    } catch (error) {
      console.log('AuthStore -> signup -> error', error)
    }
  }

  signin = async (userData) => {
    try {
      const res = await axios.post('http://localhost:8001/signin', userData)
      console.log(decode(res.data.token))
      this.user = decode(res.data.token)
      console.log(this.user)
    } catch (error) {
      console.log('AuthStore -> signin -> error', error)
    }
  }
}

const authStore = new AuthStore()

export default authStore
