import React from 'react'

class EmployeeNew extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        age: 17,
        isActive: true,
        email:"",
        phone:"",
        emailisValid:true,
        phoneisValid:true,
        formactive:false,
      };
      this.somethingChanged = this.somethingChanged.bind(this);
      this.isActiveChanged = this.isActiveChanged.bind(this);
      this.validation = this.validation.bind(this);
    }

    somethingChanged(event) {
        this.setState({
            [event.target.name]: event.target.value, 
            phoneisValid:true,emailisValid:true,
        });
    }

    isActiveChanged(event) {
        const isActive = event.target.checked;
        this.setState({isActive});
    }

    validation(event)
    {
      if(this.state.age >= 18)
      {
        const emailTest = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        emailTest.test(this.state.email) ? this.setState({emailisValid: true,formactive: true}) : this.setState({emailisValid: false,formactive: false});
       }
      else
      {
        const phoneTest = /[0-9]{9}/;
        phoneTest.test(this.state.phone) ? this.setState({phoneisValid: true,formactive: true}) : this.setState({phoneisValid: false,formactive: false});
       }
    }

    render() { 
        const { age,isActive,email,phone,emailisValid,phoneisValid,formactive} = this.state;
        return (
            <div>
            <form style={{ margin: "15px 0 0 50px" }}  onSubmit={event => {event.preventDefault(); this.validation()}}> 
                <label style={{ margin: "15px 0 0 50px" }}> Age <input type="number" value={age} name="age" onChange={this.somethingChanged}/></label>
                <br></br>
                {(age >= 18) ? <label style={{ margin: "15px 0 0 50px"}}> Name: <input type="text"  /> </label>
                             : <label style={{ margin: "15px 0 0 50px" }}>Parent Name:<input type="text"  /></label>}
                <br></br>
                {(age >= 18) ? <div><label style={{ margin: "15px 0 0 50px" }}> Email: <input type="text" value={email} name="email" onChange={(event) => {this.somethingChanged(event); this.validation(event);}}/></label>
                              {!emailisValid ? <label style={{fontSize:"10px",color:"red"}}>Incorrect email address</label> : null}</div>
                             : <label style={{ margin: "15px 0 0 50px" }}> Parent Phone No: <input type="text" value={phone} name="phone" onChange={(event) => {this.somethingChanged(event); this.validation(event);}}/></label>}
                             {!phoneisValid ? <label style={{fontSize:"10px",color:"red"}}>Incorrect phone address</label> : null}
                <br></br>
                <input type="submit" value="Submit" style={{ margin: "15px 0 0 250px"}} disabled={!formactive} />
              </form>
        </div>          
        );
    }
}
export default EmployeeNew; 