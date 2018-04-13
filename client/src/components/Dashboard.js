import React, { Component } from 'react'
import glamorous from 'glamorous'

export default class Dashboard extends Component {
  render() {
    return (
      <DashboardStyled>
        DASHBOARD
      </DashboardStyled>
    )
  }
}

const DashboardStyled = glamorous.div( {
  display: 'flex',
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--light-bkg)',
} )