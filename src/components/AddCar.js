import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material';

function AddCar( {addCar}) {
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
    }
    
    const handleClickClose = () => {
        addCar(car);
        setOpen(false);
    }

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <Button onClick={handleClickOpen}variant="outlined">
                Add car
            </Button>
            <Dialog onClose={handleClickClose} open={open}>
                <DialogTitle>Add car</DialogTitle>
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
                <Button onClick={handleClickClose}>Save</Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}
export default AddCar;