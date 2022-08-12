import React from 'react';

import Chip from '@mui/material/Chip';

export default function SmallCard(props) {
    return (
        <div className="lg:p-10">  
            <div className="p-4 flex justify-center flex-col shadow-lg rounded-2xl">
                <div className="my-4 flex justify-center">
                    <a href={"/image/" + props.imageId}><img alt={props.alt} className="rounded-2xl shadow-2xl" src={props.image}/></a>
                </div>
                <div className="flex flex-col">  
                    <div className="text-4xl font-bold m-3 underline">
                        <a href={"/image/" + props.imageId}>{props.title}</a>
                    </div>
                    <div className="m-3">
                        <div className="text-3xl">
                            {props.price} €
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
        </div>
    )
}