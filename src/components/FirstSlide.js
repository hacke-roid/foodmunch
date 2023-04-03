function FirstSlide({ onCreate }) {
    
    const handleSubmit = () => {
        onCreate()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
               First Slide
            </form>
        </div>
    );
}

export default FirstSlide;