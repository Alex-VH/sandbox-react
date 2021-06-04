import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange(event) {
    this.setState({ nouveauClient: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onClientAdd({ id, nom });
    this.setState({ nouveauClient: "" });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="Ajouter client"
          value={this.state.nouveauClient}
          onChange={(event) => this.handleChange(event)}
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;
