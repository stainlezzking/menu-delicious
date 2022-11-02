import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import pizza from '../../assets/pizza.svg'
import glass from '../../assets/glass.svg'
import burger from '../../assets/burger.svg'
import classes from './admin.module.css'
import Subtitle from '../../components/title/title'
import { useRef, useState, useReducer, useEffect} from 'react';
import {ADD_MENU} from "../../store/action_values"
import {CSSTransition,TransitionGroup} from 'react-transition-group';

const checkValidity = function(object, array){
    let initialValidity = true;
    if(array){
       object.forEach(obj=> initialValidity = initialValidity && obj.valid)
        return initialValidity
    }
    console.log("took the object route")
    for(const input in object){
        initialValidity = initialValidity && object[input].valid 
    }
    return initialValidity
}
const Admin = ({addMenu, changeRoute}) => {
    const imagesArray = [burger, pizza, glass]
    const ACTION_VALUES = {
        ADD_VARIATION : "ADD_VARIATION",
        REMOVE_VARIATION : "REMOVE_VARIATION",
        CHANGE_VARIATION : "VARIATION_CHANGE",
        SELECT_IMAGE : "IMAGE_SELECTOR",
        UPDATE_INPUT : "UPDATE_INPUT"
    }
    const [initialLoad, setInitialLoad] = useState(false)
    const selectRef = useRef(null)
    const [error, setError] = useState({error: "", title : ""})
    const [showAlert, setShowAlert] = useState(false)
    const formInitialState = {
        title :{
            value : '',
            maxLength : 15,
            required : true,
            valid : false,
            message : "You meal has no name, please select a name"
        },
        description : {
            value : '',
            required : true,
            maxLength : 100,
            valid : false,
            message : "Pitch [description] is required"
        },
        selectImage : {
            value : '',
            required : true,
            valid : false,
            message : "An image should be selected, click on the image"
        },
        variations :{
            inputs :  [
                // max lenght is 4 
                { title : "", price : 0, valid : false}
            ],
            valid : false,
            message : "Every variation created must be filled, You can delete a variation by click on 0.0."
        }
    }
    
    const variationChangeReducer = (state, action)=>{
        let newVariations ;
        let valid ;
        setInitialLoad(true)
        switch(action.type){
            case ACTION_VALUES.ADD_VARIATION : 
            if(state.variations.length == 4) return state;
            newVariations = [...state.variations.inputs]
            newVariations.push({title : '', price : 0 , valid : false})
            return {...state, variations : {valid : false, inputs : newVariations} }
           
            case ACTION_VALUES.REMOVE_VARIATION: 
            if(state.variations.inputs.length == 1) return state;
            newVariations =  state.variations.inputs.filter((_, index)=> index !== action.index )
            valid = checkValidity(newVariations)
            return {...state, variations : {valid, inputs : newVariations} }

            case  ACTION_VALUES.CHANGE_VARIATION:
                newVariations = [...state.variations.inputs]
                newVariations[action.index][action.name] = action.value;
                // checking the validity of this variation 
                newVariations[action.index].valid = state.variations.inputs[action.index]["title"].length > 0 && state.variations.inputs[action.index]["price"] > 0 ;
                valid = checkValidity(newVariations, true)
                return {...state, variations : {valid, inputs : newVariations}}
            
            case ACTION_VALUES.SELECT_IMAGE: 
            Array.from(document.getElementsByClassName(classes.cardSelector)).forEach(card=> card.classList.remove(classes.active))
            action.currentTarget.classList.add(classes.active)
            const newSelectImage = {...state["selectImage"], value : action.currentTarget.children[0].getAttribute("src")}
            return {...state, selectImage : {...newSelectImage, valid : true}}
            
            case ACTION_VALUES.UPDATE_INPUT : 
            // this is for the description and the title
            const newInput = {...state[action.propName]};
            newInput.value = action.value
            newInput.valid  = newInput.value.length > 0 && newInput.value.length < newInput.maxLength ?  true : false;
            return {...state, [action.propName] : newInput}
            default : 
            return state;
        }
    }
    const [formState, dispatch] = useReducer(variationChangeReducer, formInitialState)

useEffect(()=>{
    if(error.error !== ""){
        setShowAlert(true)
    }
}, [error])
    const submitHandler = (e)=>{
            e.preventDefault()
            const isValid = checkValidity(formState)
            if(!isValid){
                const wrongInput = Object.keys(formState).find(item=> !formState[item].valid)
               return setError({title : wrongInput, error : formState[wrongInput].message })
            }
            const arr = Object.keys(formState).map(key => {
                const value =  formState[key].value || formState[key].inputs
                return { [key] : value }
            })
            arr[3].variations = arr[3].variations.map(variant=> { return {title : variant.title, price : variant.price }} )
            let obb = arr.reduce((acc, item)=>{
                acc = {...acc, ...item}
                return acc
            },{})
            addMenu({type: ADD_MENU, value : obb})
            return changeRoute()
    }
    const invalidStyle={
        border : "2px solid #d33333"
    }

    // adding preloader animation (preferrably a burger or food item that writes)
    // add night mode boostrap switch
    // add transition to page swutching
    // use transition group to animate the variartions on addition
    return ( 
    <div>
     
            <Modal
            show={showAlert} onHide={()=> setShowAlert(false)}>        
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Can't submit 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrong inputs at <span className="text-danger"> {error.title} </span>  </h4>
              <p className="text-dark">
                {error.error}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=> setShowAlert(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
             
        <Subtitle> Add New Meal </Subtitle>
        <span className="d-block text-center text-success fw-bold my-2"> <small>choose an Image</small></span>
        <Row>
            {
                imagesArray.map((image, index)=>{
                    return (
                        <Col key={index}>
                        <Card
                            style={ !initialLoad || formState.selectImage.value.length ? {}  : invalidStyle}
                            onClick={(e)=>dispatch({type : "IMAGE_SELECTOR", currentTarget : e.currentTarget})}
                         className={classes.cardSelector} >
                            <Card.Img height="100px" variant="top" src={image} />
                        </Card>
                    </Col>
                    )
                })
            }
        </Row>
        <Form className="my-4" onSubmit={submitHandler} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Food Name </Form.Label>
            <Form.Control
             style={ !initialLoad || formState.title.valid ? {} : invalidStyle}
             maxLength={formState.title.maxLength}
             value={formState.title.value}
             onChange={(e)=> dispatch({type : ACTION_VALUES.UPDATE_INPUT, propName : "title", value : e.target.value })} 
             type="text" placeholder="Enter the name of your meal" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Variations </Form.Label>
            {/* Add variation */}
            <InputGroup onClick={(e)=> dispatch({type : ACTION_VALUES.ADD_VARIATION})} className={"mb-2 d-flex " +classes.addMore} >
                <Form.Control  as="p" className="bg-light"> Add Meal Variations</Form.Control>
                <InputGroup.Text className="d-block  h-100" >
                    <svg viewBox="0 0 512 512" width="20px" fill="#356e8b">
                        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                    </svg>
                </InputGroup.Text>
            </InputGroup>
            {
                formState.variations.inputs.map((variation, index)=>{
                    return(
                   
                    <InputGroup key={index} className={classes.zeroOpacity + ' my-2 ' + classes.fadeIn}>
                        <Form.Control
                        style={ !initialLoad || variation.valid ? {} : invalidStyle}
                        type="text"
                        maxLength={13}
                        onChange={(e)=> dispatch({type : ACTION_VALUES.CHANGE_VARIATION, index, name : "title", value : e.target.value })} 
                        value={variation.title} placeholder="name"/>
                        <Form.Control className={classes.borderLeft} 
                        style={ !initialLoad || variation.valid ? {} : invalidStyle}
                        value={variation.price} 
                        onChange={(e)=> dispatch({type : ACTION_VALUES.CHANGE_VARIATION, index, name : "price", value : e.target.value })}
                        type="number" placeholder="price"/>
                        <InputGroup.Text 
                        className="text-muted"
                        className={classes.removeVariation} 
                        onClick={()=> dispatch({type : ACTION_VALUES.REMOVE_VARIATION, index})}
                        > .00</InputGroup.Text>
                    </InputGroup>
                    )
                })
            }
            <Form.Text > {formState.variations.inputs.length == 1 ? "A minimum of one  variation" : formState.variations.inputs.length == 4 ? "Max variations of four" : null }</Form.Text >
        </Form.Group>

        <Form.Select 
        value={formState.selectImage.value} 
        className="visually-hidden"
        onChange={()=> null}
        ref={selectRef} >
            <option value=""></option>
           { imagesArray.map((img, i)=> <option key={i} value={img}> {img} </option>) }
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> 30sec Pitch </Form.Label>
            <Form.Control value={formState.description.value}
             style={ !initialLoad || formState.description.valid ? {} : invalidStyle}
             onChange={(e)=> dispatch({type : ACTION_VALUES.UPDATE_INPUT, propName : "description", value : e.target.value })} 
             as="textarea" maxLength="100" placeholder="Enter the name of your meal" />
        </Form.Group>
  
        <Button variant="success" disabled={!initialLoad} type="submit" className="mx-auto d-block">
            Add Item
        </Button>
        </Form>
    </div>
     )
}

 
export default Admin;