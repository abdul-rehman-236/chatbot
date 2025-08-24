import { useState } from 'react'
import {
  Button,
  Center,
  Heading,
  VStack
} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Center>
        <VStack>
          <Heading size='3xl' pt='20' pb='10' color='purple'>Change the count.</Heading>
          <Button colorPalette='purple' variant='outline' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </VStack>
      </Center>
    </>
  )
}

export default App
