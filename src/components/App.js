import React, { useState } from 'react'

const App = () => {
  const [resource, setResource] = useState('posts')
    return (
      <div className="container">
        <div className="row">
            <div className="col">
            <div className="btn-group">
            <button onClick={() => setResource('posts')} 
            type="button" className="btn btn-sm btn-outline-secondary">Posts</button>
            <button onClick={() => setResource('todos')} 
            type="button" className="btn btn-sm btn-outline-secondary todo">TODOs</button>
          </div>
            </div>
        </div>
        {resource}
      </div>
    )
  
}


export default App