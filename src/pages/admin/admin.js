import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import pizza from '../../assets/pizza.svg'
import glass from '../../assets/glass.svg'
import burger from '../../assets/burger.svg'
import classes from './admin.module.css'
import Subtitle from '../../components/title/title'
import { useRef, useState } from 'react';

const Admin = () => {
    const [imageSelector, setImageSelector] = useState(null)
    const [initialLoad, setInitialLoad] = useState(false)
    const selectRef = useRef(null)
    const [formElement, setFormElement] = useState({
        title :{
            value : '',
            maxLenght : 15,
            required : true,
            message : "You have to choose an image"
        },
        description : {
            value : '',
            required : true,
            maxLength : 100,
            message : "Pitch is required"
        },
        selectImage : {
            url : '',
            required : true
        },
        variations : [
            // max lenght is 4 
            { title : "", price : 0}
        ]
    })
    const imageSelectorHandler=(e)=>{
        Array.from(document.getElementsByClassName(classes.cardSelector)).forEach(card=> card.classList.remove(classes.active))
        e.currentTarget.classList.add(classes.active)
        const newSelectImage = {...formElement["selectImage"], url : e.currentTarget.children[0].getAttribute("src")}
        setFormElement({...formElement, selectImage : {...newSelectImage}})
    }
    const onVariationChangeHandler = (value, index, type)=>{
        const newVariations = [...formElement.variations]
        newVariations[index][type] = value;
        return setFormElement({...formElement, variations : newVariations})
    }
    const addVariationHandler = ()=>{
        if(formElement.variations.length == 4) return null
            const newVariations = [...formElement.variations]
            newVariations.push({title : '', price : 0 })
            return setFormElement({...formElement, variations : newVariations})
        // maybe display that max variations is 4
    }
    const deleteVariationHandler = (i)=>{
      if(formElement.variations.length == 1) return null;
        const newVariations =  formElement.variations.filter((variation, index)=> index !== i )
        return setFormElement({...formElement, variations : newVariations})
    }
    // commit each stage of this process
    // adding selector image that reflects the value of the html form
    // validation of form, adding bootstrap class to display error
    // submitting the form and adding it to the react state or redux > lets use redux to add a lil bit complexity
    // adding preloader animation (preferrably a burger or food item that writes)
    // add night mode boostrap switch
    // add transition to page swutching
    return ( 
    <div>
        <Subtitle> Add New Meal </Subtitle>
        <span className="d-block text-center text-info my-2"> <small>choose an Image</small></span>
        <Row>
            <Col>
                <Card onClick={imageSelectorHandler} className={classes.cardSelector} >
                    <Card.Img height="100px" variant="top" src={burger} />
                </Card>
            </Col>
            <Col>
                <Card onClick={imageSelectorHandler} className={classes.cardSelector}>
                    <Card.Img height="100px" variant="top" src={pizza} />
                </Card>
            </Col>
            <Col>
                <Card onClick={imageSelectorHandler} className={classes.cardSelector}>
                    <Card.Img height="100px" variant="top" src={glass} />
                </Card>
            </Col>
        </Row>
        <Form className="my-4" noValidate validated={initialLoad}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Food Name </Form.Label>
            <Form.Control maxLength="20" type="text" placeholder="Enter the name of your meal" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Variations </Form.Label>
            {/* Add variation */}
            <InputGroup onClick={addVariationHandler} className={"mb-2 d-flex " +classes.addMore} >
                <Form.Control  as="p" className="bg-light"> Add Meal Variations</Form.Control>
                <InputGroup.Text className="d-block  h-100" >
                    <svg viewBox="0 0 512 512" width="20px" fill="#356e8b">
                        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                    </svg>
                </InputGroup.Text>
            </InputGroup>
            {
                formElement.variations.map((variation, index)=>{
                    return(
                    <InputGroup key={index} className="mb-2">
                        <Form.Control
                        type="text"
                        onChange={(e)=> onVariationChangeHandler(e.target.value, index, "title")} 
                        value={variation.title} placeholder="name"/>

                        <Form.Control className={classes.borderLeft} 
                        value={variation.price} 
                        onChange={(e)=> onVariationChangeHandler(e.target.value, index, "price")}
                        type="number" placeholder="price"/>
                        <InputGroup.Text 
                        className="text-muted"
                        className={classes.removeVariation} 
                        onClick={()=>deleteVariationHandler(index)}
                        > .00</InputGroup.Text>
                    </InputGroup>
                    )
                })
            }
            <Form.Text > {formElement.variations.length == 1 ? "A minimum of one  variation" : formElement.variations.length == 4 ? "Max variations of four" : null }</Form.Text >
        </Form.Group>

        <Form.Select 
        value={formElement.selectImage.url} 
        className="visually-hidden"
        onChange={()=> null}
        ref={selectRef} >
            <option value=""></option>
            <option value={pizza}> pizza</option>
            <option value={glass}> glass</option>
            <option value={burger}> burger</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> 30sec Pitch </Form.Label>
            <Form.Control as="textarea" maxLength="100" placeholder="Enter the name of your meal" />
        </Form.Group>
  
        <Button variant="success" disabled={false} type="submit" className="mx-auto d-block">
            Add Item
        </Button>
        </Form>
    </div>
     )
}
 
export default Admin;