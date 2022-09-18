import React from 'react';
import {
  NutanixLogoIcon, StackingLayout, NavBarLayout, FlexLayout, QuestionIcon, SettingsIcon,
  VerticalSeparator, Tabs, MenuIcon, InputSearch, Title, AlertIcon, Loader
} from 'prism-reactjs';
import '../css/page-layout.css';
import DecisionTree from './decision-tree/DecisionTree';

export default class AppPageLayout extends React.Component {

  renderNavBar = () => {
    return (
      <div className="header ntnx-flex-item ntnx">
        <div className="ntnx-flex-item ntnx">
          <div className="ntnx ntnx-nav-bar-layout ntnx-flex-layout ntnx-flex-item ntnx" data-display="flex" data-flex-direction="row" data-justify-content="space-between" data-align-items="center" data-item-spacing="5px">
            <div style={{width: "30%"}} className="left-of-center ntnx-flex-layout ntnx-flex-item ntnx" data-display="flex" data-flex-direction="row" data-justify-content="flex-start" data-align-items="center" data-item-spacing="20px">
              <MenuIcon />
            </div>
            <div className="ntnx-flex-item ntnx" style={{color: '#F2F4F6', width: "100%", marginTop: "40px"}}>
            <div className="center-icon ntnx-flex-layout ntnx-flex-item ntnx" data-display="flex" data-flex-direction="row" data-justify-content="center" data-align-items="center" data-item-spacing="20px">
            <NutanixLogoIcon />
            <Title style={{color: '#F2F4F6'}} size="h3">Customer Success Playbook</Title>
            </div>
            </div>
            <div className="right-of-center ntnx-flex-layout ntnx-flex-item ntnx" data-display="flex" data-flex-direction="row" data-justify-content="flex-end" data-align-items="center" data-item-spacing="20px">
              <AlertIcon style={{color: '#C44556'}} size="large" />
              <QuestionIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
        <div>
          <DecisionTree />
        </div>
      </div>
    )
  }

  render() {
    return (
      <StackingLayout itemSpacing="0px">
        {this.renderNavBar()}
      </StackingLayout>
    )
  }
}