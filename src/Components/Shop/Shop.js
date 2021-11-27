
import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Shop.css';

const Shop = () => {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        
        const products = [
            {
                id : 1,
                name : "Panjabi",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 600,
                image : "https://www.bluedenim.com.bd/wp-content/uploads/2020/10/DSC_6225-scaled.jpg"
            },
            {
                id : 2,
                name : "Fotuya",
                description : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
                price : 500,
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7cuOu22NANSb4vaA-F52dvBwN9MNdNf95w&usqp=CAU"
            },
            {
                id : 3,
                name : "Fotuya",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 400,
                image : "https://5.imimg.com/data5/KL/QQ/JI/SELLER-11193145/round-collar-men-t-shirt-500x500.jpg"
            },
            {
                id : 4,
                name : "Panjabi",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 1000,
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ksIXq_KY11LL7DB5l4cPX47lcl_5zoiPnQ&usqp=CAU"
            },
            {
                id : 5,
                name : "Shirt",
                description : "Lorem ipsum may be used as a placeholder before final copy is available.",
                price : 800,
                image : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg"
            },
            {
                id : 6,
                name : "Shari",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 2400,
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMREOfu5XAy31cixeqA15lN8XhmLsSNfqEQ&usqp=CAU"
            },
            {
                id : 7,
                name : "Fotuya",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 600,
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkytKRP5xP8zEmw0zUUoqvIrtTRNEqQd7pe--6ZSb7pICX8UXYP2Z2RK4vL-O--5YvKXc&usqp=CAU"
            },
            {
                id : 8,
                name : "Shari",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 3000,
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTlMTfcmfwnvqco8-5oRlxQkcP6ieU4zmv8W27ipRMcUKdPDmku3H0Wl5zdRbSYl2iqc&usqp=CAU"
            },
            {
                id : 9,
                name : "Shirt",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 1500,
                image : "https://assets.ajio.com/medias/sys_master/root/20210403/ywxs/60686961f997dd7b645dbf0c/-473Wx593H-461119026-black-MODEL.jpg"
            },
            {
                id : 10,
                name : "Panjabi",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 2000,
                image : "https://catseye.com.bd/pub/media/catalog/product/cache/567684e3cc8a45c771d2515d5dbe779e/c/e/ce_panjabi_14_5d91_726_6_440_8_tk_2350_vat-_12_.jpg"
            },
            {
                id : 11,
                name : "Panjabi",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 3000,
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlPEkXffd_9OtOr5K5ZO6tdZNzoGem7Nlvg&usqp=CAU"
            },
            {
                id : 12,
                name : "T-Shirt",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 400,
                image : "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2017/8/Buyer/17132391/Images/17132391_0_men-t-shirt1.jpg"
            },
            {
                id : 13,
                name : "Pant",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 1500,
                image : "https://catseye.com.bd/pub/media/catalog/product/cache/567684e3cc8a45c771d2515d5dbe779e/c/e/ce_pant_z1_f_5376_6_5374_6_tk_1950_vat-_5_.jpg"
            },
            {
                id : 14,
                name : "Panjabi",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 1300,
                image : "https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/m/a/man_s_top-29-05.jpg"
            },
            {
                id : 15,
                name : "Panjabi",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 4000,
                image : "https://www.nakshihaat.com/wp-content/uploads/2021/04/Panjabi-design-for-mans-2021-eid-panjabi.jpg"
            },
            {
                id : 16,
                name : "Pant",
                description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                price : 2600,
                image : "https://static-01.daraz.com.bd/p/3d77f6eb69bff77d34c21fb509e3fdb8.jpg"
            }
        ];

        setproduct(products);

    }, [])

    console.log(product)

    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    {
                        product.map( (data) => <Product product={data}></Product> )
                    }
                </div>
            </div>
        </div>
    )
};

export default Shop;
