import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const PaginatedQueries = () => {

    const fetchColors = () => {
        return axios.get("http:localhost:3000/colors");
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["colors"],
        queryFn: fetchColors
    })

    if (isLoading) {
        return <h2>Page is Loading...</h2>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <>

        </>
    )
}

export default PaginatedQueries