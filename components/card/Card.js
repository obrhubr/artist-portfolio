import React from 'react';

import Chip from '@mui/material/Chip';

export default function Card(props) {
    return (
        <div className="p-10 sm:m-3 flex justify-center flex-col sm:shadow-lg sm:rounded-2xl">
            <div className="m-3 flex justify-center">
                <img alt={props.title} className="rounded-2xl shadow-2xl" src={props.image}/>
            </div>
            <div className="flex flex-col">  
                <div className="text-4xl font-bold m-3 underline">
                    <a href={"/collections/" + props.collectionId}>{props.title}</a>
                </div>
                <div className="text-2xl font-light m-3">
                    {props.description}
                </div>
                <div className="m-3">
                    <div className="text-3xl">
                        {props.price} € pro Bild
                    </div>
                </div>
                <div className="m-3">
                    <div className="">
                            {
                                props.tags.map((item, index) => {
                                    return(
                                        <> 
                                            <span className="pr-1 py-1" id={"chip_" + index} key={index} >
                                                <Chip label={item} variant="outlined"/>
                                            </span>
                                        </>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}