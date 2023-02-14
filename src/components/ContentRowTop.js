import React from 'react';
import ContentRowCenter from './ContenRowCenter';
import ContentRowData from './ContentRowData';

function ContentRowTop({infoUsers, infoProducts}){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowData infoUsers={infoUsers} infoProducts={infoProducts}/>
					<ContentRowCenter infoProducts={infoProducts}/>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;