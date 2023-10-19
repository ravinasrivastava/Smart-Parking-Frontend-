import { getToken } from '../../services/LocalStorageService';
import { useGetPlatenumberQuery } from '../../services/userAuthApi';
const Platenumber = () => {
  const { access_token } = getToken()
  const responseInfo = useGetPlatenumberQuery(access_token)
  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>

  return (
    <div>
      <label htmlFor="">Plate Number</label><br />
      <select name="platenumber" id="" style={{ width: "100%" }}>
        {
          responseInfo.data.map((post) =>
            <option name="platenumber" value={post.platenumber}>{post.platenumber}</option>
          )}
      </select>
    </div>
  )
};
export default Platenumber;