import preloader from '../../assets/images/loader.svg';



const Preloader = () => {
  return (
    <div style = {{ backgroundColor: 'white' }}>
      <img src = { preloader } alt = "Loader" />
    </div>
  )
}

export default Preloader;