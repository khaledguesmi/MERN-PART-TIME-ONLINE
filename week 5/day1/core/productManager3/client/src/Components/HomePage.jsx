import React, { useState } from 'react'
import ShowAllProduct from './ShowAllProduct'
import CreateProduct from './CreateProduct'


const HomePage = () => {

  const [refrechState, setRefrechState] = useState(false)

    const refresh = () => {
        setRefrechState(!refrechState)
    }

  return (
    <div>

        <CreateProduct refresh={refresh}/>
        
     <hr/>
     <ShowAllProduct refrechState={refrechState} />
    </div>
  )
}

export default HomePage