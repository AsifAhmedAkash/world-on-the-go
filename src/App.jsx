import Countries from './components/Countries/Countries'
import './App.css'
import { Suspense } from 'react';
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

function App() {


  return (
    <>
      <section id="center">

        <div>
          <h1>React world flag on the go...</h1>
          <Suspense fallback={<p>Nadir vai loading..</p>}>
            <Countries countriesPromise={countriesPromise}></Countries>
          </Suspense>
        </div>


      </section>

      <div className="ticks"></div>



    </>
  )
}

export default App
