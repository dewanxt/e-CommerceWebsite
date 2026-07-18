import { useEffect, useRef, useState } from 'react'
import { getDatabase, ref, set, onValue, push, remove } from "firebase/database";
import { charLength } from 'firebase/firestore/pipelines'
import { IoTrashBin } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { BiSolidVolumeMute } from "react-icons/bi";
import { BiSolidVolumeFull } from "react-icons/bi";
import { ToastContainer, toast, Flip, Bounce } from 'react-toastify';
import videoBg from './assets/murphys law.mp4';
import audioBg from './assets/mountains.mp3';

function App() {

  const notify = () => {
    task == "" ?
      toast.warn('Submission Required!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }) : toast.success('Task Submitted!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
  }

  const deleteTask = () => toast.error('Task has been Deleted!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

  const [task, setTask] = useState("")
  const [allTask, setAllTask] = useState([])
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const audioRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    if (task == "") {
      notify()
    } else if (edit && editId) {
      updateTask(editId)
    } else {
      const db = getDatabase();
      set(push(ref(db, 'todoname')), {
        todoname: task
      }).then(
        setTask(""),
        notify()
      )
    }
  }

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'todoname');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let Arr = []
      snapshot.forEach((item) => {
        Arr.push({ value: item.val().todoname, id: item.key })
      })
      setAllTask(Arr)
    });
  }, [])

  const handleDelete = (id) => {
    const db = getDatabase();
    remove(ref(db, 'todoname/' + id)).then(
      deleteTask()
    )
  }

  const updateTask = (id) => {
    const db = getDatabase();
    set(ref(db, 'todoname/' + id), {
      todoname: task
    }).then(() => {
      toast.info('Task Updated!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTask("")
      setEdit(false)
      setEditId(null)
    })
  }

  const handleEdit = (value, id) => {
    setEdit(true)
    setEditId(id)
    setTask(value)
  }

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        setAudioEnabled(true)
      } catch (error) {
        console.error('Audio playback failed:', error)
      }
    } else {
      audio.pause()
      setAudioEnabled(false)
    }
  }

  return (
    <div className='min-h-screen relative overflow-hidden text-white'>
      <audio ref={audioRef}
        src={audioBg}
        autoPlay
        loop
        playsInline
        preload='auto'
        volume={0.3}
        className='hidden' />
      <video
        className='absolute inset-0 w-full h-full object-cover opacity-40'
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        style={{ animation: 'none', playbackRate: 0.25 }}
      />
      <div className='absolute inset-0 bg-black/25' />
      <ToastContainer />
      <button
        type='button'
        onClick={toggleAudio}
        className='absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/50'
        aria-label={audioEnabled ? 'Mute audio' : 'Unmute audio'}
      >
        {audioEnabled ? <BiSolidVolumeFull /> : <BiSolidVolumeMute />}
      </button>
      <div className=' relative z-10'>
        <h1 className='app-title text-4xl md:text-5xl py-6 mb-8 text-center font-semibold shadow-lg backdrop-blur-sm cursor-pointer'>
          Todo Application
        </h1>

        <div className='flex min-h-[70vh] items-center justify-center'>
          <form className="fieldset w-full max-w-2xl rounded-2xl border p-8 shadow-2xl bg-white/10 backdrop-blur-md border-white/20 md:p-10">
            <fieldset className="fieldset">
              <label className="task-label label text-lg md:text-xl mb-4 font-medium">Enter Your Task Here</label>
              <input value={task} onChange={(e) => setTask(e.target.value)} type="text" className="input input-bordered validator w-full rounded-xl bg-black/20 text-white border-white/20 placeholder:text-slate-300 backdrop-blur-sm" placeholder="Write Here" required />
              <p className="validator-hint hidden">Required</p>
            </fieldset>

            <button onClick={handleClick} className="btn mt-5 rounded-xl px-6 bg-white/20 text-white border border-white/20 backdrop-blur-sm hover:bg-white/30" type="submit">{edit ? "Update" : "Submit"}</button>

            <ol className='bg-black/20 text-white p-4 md:p-5 rounded-xl mt-5 space-y-3 shadow-inner border border-white/10 backdrop-blur-sm'>
              {
                allTask.map((item) => {
                  return <li className='text-lg capitalize flex justify-between items-center border-b border-white/10 pb-2 last:border-b-0'>
                    <span className='task-text break-words'>{item.value}</span>
                    <div className='flex gap-4 text-xl md:text-2xl'>
                      <TbEdit onClick={() => handleEdit(item.value, item.id)} className='text-green-400 cursor-pointer hover:text-green-300 transition' />
                      <IoTrashBin onClick={() => handleDelete(item.id)} className='text-red-500 cursor-pointer hover:text-red-400 transition' />
                    </div>
                  </li>
                })
              }
            </ol>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
