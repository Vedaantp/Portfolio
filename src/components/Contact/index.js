import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 0px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #226ce3;
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #226ce3;
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease-in-out !important;
  background: hsla(228, 90%, 34%, 1);
  background: linear-gradient(225deg, hsla(228, 90%, 34%, 1) 0%, hsla(217, 77%, 51%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(228, 90%, 34%, 1) 0%, hsla(217, 77%, 51%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(228, 90%, 34%, 1) 0%, hsla(217, 77%, 51%, 1) 100%);
  &:hover {
    transform: scale(1.05);
  }
  transition: all 0.4s ease-in-out;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`
const MessageContainer = styled.div`
  color: ${({ severity , theme}) => severity === 'success' ? theme.success : severity === 'error' ? theme.error : theme.white};
  // color: ${({theme}) => theme.success};
  font-size: 20px;
  margin: 0px 0px;
`;

const Contact = () => {

  const [formValid, setFormValid] = React.useState(false);
  const [message, setMessage] = React.useState({ text: '', severity: '' });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValid) {
      setMessage({text: "Please fill in all required fields correctly.", severity: 'error'})
      return
    }

    const userEmail = e.target.from_email.value;

    if (!isEmailValid(userEmail)) {
      setMessage({text: 'Please enter a valid email address.', severity: 'error'})
      return
    }

    emailjs.sendForm('service_tpxbsp8', 'template_l2m6erb', form.current, '7L5MF5pWPXPqsolVY')
      .then((result) => {
        setMessage({text: 'Email sent successfully!', severity: 'success'})

        setTimeout(() => {
          setMessage({ text: '', severity: '' });
        }, 3000);

        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setMessage({text: 'Error sending email. Please try again.', severity: 'error'})
      });
  }

  const handleInputChange = (e) => {
    setFormValid(form.current.checkValidity());
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return form.current.querySelector('input[name="from_email"]').checkValidity() && emailRegex.test(email);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>
          <MessageContainer severity={message.severity}>{message.text}</MessageContainer>
          <ContactInput placeholder="Your Email" name="from_email" onChange={handleInputChange} required type='email'/>
          <ContactInput placeholder="Your Name" name="from_name" onChange={handleInputChange} required/>
          <ContactInput placeholder="Subject" name="subject" onChange={handleInputChange} required/>
          <ContactInputMessage placeholder="Message" rows="4" name="message" onChange={handleInputChange} required/>
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        {/* <Snackbar
          style={{zIndex: "1001"}}
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
          message={snackBarMessage}
          severity={snackBarMessage.includes('successfully') ? 'success' : 'error'}
        /> */}
      </Wrapper>
    </Container>
  )
}

export default Contact