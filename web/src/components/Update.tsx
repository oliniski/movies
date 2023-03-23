import { UpdateIcon } from '@radix-ui/react-icons';
import { useContext, useState } from 'react';
import { api } from "../lib/axios"
import { MovieContext } from "../App";

export function Update () {
  const [updating, setUpdateCatalog] = useState(false)
  const { setMovies } = useContext(MovieContext)

  async function handleUpdateCatalog() {
    try {
      setUpdateCatalog(true)
      await api.post('/updateCatalog').then(response => {
        if (response.status !== 200) return;
        api.get('/movies').then(response => {
          setMovies(response.data)
        })
      })
    } catch (error) {
      console.log(error)
    } finally {
      setUpdateCatalog(false)
    }
  }
  
  return (    
    <button
      className="border border-tomato11 font-semibold rounded-lg px-5 py-3 flex items-center gap-3 hover:border-tomato9 transition-colors focus:outline-none focus:ring-2 focus:ring-tomato11 focus:ring-offset-2 focus:ring-offset-background"
      onClick={handleUpdateCatalog}
      disabled={updating}
    >
      <UpdateIcon 
        className={updating ? "animate-spin" : ""}
      />
        Update Catalog
    </button>      
  )
}

export default Update