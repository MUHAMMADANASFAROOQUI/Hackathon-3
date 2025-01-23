import { defineQuery } from "next-sanity"

export const allcars = defineQuery(`
   *[_type == "car"]{
   _id,
     id,
    name, 
        type,
        fuel_capacity,
        transmission,
        seating_capacity,
        price_per_day,
    tags,
        "image":image_url.asset->url
}
`
)

export const ninecars = defineQuery(
    `*[_type == "car"][0..8]{
    _id,
    id,
    name, 
        type,
        fuel_capacity,
        transmission,
        seating_capacity,
        price_per_day,
    tags,
        "image":image_url.asset->url
}`
)

export const twelvecars = defineQuery(
    `*[_type == "car"][0..11]{
    _id,
    id,
    name, 
        type,
        fuel_capacity,
        transmission,
        seating_capacity,
        price_per_day,
    tags,
        "image":image_url.asset->url
}`
)