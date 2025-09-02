// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './component/Card.jsx';

function MyApp(){
  return (
    <div>
      <Card/>
      <Card/>
    </div>
  )

}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    Target: "_blank",
  },
  children: "Click me to  visit google",
};

createRoot(document.getElementById('root')).
render(

    <MyApp/>

)