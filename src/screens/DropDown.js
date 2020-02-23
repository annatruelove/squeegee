import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';



const DropDown = (props) => {
    const items = [];
    for (const [i, x] of props.items.entries()) {
        items.push({ label: x, value: i });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={items} />
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}

export default DropDown;