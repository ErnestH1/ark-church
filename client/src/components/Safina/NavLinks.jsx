import React from 'react'
function NavLinks() {
  //Here are the links
  const Links = [

    {
      name: "SERMONS",
      link: "/SERMONS"
    },

    {
      name: "GIVING",
      link: "/GIVING"
    },

    {
      name: "SQUADS",
      link: "/SQUADS"
    },
    {
      name: "EVENTS",
      link: "/EVENTS'"
    },
    {
      name: "PODCAST",
      link: "/PODCAST"
    },
    {
      name: "LOGIN",
      link: "/LOGIN",
    }

  ]

  return (
    <>
      {
        Links.map((link, i) => (
          <li key={i} className='font-medium hover:text-Primary'>
            <a href={link.link}>{link.name}</a>
            {/* <Link to={link.link}>{link.name}</Link> */}
          </li>
        ))
      }
    </>
  )
}

export default NavLinks