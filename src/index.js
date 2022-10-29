import ReactDOM from "react-dom/client";
import "./index.css";

const students = [
  {
    Company: "Viettel",
    Contact: "Nguyen Van A",
    Country: "Vietnam",
  },
  {
    Company: "VNPT",
    Contact: "Nguyen Van B",
    Country: "Vietnam",
  },
  {
    Company: "Dell",
    Contact: "Peter",
    Country: "US",
  },
  {
    Company: "Intel",
    Contact: "John",
    Country: "US",
  },
  {
    Company: "Nokia",
    Contact: "Saharabike",
    Country: "UK",
  },
  {
    Company: "Toyota",
    Contact: "Namonikuta",
    Country: "Japan",
  },
];
const element = (
  <table>
    <h2>Students</h2>
    <tr>
      <th className="Company">Company</th>
      <th className="Contact">Contact</th>
      <th className="Country">Country</th>
    </tr>
    {students.map((item) => (
      <tr>
        <td>{item.Company}</td>
        <td>{item.Contact}</td>
        <td>{item.Country}</td>
      </tr>
    ))}
  </table>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);