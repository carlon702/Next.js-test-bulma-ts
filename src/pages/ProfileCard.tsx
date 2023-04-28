


//type AppProps={
    //title: string;
   // handle: string
//}



function ProfileCard({title, handle, image} : {title: string, handle : string, image : string}){

    //const {title, handle} : {title: string, handle : string} = props;
    
    return( 
    <>

    {/* <img src={image} alt="pda logo" />
    <h1>{title}</h1>
    <div>{handle}</div> */}


    <div className="card">
  <div className="card-image">
    <figure className="image is-1by1">
      <img src={image} alt="pda logo"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{handle}</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/> 
    </div>
  </div>
</div>
    
    </>
    )
}

export default ProfileCard

