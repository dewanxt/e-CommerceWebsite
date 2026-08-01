import React, { useState } from 'react'
import PaginateModule from 'react-paginate';
import Card from './Card';

const ReactPaginate = PaginateModule?.default ?? PaginateModule;

const Paginate = ({ itemsPerPage = 6, products = [] }) => {

    const items = Array.isArray(products) ? products : []

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div className='flex flex-wrap gap-y-10 gap-x-7.5'>
                            <Card
                                imgSrc={item.thumbnail}
                                percentage={item.discountPercentage}
                                title={item.title}
                                price={item.price}
                                discountPrice={item.price - (item.price * (item.discountPercentage / 100)).toFixed(3)}
                                rating={item.rating}
                                review={item.reviews?.length ?? 0}
                            />
                        </div>
                    ))}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);

    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className = "flex gap-4"
                pageClassName = "bg-black px-6 py-1 text-white text-sm"
            />
        </>
    )
}

export default Paginate
