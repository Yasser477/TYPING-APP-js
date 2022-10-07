import { useState, useEffect } from 'react';
import randomWords from 'random-words'
const Word_Num = 50
const Seconds = 10

function Game_page() {
  const [words, setWords] = useState([])
  const [count, setCount] = useState(Seconds)

  useEffect(() => {
    setWords(generatellords())
  }, [])
  function generatellords() {
    return new Array(Word_Num).fill(null).map(() => randomWords())
  }

  function start(){
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
        }  )
    } ,  1000 )
  }
  

//     let interval = setInterval(() => {
//       setCount((prevCountdown) => prevCountdown -1)
//     } ,  1000 )
//   }

  

  return (
    <body>
    <div className="App">
      <div className="container pb-4">
        <div className="row justify-content-center pb-5">
          <div className="col-lg-5">
            <div className="card rounded-lg text-center mt-5">
              <div className="card-header"><h4 className=" text-success">Typing Game</h4></div>
              <div class=" m-3">
                <h4 className='text'>{count}</h4>
                <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Type the words" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-info" type="button" onClick={start} id="button-addon2">Start</button>
</div>
                {/* <input type="text" className="form-control" placeholder="Type the words"/>
                <button type="button" class="btn btn-success mt-3" onClick={start}>Start</button> */}
              </div>
              <div className="card-body text-start">
                {words.map((word, i) => (
                  <>
                    <span>
                      {word + "  "}
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>

  );
}

export default Game_page    ;