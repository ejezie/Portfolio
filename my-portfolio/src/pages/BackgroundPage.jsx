import React from 'react'

function BackgroundPage({isDark}) {
    return (
        <div className={`${isDark ? "backgrounddark" : "backdround"}`}>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubblen"></div>
            </div>
        </div>
    )
}

export default BackgroundPage
