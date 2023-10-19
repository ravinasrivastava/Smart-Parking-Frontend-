import { getToken } from '../../services/LocalStorageService';
import { useGetViewbookingQuery } from '../../services/userAuthApi';
import Sidebar from "../sidebar/Sidebar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import FilterListIcon from '@mui/icons-material/FilterList';
import Footer from './footer/Footer';
import "./booking.css";
function Tab() {
  const [data, setData] = useState([])
  const [setSearchTern] = useState("");
  const [order, setorder] = useState("ASC");
  const { access_token } = getToken()
  const responseInfo = useGetViewbookingQuery(access_token)
  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <h1>An error occured{responseInfo.error.error}</h1>

  const handlePageClick = (post) => {
  }
  //sorting start
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setorder("ASC");
    }
  }
  //sorting end
  return (
    <>
      <Sidebar />
      <div>
        <div className='input-group mb-3 mt-3'>
          <input type="text" className='form-control' placeholder='Search' aria-label='username' aria-describedby='basic-addon1' onChange={(e) => { setSearchTern(e.target.value) }}></input>
        </div>
        <div className='mx-3'>
        </div>
        <div className='table-responsive'>
          <Table striped bordered hover size="sm" className="table" style={{ overflow: "scroll" }}>
            <thead>
              <tr>
                <th>ID </th>
                <th onClick={() => sorting("parking_site_name")}>Parking_site_name <FilterListIcon /></th>
                <th onClick={() => sorting("show_v_name")}>Show_vehicles_name <FilterListIcon /></th>
                <th onClick={() => sorting("device_table_name")}>Device_table_name <FilterListIcon /></th>
                <th onClick={() => sorting("checkin_date")}>Checkin_date <FilterListIcon /></th>
                <th onClick={() => sorting("checkout_date")}>Checkout_date <FilterListIcon /></th>
                <th onClick={() => sorting(" charge ")}>Charge <FilterListIcon /></th>
                <th onClick={() => sorting(" username ")}>Username <FilterListIcon /></th>
              </tr>
            </thead>
            <tbody>
              {
                responseInfo.data.map((post) =>
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.parking_name}</td>
                    <td>{post.platenumber}</td>
                    <td>{post.device_eui}</td>
                    <td>{post.checkin_date}</td>
                    <td>{post.checkout_date}</td>
                    <td >₹{post.charge}</td>
                    <td>{post.username}</td>
                  </tr>
                )}
              {/* search end */}
            </tbody>
          </Table>
        </div>
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextAriaLabel={'Next'}
        breakLabel={'...'}
        pageCount={15}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
      <Footer />
    </>
  );
}
export default Tab;