export function Target(props) {
  let data = {
    name: props.name,
    age: "18",
    married: true,
  };
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.age}</h2>
      <h3>{data.married ? "Married" : "Single"}</h3>
    </div>
  );
}
