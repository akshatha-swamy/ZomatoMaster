import React,{useState} from "react";


const ChoiceLg=()=>{
   
    const [selected, setSelected] = useState(null);
  
    const handleItemClick = (index) => {
      setSelected(index);
    };
  
    return (
      <>
        <div className="mx-9 px-5 w-full flex gap-7">
          {choices.map((choice, index) => (
            <div
              key={index}
              className={`flex items-center m-3 cursor-pointer p-3 ${
                selected === index ? "border-b-2 border-pink-300" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="w-16 h-16 rounded-full"
               style={{ backgroundColor:selected==index? "": "#f2f2f2"}}
               >
                <img
                  className="p-3"
                  
                  src={selected== index ? choice.image2 : choice.image}
                  alt={`${choice.title} Img`}
                />
              </div>
              <div className="text-xl  p-3 font-medium"
              style={{color:selected==index?"#f05b6a":"#595959"}}>
                <h1>{choice.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  const ChoiceMd = () => {
    const [selected, setSelected] = useState(null);
  
    const handleItemClick = (index) => {
      setSelected(index);
    };
    return <>
         <div className="mx-9 px-5 w-full flex gap-7">
          {choices.map((choice, index) => (
            <div
              key={index}
              className={`flex items-center m-3 cursor-pointer p-3 ${
                selected === index ? "border-b-2 border-pink-300" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="w-16 h-16 rounded-full"
               style={{ backgroundColor:selected==index? "": "#f2f2f2"}}
               >
                <img
                  className="p-3"
                  
                  src={selected== index ? choice.image2 : choice.image}
                  alt={`${choice.title} Img`}
                />
              </div>
              <div className="text-xl  p-3 font-medium"
              style={{color:selected==index?"#f05b6a":"#595959"}}>
                <h1>{choice.title}</h1>
              </div>
            </div>
          ))}
        </div>
    </>;
  };
  
  const ChoiceSm = () => {
    const [selected, setSelected] = useState(null);
  
    const handleItemClick = (index) => {
      setSelected(index);
    };
    return <>
         <div className="mx-3 px-2 w-full flex gap-5 overflow-x-auto ">
          {choices.map((choice, index) => (
            <div
              key={index}
              className={`flex items-center m-3 cursor-pointer p-3 ${
                selected === index ? "border-b-2 border-pink-300" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="w-16 h-16 rounded-full items-center"
               style={{ backgroundColor:selected==index? "": "#f2f2f2"}}
               >
                <img className="p-3 w-full" src={selected== index ? choice.image2 : choice.image} alt={`${choice.title} Img`}
                />
              </div>
              <div className="text-base p-3 "
              style={{color:selected==index?"#f05b6a":"#595959"}}>
                <h2>{choice.title}</h2>
              </div>
            </div>
          ))}
        </div>
    </>;
  };
  
  const Choice = () => {
    return (
      <>
        <nav>
          <div className="md:hidden">
            <ChoiceSm />
          </div>
  
          <div className="hidden lg:hidden md:flex">
            <ChoiceMd />
          </div>
  
          <div className="hidden lg:flex">
            <ChoiceLg />
          </div>
        </nav>
        </>
  );
};

const choices = [
    {
      title: "Delivery",
      image:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        image2:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",//color
      
    },
    {
      title: "DiningOut",
      image:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
        image2:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"//color
    },
    {
      title: "Nightlife",
      image:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
        image2:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"//color
    },
  ];
  

export default Choice;