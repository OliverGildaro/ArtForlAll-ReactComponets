import React, { useState } from "react";
import PasswordInput from "ps-react/PasswordInput";

/** All features enabled */
function ExampleJustToggleVisibility() {
  const [password, setPassword] = useState("");

  const getQuality = () => {
    const length = password.length;
    return length > 10 ? 100 : length * 10;
  };

  return (
    <div>
      <PasswordInput
        htmlId="htmlId2Password"
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter a password"
        value={password}
        quality={getQuality()}
      />
    </div>
  );
}

export default ExampleJustToggleVisibility;
