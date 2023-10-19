import { getToken } from '../../services/LocalStorageService';
import { useGetParkingplaceQuery } from '../../services/userAuthApi';
const City = () => {
  const { access_token } = getToken()
  const responseInfo = useGetParkingplaceQuery
    (access_token)
  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <div>An error occured {responseInfo.error.error}</div>
  return (
    <div>
      <form action="">
        <label htmlFor="">Select states</label><br />
        <select name="device_eui" id="states" style={{ width: "100%" }}>
          {
            responseInfo.data.map((post) =>
              <option name="device_eui" value={post.device_eui} >{post.device_eui}</option>
            )}
        </select>
      </form>
    </div>
  )
};
export default City;