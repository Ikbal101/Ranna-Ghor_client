

import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div>
               <img className="h-96 w-full" src="https://storyset.com/illustration/oops-404-error-with-a-broken-robot/rafiki#40BAFFFF&hide=&hide=complete" alt="404 Error"  style={{"width":"900px" ,"margin":"0 auto","borderRadius":"8px"}}/>
      <Link to='/'><button className='btn bg-violet-700'>Back To Home</button></Link>
        </div>
    );
};

export default NotFoundPage;