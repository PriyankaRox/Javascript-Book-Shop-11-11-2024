import React, { Component } from 'react';

interface GridTableProps<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

class DemoHocGrid<T extends Record<string, any>> extends Component<
  GridTableProps<T>
> {
  // Function to render object as a string
  renderValue(value: any): string {
    if (typeof value === "object" && value !== null) {
      // If the value is an object, we can return a stringified version or its properties
      return JSON.stringify(value);
    }
    return String(value); // For other values, just return as string
  }

  render() {
    const { data, loading, error } = this.props;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Render table
    return (
      <div>
        <h1>Grid HOC Demo</h1>
        <table
          style={{
            borderCollapse: "collapse",
            tableLayout: "fixed",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              {Object.keys(data[0] || {}).map((key) => (
                <th
                  style={{ border: "1px solid black", padding: "8px" }}
                  key={key}
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, idx) => (
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "8px",
                      width: "50%",
                      wordWrap: "break-word",
                    }}
                    key={idx}
                  >
                    {this.renderValue(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DemoHocGrid;
