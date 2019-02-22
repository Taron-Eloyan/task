import React from 'react';
import {API_URL} from '../../config';
import Loading from '../loading/Loading';
import {handleResponse} from '../../helper';
import './Details.css';


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      loading : false,
      currency : {},
      error : null,
    }
  }
  componentDidMount() {
    const currencyId = this.props.match.params.id;
    this.setState({
      loading : true,
    })
    fetch (`${API_URL}/cryptocurrencies/${currencyId}`)
    .then(handleResponse)
    .then((currency) => {
      console.log(currency);
      this.setState({
        currency,
        loading : false,
        error : null,
      })
    })
    .catch((error) => {
      this.setState({
        error : error.errorMessage,
      })
    })
  }
  render() {
    const {loading, currency, error} = this.state;
    if (loading) {
      return (
        <div className='loading-container'> <Loading /> </div>
      )
    }
    if (error) {
      return <div className="error"> {error} </div>
    }
    return(
      <div className="Detail">

      </div>
    )
  }
}

export default Details
