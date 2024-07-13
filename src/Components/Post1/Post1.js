import React from "react";

export default function Post1({ post1Prop }) {
  return (
    <div>
      {post1Prop.map((obj) => (
        <p>{obj.title}</p>
      ))}
    </div>
  );
}
