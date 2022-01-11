import React, {useState,useEffect} from "react"
import Axios from "axios"
import { v4 as uuidv4 } from 'uuid'
import {Container, Col, Row} from "reactstrap"
import CartItem from "./CartItem"

const apiKey = "563492ad6f917000010000010108a260b1924a4aa34af3a457f42c18"
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localurl = "http://myjson.dit.upm.es/api/bins/3wlz"
const BuyPage = ({addInCart}) => {

    // const [word, setword] = useState(['hp', 'dell' ,'apple', 'samsung']);
    // const [commerce, setcommerce] = useState(initialState)

    const [product, setProduct] = useState([])

  //  const fetchPhostos = async () => {
     //   const respnse= await Axios.get(url,{
          //  header: {
        //        Authorization: apiKey
      //      }
     //   });

    
    const fetchPhotos = async () => {
        const {data} = await Axios.get(localurl);

    
    const {photos} = data;

    const allProduct = photos.map(photo => ({
       smallImage: photo.src.medium ,
       tinyImage:photo.src.tiny,
       productName:"HP",
       productPrice: "800",
        id: uuidv4()

    }))
    setProduct(allProduct);
    };





    useEffect(() => {
        fetchPhotos();
    }, []);
    
    return(
        <Container fluid>
            <h1 classsName="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product =>(
                    <Col md={6} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                )
                )}
            </Row>
        </Container>
    )
}

export default BuyPage;





