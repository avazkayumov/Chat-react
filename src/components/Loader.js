import React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const ThreeDots = props => (
  <Wrapper>
    <ContentLoader
      className='loader'
      viewBox="0 0 400 160"
      height={160}
      width={400}
      backgroundColor="#4e78a4"
      {...props}
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  </Wrapper>
)

ThreeDots.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
}

export default ThreeDots

const Wrapper = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 45%;
    transform: translateY(-50%);
  }
` 