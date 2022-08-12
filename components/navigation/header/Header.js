import React from 'react';

import content from '../../../data/content';

export default function Header() {
    return (
        <>
        <div className="bg-green-400 w-full h-screen text-white flex justify-center items-center bg-no-repeat bg-cover bg-opacity-80 shadow-lg" style={{backgroundImage: 'url("' + content.bg_image + '")'}}>
            <div className="text-left w-3/4 m-10 md:w-1/2 flex items-start justify-center flex-col">
                <div className="text-4xl font-extrabold">{content.artist.toUpperCase()}</div>
                <div className="text-4xl my-2">ART</div>
                <div className="text-2xl font-thin">{content.short_bio}</div>
                <div className="text-2xl font-thin underline"><a href="/about">{content.more}</a></div>
            </div>
        </div>
        </>
    )
}
