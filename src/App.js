import { Fragment,useState } from 'react';
import './App.css';
import CreateStudents from './createStudents';
import ShowStudents from './showStudents';
import DeleteStudents from './deleteStudents';
import Updatedetails from './updatedetails';
import Category from './category';
import GetOneDetails from './getOneDetails';

function App() {
  const [create,setCreate] = useState(false);
  const [getOneExecuting, setGetOneExecuting] = useState(false);

  const createHandler = (e) =>{
    e.preventDefault()
    setCreate(true)
  }
  const closeHandler = (e) =>{
    e.preventDefault()
    setCreate(false)
  }
  const getOneStartHandler = () => {
    setGetOneExecuting(true);
  };
  const getOneFinishHandler = () => {
    setGetOneExecuting(false);
  };
  return (
    <Fragment>
      <div className='source'>
      <button className='create-btn' onClick={createHandler}>CREATE</button>
      <button className='create-btn' >UPDATE</button>   
      <button className='create-btn' >FILTER</button>
      <GetOneDetails/>
      <DeleteStudents />
      </div>
      {getOneExecuting ? (
          <GetOneDetails onGetOneFinish={getOneFinishHandler} />
          // <></>
        ) : (
          <>
            {/* <DeleteStudents /> */}
            <ShowStudents />
            {/* <Category /> */}
          </>
        )}
      {/* <ShowStudents /> */}
      {create && (
        <CreateStudents handleClose={closeHandler} />
      )}
      {/* <Updatedetails /> */}
      <Category/>
    </Fragment>
  );
}

export default App;
