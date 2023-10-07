export default class AuthManager {
  async checkAuth () {
    try {
      const token = await localStorage.getItem('ACCESS_TOKEN'); 
      if (token) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
    }
    
  }
}


  