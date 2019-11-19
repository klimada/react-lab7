import React from 'react'

class Employees extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      employees:[],
      isloading:true,
    
    }
    
  }


componentDidMount(){
    let url ="http://localhost:3001/employees"
    fetch(url)
        .then(resp => resp.json())
        .then(employees =>{
          this.setState({employees:employees,isloading:false});
        });
  }

colorofEmployee(a){
  if(a)
    return "blue";
  else
   return "red";
}

  render() {
    const { employees, isloading,} = this.state;
    return isloading ? <p>Loading ...</p> :
      <div>
        {employees.map((employee, index) => {
          return (
            <table style={{ margin: "15px 0 0 15px" }} key={employee.id}>
              <tbody >
              <tr style={{color:this.colorofEmployee(employee.isActive)}}>
                 <td >{employee.name}   {employee.age}</td>
              </tr>
              </tbody>    
            </table>
          )})
        }
        
      </div>
    ;
    
  }
}


export default Employees