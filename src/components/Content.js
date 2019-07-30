import React, { useState } from 'react';
import textFetcher from '../helpers/textFetcher';


const fetchText = async(content, setContent) => {
    if( content === '' ) {
        const data = await textFetcher();
        setContent(data);
    }
}

const Content = () => {
    const [content, setContent] = useState('');
    fetchText(content, setContent);
    return (
        <div style={{marginRight: "-250px", marginBottom: "50px"}} className="has-text-left">
        <h1 className="title is-4" style={{marginBottom: "30px", marginTop: "50px"}}>Garett smart VR headset</h1>
        {content}
        </div>
    )
}

export default Content;
