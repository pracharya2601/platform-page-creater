import classNames from 'classnames';

export default function PageWrapper({ children, style, ...otherProps }: any) {
    let x = true;
    let y = true;
    let z = true;

    console.log(style.mobile)
    return (
        <div {...otherProps} className={
            classNames(
                style.all,
                {
                    [`${style.mobile.join(' ')}`]: true
                }
            )
        }>
            {children}
        </div>
    )
}