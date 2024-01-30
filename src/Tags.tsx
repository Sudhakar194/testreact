function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

//------------------------------------------
interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}
function MyButton1({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

//----------------------------------------------
export default function Tags() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
      <MyButton1 title="I'm a disabled button" disabled={false} />
    </div>
  );
}
