import infoModel from "../models/infomodel.js"





// api for submitting form from user 
const submitForm = async (req,res) =>{
    try {
        const {name,company,phone} = req.body
        if (!name || !company || !phone ){
            return res.json({success:false, message:"missing details "})


        }
        const formData = {
            name,
            company,
            phone
        }
        const newForm = new infoModel(formData)
        await newForm.save()
        res.json({success:true,message:'form sent'})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// api для получения всех заявок (для админки)
const getForms = async (req, res) => {
    try {
        // Находим все записи в базе и сортируем: самые новые будут вверху
        const forms = await infoModel.find({}).sort({ createdAt: -1 })
        res.json({ success: true, data: forms })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export { submitForm, getForms } // <--- Добавили getForms в экспорт
