import React from 'react'
import { StoryObj, Meta} from '@storybook/react'
 
import { Box, Text, TextInput, TextInputProps } from '@itslucassouza-dev/react'

export default {
  title: 'form/TextInput',
  component: TextInput,

  args: {
    
  },
  decorators: [
    (Story) => {
      return (
      <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '2'}}>
        <Text size="sm">E-mai address</Text>
        {Story()}
      </Box>
      )
    }
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your name'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com'
  }
}




