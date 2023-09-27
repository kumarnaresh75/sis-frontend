import Button from './Button'
const Header = ({onAdd, showCreate}) => {

    return(
        <header class="header">
            <h1>Product Manager</h1>
            <Button onClick={onAdd}
                    color ={showCreate ? 'red' : 'green'}
                    text={showCreate ? 'close' : 'Create Product'}/>
        </header>
    )

}

export default Header