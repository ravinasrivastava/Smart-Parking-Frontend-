import { getToken } from '../../services/LocalStorageService';
import { useGetCityQuery } from '../../services/userAuthApi';
const City = () => {
  const { access_token } = getToken()
  const responseInfo = useGetCityQuery(access_token)
  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>
  return (
    <div>

      <form action="">
        <label htmlFor="">Select states</label><br />

        <select name="state" id="states" style={{ width: "100%" }}>
          {
            responseInfo.data.map((post) =>
              <option name="state" value={post.state} >{post.state}</option>

            )}
        </select>

      </form>

    </div>
  )
};
export default City;