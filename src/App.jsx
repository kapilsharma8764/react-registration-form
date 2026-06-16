import { useState } from 'react'
import './App.css'

const states = [
  'Choose state',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
]

function App() {
  const [firstName, setFirstName] = useState('Johnny')
  const [lastName, setLastName] = useState('Nelson')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('Male')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [state, setState] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = {
      firstName,
      lastName,
      birthday,
      gender,
      email,
      phone,
      password,
      state,
    }

    console.log('Registration Form Data:', formData)
  }

  return (
    <main className="page-shell">
      <section className="registration-card" aria-labelledby="registration-title">
        <h1 id="registration-title">Registration Form</h1>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="field">
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </label>

            <label className="field">
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>

            <label className="field">
              <span>Birthday</span>
              <input
                type="date"
                name="birthday"
                value={birthday}
                onChange={(event) => setBirthday(event.target.value)}
              />
            </label>

            <fieldset className="field gender-field">
              <legend>Gender</legend>
              <div className="radio-row">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(event) => setGender(event.target.value)}
                  />
                  <span>Male</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Famale"
                    checked={gender === 'Famale'}
                    onChange={(event) => setGender(event.target.value)}
                  />
                  <span>Famale</span>
                </label>
              </div>
            </fieldset>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label className="field">
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </label>

            <label className="field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            <label className="field state-field">
              <span>State</span>
              <select
                name="state"
                value={state}
                onChange={(event) => setState(event.target.value)}
              >
                {states.map((stateName) => (
                  <option key={stateName} value={stateName === 'Choose state' ? '' : stateName}>
                    {stateName}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
