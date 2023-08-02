import React from 'react'
import { useState } from 'react';
import DataCard from './DataCard'
import { nanoid } from 'nanoid'
import DetailsModal from './DetailsModal';


const SpacexDataCards = ({ capsules }) => {

    const [selectedCapsule, setSelectedCapsule] = useState(null);

    const handleCloseModal = () => {
        setSelectedCapsule(null);
    };
    const handleCapsuleSelect = (capsule) => {
        console.log(capsule)
        setSelectedCapsule(capsule);
    }
    return (
        <div div className="cards  grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
            {
                capsules.map(capsule => {
                    return <DataCard handleCapsuleSelect={handleCapsuleSelect} key={nanoid()} capsule={capsule} />
                })
            }

            {/* render modal */}
            {selectedCapsule && (
                <DetailsModal onClose={handleCloseModal} capsule={selectedCapsule} />
            )}
        </div>
    )
}

export default SpacexDataCards