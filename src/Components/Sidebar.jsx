import React from 'react'

const Sidebar = ({ show, onClose }) => {
    return (
        <div>
            <div>
                <h1>Your Cart</h1>
                <div><h2>{product.length}</h2></div>
            </div>
            <div>
              {
                <div>
                    <h1>{product.title}</h1>
                    <p className='line-clamp-1'>{product.description}</p>
                </div>
              }
              <div>
                <h3>Total(USD)</h3>
                <h3>{totalCost}</h3>
              </div>
              <div>
                <button>Continue to checkout</button>
              </div>
            </div>
        </div>
    )
}

export default Sidebar
