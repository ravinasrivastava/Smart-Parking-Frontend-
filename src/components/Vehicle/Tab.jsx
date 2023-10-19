import { makeStyles, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, Tooltip, IconButton } from "@material-ui/core"
import { Link } from "react-router-dom";
import { orange } from '@material-ui/core/colors';
import { getToken } from '../../services/LocalStorageService';
import { useGetTableUserQuery, useTabMutation } from '../../services/userAuthApi';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./table.css";
const useStyles = makeStyles({
  stuListColor: {
    backgroundColor: orange[400],
    color: "White"
  },
  tableHeadCell: {
    color: "Black",
    fontWeight: "bold",
    fontSize: 17
  },
})
function Tab() {
  const classes = useStyles();
  const { access_token } = getToken()
  const responseInfo = useGetTableUserQuery(access_token)
  const [tab, responseInf] = useTabMutation()
  console.log("Response Information: ", responseInf)
  console.log("Data: ", responseInf.data)
  console.log("Success: ", responseInf.isSuccess)
  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInf.isLoading) return <div>Loading...</div>
  if (responseInf.isError) return <h1>An error occured {responseInf.error.error}</h1>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>
  return (
    <>
      <sidebar />
      <button style={{ marginRight: "87%", marginBottom: "1%" }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Register New Vehicles
      </button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell className={classes.tableHeadCell}>Id</TableCell>
              <TableCell className={classes.tableHeadCell}>Platenumber</TableCell>
              <TableCell className={classes.tableHeadCell}>Stateprovision</TableCell>
              <TableCell className={classes.tableHeadCell}>Modal</TableCell>
              <TableCell className={classes.tableHeadCell}>Color</TableCell>
              <TableCell className={classes.tableHeadCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              responseInfo.data.map((post) => {
                return (
                  <TableRow >
                    <TableCell >{post.id}</TableCell>
                    <TableCell >{post.platenumber}</TableCell>
                    <TableCell >{post.stateprovision}</TableCell>
                    <TableCell >{post.modal}</TableCell>
                    <TableCell >{post.color}</TableCell>
                    <TableCell >
                      <Tooltip title="Edit">
                        <IconButton><Link to={`/Update`}><EditIcon style={{ color: "green" }} /></Link></IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => tab(post.id)}><DeleteIcon style={{ color: "red" }} /></IconButton>
                      </Tooltip>

                      {/* <span class="btn btn-success"><Link to="/Update" style={{ color: "white" }}><EditIcon /></Link> </span> <span class="btn btn-danger" onClick={() => tab(post.id)}><DeleteIcon /></span> */}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Tab;

