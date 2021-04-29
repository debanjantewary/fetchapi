import React  from 'react'
import "./App.css";
import "./carbon.png";

class UserData extends React.Component {
 
 state={
          loading: true,
          person: null
 };

 async componentDidMount(props) {

        const url = "https://api.randomuser.me/"
        const res = await fetch(url);
        const data =await res.json();
        this.setState({ person: data.results[0], loading: false});

        // console.log(data.results[0]);

     }
 
 
 
    render(){

    return (
      
        <div>

            {this.state.loading || !this.state.person ?
            
            (<div>
            <div class="loader"></div>    
            </div>) : 
            (
<>
            <div className="profile-card">
            <div>{this.state.person.name.first} {this.state.person.name.last}</div>
            <div>{this.state.person.email}</div>
            <div><img alt="uimg"src={this.state.person.picture.large}/></div>

            </div>
</>
            )}
 
    

        </div>

  

    )

    
  }
}

export default UserData



      
        // 

 
        // div>
