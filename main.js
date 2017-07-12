let companyDirectoryDiv = document.querySelector(".company-directory")
customers.results.forEach(function(customer){
  let customerDiv = document.createElement('div')
  let customerPic = document.createElement('img')
  let customerName = document.createElement('h4')
  let customerEmail = document.createElement('p')
  let customerStrtAddress1 = document.createElement('p')
  let customerStrtAddress2 = document.createElement('p')
  let customerPhoneNum = document.createElement('p')
  let customerSocial = document.createElement('p')

  customerPic.src = customer.picture.large
  customerName.innerHTML = `${customer.name.first} ${customer.name.last}`
  customerName.className = `customer-name`
  customerEmail.innerHTML = customer.email
  customerEmail.className = `customer-email`
  customerStrtAddress1.innerHTML = customer.location.street
  customerStrtAddress2.innerHTML = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
  customerPhoneNum.innerHTML = customer.phone
  customerSocial.innerHTML = customer.id.value
  customerSocial.className = `customer-social`


  customerDiv.appendChild(customerPic)
  customerDiv.appendChild(customerName)
  customerDiv.appendChild(customerEmail)
  customerDiv.appendChild(customerStrtAddress1)
  customerDiv.appendChild(customerStrtAddress2)
  customerDiv.appendChild(customerPhoneNum)
  customerDiv.appendChild(customerSocial)
  companyDirectoryDiv.appendChild(customerDiv)

})
