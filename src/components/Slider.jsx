import React, { useState } from 'react'
import Qn from './Qn'

const Slider = () => {
  const [index,setIndex]=useState(0)
  let data=[
    {id:1,
      question: "first Slide",
      ans:"hello welcome to masai school"
    },
    {id:2,
      question: "second Slide",
      ans:"hello welcome to masai school-1"
    },
    {id:3,
      question: "third Slide",
      ans:"hello welcome to masai school"
    },
    {id:4,
      question: "fourth Slide",
      ans:"hello welcome to masai school"
    },
    {id:5,
      question: "fifth Slide",
      ans:"hello welcome to masai school"
    }
  ]
  return (
    <div data-testid="slider">
      <Qn data={data} index={index} />
      {index !== 0 && <button onClick={() => setIndex(index-1)}>Prev</button>}
      {index !== (data.length - 1) && <button onClick={() => setIndex(index+1)}>Next</button>}
    </div>
  )
}

export default Slider