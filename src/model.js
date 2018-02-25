const initialState = {
  inputs: [
    {name: 'first-name', value: '', mandatory: true, step: 1, type: 'text', labelName: 'First Name'},
    {name: 'last-name', value: '', mandatory: true, step: 1, type: 'text', labelName: 'Last Name'},
    {name: 'country', value: '', mandatory: true, step: 1, type: 'text', labelName: 'Country'},
    {name: 'city', value: '', mandatory: true, step: 1, type: 'text', labelName: 'City'},
    {name: 'address', value: '', mandatory: true, step: 1, type: 'text', labelName: 'Main Address'},
    {name: 'address2', value: '', mandatory: false, step: 1, type: 'text', labelName: 'Second Address'},
    {name: 'legal', value: '', mandatory: true, step: 1, type: 'select', options: [
      {name: 'Company', value: 'company'},
      {name: 'Individual', value: 'individual'},
    ]},
    {name: 'package', value: '', mandatory: true, step: 2, type: 'radio', options: [
      {name: 'Package standard', value: 'package-standard'},
      {name: 'Package premium', value: 'package-premium'},
    ]},
    {name: 'card-number', value: '', mandatory: true, step: 3, type: 'number', labelName: 'Card Number'},
    {name: 'card-name', value: '', mandatory: true, step: 3, type: 'text', labelName: 'Card Name'},
    {name: 'card-cvc', value: '', mandatory: true, step: 3, type: 'number', labelName: 'CVC code'},
    {name: 'card-expiration-date', value: '', mandatory: true, step: 3, type: 'text', labelName: 'Date of Expiry'}
  ],
  step: 1
}

export default initialState;