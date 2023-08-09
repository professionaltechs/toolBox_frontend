import React from "react";

export const TableRow = ({customerName, phone, device, service, dateCreated, ticket, status}) => {
  return (
    <tr>
      <td>{customerName}</td>
      <td>{phone}</td>
      <td className="device first-device">
        <p>{device}</p>
      </td>
      <td>{service}</td>
      <td className="date-created first-dateCreated">
        <p>{dateCreated}</p>
        {/* <p>Tech:Nile Khokar</p>
        <p>Last Update: 2:43Pm</p> */}
      </td>
      <td>{ticket}</td>
      <td>
        <button className="status-btn btn-new">{status}</button>
      </td>
    </tr>
  );
};


// btn-finish
// btn-wait
// btn-new
// btn-notfix
// btn-out