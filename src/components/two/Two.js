import React from 'react'
import './Two.css'

function Two() {
  return (
    <div className='twoDiv2'>
        <div className="left">
            <h1>Your Life, Our Answers</h1>
            <p>Check out our products to learn more about your development options and, in addition, get a price offer from us.</p>
            <div className="suroq">
                <h1>?</h1>
            </div>
        </div>
        <div className="right">
            <div className="hr bir">
                <p>How much does it cost to create websites?</p>
                <p className='plus'>+</p>
            </div>
            <div className="hr">
                <p>How do you differ from other Marketing companies?</p>
                <p className='plus plus1'>+</p>

            </div>
            <div className="hr">
                <p>Are your sites adaptive?</p>
                <p className='plus plus2' style={{marginLeft:420}}>+</p>

            </div>
            <div className="hr">
                <p>What pricing policy do you follow?</p>
                <p className='plus plus3' style={{marginLeft:420}}>+</p>

            </div>
            <div className="hr ikki">
                <p>I want to be on the first list in Search engines...</p>
                <p className='plus plus4'>+</p>

            </div>
        </div>
    </div>
  )
}

export default Two