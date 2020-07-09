
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {icon,contactBook,} from '../../links';
import './link.scss';

export default class LinkCont extends Component {
    render() {
        const items= [
            {
                img: `${icon}`,
              name:'Home',
              path:"/home",
              key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
            },
            {
              img: '/dvb',
              name:'Calls',
              path:"/calls",
              key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
            },
            {
              img: `${contactBook}`,
              name:'Contact',
              path:"/",
              key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
            },
            {
              img: '/fbfb',
              name:'Personnel',
              path:"/personnel",
              key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
            },
            {
              img: '/rbrbrb',
              path:"/analytics",
              name:'Analytics',
              key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
            },
            
          ]
        return (
            <ul className="link-cont">
            {items.map((item) => {
        return (
          <NavLink
            exact
            to={item.path}
            activeClassName="list-active"
            key={item.key}
          >
            <li className="list-item">
              <img src={item.img} alt="djc" className="icon-cont" />
              <p className="li-text">{item.name}</p>
            </li>
          </NavLink>
            
        );
      })}
        </ul>
        )
    }
}



// import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
// import {icon,contactBook,} from '../../links';
// import './link.scss';


// const items= [
//     {
//         img: `${icon}`,
//       name:'Home',
//       path:"/home",
//       key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
//     },
//     {
//       img: '/dvb',
//       name:'Calls',
//       path:"/calls",
//       key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
//     },
//     {
//       img: `${contactBook}`,
//       name:'Contact',
//       path:"/contact",
//       key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
//     },
//     {
//       img: '/fbfb',
//       name:'Personnel',
//       path:"/personnel",
//       key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
//     },
//     {
//       img: '/rbrbrb',
//       path:"/analytics",
//       name:'Analytics',
//       key: 12 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
//     },
    
//   ],

// export default class LinkCont extends Component {
//     render() {
//         return (
//             <div>
//                 smchb
//             </div>
        //     <ul className="link-cont">
        //         {/* <li className="list-item">
        //             <img src={icon} alt="fdc" className="icon-cont"/>
        //             <p className="li-text">Home</p>
        //         </li> */}
        //         {items.map((item) => {
        //     return (
        //       <NavLink
        //         exact
        //         to={item.path}
        //         activeClassName="link-cont"
        //         key={item.key}
        //       >
        //         <li className="list-item">
        //           <img src={item.img} alt="djc" className="icon-cont" />
        //           <p className="li-text">{item.name}</p>
        //         </li>
        //       </NavLink>
                
        //     );
        //   })}
        //     </ul>
//         )
//     }
// }
