import type { NextPage } from 'next';


import Button from 'components/Button'
import EditorWrapper from 'layout/EditorWrapper'

import { useSelector } from 'react-redux'
import { themes } from 'utils/color';
import PageWrapper from 'components/PageWrapper';

const Home: NextPage = () => {
  const data = useSelector((state: any) => state.studio.data);
  console.log(data)
  return (
    <EditorWrapper>
      <PageWrapper style={data.style}>
        <div className='text-red-500 bg-red-100'>Hello</div>
      </PageWrapper>
    </EditorWrapper>
  )
}

export default Home
