import React from 'react'
import { PaginationInfo } from '../../service/type'

interface PaginationProps{
    paginationInfo: PaginationInfo,
    setPaginationInfo: React.Dispatch<React.SetStateAction<PaginationInfo>>
}

const PaginationButtons:React.FC<PaginationProps> = ({paginationInfo,setPaginationInfo}) => {
  
    const handlePrevButton= ()=>{
        setPaginationInfo({page: paginationInfo.page > 0 ? paginationInfo.page-1: paginationInfo.page})
      }
    
    
      const handleNextButton= ()=>{
        setPaginationInfo({page: paginationInfo.page !== paginationInfo.total_pages ? paginationInfo.page+1 : paginationInfo.page})
      }
  
    return (
    <div className="flex flex-row justify-around my-5">
    <button onClick={handlePrevButton} className="hover:bg-gray-400 hover:text-gray-200 bg-[#B0B0B0] text-lg font-medium border-2  px-5 rounded-lg">⇦ Prev</button>
    <button onClick={handleNextButton} className="hover:bg-gray-400 hover:text-gray-200 bg-[#B0B0B0] text-lg font-medium border-2  px-5 rounded-lg">Next ⇨</button>
  </div>
  )
}

export default PaginationButtons
