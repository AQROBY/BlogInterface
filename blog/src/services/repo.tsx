import React from 'react';
import seed from '../mock-posts.json';

let instance: Repo;
let counter = 0;

class Repo extends React.Component {
    data: any;

    constructor() {
        super(React.Component);
        this.data = seed;
        counter = this.data.length;
        if (instance) {
            return instance;
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    add(item: any) {
        this.data.push(item);
        this.incrementCounter();
    }

    incrementCounter() {
        return ++counter;
    }

    getAll() {
        return this.data;
    }

    length() {
        return counter;
    }
}

const RepoCounter = Object.freeze(new Repo());
export default RepoCounter;
