console.log(customers)
let companyDirectoryDiv = document.querySelector(".company-directory")
customers.results.forEach(function(customer){
  let customerPic = document.createElement('img')
  let customerName = document.createElement('h4')
  let customerEmail = document.createElement('p')
  let customerStrtAddress1 = document.createElement('p')
  let customerStrtAddress2 = document.createElement('p')
  let customerPhoneNum = document.createElement('p')
  let customerSocial = document.createElement('p')

  customerPic.src = customer.picture.large
  customerName.innerHTML = `${customer.name.first} ${customer.name.last}`
  customerEmail.innerHTML = customer.email
  customerStrtAddress1.innerHTML = customer.location.street
  customerStrtAddress2.innerHTML = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
  customerPhoneNum.innerHTML = customer.phone
  customerSocial.innerHTML = customer.id.value

  companyDirectoryDiv.appendChild(customerPic)
  companyDirectoryDiv.appendChild(customerName)
  companyDirectoryDiv.appendChild(customerEmail)
  companyDirectoryDiv.appendChild(customerStrtAddress1)
  companyDirectoryDiv.appendChild(customerStrtAddress2)
  companyDirectoryDiv.appendChild(customerPhoneNum)
  companyDirectoryDiv.appendChild(customerSocial)
})
