import React from 'react';
import axios from 'axios';
import classNames from "classnames";

export function AsideList() {
    const elementsCollection = [
        {id: 1, name: "Alberto"},
        {id: 2, name: "Emilio"},
        {id: 3, name: "Mariana"},
        {id: 4, name: "Caroline"}
    ];
    return <ul className="list-group list-group-flush listObj">
        {elementsCollection.map(d => (<li key={d.id} className="list-group-item">{d.name}</li>))}
    </ul>
}
