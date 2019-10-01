const axios = require('axios');
// export const hello = ()=> 'Hello';

export const suma = (a,b)=> a+b;

export const resta = (a,b)=>a-b;


export const functions = ()=>{
  return {
    add: (a,b)=> a+b,
    isNull: ()=> null,
    checkValue: x=>x,
    createUser:()=>{
      const user={firstName: 'Brad'};
      user['lastName'] ='Traversy';
      return user;
    }
    fetchUser: ()=>axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.data)
    .catch(err=>'error')
  }
}

