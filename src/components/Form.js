import React from 'react'

function Form (props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target

        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();

        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
                <label>Name
            {/* 🔥 STEP 3 - Make an input of type `text` for username.
                Controlled inputs need `value` and `onChange` props.
                Inputs render what they're told - their current value comes from app state.
                At each keystroke, a change handler fires to change app state. */}
                    <input 
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    placeholder="insert name here.."
                    maxLength="20" // form input attributes
                    />
                </label>
  
                <label>Email
            {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
                    <input
                    type="text"
                    value={values.email} //setup in app.js and passed down
                    onChange={onChange}
                    name="email"
                    placeholder="insert email here.."
                    />
                </label>
  
          {/* ////////// DROPDOWN ////////// */}
          {/* ////////// DROPDOWN ////////// */}
          {/* These contain values from app.js which are the formValues */}
                <label>Role
            {/* 🔥 STEP 5 - Make dropdown for role. */}
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Front-End Developer'>Front-End Developer</option>
                        <option value='Back-End Developer'>Back-End Developer</option>
                        <option value='Full-stack engineer'>Full-stack engineer</option>
                    </select>
                </label>
  
                <div className='submit'>
                    <button disabled={!values.name || !values.email || !values.role}>submit</button> 
            {/* how you can disable till all the values are completed */}
                </div>
            </div>
        </form>
    )
}

export default Form;