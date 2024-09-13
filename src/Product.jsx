import 'bootstrap/dist/css/bootstrap.min.css';


export function Product({ title, price }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
}
