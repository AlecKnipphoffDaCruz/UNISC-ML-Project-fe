export default function Input({onChange, style, placeHolder, type}){
    
    return(
        <>
            <input
                type={`${type}`}
                onChange={onChange}
                className={style}
                placeHolder={placeHolder}
            />
        </>
    )
}