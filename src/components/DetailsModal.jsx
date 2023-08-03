import React, { useEffect } from 'react'
import { GrClose } from "react-icons/gr";

const DetailsModal = ({ capsule, onClose }) => {

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
    }, [])
    const handleClose = e => {
        if (e.target.id === 'overlay') onClose()
    }

    const bg_tag_color = capsule.status === 'active' ? 'bg-slate-50' : capsule.status == 'retired' ? 'bg-zinc-50 text-zinc-800' : 'bg-red-50 text-red-800';
    return (
        <div className='fixed inset-0 grid place-items-center modal-overlay' id='overlay' onClick={handleClose}>
            <div className="bg-white text-left grid gap-4 font-inter relative card-details text-slate-950 font-medium text-base min-w-[600px] rounded-md px-4 pt-8 pb-4">
                <button onClick={() => onClose()} className='absolute top-4 right-4 rounded-full transition-all hover:bg-slate-200 p-2'><GrClose /></button>
                <div className="flex justify-start gap-2">
                    <p className={'flex border flex-col text-left shadow-sm text-slate-800 text-xs font-semibold font-inter py-2 px-3 rounded-md '}>
                        <span className='text-slate-400 text-xs font-normal font-inter'>Type</span>
                        <span className='bg-slate-50 shadow-sm text-slate-800 text-xs font-semibold font-inter  rounded-md'>{capsule.type}</span>
                    </p>
                    <p className={'flex border flex-col text-left shadow-sm text-slate-800 text-xs font-semibold font-inter py-2 px-3 rounded-md '}>
                        <span className='text-slate-400 text-xs font-normal font-inter'>Serial</span>
                        <span className='bg-slate-50 shadow-sm text-slate-800 text-xs font-semibold font-inter  rounded-md'>{capsule.serial}</span>
                    </p>
                    <p className={'flex border flex-col text-left shadow-sm text-slate-800 text-xs font-semibold font-inter py-2 px-3 rounded-md ' + bg_tag_color}>
                        <span className='text-slate-400 text-xs font-normal font-inter'>Status</span>
                        {capsule.status == 'active' ? <span>Active</span> : capsule.status == 'retired' ? <span>Retired</span> : <span>Destroyed</span>}
                    </p>
                </div>
                <h1 className="text-xl whitespace-normal max-w-lg mb-4 font-semibold font-inter text-slate-900">{capsule.last_update || "No details"}</h1>
                <p className={'flex space-x-2 text-left shadow-sm text-slate-800 text-base font-semibold font-inter py-1 px-3  rounded-md '}>
                    <span className='text-slate-600  font-normal font-inter'>Water Landings </span>
                    <span className='bg-slate-50 shadow-sm text-slate-800  font-semibold font-inter  rounded-md'>{capsule.water_landings}</span>
                </p>
                <p className={'flex space-x-2 text-left shadow-sm text-slate-800 text-base font-semibold font-inter py-1 px-3  rounded-md '}>
                    <span className='text-slate-600  font-normal font-inter'>Land Landings </span>
                    <span className='bg-slate-50 shadow-sm text-slate-800  font-semibold font-inter  rounded-md'>{capsule.land_landings}</span>
                </p>
                <p className={'flex space-x-2 text-left shadow-sm text-slate-800 text-base font-semibold font-inter py-1 px-3  rounded-md '}>
                    <span className='bg-slate-50 shadow-sm text-slate-800  font-semibold font-inter  rounded-md'>{capsule.launches?.length}</span>
                    <span className='text-slate-600  font-normal font-inter'>Launches</span>
                </p>
                <p className={'flex space-x-1 text-left shadow-sm text-slate-800 text-base font-semibold font-inter py-1 px-3  rounded-md '}>
                    <span className='text-slate-600  font-normal font-inter'>Reused</span>
                    <span className='bg-slate-50 shadow-sm text-slate-800  font-semibold font-inter  rounded-md'>{capsule.reuse_count}</span>
                    <span className='text-slate-600  font-normal font-inter'>Times</span>
                </p>
            </div>
        </div>
    )
}

export default DetailsModal