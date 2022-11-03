import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      //   [event.currentTarget.name]: event.currentTarget.value,
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.propOnSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          имя
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          прозвище
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <p>Ваш уровень:</p>
        <label>
          junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
        </label>
        <label>
          middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
        </label>
        <label>
          senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен с условиями
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
