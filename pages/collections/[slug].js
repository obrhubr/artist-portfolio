import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Chip from '@mui/material/Chip';

import SmallHeader from '../../components/navigation/header/SmallHeader';
import Footer from '../../components/navigation/footer/Footer';
import SmallCard from '../../components/card/SmallCard';
import Loading from '../../components/other/Loading';
import Error from '../../components/other/Error';

import content from '../../data/content.json';

export default function Collection() {
    var router = useRouter();
    var { slug } = router.query;

    const [appState, setAppState] = useState({
        loading: true,
        images: undefined
    });

    const [filterState, setFilterState] = useState({
        images: undefined
    });

    const [chipState, setChipState] = useState([]);

    const [collectionState, setCollectionState] = useState({
        loading: true,
        collection: undefined
    });

    const [errorState, setErrorState] = useState({
        error: false,
        errorMessage: "",
    });

    useEffect(() => {
        const URL = '/api/collections/find';
    
        axios.post(URL, { id: window.location.pathname.split('/')[2] }).then(res => {
            setAppState({ images: res.data.data, loading: false });
            setFilterState({ images: res.data.data, filtering: false });
        })
        .catch(error => {
            if(error.response) {
                if(error.response.status == 500) {
                    setErrorState({ error: true, errorMessage: error.response.data.error });
                }
            }
        });

        const URL2 = '/api/collections/get';
    
        axios.post(URL2, { id: window.location.pathname.split('/')[2] }).then(res => {
            setCollectionState({ collection: res.data.data[0], loading: false });
        })
        .catch(error => {
            if(error.response) {
                if(error.response.status == 500) {
                    setErrorState({ error: true, errorMessage: error.response.data.error });
                }
            }
        });
    }, [setAppState, setCollectionState]);

    useEffect(() => {
        if(appState.images) {
            setFilterState({ images: appState.images.filter((value, index) => { return value.tags.filter(x => chipState.includes(x)).length == chipState.length }) });
        }
    }, [chipState]);

    const handleChipClick = (e) => {
        if(e.target.tagName != "SPAN") {
            var tag = e.target.childNodes[0].innerHTML;
            if(chipState.find(element => element == tag)) {
                setChipState(chipState.filter((value, index, arr) => { return value != tag; }));
            } else {
                setChipState([...chipState, tag]);
            }
        } else {
            var tag = e.target.innerHTML;
            if(chipState.find(element => element == tag)) {
                setChipState(chipState.filter((value, index, arr) => { return value != tag; }));
            } else { 
                setChipState([...chipState, tag]);
            }
        };
    };

    return(
        <>
        <Head>
            <>
                <title>{content.artist} | Collection</title>
                <meta property="title" content={content.artist + " Art | Collection"} key="title"/>
                <meta property="description" content={"A collection from the art pieces of " + content.artist + " at " + content.website} key="description"/>
            </>
        </Head>
        <SmallHeader></SmallHeader>

        {!appState.loading || appState.images ?
            <div className="flex items-center justify-center">
                <div className="lg:w-1/2">
                <div className="p-5">
                    <div className="text-4xl font-bold m-3 underline">
                        {collectionState.collection != undefined ? 
                            collectionState.collection.name
                        :
                            "Collection: "
                        }
                    </div>
                    <div className="">
                        <div>
                            {collectionState.collection != undefined ? 
                                collectionState.collection.tags.map((item, index) => {
                                    return(
                                        <> 
                                            <span className="p-1 py-1" id={"chip_" + index} key={index} >
                                                {chipState.find(element => element == item) ?
                                                    <Chip label={item} variant="outlined" onClick={handleChipClick} />
                                                : 
                                                    <Chip label={item} variant="" onClick={handleChipClick} />
                                                }
                                            </span>
                                        </>
                                    )
                                })
                            :
                                ""
                            }
                        </div>
                    </div>
                    <div>
                        {filterState.images != undefined ?
                            filterState.images.map((item, index) => {
                                return (
                                    <SmallCard
                                        key={index}
                                        image={item.imageUrl}
                                        imageId={item.id}
                                        title={item.name}
                                        price={item.price}
                                        tags={item.tags}
                                    >
                                    </SmallCard>
                                )
                            })
                        :   <>
                                No Images found
                            </>
                        }
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