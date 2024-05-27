import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TextList() {
  const data = useContext(AppContext);

  const { texts } = data;

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
