import React from 'react';
import Table from './Table';

const LoadingData = ({
    inputs,
    data
}) => {
    return (
        <div className="col-md-8 banner-sec loading-data-tab">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="">
                        <div className="tabcontent">
                            <Table
                                data={data}
                                inputs={inputs}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoadingData;