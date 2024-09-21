"use client"

import Counter from "@/components/Counter";
import { useSelector } from "react-redux";

export default function Home() {
  const value = useSelector((state: RootState) => state.value);
  const name = useSelector((state: RootState) => state.name);

  return (
    <div>
      <p>Counter = {value}</p>
      <p>Name = {name}</p>
      <div>
        <p>Counter 1</p>
        <Counter />
      </div>
      <div>
        <p>Counter 2</p>
        <Counter />
      </div>
    </div>
  );
}
