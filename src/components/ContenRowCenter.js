import React from 'react';
import LastProductInDB from './LastProductInDB';
import CategoriesInDB from './CategoriesInDB';

function ContentRowCenter({infoProducts}){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDB infoProducts={infoProducts}/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDB infoProducts={infoProducts}/>

        </div>
    )
}

export default ContentRowCenter;