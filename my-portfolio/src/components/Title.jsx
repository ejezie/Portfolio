import React from 'react'

function Title({title, span}) {
    return (
        <div className="title">
            {title}
            <span>{span}</span>
        </div>
    )
}

export default Title
