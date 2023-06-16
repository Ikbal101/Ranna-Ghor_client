

import { Link } from "react-router-dom";
import image from '../../image/Oops! 404 Error with a broken robot-rafiki.svg'
const NotFoundPage = () => {
    return (
        <div>
               <img className="h-96 w-full" src={image} alt="404 Error"  style={{"width":"900px" ,"height":"600px","margin":"0 auto","borderRadius":"8px"}}/>
      <Link to='/'><button className='btn btn-secondary'>Back To Home</button></Link>
        </div>
    );
};

export default NotFoundPage;