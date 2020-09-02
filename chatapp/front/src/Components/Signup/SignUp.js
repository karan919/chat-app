import React from 'react';

// import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () =>{
    
    return(
        <div className="container">  
            <form id="contact" action="http://localhost:5012/api/users/signup" method="post">
                <h4>Organisation SignUp</h4>
                <fieldset>
                    <input placeholder="Organisation Name" type="text" name="OrgName" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                    <input placeholder="Organisation URL" type="text" name="OrgURL" tabindex="2" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Organisation Email Domain" name="OrgEmail" type="email" tabindex="3" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Primary Conatct Name" name="PrimaryContact" type="text" tabindex="4" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Primary Conatct Email" name="PrimaryEmail" type="email" tabindex="5" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Password" name="password" type="password" tabindex="6" required />
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default SignUp;