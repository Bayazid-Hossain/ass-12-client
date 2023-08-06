import React from "react";
import Container from "../../components/Container/Container";
import PopularClassCard from "../../components/PopularClassCard/PopularClassCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PopularClasses = ({ classes }) => {
  return (
    <Container>
      <div className="py-16">
        <h2 className="text-4xl font-bold uppercase text-center mb-16">
          Popular Classes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((singleClass) => (
            <PopularClassCard key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>

        <Link to="/classes" className="card-actions justify-end mt-10">
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-lg font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none inline-flex items-center gap-3">
            See All Classes <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default PopularClasses;
