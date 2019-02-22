import React from 'react';
import './App.css';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            properties : []
        }
    }
    componentDidMount(){
        fetch('http://demo4452328.mockable.io/properties')
        .then(response => {
          return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
          });
        })
        .then((data) => {
          console.log('Success', data);
          this.setState({
              properties : data.data
          })
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
    render(){
        console.log(this.state.properties)
        return(
            <div className="container">
                {this.state.properties.map(property=>(
                    
                    <div key={property.id} className='content'>
                        <img src={property.images[0]} alt='property'/>
                        <address>Address : {property.full_address}</address>
                        <p>Price : {property.price} $</p>
                        <p>Area : {property.area} sq. fr</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default App;