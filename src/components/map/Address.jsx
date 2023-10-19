// import { getToken } from '../../services/LocalStorageService';
// import { useGetAddressQuery } from '../../services/userAuthApi';
// const Address = () => {
//   const { access_token } = getToken()
//   const responseInfo = useGetAddressQuery(access_token)
//   if (responseInfo.isLoading) return <div>Loading...</div>
//   if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>
//   return (
//     <div>
     
//           <form action="">
//             <label htmlFor="">Select State</label><br />
//             <select name="parking_name" id="" style={{ width: "100%" }}>
//             {
//         responseInfo.data.map((post) =>
//               <>
//                 <option name="parking_name" value="">{post.parking_name}</option>
//                {/* <option value="">{post.address}</option> */}
//               </>
//               )}
//             </select>
//           </form>
   
//     </div>
//   )
// };
// export default Address;