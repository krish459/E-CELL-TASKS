import React, { useEffect, useState } from 'react'
import Memes from './Memes'

export default function Memebox(props) {

    const [jokes, setJokes] = useState([])

    const updatejokes = async () => {
        const url = 'https://api.imgflip.com/get_memes';
        let data = await fetch(url);
        let newData = await data.json();
        console.log(newData);
        setJokes(newData.data.memes)
    }
    useEffect(() => {
        updatejokes();
    }, [])

    return (
        <div>
            <>
                <div className="container my-3">
                    <h2 className="text-center" style={{ marginTop: "90px" }}>MEMES FOR YOU</h2>

                    <div className="row">
                        {jokes.map((element) => {
                            return <div className="col-md-5"  >

                                <Memes key={element.id} title={element.name} url={element.url} width={element.width} height={element.height} />

                            </div>

                        })}

                    </div>
                </div>
            </>
        </div>
    )
    
}
