import React from 'react';
// UI file
function FormComponent(props) {
    
        
        let dietrestveg = props.data.dietaryRestrictions.isVegan ? "Vegan" : null
        let dietrestkosh
            if (dietrestveg != null)  {
            dietrestkosh = (props.data.dietaryRestrictions.isKosher ? ", Kosher" : null)
            } else {
            dietrestkosh = (props.data.dietaryRestrictions.isKosher ? "Kosher" : null)
            }
        let dietrestlac = (dietrestveg != null || dietrestkosh != null ? (props.data.dietaryRestrictions.isLactoseFree ? ", Lactose Free" : null) : (props.data.dietaryRestrictions.isLactoseFree ? "Lactose Free" : null))
        return (
            <div>
            <form>
                <input 
                    type="text" 
                    onChange={props.handleChange}
                    value={props.data.firstName}
                    name="firstName" 
                    placeholder="First Name"
                /><br/>
                <input 
                    type="text" 
                    onChange={props.handleChange}
                    value={props.data.lastName}
                    name="lastName" 
                    placeholder="Last Name"
                /><br/>
                <input 
                    type="text" 
                    onChange={props.handleChange}
                    value={props.data.age}
                    name="age" 
                    placeholder="Age"
                /><br/>
                <button>Submit</button>
                <br/>
                <br/>
                <label>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label> <br/>
                <label>
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <br/>
                <select name="destination" onChange={props.handleChange} value={props.data.destination}>
                    <option value="">== please choose a destination ==</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                <br/>
                <label>
                <input type="checkbox" name="isVegan" onChange={props.handleChange} checked={props.data.dietaryRestrictions.isVegan}/>
                 Vegan? </label>
                <label>
                <input type="checkbox" name="isKosher" onChange={props.handleChange} checked={props.data.dietaryRestrictions.isKosher}/>
                 Kosher?</label>
                <label>
                <input type="checkbox" name="isLactoseFree" onChange={props.handleChange} checked={props.data.dietaryRestrictions.isLactoseFree}/>
                 Lactose Free?</label>
            </form>
            <hr/>
            <h1>Entered Infos</h1>
            <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your Age: {props.data.age}</p>
            <p>Your Gender: {props.data.gender}</p>
            <p>Your location: {props.data.destination}</p>
            
            <p>Your diet restrictions: {dietrestveg}{dietrestkosh}{dietrestlac}</p>
            
            </div>
        )
    }

export default FormComponent