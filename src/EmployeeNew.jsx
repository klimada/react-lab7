import React from 'react'

class EmployeeNew extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        age: 17,
        isActive: true,
      };
      this.somethingChanged = this.somethingChanged.bind(this);
      this.isActiveChanged = this.isActiveChanged.bind(this);
    }

    somethingChanged(event) {
        this.setState({
            [event.target.name]: event.target.value, 
        });
    }

    isActiveChanged(event) {
        const isActive = event.target.checked;
        this.setState({isActive});
    }

    render() { 
        const { age } = this.state;
        return (
            <div>
            <form style={{ margin: "15px 0 0 50px" }} > 
                <label style={{ margin: "15px 0 0 50px" }}> Age <input type="number" value={age} name="age" onChange={this.somethingChanged}/></label>
                <br></br>
                {(age >= 18) ? <label style={{ margin: "15px 0 0 50px"}}> Name: <input type="text"  /> </label>
                             : <label style={{ margin: "15px 0 0 50px" }}>Parent Name:<input type="text"  /></label>}
                <br></br>
                {(age >= 18) ? <label style={{ margin: "15px 0 0 50px" }}> Email: <input type="text" /></label>
                             : <label style={{ margin: "15px 0 0 50px" }}> Parent Phone No: <input type="text" /></label>}
                <br></br>
                <input type="submit" value="Submit" style={{ margin: "15px 0 0 250px" }}/>
              </form>
        </div>          
        );
    }
}
export default EmployeeNew; 