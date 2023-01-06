import React from 'react'
import { StoryObj, Meta} from '@storybook/react'
 
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'form/Checkbox',
  component: Checkbox,

  args: {
    
  },
  decorators: [
    (Story) => {
      return (
      <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: 8}}>
        {Story()}
        <Text size="sm">Accpet terms of use</Text>
      </Box>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {

}






