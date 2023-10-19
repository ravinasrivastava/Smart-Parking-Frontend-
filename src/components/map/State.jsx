// import { useEffect, useState } from 'react';
import { getToken } from '../../services/LocalStorageService';
import { useGetStateQuery } from '../../services/userAuthApi';

const State = () => {
  const { access_token } = getToken()
  const responseInfo= useGetStateQuery(access_token )
// console.log("ayus",responseInfo.data)
//   console.log('responseInfo',responseInfo)
//   console.log("Data",responseInfo.data)
//   console.log("Success",responseInfo.isSuccess)
  if(responseInfo.isLoading) return<div>Loading...</div>
  if(responseInfo.isError) return<h1>An error occured {responseInfo.error.error}</h1>

 
  return(
    <div>         
    <form action="" >
<label htmlFor="">Select City</label><br />
    <select name="city" id="st" style={{width:"100%"}}>
    {   
    responseInfo.data.map((post)=>
    
        <option name="city" value={post.city} >{post.city}</option>
        )}
    </select>
    </form>

</div>
  )
};
export default State;


// data - The returned result if present.
// error - The error result if present.
// isUninitialized - When true, indicates that the query has not started yet.
// isLoading - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be true for the first request fired off, but not for subsequent requests.
// isFetching - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be true for both the first request fired off, as well as subsequent requests.
// isSuccess - When true, indicates that the query has data from a successful request.
// isError - When true, indicates that the query is in an error state.
// refetch - A function to force refetch the query