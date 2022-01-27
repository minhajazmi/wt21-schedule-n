import React from 'react';

const Result = ({types}) => {  

const renderedItems = types.map(type => {
    return  <div key={type.name}>
        <div className="resultContainer">
    <div className="resultHead"><h3>My Quiz Result: {type.name}</h3></div>
    <div className="resultBody"><p>{type.content}</p></div>
        </div>
        </div>
});

return <div>{renderedItems}</div>;
};
//<Results types={types} />
// if types.type == respone

export default Result;
