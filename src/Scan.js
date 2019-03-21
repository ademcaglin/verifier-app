import React, { useCallback } from "react";
import QrReader from "react-qr-reader";
import { useStore } from "./store/useStore";

const Scan = () => {
  const { dispatch } = useStore();
  const view = useCallback(() => dispatch({ type: "view" }), [dispatch]);

  async function handleScan(data) {
    if (data) {
      view();
    }
  }

  function handleError(err) {
    console.error(err);
  }

  const previewStyle = {
    width: "100%"
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
      />
    </div>
  );
};

export default Scan;
