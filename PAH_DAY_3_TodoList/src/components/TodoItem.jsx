import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const { text, onDelete } = props;

    console.log('Rendering TodoItem:', text);

    return (
        <div className="todoItem">
            <span>{text}</span>
            <button onClick={onDelete} className="deleteButton">
                Delete
            </button>
        </div>
    );
};

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TodoItem;
