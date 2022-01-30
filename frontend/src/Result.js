import React from 'react';

const Result = ({types}) => {  

const renderedItems = types.includes(type => {
    return  <div key={type.name}>
        <div className="resultContainer">
    <div className="resultHead"><h3>My Quiz Result: {type.name}</h3></div>
    <div className="resultBody"><p>{type.content}</p></div>
        </div>
        </div>
});

return <div>{renderedItems}</div>;
};

export default Result;
