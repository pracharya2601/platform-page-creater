import type { NextPage } from 'next';

import Button from 'components/Button'
import EditorWrapper from 'layout/EditorWrapper'

import { useSelector } from 'react-redux'

const Home: NextPage = () => {
  const data = useSelector((state:any) => state.studio.data);
  console.log(data)
  return (
    <EditorWrapper>
    sdfsdf
    </EditorWrapper>
  )
}

export default Home
