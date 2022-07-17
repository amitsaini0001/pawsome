import PropTypes from "prop-types";



export default function AddPost() {
  return (
    <div className="flex h-auto w-100 align-center justify-center fixed bottom-0 left-0 right-0">
      
      <div className="w-30 h-10 p-2 m-2 rounded flex items-center justify-center" style={{backgroundColor:"black"}}>
      <p className="pr-2" style={{color:"white"}}>
        Add a post
      </p>
        <svg
        className="w-7 h-7 p-1"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 16 16"
          stroke="white"
          fill="white"
        >
          <g>
            <g>
              <path
                d="M8,0C3.589,0,0,3.589,0,8s3.589,8,8,8s8-3.589,8-8S12.411,0,8,0z M8,14c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6
			S11.309,14,8,14z"
              />
              <polygon points="9,4 7,4 7,7 4,7 4,9 7,9 7,12 9,12 9,9 12,9 12,7 9,7 		" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
