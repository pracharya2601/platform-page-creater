export default function Container({children, ...other}: any) {
    return (
        <div {...other}>
            {children}
        </div>
    )
}