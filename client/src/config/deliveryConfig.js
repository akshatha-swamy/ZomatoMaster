const settings={
    arrows:true,
    autoplay:false,
    infinite: true, 
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide:0,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:5,
                slidesToScroll:5
            }
        },

        {
            breakpoint:600,
            settings:{
                slidesToShow:4,
                slidesToScroll:4
            }
        },

        {
            breakpoint:400,
            settings:{
                slidesToShow:2,
                slidesToScroll:2
            }
        }
    ]
};

export default settings;