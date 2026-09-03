import React, { useState } from 'react'
import PaginateModule from 'react-paginate';
import Card from './Card';
import { useSelector } from 'react-redux';

const ReactPaginate = PaginateModule?.default ?? PaginateModule;

const Paginate = ({ itemsPerPage = 6, items: providedItems }) => {

    const storedItems = useSelector(state => state.products.value)
    const items = providedItems ?? storedItems

    function Items({ currentItems }) {
        return (
            <>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5'>
                    {currentItems &&
                        currentItems.map((item) => (
                            <div key={item.id}>
                                <Card
                                    id={item.id}
                                    productDetails={item}
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
                </div>
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
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
                className="flex gap-4 mt-4"
                pageClassName="bg-black px-6 py-1 text-white text-sm rounded-sm cursor-pointer hover:bg-primary duration-150 ease-linear"
                previousClassName='hidden'
                nextClassName='hidden'
            />
        </>
    )
}

export default Paginate