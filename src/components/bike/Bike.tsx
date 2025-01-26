interface Props {
  brand: string;
  color: string;
  gears: number;
  price: number;
}

export default function Bike(props: Props): JSX.Element {
  const { gears, brand, color, price } = props;

  return (
    <div style={{ backgroundColor: color, color: "white" }}>
      Brand: {brand} Color: {color} Gears: {gears} Price: {price}
    </div>
  );
}
