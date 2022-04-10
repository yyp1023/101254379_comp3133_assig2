import { gql } from "apollo-angular";

export const GET_LOGIN = gql`
    query getLogin($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            username
            password
            type
        }
    }
`;

export const SIGNUP = gql`
    mutation signup($username: String!, $firstname: String!, $lastname: String!, $password: String!, $email: String!, $type: String!) {
        addUser(username: $username, firstname: $firstname, lastname: $lastname, password: $password, email: $email, type: $type) {
            username
            firstname
            lastname
            password
            email
            type
        }
    }
`;

export const GET_ADMINLISTINGS = gql`{
    getAdminListings {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
    }
}`;

export const GET_ADMINLISTINGBYNAME = gql`
    query adminListingByName($username: String!) {
        getAdminListingByName(username: $username) {
            listing_id
            listing_title
            description
            street
            city
            postal_code
            price
            email
            username
        }
    }
`;

export const GET_CUSTOMERLISTINGS = gql`{
    getCustomerListings {
        listing_id
        booking_id
        booking_date
        booking_start
        booking_end
        username
    }
}`;

export const ADD_NEWLISTING = gql`
    mutation addNew($listing_id: String!, $listing_title: String!, $description: String!, $street: String!, $city: String!, $postal_code: String!, $price: String!, $email: String!, $username: String!) {
        addAdminListing(listing_id: $listing_id, listing_title: $listing_title, description: $description, street: $street, city: $city, postal_code: $postal_code, price: $price, email: $email, username: $username) {
            listing_id
            listing_title
            description
            street
            city
            postal_code
            price
            email
            username
        }
    }
`;