import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"

const SearchBar = () => {

    return(
        <Paper
            component={"form"}
            onSubmit={() => {}}
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
                value={""}
                onChange={() => {}}
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