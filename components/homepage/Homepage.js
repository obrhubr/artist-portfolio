import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../card/Card';
import Loading from '../other/Loading';
import Error from '../other/Error';

export default function Homepage() {
    const [appState, setAppState] = useState({
        loading: true,
        collections: undefined,
    });

    const [errorState, setErrorState] = useState({
        error: false,
        errorMessage: "",
    });

    useEffect(() => {
        const URL = '/api/collections/all';
    
        axios.get(URL).then(res => {
            setAppState({ collections: res.data.data, loading: false });
        })
        .catch(error => {
            if(error.response) {
                if(error.response.status == 500) {
                    setErrorState({ error: true, errorMessage: error.response.data.error });
                }
            }
        });
    }, [setAppState]);

    return(
        <>
        {!appState.loading || appState.collections ?
            <div className="">
                <div className="flex items-center justify-center">
                    <div className="p-5 lg:w-1/2">
                        {appState.collections != undefined ?
                            appState.collections.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        image={item.imageUrl}
                                        description={item.description}
                                        title={item.name}
                                        price={item.priceRange}
                                        collectionId={item.id}
                                        tags={item.tags}
                                    >
                                    </Card>
                                )
                            })
                        :   <>
                                No Collections found
                            </>
                        }
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
        </>
    )
}
