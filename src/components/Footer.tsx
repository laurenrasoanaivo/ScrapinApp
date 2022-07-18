
import './footer.css';

interface propTypes {
    onChange: (e: any) => void
}

export default function Footer({onChange}: propTypes){

    return (
        <footer>
            <form>
                <input onChange={onChange} type={'number'}
                    defaultValue={1}/>
            </form>
        </footer>
    )

};