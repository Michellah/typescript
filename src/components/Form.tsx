
import "./Form.css"

const  Form = () => {
    return (
        <>
            <div className='form'>
                <div>
                    <form action="">
                        <input type="text" placeholder="Titre..." /><br/>
                        <input type="text" placeholder="Description..." id="description" /><br/>
                        <input type="radio" name="list" id="todo" value="todo" />
                        <label htmlFor="todo">to do</label><br/>
                        <input type="radio" name="list" id="doing" value="doing" />
                        <label htmlFor="doing">doing</label><br/>
                        <input type="radio" name="list" id="done" value="done" />
                        <label htmlFor="done">done</label><br/>
                    </form>
                </div>
                <button type='submit' onClick={()=>{

                }}>Add</button>
        </div>
        </>
    );
};

export default Form;