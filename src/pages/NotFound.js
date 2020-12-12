import React from 'react'
import Header from '../components/Header'

class NotFound extends React.Component {
  render() {
    return (
      <div className="page-not-found">
        <Header />
        <h1>Page Not Found</h1>
      </div>
    )
  }
}

export default NotFound;
