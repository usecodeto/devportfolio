export  const Navbar = () => {
   function autoSwitchTheme() {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      
      }
      autoSwitchTheme();
     const openMenu =()=>{
        document.getElementById('theme-selector').classList.remove('hidden')
        console.log(document.getElementById('theme-selector'))
        // console.log("theme btn clicked")
      };
      const setDark =()=>{
        localStorage.theme = 'dark'
          document.getElementById('theme-selector').classList.add('hidden')
          autoSwitchTheme()
      }
      const setLight =()=>{
        localStorage.theme = 'light'
          document.getElementById('theme-selector').classList.add('hidden')
          autoSwitchTheme();
      }
      const setSystem =()=>{
        localStorage.removeItem('theme')
              document.getElementById('theme-selector').classList.add('hidden')
              autoSwitchTheme()
      }
      const Name = '<Harshit/>'
    
    return (
        <section className="navbar md:min-w-700 dark:bg-slate-800 " >
            <div className="navbar-items flex justify-between bg-transparent mx-5 px-6 py-1  dark:text-white">
            <ul className="Name">
                <p className=" font-semibold text-lg font-ubuntu px-2 py-0.5 m-3 hover:animate-bounce rounded-md">{Name}</p>
            </ul>
            <ul
                className=" other-pages sticky flex justify-evenly itmes-center "
            >
                <li className="Home font-semibold text-lg font-ubuntu px-2 py-0.5 m-3 hover:align-top dark:hover:bg-slate-600 hover:bg-slate-200 rounded-md "> <a href="/" >Home</a>  </li>
                <li className="About Me font-semibold text-lg font-ubuntu px-2 py-0.5 m-3 hover:align-top dark:hover:bg-slate-600 hover:bg-slate-200 rounded-md "> <a href="#about" >About Me</a>  </li>
                <li className="Projects font-semibold text-lg font-ubuntu px-2 py-0.5 m-3 hover:align-top dark:hover:bg-slate-600 hover:bg-slate-200 rounded-md "> <a href="#projects" >Projects</a> </li>
                <li className="Skills font-semibold text-lg font-ubuntu px-2 py-0.5 m-3 hover:align-top dark:hover:bg-slate-600 hover:bg-slate-200 rounded-md"><a href="#skills" >Skills</a>  </li>
                <li className="contact font-semibold text-lg font-ubuntu px-2 py-0.5 m-3 hover:align-top dark:hover:bg-slate-600 hover:bg-slate-200 rounded-md"><a href="#contact" >Contact </a>  </li>

               
                <li>
                    <button
                        id="theme"
                        className="m-5"
                        onClick={openMenu}
                    >
                        <span className="dark:hidden" ><img className="w-5 rounded-full dark:invert " src="imgs/brightness.png" alt="bright" /></span>
                        <span className="hidden dark:inline"><img className="w-5 rounded-full  dark:invert" src="imgs/moon.png" alt="dark" /></span>
                    </button>
                </li>

            </ul>
           
            </div>
            <ul id="theme-selector" className=" cursor-pointer shadow-sm p-2 fixed z-50 right-5 top-12 bg-white dark:bg-slate-700 border border-slate-900 border-solid rounded-md  dark:text-white hidden ">
                <li onClick={setLight} id="light" className="hover:bg-slate-50  hover:text-black focus:bg-slate-50 p-1 flex justify-start items-center rounded-sm"><span className="mx-1" ><img className="w-5 rounded-full dark:invert" src="imgs/brightness.png" alt=""/></span><span>Light</span></li>
                <li onClick={setDark} id="dark" className="hover:bg-slate-50 hover:text-black focus:bg-slate-50 p-1 flex justify-start items-center rounded-sm"><span className="mx-1" ><img className="w-5 rounded-full dark:invert" src="imgs/moon.png" alt=""/></span><span>Dark</span></li>
                <li onClick={setSystem} id="system" className="hover:bg-slate-50 hover:text-black focus:bg-slate-50 p-1 flex justify-start items-center rounded-sm"><span className="mx-1" ><img className="w-5 rounded-full dark:invert " src="imgs/monitor.png" alt=""/></span><span>System</span></li>
            </ul>
        </section>
    )
};