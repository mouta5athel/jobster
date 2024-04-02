import React from 'react'
import { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import PageBtnContainer from './PageBtnContainer'

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

 useEffect(() => {
   dispatch(getAllJobs())
   // eslint-disable-next-line
 }, [page, search, searchStatus, searchType, sort])

  
  if (isLoading) {
    return (
      <Loading center></Loading>
    )
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>arja33 ghoudwa</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h5>{totalJobs} job{jobs.length>1 && 's'} found</h5>
      <div className='jobs'>{jobs.map((job)=>{
        
        return <Job key={job._id} {...job}></Job>
      })}</div>
      {numOfPages>1 && <PageBtnContainer></PageBtnContainer>}
    </Wrapper>
  )
}

export default JobsContainer
