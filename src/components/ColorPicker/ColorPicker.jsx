import React, { Component } from 'react';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { label } = this.props.options[this.state.activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
        {/* <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className="ColorPicker__option"
              style={{
                backgroundColor: color,
                border:
                  index === this.state.activeOptionIdx
                    ? '5px solid black'
                    : 'none',
              }}
            ></button>
          ))}
        </div> */}
      </div>
    );
  }
}

export default ColorPicker;
