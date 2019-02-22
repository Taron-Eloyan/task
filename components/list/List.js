import React from "react";
import Loading from "../loading/Loading"
import Table from "./Table";
import Pagination from "./Pagination";
import {API_URL} from "../../config";
import {handleResponse} from "../../helper";


class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading : false,
      currencies : [ ],
      error : null,
      page : 1,
      totalPages : 5,
    }
    this.handlePageinationClick = this.handlePageinationClick.bind(this);
  }
  componentDidMount() {
    this.fetchCurrencies()
  }
  fetchCurrencies() {
    this.setState({
      loading : true,
    })
    let {page} = this.state;
    fetch (`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
    .then (handleResponse)
    .then((data) => {
      console.log(data);
      let {currencies, totalPages} = data;
      this.setState({
        currencies,
        loading : false,
        totalPages : totalPages,
      })
   })
    .catch((error) => {
      this.setState({
        error : error.errorMessage,
        loading : false,
      })
   });
  }
  renderChancgePercent(percent) {
    if (percent > 0 ) {
      return <span className='percent-raised'> {percent}% &uarr; </span>
    }
    else if (percent < 0) {
      return <span className='percent-fallen'> {percent}% &darr; </span>
    }
    else {
      return <span> {percent}% </span>
    }
  }
  handlePageinationClick(diraction) {
    let nextPage = this.state.page;
    nextPage = diraction === 'next' ? nextPage+1 : nextPage-1;
    this.setState({
      page : nextPage
    }, () => {this.fetchCurrencies()})
  }
  render() {
    const {loading, currencies, error, page, totalPages} = this.state;
    console.log (currencies);
    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      )
    }
    if (error) {
      return <div className="error"> {error} </div>
    }
    return (
      <div>
        <Table currencies={currencies} renderChancgePercent={this.renderChancgePercent}/>
        <Pagination page={page}  totalPages={totalPages} handlePageinationClick={this.handlePageinationClick}/>
      </div>
    )
  }
}


export default List;
