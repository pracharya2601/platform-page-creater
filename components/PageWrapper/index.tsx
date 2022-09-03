import classNames from 'classnames';

export default function PageWrapper({ children, style, ...otherProps }: any) {
    const newClass = classNames(style.all, style.ipad, style.desktop);
    return (
        <div {...otherProps}>
            {children}
        </div>
    )
}