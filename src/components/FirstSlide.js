function FirstSlide({ onCreate }) {
    
    const handleSubmit = () => {
        onCreate()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <a href="./FirstSlidePage.js">
               First Slide
               </a>
            </form>
        </div>
    );
}

export default FirstSlide;