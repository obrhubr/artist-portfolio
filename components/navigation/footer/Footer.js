import React from 'react';

import content from '../../../data/content';

export default function Footer() {
    return (
        <div className="footer relative pt-1 border-b-2 bg-yellow-100 flex flex-col text-gray-600">
            <div className="flex flex-col mx-8 my-6">
                <div className="font-bold text-gray-700 uppercas">{content.address.name}</div>
                <div>{content.address.street}</div>
                <div>{content.address.city}</div>
                <div>{content.address.country}</div>
            </div>

            <div className="flex flex-col mx-8 my-6">
                <div className="font-bold text-gray-700 uppercas">{content.contact.name}</div>
                <div>{content.contact.website_descr}: <a className="underline text-black" href={content.website}>{content.website}</a></div>
                <div>{content.contact.email_descr}: {content.email}</div>
            </div>

            <div className="flex flex-col mx-8 my-6"> 
                <div className="font-bold text-gray-700 uppercas">{content.infos.name}</div>
                <div>{content.infos.infos_text}</div>
            </div>
        </div>
    )
}
