import React from 'react'
import { Layout, Text } from 'react-native-rapi-ui'

const CartItem = (props) => {
  return (
    <Layout>
      <Text size='h3' style={{textAlign: 'center'}} >{`${props.amount} ${props.title} = L.${props.price}.00`}</Text>
    </Layout>
  )
}

export default CartItem