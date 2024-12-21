export default function Button({bId,onClick}) {
  function handleOnClick(){
    onClick();
  }
  return <button id={bId} className='btn w-50 py-100' onClick={handleOnClick}></button>
}
