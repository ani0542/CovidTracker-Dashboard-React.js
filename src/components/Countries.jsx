import { Typography,NativeSelect } from "@material-ui/core";
import { useEffect,useState } from "react";
import { fetchedcountries } from "../service/api";


const Countries=({handleCountryChange})=>{
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            setCountries(await fetchedcountries());
        }
        fetchApi();
    },[])
    return(
        <>
        <Typography style={{marginBottom:20}} varient="h5" color="textSecondary">Reported Cases or Death by Country or Territory</Typography>
        <NativeSelect onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value=" ">United States</option>
            {countries.map((country,i)=>{
                return(
                <option key={i} value={country}>{country}</option>
                )
            })}
        </NativeSelect>
        </>
    )

}
export default Countries;