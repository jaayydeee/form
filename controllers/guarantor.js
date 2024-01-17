const Guarantor = require('../models/Guarantor')

//CREATE

const create = async (req,res) => {
    const {
        employeesFirstName,
        employeeslastName,
        job,
        guarantorFirstName,
        guarantorlastName,
        email,
        phoneNumber,
        ssn,
        streetAddress,
        city,
        postalCode,
        relationship,
        frontImage,
        backImage
      } = req.body

    const guarantor = new Guarantor(req.body)

    try{
        if(!employeesFirstName || !employeeslastName || !job || !guarantorFirstName || !guarantorlastName 
            || !email || !phoneNumber || !ssn || !streetAddress || !city || !postalCode || !relationship ){
            return res.status(401).json("All Required Input Field Must Be Filled")
          }
        const savedGuarantor = await guarantor.save()
        return res.status(200).json(savedGuarantor)

    }catch(err){
        return res.status(500).json(err)
    }
}

//GET ALL guarantor

const getAllGuarantors = async (req, res) => {
  try {
    // let guarantors = await guarantor.find().sort({createdAt: -1});
    let guarantors = await Guarantor.find()
    return res.status(200).json(guarantors);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
    create,
    getAllGuarantors
  }