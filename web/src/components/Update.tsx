import { UpdateIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { api } from "../lib/axios"

export function Update () {
  const [updating, setUpdateCatalog] = useState(false)

  async function handleUpdateCatalog() {
    try {
      setUpdateCatalog(true)
      await api.post('/updateCatalog')
      
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
        style={updating ? {animation: 'spin 1s linear infinite' } : {}}
      />
        Update Catalog
    </button>      
  )
}

export default Update