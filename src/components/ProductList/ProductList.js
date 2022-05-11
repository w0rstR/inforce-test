import s from './ProductList.module.css'
import * as React from 'react';
import ProductItem from "../ProductItem/ProductItem";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import  {sortProductsList} from "../../store/products/Products.slice";

export default function ProductList() {
    const {products} = useSelector(state => state["productReducer"]);
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(sortProductsList(event.target.value))
    };

    return (
        <div>
            <div className={s.wrap}>
                <Box sx={{maxWidth: 120}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Alphabetically'}>Alphabetically</MenuItem>
                            <MenuItem value={'Count'}>Count</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className={s.container}>
                {products ? products.map(product => < ProductItem item={product}
                                                                  key={Math.floor(Math.random() * (2000 - 10)) + 10}/>) : null}
            </div>
        </div>
    )
}