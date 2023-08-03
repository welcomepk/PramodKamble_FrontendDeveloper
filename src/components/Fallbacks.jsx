
const FallbackCapsules = () => {
    const cardElements = Array.from({ length: 10 }).map((_, index) => <div className='min-h-[200px] p-4 w-auto bg-slate-100'></div>)
    return <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
            {
                cardElements.map(card => card)
            }
        </div>
    </>
}

export const SpacexDataFallback = () => {
    const cardElements = Array.from({ length: 10 }).map((_, index) => <div className='min-h-[200px] p-4 w-auto bg-slate-100'></div>)
    return <>
        <div className="flex justify-between container_wrapper">
            <div className="h-12 w-80 bg-slate-100"></div>
            <div className="h-12 w-80 bg-slate-100"></div>
            <div className="h-12 w-80 bg-slate-100"></div>
        </div>
        <div className='container_wrapper grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                cardElements.map(card => card)
            }
        </div>
    </>
}

export default FallbackCapsules