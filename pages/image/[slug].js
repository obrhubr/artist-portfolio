import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SmallHeader from '../../components/navigation/header/SmallHeader';
import Footer from '../../components/navigation/footer/Footer';
import BigCard from '../../components/card/BigCard';
import Loading from '../../components/other/Loading';
import Error from '../../components/other/Error';

import content from '../../data/content.json';

export default function Image() {
    var router = useRouter();
    var { slug } = router.query;

    const [appState, setAppState] = useState({
        loading: true,
        image: undefined,
        collection: undefined
    });

    const [errorState, setErrorState] = useState({
        error: false,
        errorMessage: "",
    });

    useEffect(async () => {
        try {
            var imageData = await axios.post('/api/images/find', { id: window.location.pathname.split('/')[2] });
            var collectionData = await axios.post('/api/collections/get', { id: imageData.data.data[0].collectionId });

            setAppState({ image: imageData.data.data[0], collection: collectionData.data.data[0], loading: false });
        } catch (err) {
            if(err.response) {
                if(err.response.status == 500) {
                    setErrorState({ error: true, errorMessage: error.response.data.error });
                }
            }
        }
    }, [setAppState]);

    return(
        <>
        <Head>
            <>
                <title>{content.artist} | Image</title>
                <meta property="title" content={content.artist + " Art | Image"} key="title"/>
                <meta property="description" content={"An Image from the art pieces of " + content.artist + " at " + content.website} key="description"/>
            </>
        </Head>
        <SmallHeader></SmallHeader>

        {!appState.loading || appState.image ?
            <div className="flex justify-center items-center">
                <div className="p-2 lg:w-1/2">
                    <div>
                        {appState.image != undefined ?
                                <BigCard 
                                image={appState.image.imageUrl}
                                title={appState.image.name}
                                collectionId={appState.image.collectionId}
                                collectionName={appState.collection.name}
                                price={appState.image.price}
                                size={appState.image.size}
                                technique={appState.image.technique}
                                framed={appState.image.framed}
                                tags={appState.image.tags}
                            >
                            </BigCard>
                        :
                            ""
                        }
                    </div>
                    <div>
                        <div className="flex flex-col">  
                            <div className="text-1xl m-3">
                                If you want to buy this drawing/painting, contact us as <a href={"email:" + content.email} className="underline">{content.email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :
            <div className="p-10">
                <>
                    {errorState.error ?
                        <div className="flex justify-center mt-8">
                            <div className="border-red-600 rounded-lg border-2 w-80 border-dashed">
                                <div className="min-w-full flex justify-center text-red-600">
                                    <Error message={errorState.errorMessage}></Error>
                                </div>
                            </div>
                        </div>
                    :
                        <Loading></Loading>
                    }
                </>
            </div>
        }

        <Footer></Footer>
        </>
    )
}