import React from 'react'
import Heading  from '../componenets/Heading'
import assets from '../assets/assets'
import Tile from '../componenets/Tile'
import styles from '../componenets/Tile.module.css'
const Aboutus = () => {
  return (
    <div>
        <Heading message={"About US"} color={"text-black"}> </Heading>
        <div className='grid  p-20  gap-8  grid-cols-4 '>
            <div className=' h-1/1 row-span-2 col-span-2'>
                <img src={assets.about} className='w-1/1 h-1/1' alt="" />
            </div>
            <Tile title={"A personalized approach"}  body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} icon={


    <svg className={styles.cg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
        clipRule="evenodd"
      ></path>
    </svg>
  




            }></Tile>
            <Tile icon={
          
    <svg   className={styles.cg}   

      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
    >
      <path
        fill="currentColor"
        d="M4.253 5.397a1.492 1.492 0 0 0 2.23-1.288h1.5a1.492 1.492 0 0 0 2.231 1.288l.75 1.298c.417-.233.916-.387 1.424-.478q-.046-.135-.12-.264l-.759-1.313a1.49 1.49 0 0 0-2.025-.553A1.49 1.49 0 0 0 7.992 2.61H6.476c-.82 0-1.485.66-1.492 1.478a1.49 1.49 0 0 0-2.026.553L2.2 5.953c-.41.71-.17 1.616.534 2.031a1.49 1.49 0 0 0-.534 2.031l.758 1.313c.41.71 1.314.955 2.026.553c.006.618.388 1.147.928 1.368c-.003-.571.14-1.15.447-1.68l.068-.118a1.494 1.494 0 0 0-2.174-.88l-.75-1.299c.985-.576.985-2 0-2.576z"
      ></path>
      <path
        fill="currentColor"
        d="M7.234 9.484a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.64 15.11a3.065 3.065 0 1 1 6.13 0a3.065 3.065 0 0 1-6.13 0m3.066-1.564a1.565 1.565 0 1 0 0 3.13a1.565 1.565 0 0 0 0-3.13"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.658 17.903a1.833 1.833 0 0 1 .671-2.505a.333.333 0 0 0 0-.576a1.833 1.833 0 0 1-.67-2.504l1.106-1.916a1.833 1.833 0 0 1 2.503-.67a.332.332 0 0 0 .499-.288c0-1.012.82-1.833 1.832-1.833h2.213c1.013 0 1.833.821 1.833 1.833c0 .256.277.416.498.288a1.83 1.83 0 0 1 2.503.67l1.107 1.918a1.83 1.83 0 0 1-.67 2.502a.332.332 0 0 0 0 .576a1.833 1.833 0 0 1 .67 2.503l-1.105 1.916a1.833 1.833 0 0 1-2.504.671a.333.333 0 0 0-.5.288c0 1.013-.82 1.833-1.832 1.833H13.6a1.833 1.833 0 0 1-1.833-1.832a.333.333 0 0 0-.5-.288a1.833 1.833 0 0 1-2.503-.671zm1.421-1.206a.333.333 0 0 0-.122.456l1.106 1.915c.092.16.295.214.455.122c1.221-.705 2.749.176 2.749 1.587c0 .183.149.332.333.332h2.212a.333.333 0 0 0 .333-.333c0-1.41 1.527-2.292 2.749-1.587c.16.092.363.037.455-.122l1.106-1.916a.333.333 0 0 0-.122-.454c-1.221-.705-1.222-2.468 0-3.174a.33.33 0 0 0 .121-.453l-1.107-1.917a.33.33 0 0 0-.454-.122c-1.221.706-2.748-.177-2.748-1.587a.333.333 0 0 0-.333-.333H13.6a.33.33 0 0 0-.332.333c0 1.41-1.527 2.292-2.749 1.586a.333.333 0 0 0-.454.122l-1.106 1.916a.333.333 0 0 0 .122.455c1.222.705 1.22 2.47 0 3.174"
        clipRule="evenodd"
      ></path>
    </svg>
  

            }
            title={"Technologies"} 
            body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}>

            </Tile>
            <Tile 
            icon={

            
    <svg className={styles.cg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    
    >
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12C23.98 5.381 18.619.02 12.002 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6c-.016 5.296-4.304 9.584-9.598 9.6zM12.6 6h-1.8v7.2l6.24 3.84l.96-1.56l-5.4-3.24z"
      ></path>
    </svg>
  
            }
             title={"Timeliness"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} ></Tile>
            <Tile 
            icon={
    <svg className={styles.cg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
     
    >
      <path
        fill="currentColor"
        d="M14.06 9.94L12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94zm4.5-5l1.09-2.41L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5l2.41 1.09zm-4 11.5l6-6.01l4 4L23 8.93l-1.41-1.41l-7.09 7.97l-4-4L3 19z"
      ></path>
    </svg>

            }
             title={"Professioanlism"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} ></Tile>
           
        </div>
    </div>
)
}

export default Aboutus