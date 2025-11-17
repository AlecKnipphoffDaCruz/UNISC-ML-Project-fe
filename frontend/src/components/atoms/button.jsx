export default function Button({ onChange, style, placeHolder }) {
  return (
    <>
      <button onChange={onChange} className={style}>
        {placeHolder}
      </button>
    </>
  );
}
