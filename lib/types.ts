export type User = {
    username: string,
    email: string,
    password?: string
    pic?: string
    tell?: string,
    
}
export type Category = {
    id?: string,
    name?: string,
    image: string,
    title?: string
}

export type Brand = {
    id?: string,
    name?: string,
    image: string,
    title?: string
}

export type Product = {
    id?: string,
    title: string,
    quantity?: number,
    description: string,
    price: number,
    location?: string,
    rating?: number,
    image: string,
}

export type Location = {
    longitude: number,
    latitude: number
}
export type Transuction ={
    amount: number
    status: 'pending' | 'successful' | 'cancelled'
    type: 'sale' | 'purchase'
    client: User
}

export type Shop = {
    name: string,
    products?: Product[]
    transuctions?: Transuction[]
    keeper: User,
    location?: Location
}
