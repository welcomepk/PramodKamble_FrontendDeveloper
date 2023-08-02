
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCapsules } from '../features/capsules/capsulesSlice'
import SpacexDataCards from './SpacexDataCards';
import Pagination from './Pagination';

const SpacexData = ({ dataType }) => {
    const capsules = useSelector((state) => state.capsules);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10); // Set the number of capsules per page
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("use efeect")
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.spacexdata.com/v4/${dataType}`);
                dispatch(setCapsules(response.data));
                // dispatch(setCapsules([]));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dataType]);

    const indexOfLastCapsule = currentPage * perPage;
    const indexOfFirstCapsule = indexOfLastCapsule - perPage;
    const currentCapsules = capsules.slice(indexOfFirstCapsule, indexOfLastCapsule);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container_wrapper'>
            <div className="search_form py-10 border flex justify-between">
                <div className="">
                    <select class="form-select w- px-4 py-3 rounded-md">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    <select class="form-select w-20 px-4 py-3 rounded-md">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
                <select class="form-select w-20 px-4 py-3 rounded-md">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>

            </div>
            {
                capsules.length > 0 ? (
                    <>
                        <h2 className='text-2xl font-inter pb-8 text-slate-800'>{dataType === 'rockets' ? 'Rockets' : 'Capsules'}</h2>
                        <SpacexDataCards capsules={currentCapsules} />
                        <Pagination currentPage={currentPage} length={capsules.length} perPage={perPage} setCurrentPage={setCurrentPage} paginate={paginate} />
                    </>
                ) :
                    <h2 className='text-2xl font-inter pb-8 text-slate-800'>{dataType === 'rockets' ? 'No Rockets are found' : 'No Capsules are found'}</h2>
            }
        </div>
    );
};

export default SpacexData;