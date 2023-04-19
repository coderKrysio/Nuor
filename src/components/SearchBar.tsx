import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter();

    const handleSubmit = () => {
        router.push(`/search/${searchTerm}`)
        // setSearchTerm('')
    }

    return(
        <Paper
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #fff',
                pl: 2,
                boxShadow: 'none',
                mr: { sm:5 }
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    border: 'none'
                }}
            />

            <IconButton 
                type="submit"
                sx={{
                    p: '10px',
                    color: 'red'
                }}
                aria-label="search"
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar