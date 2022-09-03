import dynamic from 'next/dynamic'

const getDyanmicComponent = (compPath: string) => dynamic(() => import(`component/${compPath}`), {
  ssr: true,
  loading: () => <>Loading..</>
})

const Wrapper = ({ comp, compProps, children }: {
  comp: string;
  compProps: {
    [id: string]: any;
  },
  children?: any;
  cloneProps?: any;

}) => {
  const NewComp: any = getDyanmicComponent(comp);
  return (
    <NewComp {...compProps}>
      {children}
    </NewComp>
  )
}

export default Wrapper;