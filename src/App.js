import { useState, useEffect } from 'react';
import randomWords from 'random-words'
const Word_Num = 30
const Seconds = 20

function App() {
  const [words, setWords] = useState([])
  const [count, setCount] = useState(Seconds)
  const [currInput, setCurrInput] = useState("")
  const [currWordIndex, setCurrWordIndex] = useState(0)
  const [currCharIndex, setCurrCharIndex] = useState(-1)
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)

  useEffect(() => {
    setWords(generatellords())
  }, [])
  function generatellords() {
    return new Array(Word_Num).fill(null).map(() => randomWords())
  }

  //     // space bar 
  //     if (keyCode === 32) {
    //       checkMatch()
    //       setCurrInput("")
    //       setCurrWordIndex(currWordIndex + 1)
    //       setCurrCharIndex(-1)
    //     // backspace
    //     } else if (keyCode === 8) {
      //       setCurrCharIndex(currCharIndex - 1)
      //       setCurrChar("")
      //     } else {
  //       setCurrCharIndex(currCharIndex + 1)
  //       setCurrChar(key)
  //     }
  //   }
  
  
  function start() {
    let interval = setInterval(() => {
      setCount((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval)
          // setStatus('finished')
          setCurrInput("")
          // return Seconds
        } else {
          return prevCountdown - 1
        }
      })
    }, 1000)
  }
  //space bar
  function handleKeyDown({keyCode}) {
    if (keyCode === 32) {
      checkMatch()
      setCurrInput("")
      setCurrWordIndex(currWordIndex + 1)
    }
  }

  function checkMatch() {
    const wordToCompare = words[currWordIndex]
    const doesItMatch = wordToCompare === currInput.trim()
    if (doesItMatch) {
      setCorrect(correct + 1)
    } else {
      setIncorrect(incorrect + 1)
    }
  }
  
  return (
    <body>
      <div className="App">
        <div className="container">
          <div className="row justify-content-center pt-4">
            <div className="col-lg-5">
              <div className="card rounded-lg text-center mt-5">
                {/* <div className="card-header"><h4 className=" text-success">Typing Game</h4></div> */} 
                <div className=" m-3">
                  <h4 className='py-3'>{count}</h4>
                  <hr/>
                  <div className="card-body text-start">
                  {words.map((word, i) => (
                    <span key={i}>
                      <span>
                        {word.split("").map((char, idx) => (
                          <span key={idx}>{char}</span>
                        ))}
                      </span>
                      <span>  </span>
                    </span>
                  ))}
                </div>
                  <div className="input-group mb-3">
                    <input type="text" className="todo-input" placeholder="Type the words" onKeyDown={handleKeyDown} value={currInput} onChange={(e) => setCurrInput(e.target.value)} aria-describedby="button-addon2" />
                    <button className="todo-button" type="button" onClick={start} id="button-addon2">Start</button>
                  </div>
                  

                  <div className="section">
          <div className="columns">
            <div className="column text-centered">
              <p className="size-5">Words per minute:</p>
              <p className="text-primary size-1">
                {correct}
              </p>
            </div>
            
            <div className="column text-centered">
              <p className="size-5">Accuracy:</p>
              {correct !== 0 ? (
                <p className="text-info size-1">
                  {Math.round((correct / (correct + incorrect)) * 100)}%
                </p>
              ) : (
                <p className="text-info size-1">0%</p>
              )}
            </div>
          </div>
        </div>

        
                  {/* <input type="text" className="form-control" placeholder="Type the words"/>
                <button type="button" className="btn btn-success mt-3" onClick={start}>Start</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

  );
}

export default App;