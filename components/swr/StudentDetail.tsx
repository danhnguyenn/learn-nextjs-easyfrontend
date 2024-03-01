import * as React from "react";
import useSWR from "swr";
export interface IStudentDetailProps {
  studentId: string;
}

const MILISECOND_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: IStudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`,
    { revalidateOnFocus: false, dedupingInterval: 2000 }
  );

  function handleMutate() {
    mutate({ name: "Hello World" }, true);
  }

  return (
    <div>
      StudentDetail
      <ul>
        <li>{data?.name || "--"}</li>
        <button onClick={handleMutate}>mutate</button>
      </ul>
    </div>
  );
}
