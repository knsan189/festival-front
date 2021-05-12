import React from 'react';

const DetailInfo = ({more}) => {
    const {infoname, infotext} = more

    console.log(typeof infotext)
    return(
            <li>
                <h3>{infoname}</h3>
                <pre dangerouslySetInnerHTML={{__html: infotext }}></pre>
            </li>
    );
}
export default DetailInfo;