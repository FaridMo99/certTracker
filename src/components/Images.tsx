
function Images({images}:{images:string[]}) {
  return (
    <div className="w-screen flex flex-col justify-evenly items-center gap-4">
      {images.map((image) => (
        <img key={image} src={image} />
      ))}
    </div>
  );
}

export default Images;
