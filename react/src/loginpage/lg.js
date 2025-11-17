import React, { useState } from 'react';
function LoginPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault(); // stop page reload
        alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}\n`);
    };

     return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Form Example</h2>

      {/* Step 3: Form with input fields */}
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px' }}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ margin: '10px' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ margin: '10px' }}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Live Preview:</h3>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Password:</b> {password}</p>
        
      </div>
    </div>
  );


}
export default LoginPage;