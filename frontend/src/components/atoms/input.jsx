export default function Input({ onChange, style, placeholder, type = 'text', value }) {
    return (
        <>
            <input
                type={type}
                onChange={onChange}
                className={style}
                placeholder={placeholder}
                value={value}
            />
        </>
    );
}