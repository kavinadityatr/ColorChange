import './cc1.css';
import { React, useState } from 'react';
import Select from 'react-select';


function Colorchanger ()
{
    const colors = [
        {
            id: 1,
            label: "IndianRed",
        },
        {
            id: 2,
            label: "Black",
        },
        {
            id: 3,
            label: "CadetBlue",
        },
        {
            id: 4,
            label: "DarkSlateGrey",
        },
        {
            id: 5,
            label: "LightBlue",
        },
        {
            id: 6,
            label: "MediumAquaMarine",
        },
        {
            id: 7,
            label: "PaleGreen",
        },
        {
            id: 8,
            label: "Turquoise",
        },
        {
            id: 9,
            label: "DarkRed",
        },
        {
            id: 10,
            label: "royalblue"
        },
        {
            id:11,
            label : "LightGray"
        },
        {
            id: 12,
            label : "Magenta"
        }
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }

    
return (
    <div>
        <style>
            {
                `body{
                    background-color:` + color + ';'
            }
        </style>
        <center>
             <h1>Color Changer</h1>
            </center>
        <Select options={colors} onChange={click} className='select'></Select>
    </div>

);
}
export default Colorchanger;


