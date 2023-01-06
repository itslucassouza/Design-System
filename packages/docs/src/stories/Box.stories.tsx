import { StoryObj, Meta} from '@storybook/react'
 
import { Box, BoxProps, Text } from '@ignite-ui/react'
import React from 'react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
      <Text>testando o elemnto box</Text>
      </>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}




