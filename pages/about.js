import React from 'react';
import SmallHeader from '../components/navigation/header/SmallHeader';
import Footer from '../components/navigation/footer/Footer';

import content from '../data/content.json';

export default function about() {
    return (
        <div>
            <SmallHeader></SmallHeader>
            <div className="m-5">
                <div className="">
                    <div className="flex flex-col items-center justify-center">
                        <img className="rounded-lg shadow-md" src={content.artist_image}></img>
                    </div>
                    <div className="flex justify-center flex-col items-center ">
                        <div className="lg:w-1/2">
                            <div className="m-1 p-5">
                                <div className="underline font-bold text-xl">{content.biography.name}:</div>
                                <div className="m-2" dangerouslySetInnerHTML={{__html: content.biography.text}}>
                                    
                                </div>
                            </div>

                            <div className="m-1 p-5">
                                <div className="underline font-bold text-xl">{content.expositions.name}:</div>
                                <div className="m-2">
                                    <ul className="list-disc px-5">
                                        {
                                            content.expositions.list.map((item, index) => {
                                                return (
                                                    <>
                                                        <li dangerouslySetInnerHTML={{__html: item}}></li>
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="m-1 p-5">
                                <div className="underline font-bold text-xl">{content.techniques.name}:</div>
                                <div className="m-2">
                                    {
                                        content.techniques.list.map((item, index) => {
                                            return (
                                                <>
                                                    <div dangerouslySetInnerHTML={{__html: item}}></div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
