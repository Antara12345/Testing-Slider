import React from 'react'

const Qn = ({data,index}) => {
  return (
    <div>
        <div data-testid="question">{data[index].question}</div>
        <div data-testid="answer">{data[index].ans}</div>
    </div>
  )
}

export default Qn