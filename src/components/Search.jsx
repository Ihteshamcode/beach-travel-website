import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";


const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flx-col justify-evenly">
        <div>
          <h1 className="font-extrabold text-3xl">
            Luxury Included Vacation For Two Peoples
          </h1>
          <p className="py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            impedit magnam placeat ipsam, eveniet voluptatum, vero iusto
            aspernatur hic aperiam vel inventore voluptas! Laudantium nemo unde
            cum quasi, corrupti aliquam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Commodi eligendi, aperiam accusamus quidem
            officiis adipisci voluptatum veniam eaque non ducimus culpa tenetur
            iure in, quibusdam possimus veritatis necessitatibus unde iusto.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 py-4">
            <div className="felx flex-col lg:flex-row items-center text-center">
              <button>
                <RiCustomerService2Fill size={50}/>
              </button>
              <div>
                <h2 className="font-bold">Leading Services</h2>
                <p>All inclusie company for 20 years in a row</p>
              </div>
            </div>
            <div className="felx flex-col lg:flex-row items-center text-center">
              <button>
                <MdOutlineTravelExplore size={50} />
              </button>
              <div>
                <h2 className="font-bold">Leading Services</h2>
                <p>All inclusie company for 20 years in a row</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div>
      <div className="border text-center">
         <p className="pt-2">Get in additional 10%off</p>
         <h1 > 20 Hours left </h1>
         <button className="bg-black text-white w-full rounded h-10 py-2">BOOK NOW</button> 
      </div>
      <form className="w-full">
      <div className=" flex flex-col my-2">
        <label>Destination</label>
        <select className="border pt-2">
          <option>Maldives</option>
          <option>Phillipne</option>
          <option>Malaysia</option>
          <option>Bali</option>

        </select>
      </div>
      <div className="flex flex-col my-2">
        <label >Check In</label>
        <input type="date" className="border pt-2" />
      </div>
      <div className="flex flex-col my-2">
        <label >Check Out</label>
        <input type="date" className="border pt-2" />
      </div>
      <button className="w-full bg-black rounded h-10 text-white">Rates & Avalibalites</button>
      </form>
      </div>
    </div>
  );
};

export default Search;
