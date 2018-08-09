const axios = require ('axios');


module.exports ={
    getPerson:()=>{ 
        return axios.get('https://swapi.co/api/people/1').then((res)=>{return res.data})
      },
      getStarship:(id)=>{
          return axios.get('https://swapi.co/api/starships/9').then(res=>{return res.data})
      },
}