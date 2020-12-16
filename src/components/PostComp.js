import React from 'react';

const PostComp = (props) => {
    const style = { backgroundColor: props.colorHex };

    const btn = (<button className="moodSquare btn-quiet-two" onClick={props.onClick} style={ style }></button>);
    const nonBtn = (<div className="moodSquare" style={ style }></div>);
    
    return ( props.onClick ? btn : nonBtn );
}

export default PostComp;