import React from 'react';
import ReactDOM from 'react-dom/client';

function Aaa() {
    debugger;
    return <div>dongdongdong</div>
}

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(React.createElement(Aaa));