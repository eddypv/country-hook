import axios from 'axios'
const URL = 'https://restcountries.eu/rest/v2'

const searchFullName = async(name) =>{
  try{
    const urlFullName = `${URL}/name/${name}?fullText=true`
    const {data} = await axios.get(urlFullName)
    const {capital, population, flag} = data[0]
    return {
      data:{
        capital,
        population,
        flag
      },
      found:true
    }
  }catch(error){
    if(error.response){
      const {response} = error
      if(response.status === 404){  
        return  {
          data:{},
          found:false
        }
      }
    }
    throw new Error('Error connect Country service')
    
  }
  
}
export default  {searchFullName} 
