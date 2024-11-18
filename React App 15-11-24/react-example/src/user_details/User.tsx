import React, { useEffect } from "react";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const User: React.FC = () => {
  useEffect(() => {
    // Fetch user data from the API
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();

      // Populate table rows using DOM Manipulation
      populateTable(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const populateTable = (users: User[]) => {
    const tableBody = document.getElementById("user-table-body");
    if (tableBody) {
      tableBody.innerHTML = ""; // Clear previous rows
      users.forEach((user) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = user.id.toString();

        const nameCell = document.createElement("td");
        nameCell.textContent = `${user.first_name} ${user.last_name}`;

        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;

        const avatarCell = document.createElement("td");
        const avatarImg = document.createElement("img");
        avatarImg.src = user.avatar;
        avatarImg.alt = `${user.first_name}'s avatar`;
        avatarImg.style.width = "50px";
        avatarImg.style.height = "50px";
        avatarCell.appendChild(avatarImg);
        const removeCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.background = "red";
        removeButton.style.color = "white";
        removeButton.style.border = "none";
        removeButton.style.padding = "5px 10px";
        removeButton.style.cursor = "pointer";

        // Attach click handler for removing the row
        removeButton.onclick = () => row.remove();

        removeCell.appendChild(removeButton);

        // Append all cells to the row
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(avatarCell);
        row.appendChild(removeCell);

        // Append the row to the table body
        tableBody.appendChild(row);
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Data Table</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="user-table-body"></tbody>
      </table>
    </div>
  );
};

export default User;