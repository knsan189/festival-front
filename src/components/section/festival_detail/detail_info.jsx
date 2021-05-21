import React, { memo } from 'react';

const DetailInfo = memo(({more}) => {
    const {infoname, infotext} = more
    return(
            <li>
                <h3>{infoname}</h3>
                <pre dangerouslySetInnerHTML={{__html: infotext }}></pre>
            </li>
    );
})
export default DetailInfo;