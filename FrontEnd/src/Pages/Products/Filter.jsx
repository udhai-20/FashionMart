import React from 'react'
import { Select } from '@chakra-ui/react'

function Filter({filterHandler}) {
  return (
    <>
        <Select onChange={filterHandler} type="text">
            <option value="">Sort By Price</option>
            <option value={"lth"}>Low To High</option>    
            <option value={"htl"}>High To Low</option>    
        </Select> 
    </>
  )
}

export default Filter
