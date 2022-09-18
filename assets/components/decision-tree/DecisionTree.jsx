import React, { Component } from 'react';
import { initializeTree } from './decision-tree';
import  './decision-tree.css';

export default class DecisionTree extends Component {
  
  constructor() {
    super();
    this.diagram = null;
    this.element = null;
  }

  componentDidMount () {
    this.diagram = initializeTree();
    this.element = document.getElementById('myDiagramDiv');
  }

  componentWillUnmount () {
    this.diagram.div = null;
  }

  render () {
    return (
      <div
        id="myDiagramDiv"
        className='decision-tree'
      />
    );
  }
}