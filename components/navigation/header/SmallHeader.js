import React from 'react';

import content from '../../../data/content';

export default function Header() {
    return (
        <>
        <div className="bg-red-900 w-full text-white flex items-center shadow-lg">
            <div className="text-left w-full py-4 px-5">
                <div>
                    <span className="font-normal text-xl"><a href="/">{content.artist.toUpperCase()}</a></span>
                    <span className="px-4 font-light text-lg"><a href="/">{content.art_nav}</a></span>
                    <span className="px-4 font-light text-lg"><a href="/about">{content.about}</a></span>
                </div>
            </div>
        </div>
        </>
    )
}