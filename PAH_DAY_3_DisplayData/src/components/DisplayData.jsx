import React from 'react'
import PropTypes from 'prop-types';

const DisplayData = (props) => {
    return (
        <div>
            <h2>Static Data:</h2>
            <p>{props.staticData}</p>
            <h2>Dynamic Data:</h2>
            <p>{props.dynamicData}</p>
        </div>
    )
}

DisplayData.propTypes = {
    staticData: PropTypes.string.isRequired,
    dynamicData: PropTypes.node.isRequired
}

export default DisplayData;