const imageValidate = (images) => {
    let imagesTable = [];
    if(Array.isArray(images)) {
        imagesTable = images
    } else {
        imagesTable.push(images)
        }
        if(imagesTable.length > 3) {
            return  {error : "You may upload a maximum of 3 images at a time"}
        }
        for(let image of imagesTable) {
            if(image.size > 1048576) {
                return {error : "Image size must be less than 1MB"}
            }
            const filetypes = /jpeg|jpg|png/;
            const mimetype = filetypes.test(image.mimetype);
            if(!mimetype) {
                return {error : "Only jpeg, jpg and png files are allowed"}
            }
        }
        return {error : false}
    }
    
    module.exports = imageValidate;