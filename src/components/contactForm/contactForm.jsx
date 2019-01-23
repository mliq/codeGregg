import React from 'react'
import posed from 'react-pose';

import styles from './contactForm.module.scss'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Button = posed.button({
  open: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'limegreen',
    top: 0,
    left: 0,
    flip: true
  },
  closed: {
    height: 'inherit',
    width: 'inherit',
    position: 'static',
    flip: true
  }
});

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      submitting: false,
      success: false,
    }
  }

  handleSubmit = e => {
    this.setState({ submitting: true })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    })
      .then(() => {
        this.setState({ success: true })
        this.setState({ submitting: false })
        this.resetForm();
      })
      .catch(error => {
        alert(error)
        this.setState({ submitting: false })
      })

    e.preventDefault()
  }

  resetForm = () => this.setState({
    name: '',
    email: '',
    message: '',
  });
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message, submitting, success } = this.state

    return (
      <form
        className={styles.contactForm}
        name="contact"
        onSubmit={this.handleSubmit}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <label className={styles.nameField}>
          Name
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.emailField}>
          Email
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.messageField}>
          Message
          <textarea
            required
            name="message"
            value={message}
            onChange={this.handleChange}
          />
        </label>
        <div className={styles.buttonColumn}>
          <Button
            type="submit"
            pose={success ? 'open' : 'closed'}
          >
            {success ? 'Sent!' : 'Send It'}
          </Button>
        </div>
      </form>
    )
  }
}

export default ContactForm