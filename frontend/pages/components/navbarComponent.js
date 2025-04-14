export default function NavbarComponent(){
    return(
        <div className="container mx-auto flex items-center h-24">
          <a href="" className="flex items-center justify-center">
            <img className="h-16" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt="" />
            <span className="ml-4 uppercase font-black">Juan<br/>Sanjaya</span>
          </a>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active">
                <a href="">
                  <span>Home</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>About</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Projects</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Services</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
          <button className="border border-white rounded-full font-bold px-8 py-2">Contact me</button>
        </div>
    )
  }
  
  