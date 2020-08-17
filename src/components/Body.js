import employees from "../lib/employees.json";
import React from "react";
import Search from "./Search";
import Table from "./Table";

class Body extends React.Component{
    state={
        employees:employees,
        filteredEmployees:employees,
        order: "descend"
    }
    handleSearch=event=>{
        var searchValue=(event.target.value).toLowerCase();
        var filteredEmployees=this.state.employees.filter(employee=>{
            var userString=Object.values(employee).join("").toLowerCase();
            return userString.includes(searchValue);
        });
        this.setState({filteredEmployees:filteredEmployees});
    }
    handleSort=()=>{
        if(this.state.order==="descend"){
            var ascendEmployees=this.state.filteredEmployees.sort((a,b)=>a.name > b.name ? 1:-1);
            this.setState({filteredEmployees:ascendEmployees, order:"ascend"})
        }else{
            var descendEmployees=this.state.filteredEmployees.sort((a,b)=>a.name < b.name ? 1:-1);
            this.setState({filteredEmployees:descendEmployees, order:"descend"})
        }
    }
    render(){
        return(
            <div>
                <Search handleSearch={this.handleSearch}/>
                <Table employees={this.state.filteredEmployees} handleSort={this.handleSort}/>
            </div>
        )
    }
}

export default Body;