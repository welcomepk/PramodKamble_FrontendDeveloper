
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCapsules } from '../features/capsules/capsulesSlice'
import SpacexDataCards from './SpacexDataCards';
import Pagination from './Pagination';
import FallbackCapsules from './Fallbacks';


const SpacexData = ({ dataType }) => {
    const capsules = useSelector((state) => state.capsules);
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5); // Set the number of capsules per page
    const dispatch = useDispatch();

    // updates for filters
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [currentFilteredCapsules, setCurrentFilteredCapsules] = useState([]);

    // Apply filters and update filtered data when filter values change
    useEffect(() => {
        const filteredData = capsules.filter((item) => {
            const statusMatch = item.status.toLowerCase().includes(statusFilter.toLowerCase());
            const typeMatch = item.serial.toLowerCase().includes(typeFilter.toLowerCase());
            return statusMatch && typeMatch;
        });

        // Update the current page to 1 after applying filters
        setCurrentPage(1);

        // Set the filtered data to display
        setCurrentFilteredCapsules(filteredData);
    }, [capsules]);

    // Memoize filtered data
    const filteredData = useMemo(() => {
        return capsules.filter((item) => {
            const statusMatch = item.status.toLowerCase().includes(statusFilter.toLowerCase());
            const typeMatch = item.serial.toLowerCase().includes(typeFilter.toLowerCase());
            return statusMatch && typeMatch;
        });
    }, [capsules, statusFilter, typeFilter]);

    const handleFilterApply = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        setCurrentFilteredCapsules(filteredData);
    }
    const resetFilters = () => {
        setStatusFilter('')
        setTypeFilter('')
        setCurrentFilteredCapsules(filteredData);

    }

    useEffect(() => {

        let isMounted = true;
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://api.spacexdata.com/v4/${dataType}`);
                if (isMounted)
                    dispatch(setCapsules(response.data));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false)
            }
        };
        fetchData();

        return () => {
            isMounted = false;
        }

    }, [dataType]);

    const handlePerPage = (e) => {
        setPerPage(e.target.value)
    }
    const indexOfLastCapsule = currentPage * perPage;
    const indexOfFirstCapsule = indexOfLastCapsule - perPage;
    const currentCapsules = currentFilteredCapsules?.slice(indexOfFirstCapsule, indexOfLastCapsule);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container_wrapper min-h-[60vh]'>
            <div className="search_form py-10 items-center flex flex-col md:flex-row gap-4 justify-between">
                <form onSubmit={(handleFilterApply)} className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col lg:flex-row gap-2">
                        <input
                            type="text"
                            className='form-control border-0 rounded-md  min-w-[300px] font-inter text-sm'
                            placeholder='Search by Status e.g: active,destroy etc'
                            value={statusFilter}
                            onChange={e => setStatusFilter(e.target.value)}
                        />
                        <input
                            type="text"
                            className='form-control border-0 rounded-md min-w-[300px] font-inter text-sm'
                            placeholder='Search by Serial e.g: c110,c012 etc    '
                            value={typeFilter}
                            onChange={e => setTypeFilter(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center gap-1">
                        <button type='submit' className='bg-slate-400 rounded-md py-1 px-2 text-sm font-semibold font-inter' onClick={handleFilterApply}>Apply Filters</button>
                        <button className='bg-slate-400 rounded-md py-1 px-2 text-sm font-semibold font-inter' onClick={resetFilters}>Reset Filters</button>
                    </div>

                </form>
                <select className=' rounded-md' defaultValue={perPage} onChange={handlePerPage} class="form-select w-20 px-4 py-3 rounded-md">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

            {isLoading ? <FallbackCapsules /> :
                (capsules?.length > 0 && currentCapsules.length > 0 ? (
                    <>
                        <h2 className='text-2xl font-inter pb-8 text-slate-800'>{dataType === 'rockets' ? 'Rockets' : 'Capsules'}</h2>
                        <SpacexDataCards capsules={currentCapsules} />
                        <Pagination currentPage={currentPage} length={currentFilteredCapsules?.length} perPage={perPage} setCurrentPage={setCurrentPage} paginate={paginate} />
                    </>
                ) :
                    <h2 className='text-2xl font-inter pb-8 text-slate-800'>{dataType === 'rockets' ? 'No Rockets are found' : 'No Capsules are found'}</h2>)
            }
        </div>
    );
};

export default SpacexData;