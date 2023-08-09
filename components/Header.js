const header = () => {
    return (
        <div className="header flex flex-row items-center bg-zinc-900 px-2">

            <div className="flex flex-1 flex-row space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"/>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"/>
                <div className="w-3 h-3 bg-green-400 rounded-full"/>
            </div>

            <div>
                <span className="text-gray-300 text-xs">
                    @lynnhtinnyein
                </span>
            </div>
            
            <div className="flex-1">
                {/* empty */}
            </div>

        </div>
    )
}

export default header;