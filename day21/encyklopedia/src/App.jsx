import { useState } from 'react'
import './App.css'
import { Term } from './Term'
import { Question } from './Question'
import { Quote } from './Quote'

const App = () => {

    const quotes= [
        'Tell other people that you are unprecedentedly fascinating.',
        'Believe in the warning, not the failure.',
        'Free your mind until your reflection becomes your guardian angel.',
        'Being a young man can be a full-time job.',
        'Never think of it as karma, think of it as life.',
        'Postponing paranoia destroys your own destiny.',
        'You are amazing as much as you like.'
    ]
 
    const randomQuote = quotes[Math.floor( Math.random() * quotes.length)]

  return (
      <div > <div className='encyklopedia'>
        <Term title="Blabla term" definition="some definition1"></Term>
        <Term title="Blabla term2" definition="some definition2"></Term>
        <Term title="Blabla term3" definition="some definition3"></Term>
        </div>
        <div className='question'>
          <Question title='Question?' text='This is the best answer I can get'></Question>
           <Question title="What’s the big deal with React.js?" text="What are some facts about why React is technically superior" />
            <Question title="Is React.js worth it?" text="Let us know" />
            <Question title="Should I learn React.js or Vue.js?" text="Basically is it worth it if I learn Vue.js first and then React.js" />
        </div>

        <div className='quote'>
        
            <p>There is {quotes.length} possible quotes.</p>
            <Quote quote={randomQuote} />
      
        </div>
      </div>
  )
}

export default App
