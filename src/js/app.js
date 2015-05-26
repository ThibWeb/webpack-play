import React from 'react';
import content from './content';

export default React.createClass({
    displayName: 'App',

    render() {
        return (
            <div>
                {`React: ${content}`}
            </div>
        );
    }
});
