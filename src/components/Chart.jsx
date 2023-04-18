import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { BitcoinService } from '../services/Bitcoin.service';

export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const marketPriceData = await BitcoinService.getMarketPrice();
    this.setState({ data: marketPriceData.values.map((entry) => entry.y) });
  }

  render() {
    return (
      <div>
        <h2>market price :</h2>
        <Sparklines data={this.state.data}>
          <SparklinesLine color="#1c8cdc" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </div>
    );
  }
}

