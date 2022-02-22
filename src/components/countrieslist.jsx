import { Component } from "react";
import { Link } from "react-router-dom";
import countriesData from "../countries.json"

class CountriesList extends Component{
    state ={
        countries: []
    }


    render(){
        const {countries} = this.state
        return(
            
            <div> 
                { countriesData.map((country) => 
                    ) }
                <Link>
                codigo del pais
                </Link>
            </div>
        )
    }
}

export default CountriesList;