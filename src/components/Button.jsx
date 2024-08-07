function Button({ onclickHandler, innerText }) {
  return (
    <button
      className="flex items-center justify-center bg-mainBgColor rounded-lg text-mainTxtColor w-7 h-7 text-lg"
      onClick={onclickHandler}
    >
      {innerText}
    </button>
  );
}

export default Button;
