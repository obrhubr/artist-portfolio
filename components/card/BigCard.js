import React from 'react';

import Chip from '@mui/material/Chip';

export default function Card(props) {
    return (
        <div className="p-2 flex justify-center items-center flex-col">
            <div className=''>
                <div className="text-4xl font-bold m-3 underline">
                    <a alt={props.title} href={"/collections/" + props.collectionId}>{props.collectionName}</a>
                </div>
                <div className="my-4 flex justify-center">
                    <img className="rounded-2xl shadow-2xl" src={props.image}/>
                </div>
                <div className="flex flex-col">  
                    <div className="text-4xl font-bold m-3 underline">
                        {props.title}
                    </div>
                    <div className="m-3">
                        <div className="text-3xl">
                            {props.price} €
                        </div>
                    </div> 
                    <div className="text-1xl m-3 flex flex-row italic justify-start">
                        <div className="mr-4">{props.size}</div>
                        <div className="mr-4">{props.technique}</div>
                        <div className="mr-4">Eingerahmt: {props.framed == true ? " ja" : " nein"}</div>
                    </div>
                    
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