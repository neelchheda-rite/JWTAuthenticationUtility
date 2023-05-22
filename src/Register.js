import {useRef, useState, useEffect, useTransition} from 'react';
import React from 'react';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const match = pwd === matchPwd;
        setValidMatchPwd(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);


    return (
        <section>
            <p ref={errRef}
                className={
                    errMsg ? "errmsg" : "offscreen"
                }
                aria-live="assertive">
                {errMsg}</p>
            <h1>Register Form</h1>
            <form>
                <label htmlFor='username'>UserName:
                </label>
                <input type="text" id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={
                        (e) => setUser(e.target.value)
                    }
                    required
                   
                    
                    onFocus={
                        () => setUserFocus(true)
                    }
                    onBlur={
                        () => setUserFocus(false)
                    }/>
                <br />
                <br />
                <label htmlFor='password'>Password: </label>
                <input type="password" id="password"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)
                    }
                    required
                    
                   
                    onFocus={
                        () => setPwdFocus(true)
                    }
                    onBlur={
                        () => setPwdFocus(false)
                    }/>
                                   <br />
                            
                                   <br />
                <label htmlFor='password'> Confirm Password: </label>
                <input type="password" id="conf_password"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setMatchPwd(e.target.value)
                    }
                    required
                    
                    
                    onFocus={
                        () => setMatchPwdFocus(true)
                    }
                    onBlur={
                        () => setMatchPwdFocus(false)
                    }/>
                    <br/>
                    <br/>
                    <button >Register</button>
            </form>
        </section>
    )
}

export default Register
