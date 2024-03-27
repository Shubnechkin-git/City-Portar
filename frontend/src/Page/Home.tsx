import React from "react";
import Counter from "../Components/Home/Counter";
import Resolved from "../Components/Home/Resolved";

interface props {
  //   id: number;
  getToken: any;
}

export default function Home(props: props) {
  document.title = "Городской портал | Главная";
  props.getToken();
  return (
    <div className="text-white">
      <Counter count={4} />
      <Resolved />
    </div>
  );
}
