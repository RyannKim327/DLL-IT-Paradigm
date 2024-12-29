import "./App.css";
import Calendar from "./widgets/calendar";

function App(props: unknown) {
  return (
    <div className={`main-frame ${props.className}`}>
      <div
        style={{
          gridArea: "top",
        }}
        className=""
      >
        test
      </div>
      <Calendar
        style={{
          gridArea: "bottom",
        }}
      />
      <div
        style={{
          gridArea: "right",
        }}
      >
        Right Side
      </div>
      <div
        style={{
          gridArea: "footer",
        }}
        className="flex flex-row justify-center"
      >
        Developed by Ryann Kim Sesgundo
      </div>
    </div>
  );
}

export default App;
