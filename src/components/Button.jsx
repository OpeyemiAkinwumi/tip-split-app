function Button({ color, children }) {
  return (
    <button className={`bg-[${color}] text-white px-10 py-2 rounded-md` }>
      {children}
    </button>
  );
}

export default Button;
