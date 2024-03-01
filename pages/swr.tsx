import { StudentDetail } from "@/components/swr";
import { useState } from "react";

export interface ISWRPageProps {}

export default function SWRPage(props: ISWRPageProps) {
  const [data, setData] = useState([1, 1, 1]);
  function handleAddClick() {
    setData((prevData) => [...prevData, 1]);
  }

  return (
    <div>
      SWRPage
      <button onClick={handleAddClick}>Add Detail</button>
      <ul>
        {data.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId="lea319jollj7y1rs" />
          </li>
        ))}
      </ul>
    </div>
  );
}
