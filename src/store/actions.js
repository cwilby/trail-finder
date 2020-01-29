import axios from './axios'; 

export default {
  async requestMagicLink({ commit }, email) {
    return await axios.post('me/link', { email });
  },

  async login({ commit }, emailToken) {
    const { data } = await axios.post('me/login', { emailToken });    
  }
};