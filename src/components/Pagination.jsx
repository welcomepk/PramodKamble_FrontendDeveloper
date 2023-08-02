
const Pagination = ({ currentPage, length, perPage, setCurrentPage }) => {
    const totalPages = Math.ceil(length / perPage);
    const handlePrev = () => {
        if (currentPage <= 1) return;
        setCurrentPage(currentPage - 1)
    }
    const handleNext = () => {
        if (currentPage >= totalPages) return;
        setCurrentPage(currentPage + 1)
    }
    const disableNextButton = currentPage >= totalPages;
    const disablePrevButton = currentPage <= 1;

    return (
        <nav className='py-8'>
            <ul class="inline-flex -space-x-px text-sm">
                <li>
                    <button disabled={disablePrevButton} onClick={handlePrev} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-80">Previous</button>
                </li>
                {
                    Array.from({ length: totalPages }).map((_, index) => {
                        const currentPageClass = index + 1 === currentPage ? 'font-bold shadow-sm' : ''

                        return <li className={currentPageClass} key={index} onClick={() => setCurrentPage(index + 1)}>
                            <button
                                onClick={() => setCurrentPage(index + 1)}
                                className={`flex items-center  justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPageClass}`}>
                                {index + 1}
                            </button>
                        </li>
                    })
                }
                <li>
                    <button disabled={disableNextButton} onClick={handleNext} className={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-80"}>Next</button>
                </li>
            </ul>

        </nav>
    )
}

export default Pagination;