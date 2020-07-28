import React, {Component} from 'react';
import axios from 'axios'

class SampleComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     users: [] 
//   this.state = {
//      users: [{
//        nom:'',
//        prenom:'',
//        email:''
//      }] 
// }
  }
}



componentDidMount(prevProps, prevState) {
  console.log('cdu');
  axios.get(`http://localhost:8000/`)
  .then(response=>{
    console.log('json', response.data, response);
    // response.data.json()

    // var copyState = this.state.users.slice()
    var result = response.data.map(data=>({
      nom: data.nom, prenom: data.prenom, email: data.email
    })
    )
    this.setState({
      users:  result
    })
    console.log('map',result);
    console.log('satte',this.state);
    
  })
  
}

// componentDidMount(prevProps, prevState) {
//   console.log('cdu');
//   axios.get(`http://localhost:8000/`)
//   .then(response=>{
//     console.log('json', response.data, response);
//     // response.data.json()

//     // var copyState = this.state.users.slice()
//     var result = response.data.map(data=>({
//       nom: data.nom, prenom: data.prenom, email: data.email
//     })
//     )
//     this.setState({
//       users: [...this.state.users, result]
//     })
//     console.log('map',result);
//     console.log('satte',this.state);
    
//   })
  
// }
// componentDidMount(prevProps, prevState) {
//   console.log('cdu');
//   axios.get(`http://localhost:8000/`)
//   .then(function (response) {
//     console.log('json', response.data, response);
//     // response.data.json()

//     // var copyState = this.state.users.slice()
//     var result = response.data.map(data=>({
//       nom: data.nom, prenom: data.prenom, email: data.email
//     }),this.setState(state => {
//       const user = state.users.push(result)
//       return{
//         user
//       }
//     }) 
//     )
//     console.log('map',result);
    
//   })
  
// }



 render(){

  const friends = [
    {id:1, name: 'Dave',age:50},
    {id:2,name: 'Kellie',age:42},
    {id:3,name: 'Max',age:12},
    {id:2,name: 'Jack',age:12}
];




return (
    <div>
      This is a sample component
      <ul>
    {friends.map(p => <li key={p.id}>{p.name}</li>)}
  </ul>;
      <ul>
    {this.state.users.map(p => <li key={p.nom}>{p.nom}</li>)}
  </ul>;
      {console.log('return',this.state.users, this.state.users.map(data=>data))}
      {this.state.users.map(data=>
      {
        return(
          <div>
        {console.log('map.....', data)}
        nom : {data.nom}
        prenom : {data.prenom}
        email : {data.email}
        </div>
        )
        
      
      })}
    </div>
  );
 }
  
}

export default SampleComponent