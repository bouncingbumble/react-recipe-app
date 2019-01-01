import React, {Component} from 'react';

class RecipeForm extends Component {
    static defaultProps = {
        onClose() {}
    }
    constructor(props){
        super(props);

        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleNewIngredient(e){

    }

    render(){
        const {title, instructions, ingredients, img} = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((i, index) => (
            <div className="recipe-form-line"
                key={`ingredient-${index}`}>
                <label>
                    <input
                    type="text"
                    name={`ingredient-${index}`}
                    value={i}
                    size={45}
                    autoComplete="off"
                    placeholder="Ingredient"
                    onChange={()=>{}}>
                    </input>
                </label>
            </div>
        ))
        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={() => {}}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >
                    X
                    </button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-title-input'>Title</label>
                        <input
                            id='recipe-title-input'
                            key='title'
                            name='title'
                            type='text'
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChange}/>
                    </div>
                    <label
                        htmlFor='recipe-instructions-input'
                        style={{marginTop: '5px'}}
                    >
                    Instructions
                    </label>
                    <textarea
                        key='instructions'
                        id='recipe-instructions-input'
                        type='instructions'
                        name='instructions'
                        rows='8'
                        cols='50'
                        autoComplete='off'
                        value={instructions}
                        onChange={this.handleChange}/>
                    {inputs}
                    <button
                        type="button"
                        onClick={this.handleNewIngredient}
                        className="buttons"
                    >
                    +
                    </button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-img-input'>Image Url</label>
                        <input
                            id='recipe-img-input'
                            type='text'
                            placeholder='imgur.com'
                            name='img'
                            value={img}
                            size={36}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    <button
                        type="submit"
                        className="button"
                        style={{alignSelf: 'flex-end', marginRight: 0}}
                    >
                        SAVE
                    </button>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
