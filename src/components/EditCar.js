import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import {DialogTitle, DialogContent, TextField, DialogActions} from '@mui/material';

function EditCar({updateCar, params}) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: '',
    })

    const handleClickOpen = () => {
        setOpen(true);
        setCar({
            brand: params.data.brand,
            model: params.data.model,
            color: params.data.color,
            fuel: params.data.fuel,
            year: params.data.year,
            price: params.data.price,
        })
    }

    const handleSave = () => {
        updateCar(car, params.value);
        setOpen(false);
    }

    const handleClickClose = () => {

        setOpen(false);
    }

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
            <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Edit car</DialogTitle>
            <DialogContent>
                    <TextField variant="standard"
                        name="brand"
                        value={car.brand}
                        label="Brand"
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField variant="standard"
                        name="model"
                        value={car.model}
                        label="Model"
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField variant="standard"
                        name="color"
                        value={car.color}
                        label="Color"
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField variant="standard"
                        name="fuel"
                        value={car.fuel}
                        label="Fuel"
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField variant="standard"
                        name="year"
                        value={car.year}
                        label="Year"
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField variant="standard"
                        name="price"
                        value={car.price}
                        label="Price"
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;