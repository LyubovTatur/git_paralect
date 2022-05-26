import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate'
// import { styles } from './reposNav.css'
export const ReposNavPanel = (props) => {
    const itemsPerPage = 4
    let items = [...Array(props.reposCount).keys()];
    const navigate = useNavigate()
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = Number(props.pageNum) * itemsPerPage + itemsPerPage;
        console.log(`Loading items from ${Number(props.pageNum) * itemsPerPage} to ${endOffset}`);
        setCurrentItems(items.slice((Number(props.pageNum)) * itemsPerPage, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [props.pageNum, props.login, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        props.setPage(Number(event.selected))
        // props.setPage(newOffset);
        navigate('/?login=' + props.login + '&page=' + (Number(event.selected)))
    };



    // function Items({ currentItems }) {
    //     return (
    //         <div className="items">
    //             {currentItems && currentItems.map((item) => (
    //                 <div>
    //                     <h3>Item #{item}</h3>
    //                 </div>
    //             ))}
    //         </div>
    //     );
    // }


    return (
        <div className="repos-nav-panel">
            {/* <Items currentItems={currentItems} /> */}
            <div className="pagesInfo">
                {
                    currentItems && items ?
                        Number(currentItems[0]) + 1 == items.length
                            ?
                            <>{currentItems[0] + 1} of {items.length} items</>
                            :
                            <>
                                {currentItems[0] + 1}-{currentItems[currentItems.length - 1] + 1} of {items.length} items
                            </>
                        :
                        ''
                }


            </div>
            <div className="react-pag">
                <ReactPaginate
                    nextLabel=">"
                    forcePage={props.pageNum}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}