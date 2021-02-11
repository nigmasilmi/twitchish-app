import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
          <Field
            label="Enter title"
            name="title"
            component={this.renderInput}
          />
          <Field
            label="Enter description"
            name="description"
            component={this.renderInput}
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
