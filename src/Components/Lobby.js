const Lobby = () => {
    return(
            <div className="w-full h-screen overflow-auto">
                <div className="flex justify-center">
                    <img className="drop-shadow-2xl rounded-full h-70 w-[70vw] md:w-96 md:h-80 lg:w-96 lg:h-80 border-2 border-D-G m-6"
                    src="/apn.png"
                    />
                </div>
                <div className="flex justify-center border-black border-2">
                    <div className="flex justify-center flex-col grid grid-cols-2">
                        <button className="border-2 border-D-G w-24 text-D-G rounded-full">1</button>
                        <button>1</button>
                        <button>1</button>
                        <button>1</button>
                        
                    </div>
                </div>
            </div>
    )
}

export default Lobby