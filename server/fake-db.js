const Product = require("./model/product")

class FakeDb {
    constructor(){
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name:'Phone XL',
                price: 799,
                description: 'a',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト1 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト2 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト3 サンプルテキスト サンプルテキスト サンプルテキスト'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name:'Phone Mini',
                price: 799,
                description: 'b',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト1 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト2 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト3 サンプルテキスト サンプルテキスト サンプルテキスト'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name:'Phone Standard',
                price: 799,
                description: 'c',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト1 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト2 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト3 サンプルテキスト サンプルテキスト サンプルテキスト'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name:'Phone Special',
                price: 999,
                description: 'd',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト1 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト2 サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト3 サンプルテキスト サンプルテキスト サンプルテキスト'
            }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb(){
        await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = FakeDb