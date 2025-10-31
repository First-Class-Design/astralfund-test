import React, { useState } from 'react';
import { Button } from '../devlink';
import { MouseLeftClick06Icon } from '@hugeicons/core-free-icons'; 

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div onClick={() => setCount(count + 1)}>
                <Button
                    variant='Secondary'
                    iconLeadIcon={true}
                    iconLeadIconClass={MouseLeftClick06Icon}
                    buttonText="Click Me"
                />
            </div>
            <p>Clicked {count} times</p>
        </div>
    );
};

export default ClickCounter;