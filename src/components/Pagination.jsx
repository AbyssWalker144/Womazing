import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from "./UI/Card";

// export default function Pagination(props){
//     const {data} = props;
//     const [itemOffset, setItemOffset] = useState(0);
//     const [currentItems, setCurrentItems] = useState([]);
//     const [pageCount, setPageCount] = useState(0);
//     const itemsPerPage = 6;
//
//     useEffect(() => {
//         const endOffset = itemOffset + itemsPerPage;
//         setCurrentItems(data.slice(itemOffset, endOffset));
//         setPageCount(Math.ceil(data.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage, data]);
//
//     const handlePageClick = (event) => {
//         const newOffset = (event.selected * itemsPerPage) % data.length;
//         setItemOffset(newOffset);
//     };
//
//     return (
//         <>
//             {data[0]?.data.map(item => {
//                 return <Card key={item.id} {...item}/>
//             })}
//
//             {data[1]?.data.map(item => {
//                 return <Card key={item.id} {...item}/>
//             })}
//
//             {data[2]?.data.map(item => {
//                 return <Card key={item.id} {...item}/>
//             })}
//
//             {data[3]?.data.map(item => {
//                 return <Card key={item.id} {...item}/>
//             })}
//
//             <ReactPaginate
//                 breakLabel="..."
//                 nextLabel="next >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={5}
//                 pageCount={pageCount}
//                 previousLabel="< previous"
//                 renderOnZeroPageCount={null}
//             />
//         </>
//     );
// }



export default function Pagination(props){

    // const [currentPage, setCurrentPage] = useState(0);

    // function handlePageChange({ selected: selectedPage }) {
    //     setCurrentPage(selectedPage);
    // }

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 270,
    //         behavior: "smooth"
    //     });
    // }, [currentPage]);
 
    const data = props.data;
    console.log(data);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data?.slice(itemOffset, endOffset);
    // console.log(currentItems);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        window.scrollTo({
            top: 270,
            behavior: "smooth"
        }); 
    };

    return (
        <>
            {currentItems !== "" &&
                 currentItems.map(item => {
                      // if(item.category.includes(filter)){
                      //     return <Card key={item.id} {...item}/>
                      // }
                     return <Card key={item.id} {...item}/>
                })
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                containerClassName="pagination flex"
                pageClassName="pagination__number"
                activeClassName="active"
                previousLinkClassName="hide"
                nextLinkClassName="hide"
            />
        </>
    );
}