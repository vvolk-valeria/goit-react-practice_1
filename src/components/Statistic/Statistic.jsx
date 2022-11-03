import React from 'react';

class Statistic extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};
  // constructor() {  // то же самое  что ниже, старый вариант
  //     super();

  //     this.state = {
  //         value:0,
  //     }
  // };

  state = {
    value: this.props.initialValue,
  };

  onButtonClickNeutral = () => {
    console.log('Neutral');
  };

  onButtonClickBad = () => {
    // this.setState({ // только чтобы дать новое значение
    //   value: 1,
    // });

    // this.setState(prevState => { // изменяет в зависимости от пред значения
    //   return {
    //     value: prevState.value + 1,
    //   };
    // });

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Controls
          onButtonClickNeutral={this.onButtonClickNeutral}
          onButtonClickBad={this.onButtonClickBad}
        />
        {/* <div>
          <button
            type="button"
            onClick={() => {
              console.log('good');
            }}
          >
            Good
          </button>
          <button type="button" onClick={this.onButtonClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.onButtonClickBad}>
            Bad
          </button>
        </div> */}
        <h2>Statistic</h2>
        <Statistics
          good={this.state.value}
          neutral={this.state.value}
          bad={this.state.value}
          total={this.state.value}
          positivePercentage={this.state.value}
        ></Statistics>
        {/* <div>
             <p>
          Good: <span>{this.state.value}</span>
        </p>
        <p>
          Neutral: <span>{this.state.value}</span>
        </p>
        <p>
          Bad: <span>{this.state.value}</span>
        </p>           
            </div> */}
      </div>
    );
  }
}

// onButtonClick = (event) => {
//     console.log('Neutral');

//     const target = event.target;
//     setTimeout(() => {
//         console.log('До события можно достучаться только через сохраненную переменную:', target);
//     }, 1000);
// };

const Controls = ({ onButtonClickNeutral, onButtonClickBad }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        console.log('good');
      }}
    >
      Good
    </button>
    <button type="button" onClick={onButtonClickNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onButtonClickBad}>
      Bad
    </button>
  </div>
);

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutral: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total: <span>{total}</span>
    </p>
    <p>
      Positive feedback: <span>{positivePercentage}</span>
    </p>
  </div>
);

export default Statistic;
