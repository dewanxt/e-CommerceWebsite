import { useEffect, useState } from 'react'
import { getDatabase, ref, set, onValue, push } from "firebase/database";

function App() {
  const [task, setTask] = useState("")
  const [allTask, setAllTask] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    const db = getDatabase();
  set(push(ref(db, 'todoname')), {
    todoname: task
  });
  }

  useEffect(()=>{
    const db = getDatabase();
const starCountRef = ref(db, todoname);
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    if (Array.isArray(data)) {
      data.forEach((item) =>{
        console.log(item)
      })
    } else if (typeof data == 'object'){
      Object.values(data).forEach((item) =>{
        console.log(item)
      })
    } else {
      console.log(data)
    }
  }
  });
},[])

  return (
    <>
<h1 className='text-5xl py-10 mb-20 bg-gray-900 text-white text-center'>
  Todo Application
</h1>

      <form className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-10  mx-auto">
  <fieldset className="fieldset">
    <label className="label text-xl mb-4">Enter Your Task Here</label>
    <input onChange={(e)=> setTask(e.target.value)} type="text" className="input validator w-full" placeholder="Write Here" required />
    <p className="validator-hint hidden">Required</p>
  </fieldset>

  {/* <label className="fieldset">
    <span className="label">Password</span>
    <input type="password" className="input validator" placeholder="Password" required />
    <span className="validator-hint hidden">Required</span>
  </label> */}

  <button onClick={handleClick} className="btn btn-neutral mt-4" type="submit">Submit</button>
  <button className="btn btn-ghost mt-1" type="reset">Reset</button>
</form>
    </>
  )
}

export default App
