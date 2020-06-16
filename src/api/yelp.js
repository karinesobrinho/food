import axios from 'axios'

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'bearer 0e0FTy_jZ1mogQTiWrIIVMgIdNLvfa-DAgFIUv7VrL8MewwqMvV8tT_rv6KpDgkzLLyNvkIxpDEfRxnA2J1OB074ZNMVRj1Y4dpHgAMMs5rQpKu5iP3YHaRkdDjRXnYx'
}
})    