
import {Component} from 'react';
import {Box,Typography,withStyles} from "@material-ui/core";
import logo from "../src/images/covid.jpg";
import Cards from "../src/components/Crads.jsx";
import { fetchData } from './service/api';
import Countries from "./components/Countries.jsx"
import Chart from './components/Chart';

const style={
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  },
  header:{
    background:"#F5F5F5",
    width:400,
    textAlign:'center',
    fontSize:20,
    padding:20 ,
    color:'#777'
  },
  lastUpdated:{
    color:'#777',
    fontSize:12
  }
}
//Box-->I gives div tag
class App extends Component{
  state={
    data:{},
    country:''
  }
  async componentDidMount()
  {
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
    console.log(fetchedData);
  }
  handleCountryChange=async (country)=>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country})
    console.log(fetchedData);
  }

  render(){
  const {data}=this.state;
  
    return(
      <Box className={this.props.classes.container}> 
        <Box className={this.props.classes.header}>COVID-19 CORONAVIRUS PANDEMIC</Box> 
        <Typography className={this.props.classes.lastUpdated}>Last Updated {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        <img style={{width:350}} src={logo} alt="covid"  />
        <Cards data={data}/>
        <Countries handleCountryChange={this.handleCountryChange}/>
        <Chart
        data={data}
        />
      </Box>
     
    )
  }
}
export default withStyles(style)(App);
