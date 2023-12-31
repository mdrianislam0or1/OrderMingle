/* eslint-disable react/prop-types */
export function Button({ variant, children }) {
  return (
    <button
      className={`btn ${variant === "outline" ? "btn-outline" : "btn-solid"}`}
    >
      {children}
    </button>
  );
}
