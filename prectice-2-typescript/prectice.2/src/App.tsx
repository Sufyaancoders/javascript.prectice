import { useState } from 'react';
import './App.css'
import Box from './components/Box'
import { ThemeContext } from './contexts/ThemeContext'
import Box2 from './components/Box-2';

interface person{
  name:string;
  age:number;
  hobbies:string[]; 
}

function App() {

 const [person , setperson]= useState<person>({name:"",age:0,hobbies:[]})

const [value , setvalue]= useState<string>("")
/////
const submit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  console.log(person)
}

/////
const Themeprovider = ({children}:{children:React.ReactNode})=>{
  const [theme , settheme]=useState<string>("light");
  const toggleTheme=()=>{
    settheme((prev)=>prev==="light"?"dark":"light");
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


  return (
  
      <div className='flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-500'>
        <div className='text-3xl font-bold underline text-amber-900'>
        <Box  label="SEARCH" value={value} setter={setvalue} />
</div>
        <form onSubmit={submit} className='flex flex-col gap-2 rounded-2xl'>
          <div>
            <input type="text" className="border m-2 p-2 rounded-2xl" placeholder="Name" value={person.name} onChange={(e) => setperson({ ...person, name: e.target.value })} />
            <input type="number" className="border m-2 p-2 rounded-2xl" placeholder="Age" value={person.age} onChange={(e) => setperson({ ...person, age: Number(e.target.value) })} />
            <input type="text" className="border m-2 p-2 rounded-2xl" placeholder="Hobbies" value={person.hobbies} onChange={(e) => setperson({ ...person, hobbies: e.target.value.split(",") })} />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-2xl">Submit</button>
        </form>
   

      
    <Themeprovider>

      hello world
<Box2 />
    </Themeprovider>
 
     </div>

  )
}

export default App;