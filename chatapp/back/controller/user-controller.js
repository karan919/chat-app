const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');

const DUMMY_USERS = [];

const getUsers = (req,res,next)=>{
    res.json({ users: DUMMY_USERS });
};

const signup = (req,res,next)=>{

    const { OrgName, OrgURL, OrgEmail, PrimaryContact, PrimaryEmail, password } = req.body;

    const hasUser = DUMMY_USERS.find(u => u.OrgEmail === OrgEmail);
    if (hasUser) {
        throw new HttpError('Could not create user, email already exists.', 422);
    }

    const createdUser = {
        id: uuidv4(),
        OrgName,
        OrgURL,
        OrgEmail,
        PrimaryContact,
        PrimaryEmail,
        password
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({user: createdUser});
};

const login = (req,res,next)=>{
    const { PrimaryEmail, password } = req.body;
    const identifiedUser = DUMMY_USERS.find(u=>u.PrimaryEmail===PrimaryEmail);
    if(!identifiedUser || identifiedUser.password !== password){
        throw new HttpError("User not found or wrong credential", 200);
    }
    res.json({message:"Login!!"})
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;