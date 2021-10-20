import React from 'react'
const Memes = (props)=> {
    let{ title, url , width,height } = props;
    return (
        <div>


            <div className="my-3">
                <div className="card"  >
                    <img src={url} className="card-img-top" alt="#" style={{ width: {width}, height: {height} }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Memes