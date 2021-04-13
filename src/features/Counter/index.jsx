import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Tăng</button>
            <button onClick={() => setCount(x => x - 1)}>Giam</button>
        </div>
    );
}

export default Counter;