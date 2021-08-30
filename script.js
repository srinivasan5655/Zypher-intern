const tableData = document.getElementsByClassName("tr");
const tableRow = document.getElementsByClassName("list");

fetch("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6")
  .then((response) => response.json())
  .then((data) => {
    const title = Object.keys(data.clients[0]);
    title.forEach((value, index) => {
      tableData[0].innerHTML += `<th scope="col" class="sort" data-sort="budget">
        ${value}
      </th>`;
    });

    const t = data.clients.map((value, index) => {
      return Object.values(data.clients[index]);
    });

    t.forEach((value, index) => {
      tableRow[0].innerHTML += `
      <tr>
                       <th scope="row">
                        <div class="media align-items-center">
                          <div class="media-body">
                            <span class="name mb-0 text-sm"
                              >${value[0]}</span
                            >
                          </div>
                        </div>
                      </th>
                      <td class="budget">${value[1]}</</td>
                      <td>
                        <span class="badge badge-dot mr-4">
                          <span class="status">${value[2]}</</span>
                        </span>
                      </td>
                      <td>
                        <div class="avatar-group">${value[3]}</</div>
                      </td>
                      <td>${value[4]}</</td>
                      <td>${value[5]}</</td> 
                    </tr>
      
      `;
    });
  });
