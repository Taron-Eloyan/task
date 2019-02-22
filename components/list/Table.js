import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Table.css';


const Table = (props) => {
  const {currencies, renderChancgePercent, history} = props;
  return (
    <div className="Table-container">
              <table className="Table">
                <thead className="Table-head">
                  <tr>
                    <th> Cryptocurrencies </th>
                    <th> Price </th>
                    <th> Market Cap </th>
                    <th> 24 H change</th>
                  </tr>
                </thead>
                <tbody className="Table-body">
                  {currencies.map((currency)=>(
                    <tr key={currency.id} onClick={() => {history.push(`/currency/${currency.id}`)}}>
                      <td>
                        <span className='Table-rank'>
                          {currency.rank}
                        </span>
                        {currency.name}
                      </td>
                      <td>
                        <span className='Table-dollar'>
                          $
                        </span>
                        {currency.price}
                      </td>
                      <td>
                        <span className='Table-dollar'>
                          $
                        </span>
                        {currency.marketCap}
                      </td>
                      <td>
                        {renderChancgePercent(currency.percentChange24h)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  )
}

Table.propTypes = {
  currencies : PropTypes.array.isRequired,
  renderChancgePercent : PropTypes.func.isRequired
}

export default withRouter(Table);
