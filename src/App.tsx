
import './App.css'

// TO DO
// Ill need to do the math for tax at some point :NOT DONE
// Genearal clean up to make it prettier (make it work first) :NOT DONE
// make diffrent "cards" that pop up with restaurants based on what was chosen :NOT DONE
// start with two diffrent cards add more later :NOT DONE
// 

function App() {

  // Functions that i need:
  // Calculate how much food is inputed to what they can buy :NOT DONE
  // Hide and unhide diffrent resturant pages : NOT DONE
  // "Add others here"

  return (
    <>
      <div>
        {/* This is the header, ill need to add them across the top */}
        <header>
        <h1>Penny Pincher</h1>
        <h2>Saving you Money!</h2>
        <a>Contact Us! </a>
        <a>Settings</a>
        </header>


        {/* Heres the main body, ill need the input box, the calculate button and the brands i support (Can i use brands?) */}
        <div>
          <p className='font-bold'>Input how much you would like to spend, then calculate!</p>
          <p>Choose which restaurant you'd like Penny Pincher to browse and all of the affordable food will be presented, until you've saved every penny!</p>
          <input className='border-4 bg-amber-900' name='IndexInput' value='Enter For Savings!'/>
          <button>Calculate</button>
        </div>


        {/* For the footer ill need socials, its made by me and contributions */}
        <footer>

        </footer>
      </div>
    </>
  )
}

export default App
