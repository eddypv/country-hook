import { useState, useEffect } from "react"
import countryService from '../service/country'
export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const getCountry = async()=>{
      const data = await countryService.searchFullName(name)
      setCountry(data)
    }
    getCountry()
  }, [name])

  return country
}
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}