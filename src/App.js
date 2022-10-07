import { useState, useEffect } from 'react';
import randomWords from 'random-words'
const Word_Num = 30
const Seconds = 10

function App() {
  const [words, setWords] = useState([])
  const [count, setCount] = useState(Seconds)
  const [currInput, setCurrInput] = useState("")
  const [currWordIndex, setCurrWordIndex] = useState(0)
  const [currCharIndex, setCurrCharIndex] = useState(-1)
  const [currChar, setCurrChar] = useState("")
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [status, setStatus] = useState("waiting")

  //word 
  useEffect(() => {
    setWords(generatellords())
  }, [])
  function generatellords() {
    return new Array(Word_Num).fill(null).map(() => randomWords())
  }

  //start game
  function start() {

    if (status === 'finished') {
      setWords(generatellords())
      setCurrWordIndex(0)
      setCorrect(0)
      setIncorrect(0)
      setCurrCharIndex(-1)
      setCurrChar("")
    }

    if (status !== 'started') {
      setStatus('started')
      let interval = setInterval(() => {
        setCount((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval)
            setStatus('finished')
            setCurrInput("")
            return Seconds
          } else {
            return prevCountdown - 1
          }
        })
      }, 1000)
    }
  }
  //space bar
  function handleKeyDown({ keyCode, key }) {
    if (keyCode === 32) {
      checkMatch()
      setCurrInput("")
      setCurrWordIndex(currWordIndex + 1)
      setCurrCharIndex(-1)
    // backspace
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1)
      setCurrChar("")
    } else {
      setCurrCharIndex(currCharIndex + 1)
      setCurrChar(key)
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
  
  //word style 
  function getCharClass(wordIdx, charIdx, char) {
    if (wordIdx === currWordIndex && charIdx === currCharIndex ) {
      if (char === currChar) {
        return 'bg-success rounded'
      } else {
        return 'bg-danger rounded'
      }
    // } else if (wordIdx === currWordIndex && currCharIndex >= words[currWordIndex].length) {
    //   return 'bg-danger'
    // } else {
    //   return ''
    }
  }

  return (
    <body>
      <div className="App">
        <div className="container">
          <div className="row justify-content-center pt-4">
            <div className="col-lg-5">
              <div className="card rounded-lg text-center mt-5">
                <div className=""><h4 className=" primary">Typing Game</h4></div>
                <div className=" m-3">
                  <h4 className='py-2'>{count}</h4>
                  <hr />
                  <div className="card-body text-start">
                    {words.map((word, i) => (
                      <span key={i}>
                        <span >
                          {word.split("").map((char, idx) => (
                            <span 
                             className={getCharClass(i, idx, char)}
                               key={idx}>{char}</span>
                          ))}
                        </span>
                        <span>  </span>
                      </span>
                    ))}
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="game-input" placeholder="Type the words" disabled={status !== "started"} onKeyDown={handleKeyDown} value={currInput} onChange={(e) => setCurrInput(e.target.value)} aria-describedby="button-addon2" />
                    <button className="game-button" type="button" onClick={start} id="button-addon2">Start</button>
                  </div>

                  {status === 'finished' && (
                    // <div className="displ">
                      <div className="col">
                        <div className="col-6 ">
                          <p className="">Words per minute:</p>
                          <p className="text-primary p">
                            {correct}
                          </p>
                        </div>

                        <div className="col-6">
                          <p className="">Accuracy:</p>
                          {correct !== 0 ? (
                            <p className="text-primary p">
                              {Math.round((correct / (correct + incorrect)) * 100)}%
                            </p>
                          ) : (
                            <p className="text-primary p">0%</p>
                          )}
                        </div>
                      </div>
                    // </div>
                  )}


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