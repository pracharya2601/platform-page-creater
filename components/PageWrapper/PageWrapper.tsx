export default function PageWrappper({children, ...otherProps}: any) {
    return <div {...otherProps}>
        {children}
    </div>
}