import React, { Component } from 'react'
import styled from 'styled-components'

const sliderThumbStyles = (props) => (`
  width: 10px;
  height: 10px;
  background: ${props.color};
  cursor: pointer;
  outline: 1px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  margin: 4px 0px 0px 30vw; 
  .slider {
    flex: 1;
    -webkit-appearance: none;
    height: 6px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;


export default class Slider extends Component {

    range(val) {
        return (val < 20) ? 0.3 : (val < 30) ? 0.4 : (val < 40) ? 0.5 : (val < 80) ? 0.6 : (val < 100) ? 0.8 : (val < 110) ? 0.9 : 1;

    }
    render() {
        return (
            //1-500
            //.3-1
            <Styles opacity={this.range(this.props.val)} color="red">
                <input type="range" min={3} max={110} className="slider" onChange={this.props.valChanger} />
                <div className="value"></div>
            </Styles>
        )
    }
}
