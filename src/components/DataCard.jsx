import React from 'react'
const DataCard = ({ capsule, handleCapsuleSelect }) => {


    const bg_tag_color = capsule.status === 'active' ? 'bg-slate-50' : capsule.status == 'retired' ? 'bg-zinc-50 text-zinc-800' : 'bg-red-50 text-red-800';
    return (
        <div onClick={() => handleCapsuleSelect(capsule)} className={`card min-h-[200px] p-4 w-auto bg-slate-100 hover:bg-slate-200 hover:cursor-pointer transition-all shadow-slate-900`}>
            <div className="flex justify-between mb-4">
                <span className='bg-slate-50 shadow-sm text-slate-800 text-xs font-semibold font-inter py-1 px-2 rounded-md'>{capsule.type}</span>
                <span className='bg-slate-50 shadow-sm text-slate-800 text-xs font-semibold font-inter py-1 px-2 rounded-md'>{capsule.serial}</span>
            </div>
            <h1 className="text-lg mb-4 font-semibold text-left font-inter text-slate-900">{capsule.last_update || "No details"}</h1>

            <div className="tag flex items-center space-x-2">
                {/* <span className='text-slate-400 text-xs font-normal font-inter'>Status</span> */}

                <p className={'flex flex-col text-left shadow-sm text-slate-800 text-xs font-semibold font-inter py-2 px-3 rounded-md ' + bg_tag_color}>
                    <span className='text-slate-400 text-xs font-normal font-inter'>Status</span>
                    {capsule.status == 'active' ? <span>Active</span> : capsule.status == 'retired' ? <span>Retired</span> : <span>Destroyed</span>}
                </p>
            </div>
        </div>
    )

}

export default DataCard