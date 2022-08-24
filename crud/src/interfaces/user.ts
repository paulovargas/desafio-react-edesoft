export interface User {
    address: {
        city: string,
        geolocation:{
           lat: string,
           long: string 
        }
        number: string,
        street: string,
        zipcode: string
    },
    email: string,
    id: string,
    name: {
        firstname: string,
        lastname: string
    },
    password: string,
    phone: string,
    username: string
}