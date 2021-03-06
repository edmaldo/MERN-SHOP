import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import { Helmet } from "react-helmet"
import { saveShippingLabel } from "../actions/cartActions"

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingLabel } = cart

  const [address, setAddress] = useState(shippingLabel.address)
  const [city, setCity] = useState(shippingLabel.city)
  const [postalCode, setPostalCode] = useState(shippingLabel.postalCode)
  const [country, setCountry] = useState(shippingLabel.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingLabel({ address, city, postalCode, country }))
    history.push("/payment")
  }

  return (
    <>
      <Helmet>
        <title>Shipping</title>
      </Helmet>
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default ShippingScreen
