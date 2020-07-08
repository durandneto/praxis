import React from 'react'
import Container, { Row, Column } from '../Grid'
import Input from '../Input'
import Button from '../Button'
import FontBody from '../Typography/Body'
import FontHeader from '../Typography/Header'

const ContactForm = props => {

  const [data, setData] = React.useState({})
  const [errorName, setErrorName] = React.useState("")
  const [errorEmail, setErrorEmail] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")


  return (
    <Container>

      {
        props.success ? (
          <>
          <Row justifyCenter>
            <Column>
              <FontHeader label={`Thank you for your interest in ${props.company.name}.`} highlight />
            </Column>
          </Row>
          <Row>
            <Column margin={1}></Column>
          </Row>
          <Row justifyCenter>
            <Column margin={1}>
              <FontBody label={`${props.company.name} will get back to you soon.`} highlight />
            </Column>
          </Row>
          <Row justifyCenter>
            <Column autoColumnFullWidth noPadding margin={2}  >
              <Button
                onEvent={e => {
                  props.onEvent({
                    type: "CloseContactForm",
                    data,
                    company: props.company
                  })
                }}
                success
                xs
                loading={props.loading}
                label={"Close"}
                data={"close"}
            />
            </Column>
          </Row>
        </>
        ) : (
          <>
          <Row>
        <Column full >
          <FontHeader label={`Let's Get You Connected`} highlight />
        </Column>
      </Row>
      <Row>
        <Column margin={1}></Column>
      </Row>
      <Row>
        <Column full >
          <FontBody label={`Thank you for your interest in ${props.company.name}. Whether you're an investor, potential customer, partner or press, we'll connect you. This form allows us to share some basic information with the founders of ${props.company.name} to get the conversation started.`} highlight />
        </Column>
      </Row>
      <Row>
        <Column full >
          <FontBody label={`After completing the information below, Praxis will send an introduction email to you and the founders of ${props.company.name}. (FYI: If you choose to 'Connect' with other companies, we ask you to fill out the form each time so we can send separate intro emails to each company you're interested in.)`} highlight />
        </Column>
      </Row>
      <Row>
        <Column full >
          <FontBody label={`As always, we respect your privacy. We won't ever spam you or share your info. Ready to chat with the founders of ${props.company.name}?`} highlight />
        </Column>
      </Row>
      <Row>
        <Column margin={3}></Column>
      </Row>
      <Row autoColumn>
        <Column full noPadding>
          <Row>
            <Column>
              <FontBody label={`Your name (*):`} />
            </Column>
          </Row>
          <Row>
            <Column full>
              <Input
                disabled={props.loading}
                onEvent={e => {
                  data[e.data.data] = e.data.value
                }}
                data={"name"}
                error={errorName}
              />
            </Column>
          </Row>
        </Column>
        <Column full noPadding>
          <Row>
            <Column>
              <FontBody label={`Your e-mail (*):`} />
            </Column>
          </Row>
          <Row>
            <Column full>
              <Input
                disabled={props.loading}
                onEvent={e => {
                  data[e.data.data] = e.data.value
                }}
                // test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                // testMessage={"Invalid email"}
                data={"user_email"}
                error={errorEmail}
              />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column full noPadding>
          <Row>
            <Column>
              <FontBody label={`Your Affiliation:`} />
            </Column>
          </Row>
          <Row>
            <Column full>
              <Input
                disabled={props.loading}
                placeholder={"Your affiliation"}
                data={"affiliation"}
                onEvent={e => {
                  data[e.data.data] = e.data.value
                }}
              />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column full noPadding>
          <Row>
            <Column>
              <FontBody label={`Your Message (*):`} />
            </Column>
          </Row>
          <Row>
            <Column full>
              <textarea
                disabled={props.loading}
                placeholder={"Your message  (required)"}
                onChange={e => {
                  data["message"] = e.target.value
                }}
                data={"message"}
                error={errorMessage}
                rows={10}
              ></textarea>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column margin={10}>
          <div>
          By clicking "Connect", you are agreeing to
            <span>
              &nbsp;
            </span>
              Praxis
              <span>
              &nbsp;
            </span>
            <a className={"link"} href={"https://praxisinstitute.org/terms-of-use/"} target={"_blank"}>
               Terms of Use
            </a>
            <span>
              &nbsp;
            </span>
            and
            <span>
              &nbsp;
            </span>
            <a className={"link"} href={"https://praxisinstitute.org/privacy-policy/"} target={"_blank"}>
               Privacy Policy
            </a>
            <span>
              &nbsp;
            </span>
            If you have questions please reach out to privacy@praxisinstitute.org.
        </div>
        </Column>
      </Row>
      <Row justifyCenter autoColumn>
        <Column autoColumnFullWidth noPadding margin={2}  marginRight >
          <Button
            onEvent={e => {
              console.log("ContactForm|CancelContactForm", e)
              props.onEvent({
                type: "CancelContactForm",
                data
              })
            }}
            xs
            disabled={props.loading}
            label={"Cancel"}
            data={"cancel"}
        />
        </Column>
        <Column autoColumnFullWidth noPadding margin={2}  >
          <Button
            onEvent={e => {
              let errorName = false
              let errorEmail = false
              let errorMessage = false

              if (!data.name || (data.name && data.name.length === 0)) {
                errorName = true
                setErrorName("Your name can not be null")
              } else {
                errorName = false
                setErrorName(null)
              }

              if (!data.user_email || data.user_email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null) {
                errorEmail = true
                setErrorEmail("Your email can not be null")
              } else {
                errorEmail = false
                setErrorEmail(null)
              }

              if (!data.message || (data.message && data.message.length === 0)) {
                errorMessage = true
                setErrorMessage("Your message can not be null")
              } else {
                errorMessage = false
                setErrorMessage(null)
              }
              if (!errorMessage && !errorName && !errorName ) {
                console.log("ContactForm", e, errorMessage, errorName, errorName)
                props.onEvent({
                  type: "SubmitContactForm",
                  data: {
                    ...data,
                    ...props.data
                  },
                  company: props.company
                })
              }
            }}
            blue
            xs
            loading={props.loading}
            label={"Connect"}
            data={"connect"}
        />
        </Column>
      </Row>
          </>
        )
      }
    </Container>
  )
}

ContactForm.defaultProps = {}

ContactForm.propTypes = {}

export default ContactForm