
import { Suspense } from 'react';
import './App.css'
import Contries from './Component/Contries/Contries'

 const ContriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json())
  .then((data) => console.log(data));

function App() {

  return (
    <>
    <h1>BANGLA</h1>
    <Suspense fallback={<p>successfully fetched all countries data </p>}>   
        <Contries ContriesPromise={ContriesPromise}></Contries>
    </Suspense>
    </>
  )
}

export default App
