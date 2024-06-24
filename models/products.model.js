const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    title: { 
        type: String, 
        required: true
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Porfa, sólo imágenes JPG o PNG"
        }
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    },
    isActive: {
        type: Boolean,
        required: true
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;


// Insertar un producto
/* 
const p = new Product({
    id: 6,
    title: "Zumo de naranja",
    price: 1.80,
    description: "Cafe jugosa del teatro",
    image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
});

// Guardar en la BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err))

Product.find({}).then(data=>console.log(data)); */