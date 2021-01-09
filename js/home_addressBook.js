let addressbookList ;
window.addEventListener('DOMContentLoaded',(event)=>{
  //addressbookList = getAddressDataFromStorages();
  createInnerHtml();
});

const getAddressDataFromStorages = () =>{
  return localStorage.getItem('AddressBookList')? JSON.parse(localStorage.getItem("AddressBookList")) : [];
  }

const createInnerHtml= () => {
  //if (addressbookList.length == 0) return;
  const headerHtml = "<th>Full Name </th> <th>Address</th> <th>City</th> <th>State</th>"+
                        "<th>Zip</th> <th>Phone Number</th> <th>Actions</th>";
  let innerHtml = `${headerHtml}`;

  //for(const contact of addressbookList){
    innerHtml = `${innerHtml}
      <tr>
        <td>Chetan Zambare</td>
        <td>Shree Nagar Bhusawal</td>
        <td>Bhusawal</div>
        <td>Maharstra</td>
        <td>425201</td>
        <td>7741833846</td>
        <td>
          <img id="1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-black-18dp.svg">
          <img id="1"  onclick="update(this)" alt="edit" src="../assests/icons/create-black-18dp.svg">
        </td>
      </tr>
      <tr>
      <td>Chetan Zambare</td>
      <td>Shree Nagar Bhusawal</td>
      <td>Bhusawal</div>
      <td>Maharstra</td>
      <td>425201</td>
      <td>7741833846</td>
      <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-black-18dp.svg">
        <img id="1"  onclick="update(this)" alt="edit" src="../assests/icons/create-black-18dp.svg">
      </td>
    </tr>
    `;

    document.querySelector('#table-display').innerHTML = innerHtml;
//}
}

