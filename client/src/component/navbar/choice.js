import React,{useEffect, useState} from "react";
import { useParams,Link} from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoFootstepsOutline } from "react-icons/io5";
import { PiChampagne } from "react-icons/pi";


const ChoiceLg=()=>{
   const {type}=useParams();
    const [selected, setSelected] = useState(null);
  
    const handleItemClick = (index) => {
      setSelected(index);
    };

   
  
    return (
      <>
        <div className="mx-9 px-5 w-full flex gap-7">
          {choices.map((choice, index) => (
            <Link to={`/bangaluru/${choice.id}`}>
            <div
              key={index}
              className="flex items-center m-3 cursor-pointer p-3 hover:border-b-2 border-pink-300"
              onClick={() => handleItemClick(index)}
            >
              <div className="w-16 h-16 rounded-full hover:bg-navbar-200"
               
               >
                <img
                  className="p-3"
                  
                  src={selected=== index ? choice.image2 : choice.image}
                  alt={`${choice.title} Img`}
                />
              </div>
              <div className="text-xl  p-3 font-medium"
              style={{color:selected===index?"#f05b6a":"#595959"}}>
                <h1>{choice.title}</h1>
              </div>
            </div>
            </Link>
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
    return (
    <>
         <div className="mx-3 px-5 w-full flex gap-7">
          {choices.map((choice, index) => (
            <Link to={`/bangaluru/${choice.id}`}>
            <div
              key={index}
              className="flex items-center m-3 cursor-pointer p-3 hover:border-b-2 border-pink-300"
              
              onClick={() => handleItemClick(index)}
            >
              <div className="w-16 h-16 rounded-full bg-navbar-200"
              
               >
                <img
                  className="p-3"
                  
                  src={selected===index ? choice.image2 : choice.image}
                  alt={`${choice.title} Img`}
                />
              </div>
              <div className="text-xl  p-3 font-medium"
              style={{color:selected===index?"#f05b6a":"#595959"}}>
                <h1>{choice.title}</h1>
              </div>
            </div>
            </Link>
          ))}
        </div>
    </>
    );
  };


  const ChoiceSm = () => {


    const [allTypes,setAllTypes]=useState();
    const {type}=useParams();
    

    const [selected, setSelected] = useState(null);
  
    const handleItemClick = (index) => {
      setSelected(index);
    };
    return (
    <>
         <div className="bg:white shadow-md px-5 py-3 fixed bottom-0 z-10 w-full  flex justify-between">
          {choices.map((choice, index) => (
            <Link to={`/bangaluru/${choice.id}`}>
            <div
              key={index}
              className="flex flex-col items-center  cursor-pointer p-3" 
              onClick={() => handleItemClick(index)}
            >
              <div className="rounded-full">
                {React.cloneElement(choice.icon, {
                style: {
                  color: selected === index ? '#f05b6a' : '#595959',
                  fontSize:"30px", // adjust the size as needed
                },
                })}
              </div>
              <h1 className="text-sm py-2" style={{color:selected===index?"#f05b6a":"#595959"}}  onClick={()=>handleItemClick(index)}>{choice.title}</h1>
              
            </div>
            </Link>
          ))}
        </div>
        
    </>
    );
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
      id:"delivery",
      title: "Delivery",
      image:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        image2:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",//color
      icon:<MdOutlineDeliveryDining />,
      isActive:false
    },
    {
      id:"diningOut",
      title: "Dining Out",
      image:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
        image2:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",//color
        icon:<IoFootstepsOutline/>,
        isActive:false
    },
    {
      id:"nightLife",
      title: "Nightlife",
      image:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
        image2:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",//color
        icon:<PiChampagne/>,
        isActive:false
    },
  ];
  

export default Choice;