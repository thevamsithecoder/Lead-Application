const Lead = require("../models/leadModel");

const createLeadController = async (req,res)=>{
  // console.log(req.body);
  const { email, name, number } = req.body;  
  if(!email || !name ||  !number) {//if the user hasn't enter anything
      res.status(422).json("Please fill the data"); 
  }
  try {
      const preuser = await Lead.findOne({email : email})  //database email : user entered email
      console.log(preuser); //null showing because email is not presend in the database
      if(preuser){
          res.status(422).json("User is already present");
      }else {
          const adduser = new Lead({
               email, name, number
          })
          await adduser.save();
          res.status(201).json(adduser)
          console.log(adduser)
      }
  } catch(error) {
      res.status(422).json(error)
  }
}


//get userdata
const getLeadController = async (req, res) => {
  try {
    const userData = await Lead.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
};

const getSingleLeadController = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userIndividual = await Lead.findById({ _id: id });
    console.log(userIndividual);
    res.status(201).json(userIndividual);
  } catch (error) {
    res.status(422).json(error);
  }
};

const updateSingleLeadController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await Lead.findByIdAndUpdate(id, req.body, {
      new: true, //whatever we update we will get it by writing this
    });
    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

const deleteSingleLeadController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Lead.findByIdAndDelete({ _id: id });
    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

module.exports = {
  createLeadController,
  getLeadController,
  getSingleLeadController,
  updateSingleLeadController,
  deleteSingleLeadController,
};
