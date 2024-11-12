// Simulate some users in the system
const MOCK_USERS = [
    { username: 'admin', password: '123', role: 'ADMIN',reservations:["Cherokee Nation","Ak-Chin Indian Community","Cayuga","Hualapai Tribe"] },
    { username: 'niogems', password: '123', role: 'USER',reservations:["Cayuga","Hualapai Tribe"]},
  ];

  
  // Simulate token generation
  const generateToken = (user) => {
    return btoa(JSON.stringify({
      username: user.username,
      role: user.role,
      exp: Date.now() + (60 * 60 * 1000) // 1 hour expiration
    }));
  };
  /**
   * AuthenticationService: login, logout, getCurrentUser, isAuth
   */
  export class AuthenticationService {
    loginAsync(username, password) {
      return new Promise((resolve, reject) => {
        // Simulate API call delay
        setTimeout(() => {
          const user = MOCK_USERS.find(
            u => u.username === username && u.password === password
          );
  
          if (user) {
            const token = generateToken(user);
            let userData = {
              name: user.username,
              role: user.role,
              reservations:user.reservations,
              token
            };
            
            // Store in localStorage
            localStorage.setItem('user', JSON.stringify(userData));
            
            resolve(userData);
          } else {
            console.log('Invalid username or password');
            reject(new Error('Invalid username or password please check it'));
            //reject(null);
          }
        }, 500); // Simulate network delay
      });
    }
    setResvRightsAsync(user,reservation){
      console.log("Service is called ",reservation,user);
      return new Promise((resolve, reject) => {
        // Simulate API call delay
        setTimeout(() => {
          if (!user) reject(new Error('Not Valid User'));

          let userData = user; //JSON.parse(user);
            // Check token expiration and also need to check the token is valid
          const tokenData = JSON.parse(atob(userData.token));
          if (tokenData.exp < Date.now()) reject(new Error('Expired Invalid Token'));
          
          const oUser = MOCK_USERS.find(u => u.username === user.name);
          const isInclude=oUser.reservations.includes(reservation);
          if(!isInclude) reject(new Error(`No rigt to access this reservation${reservation}`));
            
          userData = {
              name: user.name,
              role: user.role,
              reservations:user.reservations,
              resrvRights:["mapviewer","dataviewer"],
              token:user.token
            };
            
            // Store in localStorage
          localStorage.setItem('user', JSON.stringify(userData));
            
          resolve(userData);
          
        },500);
       }); // Simulate network delay
    }
  
    logout() {
      return new Promise((resolve) => {
        setTimeout(() => {
          localStorage.removeItem('user');
          resolve(true);
        }, 300);
      });
    }
  
    getCurrentUser() {
        const user = localStorage.getItem('user');
          if (user) {
            const userData = JSON.parse(user);
            
            // Check token expiration
            const tokenData = JSON.parse(atob(userData.token));
            if (tokenData.exp < Date.now()) {
              localStorage.removeItem('user');
               return null
            } else {
              return userData;
            }
          } else {
            return null;
          }
        
    }
  
    isAuth() {
      const user=this.getCurrentUser();
      return user?!!user:false;
    }
}