import React from 'react'
import { Table } from "react-bootstrap";

export default class DataTable extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              {data.columns.parents &&
                data.columns.parents.map((item, key) => (
                  <th colSpan={item.colSpan || 1} rowSpan={item.rowSpan || 1}>
                    {item.title}
                  </th>
                ))}
            </tr>
            <tr>
              {data.columns.childrens &&
                data.columns.childrens.map((item, key) => (
                  <th colSpan={item.colSpan || 1} rowSpan={item.rowSpan || 1}>
                    {item.title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.data &&
              data.data.map((item, i) => (
                <tr>
                  {data.keys &&
                    data.keys.map(
                      (header, j) =>
                        item[header] && (
                          <td
                            colSpan={item[header].colSpan || 1}
                            rowSpan={item[header].rowSpan || 1}
                          >
                            {item[header].title}
                          </td>
                        )
                    )}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
