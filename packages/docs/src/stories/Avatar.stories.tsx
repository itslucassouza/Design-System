import React from 'react'
import { StoryObj, Meta} from '@storybook/react'
 
import { Avatar, AvatarProps } from '@itslucassouza-dev/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/itslucassouza.png',
    alt: 'Lucas Souza'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
  
}




