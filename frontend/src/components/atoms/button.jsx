export default function Button({ onClick, style, placeHolder, type = 'button', disabled = false }) {
  return (
    <>
      <button onClick={onClick} className={style} type={type} disabled={disabled}>
        {placeHolder}
      </button>
    </>
  );
}
