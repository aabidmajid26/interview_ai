// import { useState } from "react";

export default function Cell({
  cellState,
  handleBlur,
  handleChange,
  handleFocus,
}) {
  const handleChangeWithin = (e) => {
    handleChange(e);
  };
  //   const handleBlurWithin = () => {
  //     setShowValue(true);
  //   };
  //   const handleFocusWithin = () => {
  //     if (cellState.coordinates && cellState.operation) {
  //       setShowValue(false);
  //     } else {
  //       setShowValue(true);
  //     }
  //   };

  return (
    <input
      type="text"
      value={cellState.showValue ? cellState.value : cellState.rawValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChangeWithin}
    />
  );
}
