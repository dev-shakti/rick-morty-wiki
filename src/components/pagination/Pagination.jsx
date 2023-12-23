import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNo,pageNo,info}) => {

  
  return (
     <ReactPaginate className='pagination justify-content-center gap-4 my-4 ' 
     pageCount={info?.pages}
     forcePage={pageNo===1 ? 0 : pageNo-1}
     previousLabel="Prev"
     nextLabel="Next"
     previousClassName="btn btn-primary"
     nextClassName="btn btn-primary"
     pageClassName="page-item"
     pageLinkClassName="page-link"
     onPageChange={(data) => {
      setPageNo(data.selected+1)
     }}
     activeClassName="active"
     />
 
  )
}

export default Pagination
