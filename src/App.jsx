import { useState } from 'react'
import { Review } from './Components/'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'/>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App
