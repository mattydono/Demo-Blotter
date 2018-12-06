import React, {Component} from 'react';
import {Orders} from "./orders/components/Orders";

export class App extends Component {
    public render() {
        return (
            <div className="app-container">
                <Orders/>
            </div>
        );
    }
}