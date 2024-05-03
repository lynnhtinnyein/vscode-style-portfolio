import React from 'react'

const ActionButton = ({ icon, isActive, onClick }) => {
    return (
        <div
            className={`flex items-center justify-center cursor-pointer h-12 ${
                isActive
                ? 'border-l border-l-white text-white'
                : 'text-zinc-500'
            }`}
            onClick={onClick}
        >
            {icon}
        </div>
    )
}

export default ActionButton