/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { petByPetname } from '../../services/firebase';



async function getPet(petName) {
  const pet = await petByPetname(petName);
  return pet;
}

export default function Header({ petName,username }) {

  const [pet, setPet] = useState(null);

  useEffect(()=>{
    getPet(petName).then((data)=>{
      setPet(data);
    })
  },[])
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={(pet && pet.avatar) ?? "null"}
            alt={`${petName} profile picture`}
          />
          <p className="font-bold">{petName}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  petName: PropTypes.string.isRequired
};
